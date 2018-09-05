'use strict'

const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, '../src/pack/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../lib'),
        publicPath: '/lib/',
        filename: 'pack.js',
        library: 'pack',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
        },
        moment: {
            root: 'moment',
            commonjs2: 'moment',
            commonjs: 'moment',
            amd: 'moment',
        }
    },
    plugins: [
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|css)$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
})