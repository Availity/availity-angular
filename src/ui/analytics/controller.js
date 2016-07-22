import angular from 'angular';
import ngModule from '../module';
import Base from '../base';

import 'core/analytics/utils';

class AvAnalyticsController extends Base {

  static $inject = ['avAnalyticsUtils', 'avAnalytics'];

  constructor(...args){
    super(...args);
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
