var gulp = require('gulp');
var gulpif = require('gulp-if');
var using = require('gulp-using');

var config = require('../config');

gulp.task('copy', [
  'copy:js:uikit',
  'copy:css:uikit',
  'copy:images:uikit',
  'copy:fonts:uikit',
  'copy:docs:js:templates'
]);

gulp.task('copy:js:uikit', function() {
  return gulp.src(config.uikit.js.src)
    .pipe(gulpif(config.args.verbose, using({prefix:'Task [copy:js:uikit] using'})))
    .pipe(gulp.dest(config.uikit.js.dest));
});

gulp.task('copy:css:uikit', function() {
  return gulp.src(config.uikit.css.src)
    .pipe(gulpif(config.args.verbose, using({prefix:'Task [copy:css:uikit] using'})))
    .pipe(gulp.dest(config.uikit.css.dest));
});

gulp.task('copy:images:uikit', function() {
  return gulp.src(config.uikit.images.src)
    .pipe(gulpif(config.args.verbose, using({prefix:'Task [copy:images:uikit] using'})))
    .pipe(gulp.dest(config.uikit.images.dest));
});


gulp.task('copy:fonts:uikit', function() {
  return gulp.src(config.uikit.fonts.src)
    .pipe(gulpif(config.args.verbose, using({prefix:'Task [copy:fonts] using'})))
    .pipe(gulp.dest(config.uikit.fonts.dest));
});

gulp.task('copy:docs:js:templates', function() {
  var flatten = require('gulp-flatten');

  return gulp.src(config.docs.jsTemplates.src)
    .pipe(gulpif(config.args.verbose, using({prefix:'Task [copy:docs:js:templates] using'})))
    .pipe(flatten())
    .pipe(gulp.dest(config.docs.jsTemplates.dest));
});
