module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    // 'transform-es2015-modules-umd'
  ],
  env: {
    esm: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
          }
        ]
      ],
    },
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
