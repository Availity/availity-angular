var gulp = require('gulp');
var config = require('../config');

gulp.task('clean', ['clean:docs']);

gulp.task('clean:docs', function(cb) {

  var del = require('del');
  del([config.docs.dest], cb);
});

gulp.task('clean:dist', function(cb) {
  var config = require('../config');
  var del = require('del');

  del([config.lib.destDist], cb);
});
