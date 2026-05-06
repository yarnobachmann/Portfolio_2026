// Patch @next/env interop issue with tsx before any module loads
const Module = require('module')
const origLoad = Module._load
Module._load = function (id, parent, isMain) {
  const result = origLoad.apply(this, arguments)
  if (id === '@next/env' && result && result.__esModule && !result.default) {
    result.default = result
  }
  return result
}

// Register tsx CJS transformer
require('tsx/cjs')

// Run the seed
require('./src/payload/seed.ts')
