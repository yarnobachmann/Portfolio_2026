import { generateImportMap } from 'payload'
import configPromise from './payload.config'

async function main() {
  const config = await configPromise
  await generateImportMap(config, { log: true, force: true })
}

main().catch((err) => {
  console.error('Failed to generate importmap:', err)
  process.exit(1)
})
