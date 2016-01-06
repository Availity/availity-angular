(function(root) {
  'use strict';

  var availity = root.availity;

  availity.ui.directive('avAnalytics', function() {
    return {
      scope: {
        options: '=avAnalytics'
      },
      controller: 'AvAnalyticsController'
    };
  });

  availity.ui.controller('AvAnalyticsController', function($scope, avAnalyticsUtils, avAnalytics) {

    this.onEvent = function(event, element, options) {

      // convert the directive attributes into object with properties with sane defaults
      var properties = angular.extend(
        {
          level: 'info'
        },
        $scope.options,
        options,
        {
          event: event.type
        }
      );

      // If an external link is detected
      if(avAnalyticsUtils.isExternalLink(properties)) {
        event.preventDefault();
        event.stopPropagation();
      }

      var promise = avAnalytics.trackEvent(properties);
      promise['finally'](function() {
        if(avAnalyticsUtils.isExternalLink(properties)) {
          document.location = element.attr('href');
        }
      });
    };
  });

  availity.ui.directive('avAnalyticsOn', function(AV_ANALYTICS, avAnalyticsUtils) {
    return {
      restrict: 'A',
      require: '^avAnalytics',
      link: function(scope, element, attrs, AvAnalyticsController) {
        var options = avAnalyticsUtils.getProperties(attrs);

        var eventType = attrs.avAnalyticsOn || AV_ANALYTICS.EVENTS.DEFAULT;

        element.on(eventType, function(event) {
          AvAnalyticsController.onEvent(event, element, options);
        });
      }
    };
  });
})(window);
