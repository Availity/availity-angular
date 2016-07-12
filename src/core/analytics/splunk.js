import ngModule from '../module';

ngModule.factory('avSplunkAnalytics', ($log, avLogMessagesResource, $location) => {

  class SplunkAnalyticsService {

    trackEvent(properties) {

      properties.url = $location.$$absUrl || 'N/A';
      properties.level = properties.level || 'info';

      return avLogMessagesResource[properties.level](properties);
    }

    trackPageView(url) {

      const properties = {
        event: 'page',
        level: 'info',
        url: url || $location.$$absUrl()
      };

      return avLogMessagesResource[properties.level](properties);
    }

    isEnabled() {
      return true;
    }

  }

  return new SplunkAnalyticsService();

});

export default ngModule;

