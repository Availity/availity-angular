module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine', 'fixture'],
    reporters: ['mocha', 'notify'],
    preprocessors: {
      '**/*-tpl.html': ['html2js']
    },
    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'app/',
      moduleName: 'availity.ui.templates'
    }
  });
};
