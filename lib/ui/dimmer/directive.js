'use strict';

exports.__esModule = true;

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

var _controller = require('./controller');

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.directive('avDimmer', function () {
  return {
    restrict: 'AE',
    scope: {
      avDimmerConfig: '<?'
    },
    controller: _controller2.default
  };
});

exports.default = _module2.default;