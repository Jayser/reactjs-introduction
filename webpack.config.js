'use strict';

const path = require('path');
const packageJSON = require('./package.json');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForceCaseSensitivityPlugin = require('force-case-sensitivity-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_DEVELOP = NODE_ENV === 'development';
const PORT = process.env.PORT || 8080;

const PATH = {
    ENTRY: path.resolve(__dirname, 'app'),
    OUTPUT: path.resolve(__dirname, 'build')
};

module.exports = {
    port: PORT,
    context: PATH.ENTRY,
    entry: [
        'webpack-dev-server/client?http://localhost:' + PORT,
        'webpack/hot/only-dev-server',
        './index.js'
    ],
    output: {
        path: PATH.OUTPUT,
        publicPath: "http://localhost:" + PORT + '/',
        filename: 'js/[name].js?[hash]'
    },
    devtool: 'eval',
    resolve: {
        extensions: [ '', '.js' ]
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                include: [PATH.ENTRY]
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                include: [PATH.ENTRY],
                loaders: ['react-hot', 'babel']
            }
        ]
    },
    plugins: [
        new ForceCaseSensitivityPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin([PATH.OUTPUT], { root: __dirname }),
        new HtmlWebpackPlugin({
            title: packageJSON.name,
            template: 'index.html'
        })
    ]
};