const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'raw-loader'
      },
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      // path.resolve(__dirname, '..', 'node_modules'),
    ],
    alias: {
      'rebass': path.join(__dirname, '..')
    }
  },
}
