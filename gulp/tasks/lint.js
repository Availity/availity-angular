var gulp = require('gulp');
var gulpif = require('gulp-if');
var eslint = require('gulp-eslint');
var using = require('gulp-using');

var config = require('../config');

gulp.task('lint', ['lint:js', 'lint:lib', 'lint:ui']);


gulp.task('lint:lib', function() {

  gulp.src(config.js.src)
    .pipe(gulpif(config.args.verbose, using({
      prefix: 'Task [lint:lib] using'
    })))
    .pipe(eslint('lib/.eslintrc'))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint:ui', function() {

  gulp.src(config.ui.src.concat(config.ui.specs))
    .pipe(gulpif(config.args.verbose, using({
      prefix: 'Task [lint:lib] using'
    })))
    .pipe(eslint('lib/.eslintrc'))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());

});

gulp.task('lint:js', function() {

  gulp.src(config.js.src)
    .pipe(gulpif(config.args.verbose, using({
      prefix: 'Task [lint:lib] using'
    })))
    .pipe(eslint('.eslintrc'))
    .pipe(eslint.format());
});
