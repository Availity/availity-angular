'use strict';

const webpack = require('webpack');
const Logger = require('./logger');
const webpackConfig = require('../webpack.config.production');

function bundle(options) {

  return new Promise((resolve, reject) => {

    webpack(webpackConfig(options)).run((err, stats) => {

      if (err) {
        Logger.failed('webpack bundle');
        return reject(err);
      }

      Logger.log(stats.toString(webpackConfig.stats));
      Logger.ok('webpack bundle');
      resolve();

    });


  });

}

module.exports = bundle;
