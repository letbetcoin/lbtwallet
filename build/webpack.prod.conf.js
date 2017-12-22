var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require(path.join(__dirname, './webpack.base.conf'))
var CopyWebpackPlugin = require('copy-webpack-plugin')

const publicPath = path.join(__dirname, '../public')
const distPath = path.join(__dirname, '../dist')
const outputPath = path.join(__dirname, '../dist')

var config = require(path.join(__dirname, '../src/config/production'))

module.exports = merge(baseWebpackConfig, {
  output: {
    path: outputPath,
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config
    }),
    new CopyWebpackPlugin([{
      from: path.join(publicPath, 'index.html'),
      to: path.join(distPath, 'index.html')
    }])
  ]
})
