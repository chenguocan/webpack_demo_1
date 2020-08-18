var path = require('path');
const base = require("./webpack.config.base.js");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    ...base,
    entry: "./src/x.js",
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "./dist",
    },
    module: {
        ...base.module.rules,
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};