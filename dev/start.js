'use strict';

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const debounce = require('lodash.debounce');
const chalk = require('chalk');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const Logger = require('availity-workflow-logger');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');

const metalsmith = require('./metalsmith');


const watch = require('./watch');
const webpackConfig = require('../webpack.config.development');

const PORT = 9200;

function serv() {

  Logger.info('Starting development server');

  let previousPercent;

  webpackConfig.plugins.push(new ProgressPlugin( (percentage, msg) => {

    const percent = Math.round(percentage * 100);

    if (previousPercent !== percent && percent % 10 === 0) {
      Logger.info(`${chalk.dim('Webpack')} ${percent}% ${msg}`);
      previousPercent = percent;
    }

  }));

  return new Promise( (resolve, reject) => {

    const compiler = webpack(webpackConfig);

    compiler.plugin('compile', () => {
      Logger.info('Started compiling');
    });

    const message = debounce(stats => {

      const statistics = stats.toString({
        colors: true,
        cached: true,
        reasons: false,
        source: false,
        chunks: false,
        children: false,
        errorDetails: true
      });

      const uri = `http://localhost:${PORT}/`;

      Logger.info(statistics);
      Logger.success('Finished webpack compiling');
      Logger.log(`The app is running at ${chalk.magenta(uri)}`);


    });

    compiler.plugin('done', stats => {

      const hasErrors = stats.hasErrors();
      const hasWarnings = stats.hasWarnings();

      if (!hasErrors && !hasWarnings) {
        message(stats);
      }

      const json = stats.toJson({
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false,
        errorDetails: false
      });

      const messages = formatWebpackMessages(json);

      if (hasWarnings) {

        messages.warnings.forEach(warning => {
          Logger.empty();
          Logger.simple(`${chalk.yellow(warning)}`);
          Logger.empty();
        });

        Logger.failed('Compiled with warnings');
        Logger.empty();

      }



      if (hasErrors) {

        messages.errors.forEach(error => {
          Logger.empty();
          Logger.simple(`${chalk.red(error)}`);
          Logger.empty();
        });

        Logger.failed('Failed compiling');
        Logger.empty();
        reject(json.errors);

        reject('Failed compiling');
      }

    });

    const server = new WebpackDevServer(compiler, {
      contentBase: './build',
      // It suppress error shown in console, so it has to be set to false.
      quiet: true,
      // It suppress everything except error, so it has to be set to false as well
      // to see success build.
      noInfo: true,
      compress: true,
      hot: true,
      watchOptions: {
        ignored: /node_modules/
      }
    });

    server.listen(PORT, (err) => {

      if (err) {
        Logger.failed(err);
        reject(err);
      }

      Logger.success('Finished development server');
      resolve();

    });
  });

}

function start() {

  return metalsmith()
    .then(serv)
    .then(watch);
}

module.exports = start;
