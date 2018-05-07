import angular from 'angular';
import ngModule from '../module';

import '../../core/analytics/utils';

class AvAnalyticsController {

  constructor(avAnalyticsUtils, avAnalytics){
    this.av = {avAnalyticsUtils, avAnalytics};
  }

  onEvent(event, element, options) {

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

    if (this.av.avAnalyticsUtils.isExternalLink(properties)) {
      event.preventDefault();
      event.stopPropagation();
    }

    const promise = this.av.avAnalytics.trackEvent(properties);
    promise.finally(() => {
      if (this.av.avAnalyticsUtils.isExternalLink(properties)) {
        document.location = element.attr('href');
      }
    });

  }

}

ngModule.controller('AvAnalyticsController', AvAnalyticsController);
