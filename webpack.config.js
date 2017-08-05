// ============================

// FROM SCHOOL === STEPH REPO

// ============================
'use strict';

// require('dotenv').config();
// const production = process.env.NODE_ENV === 'production';
//
// const { DefinePlugin, EnvironmentPlugin } = require('webpack');
// const HTMLPlugin = require('html-webpack-plugin');
// const CleanPlugin = require('clean-webpack-plugin');
// const UglifyPlugin = require('uglifyjs-webpack-plugin');
// const ExtractPlugin = require('extract-text-webpack-plugin');
//
// let plugins = [
//   new EnvironmentPlugin(['NODE_ENV']),
//   new ExtractPlugin('bundle-[hash].css'),
//   new HTMLPlugin({ template: `${__dirname}/src/index.html` }),
//   new DefinePlugin({
//     __DEBUG__: JSON.stringify(!production),
//     __API_URL__: JSON.stringify(process.env.API_URL)
//   })
// ];
//
// if (production)
//   plugins = plugins.concat([new CleanPlugin(), new UglifyPlugin()]);
//
// module.exports = {
//   plugins,
//   entry: `${__dirname}/src/main.js`,
//   devServer: { historyApiFallback: true },
//   devtool: production ? undefined : 'cheap-module-eval-source-map',
//   output: {
//     path: `${__dirname}/build`,
//     filename: 'bundle-[hash].js',
//     publicPath: process.env.CDN_URL
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_module/,
//         loader: 'babel-loader'
//       },
//       {
//         test: /\.scss$/,
//         loader: ExtractPlugin.extract(['css-loader', 'sass-loader'])
//       },
//       {
//         test: /\.(woff|woff2|ttf|eot|glyph\.svg)$/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 10000,
//               name: 'font/[name].[ext]'
//             }
//           }
//         ]
//       },
//       {
//         test: /\.(jpg|jpeg|gif|png|tiff|svg)$/,
//         exclude: /\.glyph.svg/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 60000,
//               name: 'image/[name].[ext]'
//             }
//           }
//         ]
//       },
//       {
//         test: /\.(mp3|aac|aiff|wav|flac|m4a|ogg)$/,
//         exclude: /\.glyph.svg/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: { name: 'audio/[name].[ext]' }
//           }
//         ]
//       }
//     ]
//   }
// };

// ============================

// ORIGINAL WEBPACK CONFIG .JS

// ============================

var path = require('path');

module.exports = {

    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};

//===========================
// another ONE HERE =========
//===========================
// var webpack = require('webpack');
// var path = require('path');
//
// var BUILD_DIR = path.resolve(__dirname, 'build');
// var APP_DIR = path.resolve(__dirname, 'build');
//
// module.exports = {
//   entry: [
//     // Set up an ES6-ish environment
//     'babel-polyfill',
//
//     // Add your application's scripts below
//     APP_DIR + '/import.js'
//   ],
//   output: {
//     path: BUILD_DIR,
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         loader: 'babel',
//
//         exclude: /node_modules/,
//         query: {
//           plugins: ['transform-runtime'],
//           presets: ['es2015', 'stage-0', 'react']
//         }
//       },
//           { test: /\.css$/, loader: "style-loader!css-loader" }
//     ],
//       // resolve: {
//       //     extensions: ['', '.js', '.jsx', '.css']
//   }
// };
