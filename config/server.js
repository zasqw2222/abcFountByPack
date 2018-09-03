const express = require('express')
const webpack = require('webpack')
const opn = require('opn')
const address = require('address')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.dev.config')
const compiler = webpack(config)
const ip = address.ip()

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))


app.listen(3000, function () {
  console.log('app listening on port 3000!\n')
  opn(`http://${ip || 'localhost'}:3000`)
})