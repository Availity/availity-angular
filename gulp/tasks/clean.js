var gulp = require('gulp');
var del = require('del');

gulp.task('clean', ['clean:docs']);

gulp.task('clean:docs', function(cb) {
  var config = require('../config');


  del([config.docs.dest], function() {
    cb();
  });
});

gulp.task('clean:dist', function(cb) {
  var config = require('../config');
  var del = require('del');

  del([config.lib.destDist], function() {
    cb();
  });
});
