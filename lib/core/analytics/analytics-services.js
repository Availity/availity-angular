(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.provider('analyticsServices', function() {
    var that = this;

    this.config = {
      plugins: []
    };

    this.registerPlugins = function(plugins) {
      if(angular.isString(plugins)) {
        plugins = [plugins];
      }

      angular.forEach(plugins, function(plugin) {
        that.config.plugins.push(plugin);
      });
    };

    this.$get = function($injector, $q) {

      var AvAnalyticPlugins = function() {

        var self = this;
        this.services = [];

        // register the plugins
        angular.forEach(that.config.plugins, function(plugin) {
          self.services.push($injector.get(plugin));
        });

      };

      var proto = AvAnalyticPlugins.prototype;

      proto.trackEvent = function(properties) {
        var promises = [];
        angular.forEach(this.services, function(handler) {
          promises.push(handler.trackEvent(properties));
        });
        return $q.all(promises);
      };

      proto.trackPageView = function(url) {
        angular.forEach(this.services, function(handler) {
          handler.trackPageView(url);
        });
      };

      return new AvAnalyticPlugins();
    };

  });

})(window);
