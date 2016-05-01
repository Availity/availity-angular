import availity from '../module';

availity.core.factory('avSplunkAnalytics', function($log, avLogMessagesResource, $location) {

  class SplunkAnalyticsService {

    trackEvent(properties) {

      properties.url = $location.$$absUrl || 'N/A';
      properties.level = properties.level || 'info';

      return avLogMessagesResource[properties.level](properties);
    }

    trackPageView(url) {

      let properties = {
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

