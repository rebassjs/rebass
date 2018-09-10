module.exports = {
  presets: [
    '@babel/env',
    '@babel/react'
  ],
  env: {
    // test: { presets: [ '@babel/env' ] },
    node: {
      presets: [
        [ '@babel/env', {
          targets: {
            node: true
          }
        } ]
      ]
    },
    es: {
      presets: [
        [ '@babel/env', {
          loose: true,
          modules: false
        } ]
      ]
    },
    emotion: {
      presets: [
        [ '@babel/env', {
          loose: true,
          modules: false
        } ]
      ],
      plugins: [
        [ 'transform-rename-import', {
          replacements: [
            {
              original: '^styled-components$',
              replacement: 'react-emotion'
            }
          ]
        } ]
      ]
    }
  }
}
