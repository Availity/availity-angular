import ngModule from '../module';

ngModule.constant('AV_ANALYTICS', {
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
});

export default ngModule;
