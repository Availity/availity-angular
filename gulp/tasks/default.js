var gulp = require('gulp');

gulp.task('default', [
  'copy',
  'concat',
  'build',
  'server:sync',
  'watch'
]);
