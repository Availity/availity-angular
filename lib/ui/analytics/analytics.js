(function(root) {
  'use strict';

  var availity = root.availity;


  availity.core.controller('AvAnalyticsOnController', function(avAnalyticsUtils, $element, $attrs, avAnalytics) {

    this.onEvent = function(event) {

      // If an external link is detected
      if(avAnalyticsUtils.isExternalLink($attrs)) {
        event.preventDefault();
        event.stopPropagation();
      }

      // convert the directive attributes into object with properties
      var properties = avAnalyticsUtils.getProperties($attrs);
      // store the actual dom event in action if non supplied
      properties.event = event.type;

      // add info level by default to the properties object - only used for splunk
      if(!properties.level) {
        properties.level = 'info';
      }

      var promise = avAnalytics.send(properties);
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
      controller: 'AvAnalyticsOnController',
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
