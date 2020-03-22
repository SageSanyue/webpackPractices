// 手动写法
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        'index': './src/pages/index.js',
        'list': './src/pages/list.js',
        'detail': './src/pages/detail.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './src/template/list.html',
            filename: 'list.html',
            chunks: ['list']
        }),
        new HtmlWebpackPlugin({
            template: './src/template/detail.html',
            filename: 'detail.html',
            chunks: ['detail']
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }]
    }
}