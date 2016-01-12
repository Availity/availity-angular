(function(root) {
  'use strict';

  var availity = root.availity;

  availity.ui.directive('avAnalytics', function() {
    return {
      scope: {
        options: '=avAnalytics'
      },
      controller: function($scope) {
        this.getOptions = function() {
          return $scope.options;
        }
      }
    };
  });

  availity.ui.controller('AvAnalyticsController', function(avAnalyticsUtils, avAnalytics) {

    this.onEvent = function(event, element, options) {

      // convert the directive attributes into object with properties with sane defaults
      var properties = angular.extend(
        {
          level: 'info'
        },
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
      controller: 'AvAnalyticsController',
      require: ['avAnalyticsOn','?^avAnalytics'],
      link: function(scope, element, attrs, controllers) {
        var childCtrl = controllers[0];
        var parentCtrl = {};
        var parentOptions = {};

        if (controllers[1])  {
          parentCtrl = controllers[1];
          parentOptions = parentCtrl.getOptions();
        }

        var options = angular.extend(
          {},
          parentOptions,
          avAnalyticsUtils.getProperties(attrs)
        );

        var eventType = attrs.avAnalyticsOn || AV_ANALYTICS.EVENTS.DEFAULT;

        element.on(eventType, function(event) {
          childCtrl.onEvent(event, element, options);
        });
      }
    };
  });
})(window);
