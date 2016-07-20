import angular from 'angular';
import ngModule from '../module';

ngModule.directive('avAnalyticsOn', function(AV_ANALYTICS, avAnalyticsUtils) {
  return {
    restrict: 'A',
    controller: 'AvAnalyticsController',
    require: ['avAnalyticsOn'],
    link(scope, element, attrs, controllers) {
      const childCtrl = controllers[0];
      // let parentCtrl = {};
      let parentOptions = scope.avAnalyticsOptions || {};

      // if (controllers[1]) {
      //   parentCtrl = controllers[1];
      //   parentOptions = parentCtrl.getOptions();
      // }

      const eventType = attrs.avAnalyticsOn || AV_ANALYTICS.EVENTS.DEFAULT;

      element.on(eventType, function(event) {
        // if (parentCtrl.getOptions) {
        //   parentOptions = parentCtrl.getOptions();
        // }
        parentOptions = scope.avAnalyticsOptions || {};

        const options = angular.extend(
          {},
          parentOptions,
          avAnalyticsUtils.getProperties(attrs)
        );

        childCtrl.onEvent(event, element, options);
      });
    }
  };
});

