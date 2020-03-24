const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')
const merge = require('webpack-merge')
const { distPath } = require('./paths')

module.exports = merge(webpackCommonConf, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/, // 开发环境直接引入图片url
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify('development') // window.ENV = 'development'
        })
    ],
    devServer: {
        port: 8080,
        progress: true,
        contentBase: distPath,
        open: true,
        compress: true,
        proxy: {
            '/api': {
                target: 'www.sage.com', // 将本地http://localhost以/api开始的请求都代理至http://www.sage.com/api下
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    }
})