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

  devtool: 'cheap-module-source-map',

  debug: false,
  cache: false,
  watch: false

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
    recordScreenshots: false
  };

  if (process.env.TRAVIS_JOB_NUMBER) {
    sauceLabs.build = `TRAVIS #${process.env.TRAVIS_BUILD_NUMBER} (${process.env.TRAVIS_BUILD_ID})`;
    sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
  } else {
    sauceLabs.startConnect = true;
  }

  config.set({
    basePath: 'src',
    files: [{ pattern: 'specs.js', watched: false }],
    // files to exclude
    exclude: [
      '*.less',
      '*.css'
    ],
    preprocessors: {
      'specs.js': ['webpack', 'sourcemap'],
      '*-specs2.js': ['webpack', 'sourcemap']
    },
    webpack: wpConfig,
    webpackMiddleware: {
      noInfo: 'errors-only'
    },
    autoWatch: false,
    browsers: Object.keys(customLaunchers),
    customLaunchers,
    frameworks: ['jasmine'],
    reporters: ['nyan', 'saucelabs'],
    // reporter options
    nyanReporter: {
      // suppress the red background on errors in the error
      // report at the end of the test run
      suppressErrorHighlighting: true,
      renderOnRunCompleteOnly: true
    },
    port: 9876,
    colors: true,
    sauceLabs,
    logLevel: config.LOG_INFO,
    captureTimeout: 240000,
    singleRun: true,
    plugins: [
      require('karma-chrome-launcher'),
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-sinon'),
      require('karma-nyan-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-webpack-with-fast-source-maps')
    ]
  });
};
