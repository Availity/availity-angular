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
        };
      }
    };
  });

  availity.ui.controller('AvAnalyticsController', function(avAnalyticsUtils, avAnalytics) {

    this.onEvent = function(event, element, options) {

      // convert the directive attributes into object with properties with sane defaults
      var properties = angular.extend(
        {
          level: 'info',
          label: element.text()
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

    this.checkDynamic = function(element, options) {
      if(options.dynamic) {
        var checks=_.words(options.dynamic);
        _.forEach(checks, function(dynamic) {
          var newVal = element[0].getAttribute('av-analytics-'+dynamic) ||
          element[0].getAttribute('data-av-analytics-'+dynamic)
          options[dynamic] = newVal || options[dynamic];
        });
      }
    }
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
          childCtrl.checkDynamic(element, options);
          childCtrl.onEvent(event, element, options);
        });
      }
    };
  });
})(window);
