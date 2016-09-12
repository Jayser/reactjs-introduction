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

const WORK_DIRECTORY = path.join(__dirname, 'app');
const OUTPUT_DIRECTORY = path.join(__dirname, 'build');

module.exports = {
    port: PORT,
    context: WORK_DIRECTORY,
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:' + PORT,
            'webpack/hot/dev-server',
            './index.js'
        ]
    },
    output: {
        path: OUTPUT_DIRECTORY,
        publicPath: "http://localhost:" + PORT + '/',
        filename: 'js/[name].js?[hash]'
    },
    devtool: "eval",
    resolve: {
        extensions: [ '', '.js' ]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [WORK_DIRECTORY],
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new ForceCaseSensitivityPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin([OUTPUT_DIRECTORY], { root: __dirname }),
        new HtmlWebpackPlugin({
            title: packageJSON.name,
            template: 'index.html'
        })
    ]
};