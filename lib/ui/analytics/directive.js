'use strict';

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.directive('avAnalytics', function () {
  return {
    restrict: 'A',
    scope: {
      options: '=avAnalytics'
    },
    controller: function controller($scope) {
      this.getOptions = function () {
        return $scope.options;
      };
    }
  };
});