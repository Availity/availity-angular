'use strict';

const webpack = require('webpack');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const merge = require('webpack-merge');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const webpackCommon = require('./webpack.config.common');
const VERSION = require('./package.json').version;
const Logger = require('./dev/logger');

const ENV_VAR = {
  'process.env': {
    'VERSION': JSON.stringify(VERSION),
    'NODE_ENV': JSON.stringify('development')
  }
};

const config = merge(webpackCommon, {

  entry: {
    'availity-angular': './src/index.js',
    'vendor': './docs/js/vendor',
    'docs': './docs/js'
  },

  resolve: {
    alias: {
      demo: path.resolve( __dirname, './docs/js/module')
    }
  },

  debug: true,
  cache: true,
  watch: true,

  stats: {
    colors: true,
    reasons: false,
    hash: false,
    version: true,
    timings: true,
    chunks: false,
    chunkModules: false,
    cached: true,
    cachedAssets: true
  },

  plugins: [
    new webpack.DefinePlugin(ENV_VAR),
    new WebpackNotifierPlugin({excludeWarnings: true}),
    new ProgressPlugin(function(percentage, msg) {

      if ((percentage * 100) % 10 === 0 ){
        Logger.info(`${(percentage * 100)} ${msg}`);
      }

    }),
    new CommonsChunkPlugin({
      name: ['vendor'],
      minChunks: Infinity
    })
  ]
});

module.exports = config;

