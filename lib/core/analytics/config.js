'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _module = _angular2.default.module('availity.config', ['availity']);

_module.run(function (avAnalytics) {
  return avAnalytics.init();
});