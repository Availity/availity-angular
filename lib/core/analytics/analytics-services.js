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
    IGNORE: ['avAnalyticsOn', 'avAnalyticsIf']
  });

  availity.core.provider('avAnalyticsServices', function(AV_ANALYTICS) {

    var plugins = [];
    var virtualPageTracking = AV_ANALYTICS.VIRTUAL_PAGE_TRACKING;

    this.registerPlugins = function(_plugins) {

      if(angular.isString(_plugins)) {
        _plugins = [_plugins];
      }

      angular.forEach(_plugins, function(plugin) {
        plugins.push(plugin);
      });
    };

    this.setVirtualPageTracking = function(value) {
      if(arguments.length) {
        virtualPageTracking = !!value;
      }
      return virtualPageTracking;
    };

    this.$get = function($injector, $q) {

      var AvAnalytics = function() {

        var self = this;
        this.services = {};

        if(!plugins || plugins.length === 0) {
          plugins = ['avPiwikAnalyticsService', 'avSplunkAnalyticsService'];
        }

        angular.forEach(plugins, function(plugin) {
          self.services[plugin] = $injector.get(plugin);
        });

      };

      var proto = AvAnalytics.prototype;

      proto.send = function(properties) {
        var promises = [];

        angular.forEach(this.services, function(handler) {
          var promise = handler.trackEvent(properties);
          promises.push(promise);
        });

        return $q.all(promises);
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

  })
  .run(function ($rootScope, AV_ANALYTICS, avAnalyticsServices, $location ) {
    if(avAnalyticsServices.virtualPageTracking) {
      $rootScope.$on(AV_ANALYTICS.EVENTS.PAGE, function() {
        avAnalyticsServices.trackPageView($location.absUrl());
      });

    }
  });

})(window);
