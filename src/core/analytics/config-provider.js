import angular from 'angular';
import ngModule from '../module';
import _ from 'lodash';

const CONFIG = {
  VIRTUAL_PAGE_TRACKING: true,
  SERVICES: {
    SPLUNK: 'avSplunkAnalytics'
  },
  EVENTS: {
    PAGE: '$locationChangeSuccess',
    DEFAULT: 'click'
  },
  PRE_FIX: /^avAnalytics(.*)$/,
  // should ignore these since they are part of the directives API
  IGNORE: ['avAnalyticsOn', 'avAnalyticsIf']
};

class AvAnalyticsConfigProvider {

  constructor() {
    this.options = CONFIG;
  }

  get() {
    return angular.copy(this.options);
  }

  set(options) {
    _.merge(this.options, options);
  }

  $get() {
    return angular.copy(this.options);
  }

}

ngModule.provider('avAnalyticsConfig', AvAnalyticsConfigProvider);

export default ngModule;
