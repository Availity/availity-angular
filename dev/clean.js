'use strict';

const del = require('del');
const Logger = require('./logger');
const argv = require('yargs').argv;

function clean() {

  const directory = process.env.NODE_ENV === 'development' ? ['build/*'] : ['dist/*', 'lib/*'];

  if (!argv.dryRun) {
    del.sync(directory);
  }

  Logger.ok(`Finished cleaning ${directory.toString()}`);

  return Promise.resolve(true);
}

module.exports = clean;
