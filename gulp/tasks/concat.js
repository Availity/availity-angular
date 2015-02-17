var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('../config');
var gulpif = require('gulp-if');
var using = require('gulp-using');
var browserSync = require('browser-sync');
var replace = require('gulp-replace');
var tap = require('gulp-tap');
var header = require('gulp-header');
var sourcemaps = require('gulp-sourcemaps');
var reload = browserSync.reload;

gulp.task('concat', [
  'concat:vendor',
  'concat:lib',
  'concat:ui',
  'concat:docs:js']);

gulp.task('concat:vendor', function() {
  gulp.src(config.vendor.src)
    .pipe(gulpif(config.args.verbose, using({prefix:'Task [concat:vendor] using'})))
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(config.vendor.dest));
});

gulp.task('concat:lib', function() {
  gulp.src(config.lib.src)
    .pipe(gulpif(config.args.verbose, using({prefix:'Task [concat:lib] using'})))
    .pipe(replace(config.regex.JSHINT, ''))
    .pipe(replace(config.regex.GLOBAL, ''))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(tap(function(file) {
      var relativePath = file.path.match(/availity-angular-sdk(.*)/)[1];
      file.relativePath = relativePath;
    }))
    .pipe(header('// Source: <%= file.relativePath %>\n'))
    .pipe(concat(config.lib.name))
    .pipe(sourcemaps.write(config.lib.destMaps))
    .pipe(gulp.dest(config.lib.dest))
    .pipe(reload({ stream:true }));
});

gulp.task('concat:ui', function() {
  gulp.src(config.ui.src)
    .pipe(gulpif(config.args.verbose, using({prefix:'Task [concat:ui] using'})))
    .pipe(replace(config.regex.JSHINT, ''))
    .pipe(replace(config.regex.GLOBAL, ''))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(tap(function(file) {
      var relativePath = file.path.match(/availity-angular-sdk(.*)/)[1];
      file.relativePath = relativePath;
    }))
    .pipe(header('// Source: <%= file.relativePath %>\n'))
    .pipe(concat(config.ui.name))
    .pipe(sourcemaps.write(config.ui.destMaps))
    .pipe(gulp.dest(config.ui.dest))
    .pipe(reload({ stream:true }));
});

gulp.task('concat:docs:js', function() {
  gulp.src(config.docs.js.src)
    .pipe(gulpif(config.args.verbose, using({prefix:'Task [concat:docs:js] using'})))
    .pipe(replace(config.regex.JSHINT, ''))
    .pipe(replace(config.regex.GLOBAL, ''))
    .pipe(tap(function(file) {
      var relativePath = file.path.match(/availity-angular-sdk(.*)/)[1];
      file.relativePath = relativePath;
    }))
    .pipe(header('// Source: <%= file.relativePath %>\n'))
    .pipe(concat(config.docs.js.name))
    .pipe(gulp.dest(config.docs.js.dest))
    .pipe(reload({ stream:true }));
});
