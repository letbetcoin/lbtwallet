var merge = require('webpack-merge')
var prodEnv = require('./production')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"'
})