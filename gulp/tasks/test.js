var gulp = require('gulp');
var path = require('path');

var config = require('../config');

gulp.task('test', ['test:ci']);

gulp.task('test:ci', ['lint'], function (done) {
  var Server = require('karma').Server;
  new Server({
    configFile: path.join(config.project.path, 'karma.conf.js'),
    browsers: ['PhantomJS'],
    singleRun: true
  }, function(exitStatus) {
    done(exitStatus ? 'Failing unit tests' : undefined);
  }).start();

});

gulp.task('test:sauce', ['lint'], function (done) {
  var Server = require('karma').Server;
  new Server({
    configFile: path.join(config.project.path, 'karma.conf-ci.js'),
    singleRun: true
  }, function(exitStatus) {
    done(exitStatus ? 'Failing unit tests' : undefined);
    process.exit(exitStatus);
  }).start();
});

gulp.task('test:server', ['lint'], function(done) {
  var Server = require('karma').Server;
  new Server({
    configFile: path.join(config.project.path, 'karma.conf.js'),
    browsers: ['Chrome'],
    reporters: ['progress', 'notify'],
    autoWatch: true,
    singleRun: false
  }, function(exitStatus) {
    done(exitStatus ? 'Failing unit tests' : undefined);
    process.exit(exitStatus);
  }).start();
});
