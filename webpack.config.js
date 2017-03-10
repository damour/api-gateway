var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./index.js",
    output: { path: path.join(__dirname, 'dist'), filename: 'index.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    target: 'node'
};
