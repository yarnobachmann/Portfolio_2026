const { spawnSync } = require('child_process')

process.env.SKIP_CMS_DURING_BUILD = '1'

const result = spawnSync(process.execPath, ['node_modules/next/dist/bin/next', 'build'], {
  env: process.env,
  shell: false,
  stdio: 'inherit',
})

process.exit(result.status ?? 1)
