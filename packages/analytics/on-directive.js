import angular from 'angular';
import ngModule from '../module';

import '../../core/analytics';

ngModule.directive('avAnalyticsOn', (avAnalyticsConfig, avAnalyticsUtils) => ({
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

      const eventType = attrs.avAnalyticsOn || avAnalyticsConfig.EVENTS.DEFAULT;

      element.on(eventType, event => {

        if (parentCtrl.getOptions) {
          parentOptions = parentCtrl.getOptions();
        }

        const options = angular.extend(
          {},
          parentOptions,
          avAnalyticsUtils.getProperties(attrs)
        );

        childCtrl.onEvent(event, element, options);
      });
    }
  }));

