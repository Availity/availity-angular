'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.directive('avPopover', function () {
  return {
    restrict: 'A',
    controller: 'AvPopoverController',
    scope: {
      show: '=',
      delay: '='
    },
    link: function link(scope, element, attrs, avPopover) {

      var options = {};

      scope.$evalAsync(function () {
        element.popover(_angular2.default.extend({}, options, {
          html: true
        }));
        avPopover.init();
      });
    }
  };
});