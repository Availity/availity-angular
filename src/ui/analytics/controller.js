import angular from 'angular';
import ngModule from '../module';

ngModule.controller('AvAnalyticsController', function(avAnalyticsUtils, avAnalytics) {
  this.onEvent = function(event, element, options) {
    const properties = angular.extend(
      {
        level: 'info',
        label: element.text()
      },
      {
        event: event.type
      },
      options
    );

    if (avAnalyticsUtils.isExternalLink(properties)) {
      event.preventDefault();
      event.stopPropagation();
    }
    const promise = avAnalytics.trackEvent(properties);
    promise.finally(() => {
      if (avAnalyticsUtils.isExternalLink(properties)) {
        document.location = element.attr('href');
      }
    });
  };
});
