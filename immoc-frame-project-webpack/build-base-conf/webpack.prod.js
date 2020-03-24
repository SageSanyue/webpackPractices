const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { distPath } = require('./paths')

module.exports = merge(webpackCommonConf, {
    mode: 'production',
    output: {
        filename: 'bundle.[chunkHash].js', // 生产环境打包代码时加上hash戳利于增强缓存相关操作
        path: distPath
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: {
                    loader: 'url-loader', // 图片-考虑base64编码情况
                    options: {
                        limit: 5 * 1024, // 小于5kb的图片用base64格式产出，否则依然延用file-loader的形式产出url格式
                        outputPath: '/imgs/' // 打包到imgs目录下
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), // 会默认清空output.path文件夹
        new webpack.DefinePlugin({
            // window.ENV = 'production'
            ENV: JSON.stringify('production')
        })
    ]
})