'use strict';

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.factory('avTemplateCache', function ($q, $templateCache, $http) {

  return {
    get: function get(options) {

      var valid = !options.template || !options.templateUrl;

      if (!valid) {
        throw new Error('Either options.template or options.templateUrl must be defined for avTemplateCache');
      }

      return options.template ? $q.when(options.template) : $http.get(options.templateUrl, { cache: $templateCache }).then(function (result) {
        return result.data;
      });
    }
  };
});