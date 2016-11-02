'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Original => https://github.com/mgcrea/angular-strap/blob/master/src/helpers/debounce.js
_module2.default.factory('avDebounce', function ($timeout) {
  return function (fn, wait, options) {

    var timeout = null;
    options = _extends({ immeditate: false, update: false }, options);

    return function () {

      var context = options.context || this;
      var args = arguments;

      var later = function later() {
        timeout = null;
        if (!options.immediate) {
          fn.apply(context, args);
        }
      };

      var callNow = options.immediate && !timeout;
      if (timeout) {
        $timeout.cancel(timeout);
      }
      timeout = $timeout(later, wait, options.update);

      if (callNow) {
        fn.apply(context, args);
      }
    };
  };
});