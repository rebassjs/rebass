module.exports = {
  presets: [
    [ '@babel/env', { loose: true } ],
    '@babel/react'
  ],
  env: {
    emotion: {
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
