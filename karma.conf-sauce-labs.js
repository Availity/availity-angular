/* eslint no-process-exit:0 */
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

  module: {

    loaders: [
      {
        test: /\.js$/,
        use: 'babel-istanbul-loader',
        exclude: /(bower_components|node_modules)/
      }
    ]
  },

  devtool: 'inline-source-map'

});

module.exports = function(config) {

  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    /* eslint no-console: 0 */
    console.log('Make sure the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are set.');
    process.exit(1);
  }

  // Browsers to run on Sauce Labs
  // Check out https://saucelabs.com/platforms for all browser/OS combos
  const customLaunchers = {

    sl_ie_11: {
      base: 'SauceLabs',
      browserName: 'Internet Explorer',
      platform: 'Windows 8.1',
      version: '11'
    },

    sl_ie_10: {
      base: 'SauceLabs',
      browserName: 'Internet Explorer',
      platform: 'Windows 8',
      version: '10'
    },

    sl_ie_9: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 7',
      version: '9'
    }
  };

  const sauceLabs = {
    startConnect: false,
    testName: 'availity-angular',
    recordScreenshots: false,
    transports: ['xhr-polling']
  };

  if (process.env.TRAVIS_JOB_NUMBER) {
    sauceLabs.build = `TRAVIS #${process.env.TRAVIS_BUILD_NUMBER} (${process.env.TRAVIS_BUILD_ID})`;
    sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
    sauceLabs.tags = [process.env.TRAVIS_BRANCH, process.env.TRAVIS_PULL_REQUEST];
  } else {
    sauceLabs.startConnect = true;
  }

  config.set({
    basePath: 'src',

    files: ['specs.js'],

    // files to exclude
    exclude: [
      '*.less',
      '*.css'
    ],

    preprocessors: {
      'specs.js': ['webpack', 'sourcemap']
    },

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
        errorDetails: false,
        warnings: false,
        publicPath: false
      }
    },

    autoWatch: false,

    browsers: Object.keys(customLaunchers),

    customLaunchers,

    frameworks: ['jasmine', 'sinon'],

    reporters: ['spec', 'coverage', 'saucelabs'],

    coverageReporter: {
      reporters: [
        {type: 'text-summary'}
      ]
    },

    port: 9876,

    colors: true,

    sauceLabs,

    logLevel: config.LOG_INFO,

    captureTimeout: 240000,

    singleRun: true,

    plugins: [
      require('karma-sauce-launcher'),
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-sinon'),
      require('karma-spec-reporter'),
      require('karma-webpack-error-reporter'),
      require('karma-sourcemap-loader'),
      require('karma-webpack')
    ]
  });
};
