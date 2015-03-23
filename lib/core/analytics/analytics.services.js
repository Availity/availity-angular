define(function(require) {
  "use strict";

  var angular = require('angular');
  var module = require("foundation/js/av-core/core");
  require('foundation/js/av-core/utils/analytics/analytics.directive');

  var AnaltyicsServices = function() {

    this.config = {
      plugins: []
    };

    this.registerPlugins = function(plugins) {

      var self = this;

      if (angular.isString(plugins)) {
        plugins = [plugins];
      }

      angular.forEach(plugins, function(plugin) {
        self.config.plugins.push(plugin);
      });
    };

    this.$get = function($injector, $q) {

      var pluginServices = [];

      // register the plugins
      angular.forEach(this.config.plugins, function(plugin) {
        pluginServices.push($injector.get(plugin));
      });

      var service = {};

      service.trackEvent = function(properties) {
        var promises = [];

        angular.forEach(pluginServices, function(handler) {
          promises.push(handler.trackEvent(properties));
        });

        return $q.all(promises);
      };

      service.trackPageView = function(url) {
        angular.forEach(pluginServices, function(handler) {
          handler.trackPageView(url);
        });
      };

      return service;
    };

  };

  module.provider('analyticsServices', AnaltyicsServices);
  return module;
});
