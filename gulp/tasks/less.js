var gulp = require('gulp');
var less = require('gulp-less');
var insert = require('gulp-insert');
var prefixer = require('gulp-autoprefixer');
var filter = require('gulp-filter');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var using = require('gulp-using');
var gulpif = require('gulp-if');

var config = require('../config');
var banner = require('../utils/banner');
var logger = require('../utils/logger');

gulp.task('less', ['less:dev']);

gulp.task('less:dev', function() {

  return gulp.src(config.less.src)
    .pipe(plumber(function(err) {
      logger.error(err.message);
      this.emit('end');
    }))
    .pipe(less())
    .pipe(prefixer({
      browsers: config.less.browsers
    }))
    .pipe(insert.prepend(banner() + '\n'))
    .pipe(gulp.dest(config.less.dest))
    .pipe(filter('**/*.css')) // Filtering stream to only css files
    .pipe(gulpif(config.args.verbose, using({prefix:'Task [less:dev] using'})))
    .pipe(reload({ stream:true }));
});

