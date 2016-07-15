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

  devtool: 'cheap-module-source-map',

  debug: false,
  cache: false,
  watch: false

});

module.exports = function(config) {

  config.set({

    // base path used to resolve all patterns
    basePath: 'src',

    frameworks: ['jasmine', 'sinon'],

    files: [{ pattern: 'specs.js', watched: false }],

    reportSlowerThan: 500,

    // if true, Karma runs tests once and exits
    singleRun: true,

    autoWatch: false,

    // files to exclude
    exclude: [
      '*.less',
      '*.css'
    ],

    preprocessors: {
      'specs.js': ['webpack'],
      '*-specs.js': ['webpack']
    },

    webpack: wpConfig,

    webpackMiddleware: {
      noInfo: 'errors-only'
    },

    reporters: ['notify', 'nyan'],

    // reporter options
    nyanReporter: {
      // suppress the red background on errors in the error
      // report at the end of the test run
      suppressErrorHighlighting: true
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

    browsers: ['PhantomJS'],

    plugins: [
      require('karma-chrome-launcher'),
      require('karma-jasmine'),
      require('karma-sinon'),
      require('karma-notify-reporter'),
      require('karma-nyan-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-webpack-with-fast-source-maps')
    ]

  });
};

