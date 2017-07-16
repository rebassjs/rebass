const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/entry.js',

  output: {
    path: __dirname,
    filename: 'bundle.js'
  },

  resolve: {
    alias: {
      'rebass': path.join(__dirname, '../src')
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],

  devServer: {
    historyApiFallback: true
  }
}
