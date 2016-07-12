import angular from 'angular';
import availity from '../module';

availity.ui.directive('avAnalytics', function() {
  return {
    scope: {
      options: '=avAnalytics'
    },
    controller($scope) {
      this.getOptions = function() {
        return $scope.options;
      };
    }
  };
});

availity.ui.controller('AvAnalyticsController', function(avAnalyticsUtils, avAnalytics) {

  this.onEvent = function(event, element, options) {

    // convert the directive attributes into object with properties with sane defaults
    const properties = angular.extend(
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
    if (avAnalyticsUtils.isExternalLink(properties)) {
      event.preventDefault();
      event.stopPropagation();
    }

    const promise = avAnalytics.trackEvent(properties);
    promise.finally(function() {
      if (avAnalyticsUtils.isExternalLink(properties)) {
        document.location = element.attr('href');
      }
    });
  };
});

availity.ui.directive('avAnalyticsOn', function(AV_ANALYTICS, avAnalyticsUtils) {
  return {
    restrict: 'A',
    controller: 'AvAnalyticsController',
    require: ['avAnalyticsOn', '?^avAnalytics'],
    link(scope, element, attrs, controllers) {

      const childCtrl = controllers[0];
      let parentCtrl = {};
      let parentOptions = {};

      if (controllers[1]) {
        parentCtrl = controllers[1];
        parentOptions = parentCtrl.getOptions();
      }

      const options = angular.extend(
        {},
        parentOptions,
        avAnalyticsUtils.getProperties(attrs)
      );

      const eventType = attrs.avAnalyticsOn || AV_ANALYTICS.EVENTS.DEFAULT;

      element.on(eventType, function(event) {
        childCtrl.onEvent(event, element, options);
      });
    }
  };
});

