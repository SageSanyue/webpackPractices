const path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        // 添加hash可以防止文件缓存，每次都会生成4位的hash串
        filename: 'bundle.[hash:4].js',   
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                            plugins: (loader) => [
                                require('autoprefixer')(), //CSS浏览器兼容
                                require('cssnano')()  //压缩css
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'less-loader',
                    {
                        loader: 'postcss-loader',
                        options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                            plugins: (loader) => [
                                require('autoprefixer')(), //CSS浏览器兼容
                                require('cssnano')()  //压缩css
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 用哪个html作为模板
            // 在src目录下创建一个index.html页面当做模板来用
            template: 'index.html',
            hash: true, // 会在打包好的bundle.js后面加上hash串
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
}