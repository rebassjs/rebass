#!/usr/bin/env node
const execa = require('execa')

const babel = (env, ...args) => {
  return execa('babel', [
    '--verbose',
    ...args.filter(Boolean),
    '--root-mode=upward',
  ], {
    stdio: 'inherit',
    env: {
      NODE_ENV: env,
    }
  })
}

babel(null, 'src', '-d', 'dist')
babel('esm', 'src', '-o', 'dist/index.esm.js')
babel('styled', 'src', '-d', 'styled-components')
