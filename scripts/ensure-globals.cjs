const Module = require('module')
const origLoad = Module._load

Module._load = function (id, parent, isMain) {
  const result = origLoad.apply(this, arguments)

  if (id === '@next/env' && result && result.__esModule && !result.default) {
    result.default = result
  }

  return result
}

require('tsx/cjs')
require('../src/payload/ensure-globals.ts')
