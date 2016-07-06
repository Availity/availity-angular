'use strict';

const debug = require('debug')('dev:watch');
const chokidar = require('chokidar');
const debounce = require('debounce-collect');
const metalsmith = require('./metalsmith');

function run(files) {

  const file = files[0];
  const stats = {
    event: file[0],
    path: file[1]
  };
  debug(`File ${stats.path} has changed`);
  metalsmith();

}

function watch() {

  const watcher = chokidar.watch(['lib/**/docs/*.html', 'docs/**'], {
    ignored: /[\/\\]\./, // ignore dot files
    ignoreInitial: true,
    persistent: true
  });

  watcher.on('all', debounce(run, 50));

  return Promise.resolve(true);

}

module.exports = watch;
