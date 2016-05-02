'use strict';

const merge = require('webpack-merge');

const webpackConfig = require('./webpack.config.common');

const wpConfig = merge(webpackConfig, {

  entry: {
    'availity-angular': './lib/index.js'
  },
  devtool: 'inline-source-map',
  debug: false,
  cache: false,
  watch: false

});

module.exports = function(config) {

  config.set({
    // base path used to resolve all patterns
    basePath: './lib',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files/patterns to load in the browser
    files: [
      { pattern: 'specs.js', watched: false }
    ],

    // files to exclude
    exclude: [
      '*.less',
      '*.css'
    ],

    plugins: [
      require('karma-chrome-launcher'),
      require('karma-jasmine'),
      require('karma-sourcemap-loader'),
      require('karma-notify-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-webpack')
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { 'specs.js': ['webpack', 'sourcemap'] },

    webpack: wpConfig,

    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
    },

    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'notify'],

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

    // toggle whether to watch files and rerun tests upon incurring changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // if true, Karma runs tests once and exits
    singleRun: true
  });
};

