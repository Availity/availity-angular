define(function(require) {

  "use strict";
  var angular = require('angular');
  var module = require('foundation/js/av-core/core');
  require('foundation/js/av-core/utils/analytics/analytics.util');

  module.directive('avAnalyticsOn', function(analyticsServices, analyticsUtils) {

    return {
      restrict: 'A',
      link: function($scope, $element, $attrs) {
        var eventType = $attrs.avAnalyticsOn || 'click';

        // bind the element to the `av-analytic-on` value which should be
        // and event like `click`
        angular.element($element[0]).bind(eventType, function ($event) {

          var self = this;

          if(analyticsUtils.isExternalLink($attrs)) {
            $event.preventDefault();
            $event.stopPropagation();
          }

          if ($attrs.avAnalyticsIf && !$scope.$eval($attrs.analyticsIf)) {
            // Cancel this event if we don't pass the av-analytics-if condition
            return;
          }

          // convert the directive attributes into object with properties
          var properties = analyticsUtils.getProperties($attrs);

          // store the actual dom event in action if non supplied
          properties.event = $event.type;

          // add info level by default to the properties object
          if(!properties.level) {
            properties.level = "info";
          }

          // send the properties object to all analytics plugins: splunk, piwik, etc.
          var promise = analyticsServices.trackEvent(properties);

          // stupid old browser reserved word trick
          promise["finally"](function() {
            if(analyticsUtils.isExternalLink($attrs)){
              document.location = self.href;
            }
          });
        });
      }
    };
  });

});
