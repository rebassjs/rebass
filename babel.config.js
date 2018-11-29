module.exports = {
  presets: [
    [ '@babel/env', { loose: true } ],
    '@babel/react'
  ],
  env: {
    emotion: {
      plugins: [
        [
          'transform-rename-import', {
            original: 'styled-components',
            replacement: '@emotion/styled'
          }
        ]
      ]
    }
  }
}
