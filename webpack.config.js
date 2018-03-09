var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
module.exports = {
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, 'src/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].js',
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loaer!css-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'images/[name]-[hash:5].[ext]'
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true,
        port: 9000,
        inline: true
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}