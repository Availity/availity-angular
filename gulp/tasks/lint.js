var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var jscs = require('gulp-jscs');

var config = require('../config');

gulp.task('lint', ['lint:js', 'lint:lib']);

gulp.task('lint:lib', function() {

  gulp.src(config.lib.src)
    .pipe(jscs())
    .pipe(jshint(config.lib.jshintrc))
    .pipe(jshint.reporter(stylish));
});

gulp.task('lint:js', function() {

  var config = require('../config');

  gulp.src(config.js.src)
    .pipe(jscs())
    .pipe(jshint(config.js.jshintrc))
    .pipe(jshint.reporter(stylish));
});
