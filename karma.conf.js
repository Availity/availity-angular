'use strict';

const merge = require('webpack-merge');

const webpackConfig = require('./webpack.config.common');

const wpConfig = merge(webpackConfig, {

  entry: {
    'availity-angular': './lib/index.js'
  },

  resolve: {
    alias: {
      tester: 'test'
    }
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

    preprocessors: { 'specs.js': ['webpack', 'sourcemap'],
      '*-specs.js': ['webpack', 'sourcemap']},

    webpack: wpConfig,

    webpackMiddleware: {
      noInfo: 'errors-only'
    },

    // reporters: ['progress', 'notify', 'spec'],
    reporters: ['notify', 'spec'],

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
    browsers: ['PhantomJS'],

    plugins: [
      require('karma-chrome-launcher'),
      require('karma-jasmine'),
      require('karma-sinon'),
      require('karma-sourcemap-loader'),
      require('karma-notify-reporter'),
      require('karma-spec-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-webpack')
    ]

  });
};

