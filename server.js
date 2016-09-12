const open = require("open");
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    contentBase: config.output.path,
    hot: true,
    quiet: false,
    noInfo: false,
    historyApiFallback: true,
    stats: { colors: true }
}).listen(config.port, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }
    //open("http://localhost:" + config.port + "/index.html");
    console.log('Listening at localhost:'  + config.port);
});