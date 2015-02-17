var gulp = require('gulp');
var gulpif = require('gulp-if');
var using = require('gulp-using');
var filter = require('gulp-filter');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var header = require('gulp-header');
var uglify = require('gulp-uglify');
var tap = require('gulp-tap');
var header = require('gulp-header');
var footer = require('gulp-footer');
var sourcemaps = require('gulp-sourcemaps');
var header = require('gulp-header');
var footer = require('gulp-footer');

var config = require('../config');
var banner = require('../utils/banner');

gulp.task('dist', ['dist:lib', 'dist:ui', 'dist:templates']);

gulp.task('dist:lib', function() {

  return gulp.src(config.lib.src)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(replace(config.regex.JSHINT, ''))
    .pipe(replace(config.regex.GLOBAL, ''))
    .pipe(tap(function(file) {
      var relativePath = file.path.match(/availity-angular-sdk(.*)/)[1];
      file.relativePath = relativePath;
    }))
    .pipe(header('// Source: <%= file.relativePath %>\n'))
    .pipe(concat(config.lib.name))
    .pipe(header(banner() + '\n'))
    .pipe(sourcemaps.write(config.lib.destMaps))
    .pipe(gulp.dest(config.lib.destDist))
    .pipe(filter('**/*.js'))
    .pipe(uglify({
      mangle: false,
      preserveComments: false,
      compress: false
    }))
    .pipe(header(banner() + '\n'))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulpif(config.args.verbose, using({prefix: 'Task [dist:js] using'})))
    .pipe(sourcemaps.write(config.lib.destMaps))
    .pipe(gulp.dest(config.lib.destDist));

});

gulp.task('dist:ui', function() {

  return gulp.src(config.ui.src)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(replace(config.regex.JSHINT, ''))
    .pipe(replace(config.regex.GLOBAL, ''))
    .pipe(tap(function(file) {
      var relativePath = file.path.match(/availity-angular-sdk(.*)/)[1];
      file.relativePath = relativePath;
    }))
    .pipe(header('// Source: <%= file.relativePath %>\n'))
    .pipe(concat(config.ui.name))
    .pipe(header(banner() + '\n'))
    .pipe(sourcemaps.write(config.ui.destMaps))
    .pipe(gulp.dest(config.ui.destDist))
    .pipe(filter('**/*.js'))
    .pipe(uglify({
      mangle: false,
      preserveComments: false,
      compress: false
    }))
    .pipe(header(banner() + '\n'))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulpif(config.args.verbose, using({prefix: 'Task [dist:js] using'})))
    .pipe(sourcemaps.write(config.ui.destMaps))
    .pipe(gulp.dest(config.ui.destDist));

});

gulp.task('dist:templates', function() {
  var templateCache = require('gulp-angular-templatecache');
  var htmlify = require('gulp-angular-htmlify');
  var htmlmin = require('gulp-htmlmin');

  gulp.src(config.templates.src)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(htmlmin({removeComments: true, collapseWhitespace: true}))
    .pipe(htmlify())
    .pipe(templateCache(config.templates.name, {
      standalone: true,
      module: 'availity.ui.templates'
    }))
    .pipe(header('(function() {\n\'use strict\';\n'))
    .pipe(footer("\nvar availity = window.availity || {}; if(typeof module !== 'undefined' && module.exports) {module.exports = availity; } })();\n"))
    .pipe(header(banner() + '\n'))
    .pipe(sourcemaps.write(config.templates.destMaps))
    .pipe(gulp.dest(config.templates.destDist))
    .pipe(filter('**/*.js'))
    .pipe(uglify({
      mangle: false,
      preserveComments: false,
      compress: false
    }))
    .pipe(header(banner() + '\n'))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulpif(config.args.verbose, using({prefix: 'Task [dist:js] using'})))
    .pipe(sourcemaps.write(config.templates.destMaps))
    .pipe(gulp.dest(config.templates.destDist));
});
