
'use strict';
const Logger = require('./logger');

const nconf = require('nconf');

const commands = {
  start: require('./start'),
  build: require('./build'),
  clean: require('./clean'),
  lint: require('./lint'),
  release: require('./release'),
  docs: require('./docs')
};

nconf.argv().env();
const command = nconf.get('c');
/* eslint no-process-exit: 0 */
commands[command]().catch(() => { Logger.error('Error occurred stopping script :('); process.exit(1) });
