var fs = require('fs')
var path = require('path')
var express = require('express')
var config = require('../src/config/production')
var app = express()

process.env.NODE_ENV = config.NODE_ENV
process.env.PORT = config.PORT

var mode = process.env.NODE_ENV || 'production'
var port = process.env.PORT || 8005

var publicPath = path.join(__dirname, '../dist')
app.use(express.static(publicPath))
app.get('/*', (_, res) => {
  fs.readFile(path.join(publicPath, 'index.html'), function (_, data) {
    res.type('html').send(data)
  })
})

app.listen(port)

console.log(`Starting app on mode ${mode}`, `\nServer is running on port ${port}`, '...')
