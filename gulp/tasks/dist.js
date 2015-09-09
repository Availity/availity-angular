var gulp = require('gulp');
var gulpif = require('gulp-if');
var fs = require('fs');
var using = require('gulp-using');
var minifyCSS = require('gulp-minify-css');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var filter = require('gulp-filter');
var prefixer = require('gulp-autoprefixer');
var insert = require('gulp-insert');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var logger = require('../utils/logger');
var replace = require('gulp-replace');
var header = require('gulp-header');
var uglify = require('gulp-uglify');
var tap = require('gulp-tap');
var header = require('gulp-header');
var footer = require('gulp-footer');
var sourcemaps = require('gulp-sourcemaps');
var header = require('gulp-header');
var footer = require('gulp-footer');
var path = require('path');

var config = require('../config');
var banner = require('../utils/banner');

gulp.task('dist', ['dist:lib', 'dist:ui', 'dist:templates']);

gulp.task('dist:lib', function() {

  var getPkgRegex = function() {
    var pkg = JSON.parse(fs.readFileSync(path.join(config.project.path, 'package.json'), 'utf8'));
    return '$1v' + pkg.version + '$3';
  };

  return gulp.src(config.lib.src)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(replace(config.regex.JSHINT, ''))
    .pipe(replace(config.regex.GLOBAL, ''))
    .pipe(replace(config.regex.VERSION, getPkgRegex()))
    .pipe(tap(function(file) {
      var relativePath = file.path.match(/availity-angular(.*)/)[1];
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
      var relativePath = file.path.match(/availity-angular(.*)/)[1];
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

gulp.task('dist:css', function() {

  return gulp.src(config.less.src)
     .pipe(plumber(function(err) {
       logger.error(err.message);
       this.emit('end');
     }))
    .pipe(less())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(prefixer({
      browsers: config.less.browsers
    }))
    .pipe(insert.prepend(banner() + '\n'))
    .pipe(sourcemaps.write(config.css.destMaps))
    .pipe(gulpif(config.args.verbose, using({prefix:'dist:css [dest] using'})))
    .pipe(gulp.dest(config.css.dest))
    .pipe(filter('**/*.css'))
    .pipe(minifyCSS({
      keepSpecialComments: 0,
      noAdvanced: true,
      compatibility: 'ie8'
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(insert.prepend(banner() + '\n'))
    .pipe(sourcemaps.write(config.css.destMaps))
    .pipe(gulp.dest(config.css.dest));
});
