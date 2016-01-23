import angular from 'angular';
import _ from 'lodash';

import availity from '../module';

availity.core.provider('avAnalytics', function(AV_ANALYTICS) {

  var plugins = [];
  var virtualPageTracking = AV_ANALYTICS.VIRTUAL_PAGE_TRACKING;
  var appId;

  this.registerPlugins = function(__plugins) {

    var _plugins = __plugins;

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

    var AvAnalytics = function() {

      var self = this;
      this.services = {};

      if (!plugins || plugins.length === 0) {
        plugins = [AV_ANALYTICS.SERVICES.PIWIK, AV_ANALYTICS.SERVICES.SPLUNK];
      }

      angular.forEach(plugins, function(plugin) {

        try {
          self.services[plugin] = $injector.get(plugin);
        } catch (err) {
          $log.error('Could not load `{0}` plugin', [plugin]);
        }
      });

    };

    var proto = AvAnalytics.prototype;

    proto.init = function() {

      var self = this;

      if (this.isVirtualPageTracking()) {

        $rootScope.$on(AV_ANALYTICS.EVENTS.PAGE, function() {
          self.trackPageView($location.absUrl());
        });


      }

      angular.forEach(this.services, function(handler) {

        if (handler.isEnabled() && handler.init) {
          handler.init();
        }

      });

    };

    proto.trackEvent = function(properties) {

      var promises = [];

      angular.forEach(this.services, function(handler) {
        var promise = handler.trackEvent(properties);
        promises.push(promise);
      });

      return $q.all(promises);
    };

    proto.getAppId = function() {
      return appId;
    };

    proto.isVirtualPageTracking = function() {
      return virtualPageTracking;
    };

    proto.trackPageView = function(url) {

      var promises = [];

      angular.forEach(this.services, function(handler) {
        var promise = handler.trackPageView(url);
        promises.push(promise);
      });

      return $q.all(promises);
    };

    return new AvAnalytics();
  };

});
