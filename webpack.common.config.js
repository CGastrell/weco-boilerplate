var ProvidePlugin = require('webpack').ProvidePlugin
var path = require('path')
var autoprefixer = require('autoprefixer')

module.exports = {
  entry: [ './src/app.js' ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: { 'presets': ['es2015', 'stage-0'] }
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        exclude: /(node_modules)/,
        loader: 'url-loader?name=img/[name].[ext]'
      },
      {
        test: /\.(otf|eot|svg|ttf|woff)(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?name=css/[name].[ext]'
      }
    ]
  },
  postcss: function () {
    return [autoprefixer]
  },
  plugins: [
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'windows.jQuery': 'jquery'
    })
  ],
  resolve: {
    // extensions: ['', '.js', '.css'],
    alias: {
      // leaflet_css: path.join(__dirname, '/node_modules/leaflet/dist/leaflet.css'),
      // leaflet_marker: path.join(__dirname, '/node_modules/leaflet/dist/images/marker-icon.png'),
      // leaflet_marker_2x: path.join(__dirname, '/node_modules/leaflet/dist/images/marker-icon-2x.png'),
      // leaflet_marker_shadow: path.join(__dirname, '/node_modules/leaflet/dist/images/marker-shadow.png'),
      // 'images/marker-icon.png': path.join(__dirname, '/node_modules/leaflet/dist/images/marker-icon.png'),
      // 'images/marker-icon-2x.png': path.join(__dirname, '/node_modules/leaflet/dist/images/marker-icon-2x.png'),
      // 'images/marker-shadow.png': path.join(__dirname, '/node_modules/leaflet/dist/images/marker-shadow.png')
    }
  }
}
