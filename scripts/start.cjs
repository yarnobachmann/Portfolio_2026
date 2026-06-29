const { spawn } = require('child_process')

const bootstrap = spawn(process.execPath, ['scripts/ensure-globals.cjs'], {
  env: process.env,
  shell: false,
  stdio: 'inherit',
})

bootstrap.on('exit', (code) => {
  if (code && code !== 0) {
    console.warn(`Global bootstrap exited with code ${code}. Continuing to run the web server.`)
  }
})

const next = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start'], {
  env: process.env,
  shell: false,
  stdio: 'inherit',
})

next.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal)
    return
  }

  process.exit(code ?? 1)
})

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    bootstrap.kill(signal)
    next.kill(signal)
  })
}
