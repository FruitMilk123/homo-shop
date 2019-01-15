const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: "development",
    entry: {
        main: path.join(__dirname, './src/myEntry.js')
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: "bundle.js"
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {test: /\.less$/, use:['style-loader', 'css-loader', 'less-loader']},
            {test: /\.css$/, use:['style-loader', 'css-loader']},
            {test: /\.(jpg|png|gif|jpeg)$/, use: 'url-loader'},

            // 字体
            {test: /\.(eot|svg|ttf|woff|woff2)$/, use: 'url-loader'},

            // babel配置
            {   test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },

            // Vue文件
            {test: /\.vue$/, use: 'vue-loader'}
        ]
    }
}