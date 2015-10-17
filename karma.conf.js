var config = require('./gulp/config');

var files = config.test.src
  .concat(config.lib.src)
  .concat(config.ui.src)
  .concat(config.lib.specs)
  .concat(config.ui.specs)
  .concat('lib/**/*-tpl.html')
  .concat('lib/**/*-fixture.html');

module.exports = function(config) {
  config.set({
    files: files,
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    reporters: ['progress', 'notify'],
    autoWatch: true,
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
