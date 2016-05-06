'use strict';

const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const merge = require('webpack-merge');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const webpackCommon = require('./webpack.config.common');
const VERSION = require('./package.json').version;

const ENV_VAR = {
  'process.env': {
    'VERSION': JSON.stringify(VERSION),
    'NODE_ENV': JSON.stringify('development')
  }
};

const config = merge(webpackCommon, {

  entry: {
    'availity-angular': './lib/index.js',
    'vendor': './examples/js/vendor',
    'docs': './examples/js'
  },

  debug: true,
  cache: true,
  watch: true,

  stats: {
    colors: true,
    reasons: true,
    hash: true,
    version: true,
    timings: true,
    chunks: true,
    chunkModules: true,
    cached: true,
    cachedAssets: true
  },

  plugins: [
    new webpack.DefinePlugin(ENV_VAR),
    new WebpackNotifierPlugin({excludeWarnings: true}),
    new CommonsChunkPlugin({
      name: ['vendor'],
      minChunks: Infinity
    })
  ]
});

module.exports = config;

