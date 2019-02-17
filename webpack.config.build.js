const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config');

const IS_PROD = (process.env.NODE_ENV === 'production');
module.exports = merge(webpackConfig, {
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      IS_PROD,
      'process.env': {
        GOOGLE_MAP_API_KEY: JSON.stringify(process.env.GOOGLE_MAP_API_KEY)
      }
    })
  ]
});
