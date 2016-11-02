'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.constant('AV_THROTTLE', {
  OPTIONS: {
    wait: 1000,
    update: false,
    trailing: true,
    leading: false
  }
});

// Original => https://github.com/mgcrea/angular-strap/blob/master/src/helpers/debounce.js
_module2.default.factory('avThrottle', function (AV_THROTTLE, $timeout) {
  return function (fn, _wait, _options) {

    var options = _options;

    options = _extends({}, AV_THROTTLE.OPTIONS, options);

    var wait = _wait ? _wait : AV_THROTTLE.THRESHOLD;
    var update = _angular2.default.isDefined(options.update) ? options.update : AV_THROTTLE.UPDATE;
    var timer = null;

    return function () {
      var context = options.context || this;
      var args = arguments;

      if (!timer) {
        if (options.leading !== false) {
          fn.apply(context, args);
        }

        var later = function later() {
          timer = null;
          if (options.trailing !== false) {
            fn.apply(context, args);
          }
        };

        timer = $timeout(later, wait, update);
      }

      return timer;
    };
  };
});