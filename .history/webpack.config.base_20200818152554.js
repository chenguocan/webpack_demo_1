var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/x.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
            template: 'src/assets/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                loader: ['style-loader', ['css-loader'], 'less-loader'], // compiles Less to CSS
            },
        ],
    },
};