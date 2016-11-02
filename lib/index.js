'use strict';

exports.__esModule = true;
exports.availityConfig = exports.availityUi = exports.availity = undefined;

require('babel-polyfill');

require('./core');

require('./ui');

var availity = exports.availity = 'availity';
var availityUi = exports.availityUi = 'availity.ui';
var availityConfig = exports.availityConfig = 'availity.config';