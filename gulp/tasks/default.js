var gulp = require('gulp');
var config = require('../config');
var del = require('del');
var runSequence = require('run-sequence').use(gulp);

gulp.task('default', function() {

  del.sync([config.docs.dest]);

  runSequence(
    'less:dev',
    ['copy', 'concat', 'build'],
    'server:sync',
    'watch'
  );

});
