(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.directive('avAnalyticsOn', function(avAnalyticsServices, avAnalyticsUtils, $log) {

    return {
      restrict: 'A',
      link: function($scope, $element, $attrs) {
        var eventType = $attrs.avAnalyticsOn || 'click';
        // bind the element to the `av-analytic-on` value which should be
        // and event like `click`
        angular.element($element[0]).bind(eventType, function ($event) {
          var self = this;

          if(avAnalyticsUtils.isExternalLink($attrs)) {
            $event.preventDefault();
            $event.stopPropagation();
          }

          // convert the directive attributes into object with properties
          var properties = avAnalyticsUtils.getProperties($attrs);
          // store the actual dom event in action if non supplied
          properties.event = $event.type;

          // add info level by default to the properties object - only used for splunk
          if(!properties.level) {
            properties.level = 'info';
          }

          // send the properties object to all analytics plugins: splunk, piwik, etc.
          var promise;
          if(properties.service) {
            $log.info('Tacking info only sent to ' + properties.service);
            promise = avAnalyticsServices.sendEventTo(properties);
            // promise = avAnalyticsServices.trackSingleEvent(properties);
          } else {
            $log.info('Tracking info sent to all analytic services.');
            promise = avAnalyticsServices.sendEventToAll(properties);
            // promise = avAnalyticsServices.trackAllEvents(properties);
          }

          // stupid old browser reserved word trick
          if(promise) {
            promise['finally'](function() {
              if(avAnalyticsUtils.isExternalLink($attrs)) {
                document.location = self.href;
              }
            });
          }
        });
      }
    };
  });

})(window);
