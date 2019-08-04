module.exports = {
  presets: [ '@babel/preset-env' ],
  env: {
    styled: {
      plugins: [
        [
          'transform-rename-import', {
            original: '@emotion/styled',
            replacement: 'styled-components',
          }
        ]
      ]
    }
  }
}
