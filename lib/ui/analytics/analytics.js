(function(root) {
  'use strict';

  var availity = root.availity;


  availity.core.controller('AvAnalyticsController', function(avAnalyticsUtils, $element, $attrs, avAnalytics) {

    this.onEvent = function(event) {

      // If an external link is detected
      if(avAnalyticsUtils.isExternalLink($attrs)) {
        event.preventDefault();
        event.stopPropagation();
      }

      // convert the directive attributes into object with properties with sane defaults
      var properties = _.extend({
        event: event.type,
        level: 'info'
      }, avAnalyticsUtils.getProperties($attrs));

      var promise = avAnalytics.trackEvent(properties);
      promise['finally'](function() {
        if(avAnalyticsUtils.isExternalLink($attrs)) {
          document.location = $element.attr('href');
        }
      });
    };

  });

  availity.core.directive('avAnalyticsOn', function() {

    return {
      restrict: 'A',
      controller: 'AvAnalyticsController',
      required: 'avAnalyticsOn',
      link: function($scope, $element, $attrs, avAnalyticsOn) {

        var eventType = $attrs.avAnalyticsOn || 'click';

        // bind the element to the `av-analytic-on` event like `click`
        $element.on(eventType, function (event) {
          avAnalyticsOn.onEvent(event);
        });
      }
    };
  });

})(window);
