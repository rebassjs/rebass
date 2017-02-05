
var path = require('path')

module.exports = {
  entry: './demo/entry.js',

  output: {
    path: path.join(__dirname, 'demo'),
    // publicPath: 'demo',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  devServer: {
    contentBase: 'demo/'
  }
}

