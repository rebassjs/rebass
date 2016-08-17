
var path = require('path')

module.exports = {
  devtool: 'inline-source-map',

  entry: path.join(__dirname, './entry.js'),

  output: {
    path: __dirname,
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
    contentBase: 'demo'
  }
}

