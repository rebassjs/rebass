
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
    main: './docs/entry.js',
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
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

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new StaticSiteGeneratorPlugin('main', paths, {
      // ...data
    })
  ],

  devServer: {
    contentBase: 'build/',
    historyApiFallback: true
  }
}

