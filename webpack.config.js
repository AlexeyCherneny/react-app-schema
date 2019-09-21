const merge = require('webpack-merge');
const webpackConfig = require('./webpack/webpack.config');
const webpackDevConfig = require('./webpack/webpack.dev.config');

module.exports = function (env) {
  if (env === 'development') {
    return merge([webpackConfig, webpackDevConfig]);
  } 
  if (env === 'production') {
    return merge([webpackConfig])
  }
}