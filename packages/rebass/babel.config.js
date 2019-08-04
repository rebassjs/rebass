module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  env: {
    styled: {
      plugins: [
        [
          'transform-rename-import', {
            original: '^reflexbox$',
            replacement: 'reflexbox/styled-components',
          }
        ]
      ]
    }
  }
}
