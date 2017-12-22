var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')

const outputPath = path.join(__dirname, '../public')

var config = require(path.join(__dirname, '../src/config/development'))

module.exports = merge(baseWebpackConfig, {
  output: {
    path: outputPath,
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config
    })
  ],
  devtool: '#eval-source-map'
})
