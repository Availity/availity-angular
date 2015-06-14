module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine', 'fixture'],
    reporters: ['mocha'],
    preprocessors: {
      '**/*.html': ['html2js'],
    },
  });
};
