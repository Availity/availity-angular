'use strict';

const merge = require('webpack-merge');
const path = require('path');
const webpackConfig = require('./webpack.config.development');

const config = merge(webpackConfig, {
  output: {
    // do not add slash else => Error: EACCES: permission denied, mkdir '/build'
    path: path.join(__dirname, 'build')
  }
});

module.exports = config;
