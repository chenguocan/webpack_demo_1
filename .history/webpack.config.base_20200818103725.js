var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "./dist",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
            template: 'src/assets/index.html'
        }),
    ],
    module: {
        rules: [
        ],
    },
};