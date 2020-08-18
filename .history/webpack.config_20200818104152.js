var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const base = require("./webpack.config.base.js");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    ...base,
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};