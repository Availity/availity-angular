'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _module = require('../../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.factory('avValUtils', function () {

  return {
    isDefined: function isDefined(value) {
      return _angular2.default.isDefined(value) && value !== '' && value !== null;
    },
    isEmpty: function isEmpty(value) {
      return !this.isDefined(value) || _angular2.default.isString(value) && value.trim() === '';
    }
  };
});