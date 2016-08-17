
var path = require('path')

module.exports = {
  devtool: 'inline-source-map',

  entry: './demo/entry.js',

  output: {
    path: path.join(__dirname, 'demo'),
    // publicPath: 'demo',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        loaders: [
          'babel'
        ]
      },
      {
        test: /\.json$/,
        loaders: [
          'json'
        ]
      }
    ]
  },

  devServer: {
    contentBase: 'demo/'
  }
}

