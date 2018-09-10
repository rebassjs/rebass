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
      presets: [ '@babel/env' ]
    },
    cjs: {
      presets: [ '@babel/env' ]
    },
    esm: {
      presets: [
        [ '@babel/env', { loose: true, modules: false } ]
      ]
    },
    'emotion:cjs': {
      presets: [ '@babel/env' ],
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
