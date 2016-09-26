
const path = require('path')
const webpack = require('webpack')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

const paths = [
  '/',
  '404.html'
]

module.exports = {
  devtool: 'cheap-source-map',
  entry: {
    bundle: './docs/entry.js'
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
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

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new StaticSiteGeneratorPlugin('bundle', paths, {
      // ...data
    })
  ],

  devServer: {
    contentBase: 'build/',
    historyApiFallback: true
  }
}

