var path = require('path')
var commonConfig = require('./webpack.common.config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractCSS = new ExtractTextPlugin('css/styles.css')

var output = {
  path: path.resolve(__dirname, 'www'),
  publicPath: 'http://localhost:8080/',
  filename: 'js/bundle.js'
}

module.exports = Object.assign(commonConfig, {
  output: output,
  devtool: 'source-map',
  module: {
    loaders: commonConfig.module.loaders.concat({
      test: /\.s?css$/,
      // exclude: /(node_modules)/,
      loader: extractCSS.extract('style', 'css?sourceMap!postcss?sourceMap')
      // loader: extractCSS.extract('style', 'css?sourceMap!postcss?sourceMap!sass?sourceMap')
    })
  },
  plugins: commonConfig.plugins.concat(extractCSS)
})
