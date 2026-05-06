/**
 * Exports local payload.db (SQLite) to a PostgreSQL-compatible backup.sql
 * Usage: node scripts/export-to-postgres.mjs
 *
 * Import order on PostgreSQL:
 *   1. Start your app once so Payload creates all tables automatically
 *   2. Then import: psql $DATABASE_URL < backup.sql
 *      Or paste backup.sql into your hosting panel's SQL import tool
 */

import Database from 'better-sqlite3'
import { writeFileSync, existsSync } from 'fs'

if (!existsSync('./payload.db')) {
  console.error('payload.db not found — run the app locally first.')
  process.exit(1)
}

const db = new Database('./payload.db', { readonly: true })

const tables = db
  .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name")
  .all()

const escape = (v) => {
  if (v === null || v === undefined) return 'NULL'
  if (typeof v === 'number') return String(v)
  return `'${String(v).replace(/'/g, "''")}'`
}

let sql = '-- PostgreSQL data backup (generated from SQLite)\n'
sql += '-- Run AFTER your app has started once (so Payload creates the schema)\n\n'
sql += 'SET session_replication_role = replica;\n\n'

let totalRows = 0

for (const { name } of tables) {
  const rows = db.prepare(`SELECT * FROM "${name}"`).all()
  if (!rows.length) continue

  sql += `-- ${name} (${rows.length} rows)\n`
  for (const row of rows) {
    const cols = Object.keys(row).map(k => `"${k}"`).join(', ')
    const vals = Object.values(row).map(escape).join(', ')
    sql += `INSERT INTO "${name}" (${cols}) VALUES (${vals}) ON CONFLICT DO NOTHING;\n`
  }
  sql += '\n'
  totalRows += rows.length
}

sql += 'SET session_replication_role = origin;\n'

writeFileSync('backup.sql', sql)
db.close()

console.log(`✓ Exported ${tables.length} tables, ${totalRows} rows → backup.sql`)
