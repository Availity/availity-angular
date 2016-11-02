'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

var _block = require('./block.html');

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.constant('avBlockConfig', {
  templateUrl: _block2.default,
  delay: 250,
  message: 'Loading ...',
  autoBlock: false,
  resetOnException: true,
  requestFilter: _angular2.default.noop,
  autoInjectBodyBlock: false,
  cssClass: 'av-block av-block-anim-fade',
  blockBrowserNavigation: false
});