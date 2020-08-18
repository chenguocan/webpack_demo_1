// var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// module.exports = {
//     entry: "./src/x.js",
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'index.[contenthash].js'
//     },
//     plugins: [
//         new HtmlWebpackPlugin({  // Also generate a test.html
//             template: 'src/assets/index.html'
//         }),
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.scss$/i,
//                 use: [
//                     "style-loader",
//                     "css-loader",
//                     {
//                         loader: "sass-loader",
//                         options: {
//                             implementation: require("dart-sass")
//                         }
//                     }
//                 ]
//             },
//         ],
//     },
// };

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.[contenthash].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "XDML - 写代码啦",
            template: "src/assets/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.styl$/,
                loader: ["style-loader", "css-loader", "stylus-loader"]
            },
            {
                test: /\.less$/,
                loader: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("dart-sass")
                        }
                    }
                ]
            }
        ]
    }
};