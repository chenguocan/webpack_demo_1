var path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const base = require("./webpack.config.base.js");
// module.exports = {
//     ...base,
//     plugins: [
//         ...base.plugins,
//         new MiniCssExtractPlugin({
//             // Options similar to the same options in webpackOptions.output
//             // both options are optional
//             filename: '[name].[contenthash].css',
//             chunkFilename: '[id].[contenthash].css',
//             ignoreOrder: false, // Enable to remove warnings about conflicting order
//         }),
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: [
//                     {
//                         loader: MiniCssExtractPlugin.loader,
//                         options: {
//                             // you can specify a publicPath here
//                             // by default it uses publicPath in webpackOptions.output
//                             publicPath: '../',
//                             hmr: process.env.NODE_ENV === 'development',
//                         },
//                     },
//                     'css-loader',
//                 ],
//             },
//         ],
//     },
// };

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
            template: 'src/assets/index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                ],
            },
        ],
    },
};