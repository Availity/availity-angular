(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.constant('AV_ANALYTIC', {
    SERVICES: {
      PIWIK: 'PiwikAnalyticService',
      SPLUNK: 'SplunkAnalyticsService'
    }
  });

  availity.core.provider('analyticsServices', function(AV_ANALYTIC) {
    // var that = this;

    this.config = {
      plugins: []
    };

    this.registerPlugins = function(plugins) {
      if(angular.isString(plugins)) {
        plugins = [plugins];
      }
      angular.forEach(plugins, function(plugin) {
        AV_ANALYTIC.SERVICES = _.merge(AV_ANALYTIC.SERVICES, plugin);
      });
    };

    this.deregisterPlugins = function(plugins) {
      angular.forEach(plugins, function(plugin) {
        delete AV_ANALYTIC.SERVICES[plugin];
      });
    };

    this.$get = function($injector, $q, avAnalyticsUtils, AV_ANALYTIC) {

      var AvAnalyticPlugins = function() {

        var self = this;
        // this.services = [];
        this.services = {};
        angular.forEach(AV_ANALYTIC.SERVICES, function(plugin) {
          // self.services.push($injector.get(plugin));
          self.services[plugin] = $injector.get(plugin);
        });

      };

      var proto = AvAnalyticPlugins.prototype;

      proto.trackSingleEvent = function(properties){
        var promis, service;
        service = AV_ANALYTIC.SERVICES[properties.tracker.toUpperCase()];
        promis = this.services[service].trackEvent(properties);
        if(promis){
          return promis;
        }
      };

      proto.trackAllEvents = function(properties) {
        var promises = [];
        var promis;
        angular.forEach(this.services, function(handler) {
          promis = handler.trackEvent(properties);
          if(promis){
            promises.push(promis);
          }
        });
        return $q.all(promises);
      };

      proto.trackPageView = function(url) {
        var promises = [];
        angular.forEach(this.services, function(handler) {
          promises.push(handler.trackPageView(url));
        });
        return $q.all(promises);
      };

      return new AvAnalyticPlugins();
    };

  })
  .run(function ($rootScope, analyticsServices, $location) {
    $rootScope.$on('$locationChangeSuccess', function() {
      analyticsServices.trackPageView($location.absUrl());
    });
  });

})(window);
