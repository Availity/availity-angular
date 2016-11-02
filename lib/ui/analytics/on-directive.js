'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

require('../../core/analytics');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.directive('avAnalyticsOn', function (avAnalyticsConfig, avAnalyticsUtils) {
  return {
    restrict: 'A',
    controller: 'AvAnalyticsController',
    require: ['avAnalyticsOn', '?^avAnalytics'],
    link: function link(scope, element, attrs, controllers) {

      var childCtrl = controllers[0];
      var parentCtrl = {};
      var parentOptions = {};

      if (controllers[1]) {
        parentCtrl = controllers[1];
        parentOptions = parentCtrl.getOptions();
      }

      var eventType = attrs.avAnalyticsOn || avAnalyticsConfig.EVENTS.DEFAULT;

      element.on(eventType, function (event) {

        if (parentCtrl.getOptions) {
          parentOptions = parentCtrl.getOptions();
        }

        var options = _angular2.default.extend({}, parentOptions, avAnalyticsUtils.getProperties(attrs));

        childCtrl.onEvent(event, element, options);
      });
    }
  };
});