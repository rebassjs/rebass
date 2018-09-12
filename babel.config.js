const emotionImport = [ 'transform-rename-import', {
  replacements: [
    {
      original: '^styled-components$',
      replacement: 'react-emotion'
    }
  ]
} ]

module.exports = {
  presets: [ '@babel/react' ],
  env: {
    test: {
      presets: [
        [ '@babel/env', { loose: true } ]
      ]
    },
    cjs: {
      presets: [
        [ '@babel/env', { loose: true } ]
      ]
    },
    esm: {
      presets: [
        [ '@babel/env', { loose: true, modules: false } ]
      ]
    },
    'emotion:cjs': {
      presets: [
        [ '@babel/env', { loose: true } ]
      ],
      plugins: [ emotionImport ]
    },
    'emotion:esm': {
      presets: [
        [ '@babel/env', { loose: true, modules: false } ]
      ],
      plugins: [ emotionImport ]
    }
  }
}
