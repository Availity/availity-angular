module.exports = function(config) {

  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    console.log('Make sure the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are set.');
    process.exit(1);
  }

  // Browsers to run on Sauce Labs
  // Check out https://saucelabs.com/platforms for all browser/OS combos
  var customLaunchers = {
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
      '**/*-tpl.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'lib/',
      moduleName: 'availity.ui.templates'
    }
  });
};
