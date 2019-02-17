const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(webpackConfig, {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: parseInt(`${process.env.DEV_PORT}`, 10) || 8080,
    hot: true,
    watchContentBase: true,
    historyApiFallback: true,
    open: true,
    openPage: ''
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

});
