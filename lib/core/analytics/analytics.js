(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.constant('AV_ANALYTICS', {
    VIRTUAL_PAGE_TRACKING: true,
    SERVICES: {
      PIWIK: 'avPiwikAnalyticsService',
      SPLUNK: 'avSplunkAnalyticsService'
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
        URL: 'https://piwik.availity.com/piwik/'
      },
      QA: {
        URL: 'https://qa-piwik.availity.com/piwik/'
      }
    }
  });

  availity.core.provider('avAnalytics', function(AV_ANALYTICS) {

    var plugins = [];
    var virtualPageTracking = AV_ANALYTICS.VIRTUAL_PAGE_TRACKING;
    var appId;

    this.registerPlugins = function(_plugins) {

      if(angular.isString(_plugins)) {
        _plugins = [_plugins];
      }

      if(_.isArray(_plugins)) {
        plugins = _plugins;
      } else {
        throw new Error('AvAnalytics.registerPlugins() expects a string or an array.');
      }

      return plugins;
    };

    this.setVirtualPageTracking = function(value) {
      if(arguments.length) {
        virtualPageTracking = !!value;
      }
      return virtualPageTracking;
    };

    this.setAppID = function(id) {
      appId = id;
      return appId;
    };

    this.$get = function($injector, $q, $log) {

      var AvAnalytics = function() {

        var self = this;
        this.services = {};

        if(!plugins || plugins.length === 0) {
          plugins = ['avPiwikAnalyticsService', 'avSplunkAnalyticsService'];
        }

        angular.forEach(plugins, function(plugin) {

          try {
            self.services[plugin] = $injector.get(plugin);
          } catch(err) {
            $log.error('Could not load `{0}` plugin', [plugin]);
          }
        });

      };

      var proto = AvAnalytics.prototype;

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

  availity.core.run(function ($rootScope, AV_ANALYTICS, avAnalytics, $location ) {
    if(avAnalytics.virtualPageTracking) {
      $rootScope.$on(AV_ANALYTICS.EVENTS.PAGE, function() {
        avAnalytics.trackPageView($location.absUrl());
      });
    }
  });

})(window);
