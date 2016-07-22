import angular from 'angular';
import ngModule from '../module';
import _ from 'lodash';

const CONFIG = {
  VIRTUAL_PAGE_TRACKING: true,
  SERVICES: {
    PIWIK: 'avPiwikAnalytics',
    SPLUNK: 'avSplunkAnalytics'
  },
  EVENTS: {
    PAGE: '$locationChangeSuccess',
    DEFAULT: 'click'
  },
  PRE_FIX: /^avAnalytics(.*)$/,
  // should ignore these since they are part of the directives API
  IGNORE: ['avAnalyticsOn', 'avAnalyticsIf'],
  ENV: { // not sure if this should live here
    PROD: {
      DOMAIN: 'apps.availity.com',
      URL: 'https://piwik.availity.com/piwik/'
    },
    QA: {
      URL: 'https://qa-piwik.availity.com/piwik/'
    }
  }
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
