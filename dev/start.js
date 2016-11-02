'use strict';

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const _ = require('lodash');
const chalk = require('chalk');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');

const metalsmith = require('./metalsmith');
const Logger = require('./logger');
const watch = require('./watch');
const webpackConfig = require('../webpack.config.development');

const PORT = 9200;

const friendlySyntaxErrorLabel = 'Syntax error:';

function isLikelyASyntaxError(message) {
  return message.indexOf(friendlySyntaxErrorLabel) !== -1;
}

function formatMessage(message) {
  return message
    .replace(
      'Module build failed: SyntaxError:',
      friendlySyntaxErrorLabel
    )
    .replace(
      /Module not found: Error: Cannot resolve 'file' or 'directory'/,
      'Module not found:'
    )
    .replace(/^\s*at\s.*:\d+:\d+[\s\)]*\n/gm, '')
    .replace('./~/css-loader!./~/postcss-loader!', '');
}

function serv() {

  Logger.info('Starting development server');

  webpackConfig.plugins.push(new ProgressPlugin( (percentage, msg) => {

    const percent = percentage * 100;

    if (percent % 20 === 0 && msg !== null && msg !== undefined && msg !== ''){
      Logger.info(`${chalk.dim('Webpack')} ${msg}`);
    }

  }));

  return new Promise( (resolve, reject) => {

    const compiler = webpack(webpackConfig);


    compiler.plugin('compile', () => {
      Logger.info('Started compiling');
    });

    const message = _.debounce(stats => {

      const statistics = stats.toString({
        colors: true,
        cached: true,
        reasons: false,
        source: false,
        chunks: false,
        children: false
      });

      const uri = `http://localhost:${PORT}/`;

      Logger.info(statistics);
      Logger.ok('Finished webpack compiling');
      Logger.log(`The app is running at ${chalk.magenta(uri)}`);


    });

    compiler.plugin('done', stats => {

      const hasErrors = stats.hasErrors();
      const hasWarnings = stats.hasWarnings();

      if (!hasErrors && !hasWarnings) {
        message(stats);
      }

      if (hasErrors) {

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

        let formattedErrors = json.errors.map(msg => {
          return 'Error in ' + formatMessage(msg);
        });

        if (formattedErrors.some(isLikelyASyntaxError)) {
          formattedErrors = formattedErrors.filter(isLikelyASyntaxError);
        }

        Logger.failed('Failed compiling');

        formattedErrors.forEach(error => {
          Logger.empty();
          Logger.simple(`${chalk.red(error)}`);
          Logger.empty();
        });

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


      Logger.ok('Finished development server');
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
