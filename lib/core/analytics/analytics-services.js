(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.constant('AV_ANALYTIC', {
    VIRTUALPAGETRACKING: false,
    SERVICES: {
      PIWIK: 'avPiwikAnalyticsService',
      SPLUNK: 'avSplunkAnalyticsService'
    }
  });

  availity.core.provider('avAnalyticsServices', function(AV_ANALYTIC) {
    var that = this;
    this.config = {
      plugins: [],
      virtualPageTracking: AV_ANALYTIC.VIRTUALPAGETRACKING,
      services: AV_ANALYTIC.SERVICES
    };

    this.getServiceName = function(service) {
      service = service.split(/(?=[A-Z])/);
      return service[0].toUpperCase();
    };

    this.registerPlugins = function(plugins) {
      if(angular.isString(plugins)) {
        plugins = [plugins];
      }
      angular.forEach(plugins, function(plugin) {
        var service = that.getServiceName(plugin);
        that.config.services[service] = plugin;
      });
    };

    this.deregisterPlugins = function(plugins) {
      angular.forEach(plugins, function(plugin) {
        var service = that.getServiceName(plugin);
        delete that.config.services[service];
      });
    };

    this.virtualPageTracking = function(value) {
      that.config.virtualPageTracking = value;
    };

    this.$get = function($injector, $q) {
      var AvAnalyticPlugins = function() {
        var self = this;
        this.services = {};
        this.virtualPageTracking = that.config.virtualPageTracking;

        angular.forEach(that.config.services, function(plugin) {
          self.services[plugin] = $injector.get(plugin);
        });

      };

      var proto = AvAnalyticPlugins.prototype;

      proto.sendEventTo = function(properties) {
        var promise;
        var service;
        service = that.config.services[properties.service.toUpperCase()];
        promise = this.services[service].trackEvent(properties);
        if(promise) {
          return promise;
        }
      };

      proto.sendEventToAll = function(properties) {
        var promises = [];
        var promise;
        angular.forEach(this.services, function(handler) {
          promise = handler.trackEvent(properties);
          if(promise) {
            promises.push(promise);
          }
        });
        return $q.all(promises);
      };

      proto.trackPageView = function(url) {
        var promises = [];
        var promise;
        angular.forEach(this.services, function(handler) {
          promise = handler.trackPageView(url);
          if(promise) {
            promises.push(promise);
          }
        });
        return $q.all(promises);
      };

      return new AvAnalyticPlugins();
    };

  })
  .run(function ($rootScope, avAnalyticsServices, $location ) {
    if(avAnalyticsServices.virtualPageTracking) {
      $rootScope.$on('$locationChangeSuccess', function() {
        avAnalyticsServices.trackPageView($location.absUrl());
      });
    }
  });

})(window);
