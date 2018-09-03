// 'use strict'


const webpack = require('webpack')
const path = require('path')
const package = require('../package.json')
const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const cssFilename = '/css/main.css'
const shouldUseRelativeAssetPaths = './'
const extractTextPluginOptions = shouldUseRelativeAssetPaths ? { publicPath: Array(cssFilename.split('/').length).join('../') } : {}

/**
 * 输出路径
 * @param {String} dir 路径
 */
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            minimize: true,
                        },
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9',
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                    'sass-loader',
                ],
            },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192' },
            { test: /\.(html|tpl)$/, loader: 'html-loader' }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css',
            chunkFilename: 'main.css',
        })
    ]
}