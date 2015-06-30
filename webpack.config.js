
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./docs/data')

module.exports = {

  entry: './docs/entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /(\.js$|\.jsx?$)/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /(^basscss|\.css$)/, exclude: /colors\.css/, loader: 'css-loader!cssnext-loader' }
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', ['/'], data)
  ],

  cssnext: {
    compress: true,
    features: {
      //import : {
      //  path : ['node_modules']
      //},
      rem: false,
      pseudoElements: false,
      colorRgba: false
    }
  }

}

