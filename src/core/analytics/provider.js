import angular from 'angular';
import ngModule from '../module';
import Base from '../base';
import './config-provider';

class AvAnalyticsProvider extends Base {

  static $inject = ['avAnalyticsConfigProvider'];

  constructor(...args) {

    super(...args);

    this.plugins = [];
    this.virtualPageTracking = this.av.avAnalyticsConfigProvider.get().VIRTUAL_PAGE_TRACKING;
    this.appId;
    this.plugins;

  }

  registerPlugins(_plugins) {

    if (angular.isString(_plugins)) {
      this.plugins = [_plugins];
    } else if (Array.isArray(_plugins)) {
      this.plugins = _plugins;
    } else {
      throw new Error('AvAnalytics.registerPlugins() expects a string or an array.');
    }

    return this.plugins;
  }

  setVirtualPageTracking(value) {
    if (arguments.length) {
      this.virtualPageTracking = !!value;
    }
  }

  isVirtualPageTracking() {
    return this.virtualPageTracking;
  }

  setAppID(id) {
    this.appId = id;
    return this.appId;
  }

  $get($injector, $q, $log, $rootScope, $location, avAnalyticsConfig) {

    const self = this;

    class AvAnalytics {

      constructor() {

        this.services = {};

        if (!self.plugins || self.plugins.length === 0) {
          self.plugins = [avAnalyticsConfig.SERVICES.PIWIK, avAnalyticsConfig.SERVICES.SPLUNK];
        }

        angular.forEach(self.plugins, plugin => {

          try {
            this.services[plugin] = $injector.get(plugin);
          } catch (err) {
            $log.error(`Could not load ${plugin} plugin`);
          }
        });

      }

      init() {

        if (this.isVirtualPageTracking()) {

          $rootScope.$on(avAnalyticsConfig.EVENTS.PAGE, () => {
            this.trackPageView($location.absUrl());
          });

        }

        angular.forEach(this.services, handler => {

          if (handler.isEnabled() && handler.init) {
            handler.init();
          }

        });

      }

      trackEvent(properties) {

        const promises = [];

        angular.forEach(this.services, handler => {
          const promise = handler.trackEvent(properties);
          promises.push(promise);
        });

        return $q.all(promises);
      }

      getAppId() {
        return self.appId;
      }

      isVirtualPageTracking() {
        return self.virtualPageTracking;
      }

      trackPageView(url) {

        const promises = [];

        angular.forEach(this.services, function(handler) {
          const promise = handler.trackPageView(url);
          promises.push(promise);
        });

        return $q.all(promises);

      }

    }

    return new AvAnalytics();
  }

}

ngModule.provider('avAnalytics', AvAnalyticsProvider);

export default ngModule;


