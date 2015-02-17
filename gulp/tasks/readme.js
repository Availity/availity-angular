// https://github.com/assemble/gulp-verb

'use strict';

var gulp = require('gulp');

gulp.task('readme', function() {

  var verb = require('gulp-verb');
  var config = require('../config');

  return gulp.src(config.readme.src)
    .pipe(verb({dest: config.readme.name}))
    .pipe(gulp.dest(config.readme.dest));
});
