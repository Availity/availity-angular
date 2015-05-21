var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);

var config = require('../config');
require('availity-limo')(gulp, config);

gulp.task('default', function() {

  runSequence(
    'clean',
    ['copy', 'concat', 'build'],
    'server:sync',
    'watch'
  );

});
