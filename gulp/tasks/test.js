var gulp = require('gulp');
var path = require('path');
var gutil = require('gulp-util');

var config = require('../config');

var files = config.test.src
  .concat(config.lib.src)
  .concat(config.ui.src)
  .concat(config.lib.specs)
  .concat(config.ui.specs)
  .concat({pattern: 'lib/**/*-fixture.html', watched: true, served: true, included: true});

gulp.task('test', ['test:ci']);

gulp.task('test:ci', ['lint'], function (done) {
  var Server = require('karma').Server;
  new Server({
    configFile: path.join(config.project.path, 'karma.conf.js'),
    singleRun: true,
    files: files
  }, done).start();

});

gulp.task('test:sauce', ['lint'], function (done) {
  var Server = require('karma').Server;
  new Server({
    configFile: path.join(config.project.path, 'karma.conf-ci.js'),
    singleRun: true,
    files: files
  }, function(exitCode) {
    done(exitCode);
    process.exit(exitCode);
  }).start();
});

gulp.task('test:server', ['lint'], function() {
  var Server = require('karma').Server;
  new Server({
    configFile: path.join(config.project.path, 'karma.conf.js'),
    browsers: ['Chrome'],
    files: files,
    reporters: ['progress', 'notify'],
    autoWatch: true,
    singleRun: false
  }, function(code) {
    gutil.log('Karma has exited with ' + code);
    process.exit(code);
  }).start();
});
