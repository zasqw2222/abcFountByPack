const express = require('express')
const webpack = require('webpack')
const opn = require('opn')
const address = require('address')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.dev.config')
const compiler = webpack(config)
const ip = address.ip()
const isPort = require('./isPort')

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))


let port = 9899

let listen = (port) => {
  app.listen(port, function () {
    console.log(`app listening on port ${port}!\n`)
    opn(`http://${ip || 'localhost'}:${port}`)
  })
}
isPort(port, listen)