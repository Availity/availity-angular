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
        var promis;
        var service;
        service = that.config.services[properties.service.toUpperCase()];
        promis = this.services[service].trackEvent(properties);
        if(promis) {
          return promis;
        }
      };

      proto.sendEventToAll = function(properties) {
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
  .run(function ($rootScope, analyticsServices, $location ) {
    if(analyticsServices.virtualPageTracking) {
      $rootScope.$on('$locationChangeSuccess', function() {
        analyticsServices.trackPageView($location.absUrl());
      });
    }
  });

})(window);
