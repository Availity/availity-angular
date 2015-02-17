'use strict';

var gulp = require('gulp');

gulp.task('dotfiles:sync', function() {

  var request = require('request');
  var fs = require('fs');
  var _ = require('lodash');
  var config = require('../config');

  _.each(config.dotfiles.src, function(setting) {
    request({uri: setting.url, strictSSL: false})
      .pipe(fs.createWriteStream(setting.dest));
  });
});
