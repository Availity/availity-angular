'use strict';

const merge = require('webpack-merge');

const webpackConfig = require('./webpack.config.common');

const wpConfig = merge(webpackConfig, {

  entry: {
    'availity-angular': './src/index.js'
  },

  resolve: {
    alias: {
      tester: 'test'
    }
  },

  devtool: 'inline-source-map',

  debug: true,
  cache: false,
  watch: true

});

module.exports = function(config) {

  config.set({

    // base path used to resolve all patterns
    basePath: 'src',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'sinon'],

    files: ['specs.js'],

    reportSlowerThan: 500,

    // if true, Karma runs tests once and exits
    singleRun: false,

    autoWatch: true,

    // files to exclude
    exclude: [
      '*.less',
      '*.css'
    ],

    preprocessors: { 'specs.js': ['webpack', 'sourcemap'] },

    webpack: wpConfig,

    webpackMiddleware: {
      stats: {
        hash: false,
        version: false,
        timings: false,
        assets: false,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: true,
        errorDetails: true,
        warnings: false,
        publicPath: false
      }
    },

    reporters: ['notify', 'webpack-error', 'spec'],

    specReporter: {
      maxLogLines: 5,         // limit number of lines logged per test
      suppressErrorSummary: false,  // do not print error summary
      suppressFailed: false,
      suppressPassed: true,
      suppressSkipped: false,
      showSpecTiming: true
    },

    // web server port
    port: 9876,

    // enable colors in the output
    colors: true,

    client: {
      // log console output in our test console
      captureConsole: true
    },

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    plugins: [
      require('karma-chrome-launcher'),
      require('karma-jasmine'),
      require('karma-webpack'),
      require('karma-notify-reporter'),
      require('karma-spec-reporter'),
      require('karma-webpack-error-reporter'),
      require('karma-sourcemap-loader'),
      require('karma-sinon')
    ]

  });
};

