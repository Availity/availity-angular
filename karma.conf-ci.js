var config = require('./gulp/config');

var files = config.test.src
  .concat(config.lib.src)
  .concat(config.ui.src)
  .concat(config.lib.specs)
  .concat(config.ui.specs)
  .concat('lib/**/*-tpl.html')
  .concat('lib/**/*-fixture.html');

module.exports = function(config) {

  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    console.log('Make sure the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are set.');
    process.exit(1);
  }

  // Browsers to run on Sauce Labs
  // Check out https://saucelabs.com/platforms for all browser/OS combos
  var customLaunchers = {

    // sl_ms_edge: {
    //   base: "SauceLabs",
    //   browserName: "microsoftedge",
    //   platform: "Windows 10",
    // },
    // sl_ie_11: {
    //   base: "SauceLabs",
    //   browserName: "Internet Explorer",
    //   platform: "Windows 8.1",
    //   version: "11"
    // },
    // sl_ie_10: {
    //   base: "SauceLabs",
    //   browserName: "Internet Explorer",
    //   platform: "Windows 8",
    //   version: "10"
    // },

    sl_ie_9: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 7',
      version: '9'
    },
    sl_ie_8: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 7',
      version: '8'
    }
  };

  var sauceLabs = {
    startConnect: false,
    testName: 'availity-angular',
    recordScreenshots: false,
  };

  if(process.env.TRAVIS_JOB_NUMBER) {
    sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
  } else {
    sauceLabs.startConnect = true;
  }

  config.set({
    basePath: '',
    files: files,
    autoWatch: false,
    browsers: Object.keys(customLaunchers),
    customLaunchers: customLaunchers,
    frameworks: ['jasmine'],
    reporters: ['mocha', 'saucelabs'],
    port: 9876,
    colors: true,
    sauceLabs: sauceLabs,
    logLevel: config.LOG_INFO,
    captureTimeout: 120000,
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 2,
    browserNoActivityTimeout: 20000,
    singleRun: true,
    preprocessors: {
      'lib/**/*-tpl.html': ['ng-html2js'],
      'lib/**/*-fixture.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'lib/',
      moduleName: 'availity.ui.templates'
    }
  });
};
