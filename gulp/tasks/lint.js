var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var jscs = require('gulp-jscs');

var config = require('../config');

gulp.task('lint', ['lint:js', 'lint:lib', 'lint:ui']);

gulp.task('lint:lib', function() {

  gulp.src(config.lib.src.concat(config.lib.specs))
    .pipe(jscs())
    .pipe(jshint(config.lib.jshintrc))
    .pipe(jshint.reporter(stylish));
});

gulp.task('lint:ui', function() {

  gulp.src(config.ui.src.concat(config.ui.specs))
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
