import angular from 'angular';
import _ from 'lodash';

import availity from '../module';

availity.core.provider('avAnalytics', AV_ANALYTICS => {

  let plugins = [];
  let virtualPageTracking = AV_ANALYTICS.VIRTUAL_PAGE_TRACKING;
  let appId;

  this.registerPlugins = function(__plugins) {

    let _plugins = __plugins;

    if (angular.isString(_plugins)) {
      _plugins = [_plugins];
    }

    if (_.isArray(_plugins)) {
      plugins = _plugins;
    } else {
      throw new Error('AvAnalytics.registerPlugins() expects a string or an array.');
    }

    return plugins;
  };

  this.setVirtualPageTracking = function(value) {
    if (arguments.length) {
      virtualPageTracking = !!value;
    }
  };

  this.isVirtualPageTracking = function() {
    return virtualPageTracking;
  };

  this.setAppID = function(id) {
    appId = id;
    return appId;
  };

  this.$get = function($injector, $q, $log, $rootScope, $location) {

    class AvAnalytics {

      constructor() {

        this.services = {};

        if (!plugins || plugins.length === 0) {
          plugins = [AV_ANALYTICS.SERVICES.PIWIK, AV_ANALYTICS.SERVICES.SPLUNK];
        }

        angular.forEach(plugins, plugin => {

          try {
            this.services[plugin] = $injector.get(plugin);
          } catch (err) {
            $log.error('Could not load `{0}` plugin', [plugin]);
          }
        });

      }

      init() {

        if (this.isVirtualPageTracking()) {

          $rootScope.$on(AV_ANALYTICS.EVENTS.PAGE, () => {
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
        return appId;
      }

      isVirtualPageTracking() {
        return virtualPageTracking;
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
  };

});
