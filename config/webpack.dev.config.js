"use strict"

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBaseConfig = require('./webpack.base')


module.exports = merge(webpackBaseConfig, {
    mode: "development",
    devtool: 'cheap-module-source-map',
    entry: [
        path.resolve(__dirname, '../src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'PACK',
            filename: 'index.html',
            template: 'src/index.html',
            Inject: true
        })
    ],
})