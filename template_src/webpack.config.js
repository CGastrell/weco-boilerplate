var path = require('path')
var commonConfig = require('./webpack.common.config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractCSS = new ExtractTextPlugin('css/styles.css')

var output = {
  path: path.resolve(__dirname, 'www'),
  publicPath: 'file:///android_asset/',
  filename: 'js/bundle.js'
}

module.exports = Object.assign(commonConfig, {
  output: output,
  module: {
    loaders: commonConfig.module.loaders.concat({
      test: /\.s?css$/,
      // exclude: /(node_modules)/,
      loader: extractCSS.extract('style', 'css!postcss')
    })
  },
  plugins: commonConfig.plugins.concat(extractCSS)
})
