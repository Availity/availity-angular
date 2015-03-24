(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.directive('avAnalyticsOn', function(analyticsServices, avAnalyticsUtils) {

    return {
      restrict: 'A',
      link: function($scope, $element, $attrs) {
        var eventType = $attrs.avAnalyticsOn || 'click';
        // debugger;
        // bind the element to the `av-analytic-on` value which should be
        // and event like `click`
        angular.element($element[0]).bind(eventType, function ($event) {
          var self = this;

          if(avAnalyticsUtils.isExternalLink($attrs)) {
            $event.preventDefault();
            $event.stopPropagation();
          }

          if($attrs.avAnalyticsIf && !$scope.$eval($attrs.analyticsIf)) {
            // Cancel this event if we don't pass the av-analytics-if condition
            return;
          }

          // convert the directive attributes into object with properties
          var properties = avAnalyticsUtils.getProperties($attrs);
          console.log('------->properties', properties);
          // store the actual dom event in action if non supplied
          properties.event = $event.type;

          // add info level by default to the properties object
          if(!properties.level) {
            properties.level = 'info';
          }

          // send the properties object to all analytics plugins: splunk, piwik, etc.
          var promise = analyticsServices.trackEvent(properties); //trackEvent is not defined

          // stupid old browser reserved word trick
          promise['finally'](function() {
            if(avAnalyticsUtils.isExternalLink($attrs)) {
              document.location = self.href;
            }
          });
        });
      }
    };
  });

})(window);
