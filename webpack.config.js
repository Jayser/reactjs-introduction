const Webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForceCaseSensitivityPlugin = require('force-case-sensitivity-webpack-plugin');
const WebpackMerge = require('webpack-merge');
const WebpackValidator = require('webpack-validator');

const cfgBase = require('./config/webpack/base');
const cfgDev = require('./config/webpack/dev');
const cfgProd = require('./config/webpack/prod');

const cfg = WebpackMerge({
    context: cfgBase.path.source,
    output: {
        path: cfgBase.path.output,
        publicPath: "http://localhost:" + cfgBase.port + '/',
        filename: 'js/[name].js?[hash]'
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
        new Webpack.NoErrorsPlugin(),
        new ForceCaseSensitivityPlugin(),
        new Webpack.optimize.OccurenceOrderPlugin(),
        new CleanWebpackPlugin([cfgBase.path.output]),
        new Webpack.DefinePlugin({
            IS_DEVELOPMENT: cfgBase.isDevelop,
            IS_PROD: cfgBase.isProd
        }),
        new HtmlWebpackPlugin({
            title: cfgBase.pkg.name,
            template: 'index.html',
            favicon: 'favicon.ico',
            hash: true
        })
    ],
    eslint: {
        configFile: 'config/eslint/.eslintrc',
        ignoreFile: 'config/eslint/.eslintignore'
    },
    devServer: {
        port: cfgBase.port
    }
}, cfgBase.isDevelop ? cfgDev : cfgProd);

module.exports = WebpackValidator(cfg);
