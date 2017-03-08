'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const webpackCommon = require('./webpack.config.common');
const banner = require('./dev/banner');
const VERSION = require('./package.json').version;

function getConfig(options) {

  const optimize = options.optimize;

  const ENV_VAR = {
    'process.env': {
      'VERSION': JSON.stringify(VERSION),
      'NODE_ENV': JSON.stringify('production')
    }
  };

  const config = merge(webpackCommon, {

    entry: {
      'availity-angular': './src/index.js'
    },

    output: {
      path: 'dist',
      filename: optimize ? 'js/[name].min.js' : 'js/[name].js',
      library: 'availity-angular',
      libraryTarget: 'umd'
    },

    externals: {
      'jquery': 'jQuery',
      'angular': 'angular',
      'moment': 'moment',
      'availity-uikit': 'availity-uikit',
      'select2': 'select2',
      'tracekit': 'TraceKit',
      'bootstrap-datepicker': 'bootstrap-datepicker',
      'angular-ui-mask': 'angular-ui-mask'
    },

    devtool: 'source-map',

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

      new webpack.BannerPlugin(banner()),

      new webpack.optimize.OccurenceOrderPlugin(true),

      new ExtractTextPlugin(optimize ? 'css/[name].min.css' : 'css/[name].css', {
        disable: false,
        allChunks: true
      }),

      new webpack.NoErrorsPlugin(),

      new webpack.DefinePlugin(ENV_VAR),

      new CommonsChunkPlugin({
        name: ['vendor'],
        minChunks: Infinity
      })

    ]
  });

  if (optimize) {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        mangle: false,
        output: {
          comments: false
        },
        compressor: {
          screw_ie8: true,
          warnings: false
        }
      })
    );
  }

  return config;
}

module.exports = getConfig;
