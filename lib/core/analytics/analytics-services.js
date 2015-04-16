(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.constant('AV_ANALYTIC', {
    VIRTUALPAGETRACKING: false,
    SERVICES: {
      PIWIK: 'PiwikAnalyticService',
      SPLUNK: 'SplunkAnalyticsService'
    }
  });

  availity.core.provider('analyticsServices', function(AV_ANALYTIC) {
    var self = this;
    this.config = {
      plugins: []
    };

    this.getServiceName = function(service) {
      service = service.match(/[A-Z][a-z]+/g);
      return service[0].toUpperCase();
    };

    this.registerPlugins = function(plugins) {
      if(angular.isString(plugins)) {
        plugins = [plugins];
      }
      angular.forEach(plugins, function(plugin) {
        var service = self.getServiceName(plugin);
        AV_ANALYTIC.SERVICES[service] = plugin;
      });
    };

    this.deregisterPlugins = function(plugins) {
      angular.forEach(plugins, function(plugin) {
        var service = self.getServiceName(plugin);
        delete AV_ANALYTIC.SERVICES[service];
      });
    };

    this.virtualPageTracking = function(value) {
      AV_ANALYTIC.VIRTUALPAGETRACKING = value;
    };

    this.$get = function($injector, $q, avAnalyticsUtils, AV_ANALYTIC) {
      var AvAnalyticPlugins = function() {

        var self = this;
        this.services = {};
        angular.forEach(AV_ANALYTIC.SERVICES, function(plugin) {
          self.services[plugin] = $injector.get(plugin);
        });

      };

      var proto = AvAnalyticPlugins.prototype;

      proto.trackSingleEvent = function(properties) {
        var promis;
        var service;
        service = AV_ANALYTIC.SERVICES[properties.tracker.toUpperCase()];
        promis = this.services[service].trackEvent(properties);
        if(promis) {
          return promis;
        }
      };

      proto.trackAllEvents = function(properties) {
        var promises = [];
        var promis;
        angular.forEach(this.services, function(handler) {
          promis = handler.trackEvent(properties);
          if(promis) {
            promises.push(promis);
          }
        });
        return $q.all(promises);
      };

      proto.trackPageView = function(url) {
        var promises = [];
        var promis;
        angular.forEach(this.services, function(handler) {
          promis = handler.trackPageView(url);
          if(promis) {
            promises.push(promis);
          }
        });
        return $q.all(promises);
      };

      return new AvAnalyticPlugins();
    };

  })
  .run(function ($rootScope, analyticsServices, $location, $injector, $window, AV_ANALYTIC) {
    if(AV_ANALYTIC.VIRTUALPAGETRACKING) {
      $rootScope.$on('$locationChangeSuccess', function() {
        analyticsServices.trackPageView($location.absUrl());
      });
    }
  });

})(window);
