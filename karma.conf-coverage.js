'use strict';

module.exports = function(config) {

  config.set({
    files: [{ pattern: 'specs.js', watched: false }],
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    reporters: ['progress', 'notify', 'coverage'],
    autoWatch: true,
    singleRun: true,
    // optionally, configure the reporter
    coverageReporter: {
      type: 'html',
      dir: 'reports/'
    }
  });

};
