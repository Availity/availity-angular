'use strict';

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

var _modal = require('./modal.html');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.directive('avModal', function () {
  return {
    restrict: 'A',
    replace: true,
    transclude: true,
    scope: {
      size: '@'
    },
    templateUrl: _modal2.default
  };
});