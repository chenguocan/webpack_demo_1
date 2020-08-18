var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require("./webpack.config.base.js");
module.exports = {
    ...base,
    mode: "production",
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
    module: {
        ...base.module.rules,
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
};
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const path = require("path");
// const base = require('./webpack.config.base.js')

// module.exports = {
//     ...base,
//     mode: "production",
//     plugins: [
//         ...base.plugins,
//         new MiniCssExtractPlugin({
//             filename: '[name].[contenthash].css',
//             chunkFilename: '[id].[contenthash].css',
//             ignoreOrder: false, // Enable to remove warnings about conflicting order
//         }),
//     ],
//     module: {
//         rules: [
//             ...base.module.rules,
//             {
//                 test: /\.css$/i,
//                 use: [
//                     {
//                         loader: MiniCssExtractPlugin.loader,
//                         options: {
//                             publicPath: '../',
//                         },
//                     },
//                     'css-loader',
//                 ],
//             }
//         ]
//     }
// };