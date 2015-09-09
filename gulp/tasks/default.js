var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);

gulp.task('default', function() {

  runSequence(
    'clean',
    'less:dev',
    ['copy', 'concat', 'build'],
    'server:sync',
    'watch'
  );

});
