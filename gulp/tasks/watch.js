var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', [
  'watch:partials',
  'watch:docs',
  'watch:lib',
  'watch:docs:js',
  'watch:ui',
  'watch:less',
  'watch:templates',
  'watch:docs:js:templates']);

gulp.task('watch:css', function() {
  gulp.watch(config.css.src, ['sync:css']);
});

gulp.task('watch:lib', function() {
  gulp.watch(config.lib.src, ['concat:lib']);
});

gulp.task('watch:templates', function() {
  gulp.watch(config.templates.src, ['build:templates']);
});

gulp.task('watch:ui', function() {
  gulp.watch(config.ui.src, ['concat:ui']);
});

gulp.task('watch:less', function() {
  gulp.watch(config.less.targets, ['less:dev']);
});

gulp.task('watch:partials', function() {
  gulp.watch(config.docs.partials.src, ['build:handlebars:partials', 'build:docs']);
});

gulp.task('watch:docs', function() {
  gulp.watch([
    config.docs.all.src,
    config.docs.templates.targets,
    config.docs.partials.targets
  ],
  ['build:docs']);
});

gulp.task('watch:docs:js', function() {
  gulp.watch(config.docs.js.src, ['concat:docs:js']);
});

gulp.task('watch:docs:js:templates', function() {
  gulp.watch(config.docs.jsTemplates.src, ['copy:docs:js:templates']);
});
