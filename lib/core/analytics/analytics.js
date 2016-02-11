(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.provider('avAnalyticsConfig', function(AV_ANALYTICS) {

    var config = {
      VIRTUAL_PAGE_TRACKING: true,
      SERVICES: {
        PIWIK: 'avPiwikAnalytics',
        SPLUNK: 'avSplunkAnalytics'
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
          DOMAIN: 'apps.availity.com',
          URL: 'https://piwik.availity.com/piwik/'
        },
        QA: {
          URL: 'https://qa-piwik.availity.com/piwik/'
        }
      }
    };

    this.set = function(options) {
      _.merge(config, options);
      // TODO: remove when AV_ANALYTICS is no longer supported
      // ensures avAnalyticsConfig and AV_ANALYTICS constant stay in sync
      angular.copy(config, AV_ANALYTICS);
    };

    this.$get = function() {
      /*
      * TODO: change to angular.copy and remove when AV_ANALYTICS is no longer supported.
      * Applies AV_ANALYTICS overrides to avAnalyticsConfig provider.
      */
      return _.merge({}, config, AV_ANALYTICS);
    };
  });

  // DEPRECATED: use avAnalyticsConfig
  availity.core.constant('AV_ANALYTICS', {});

  availity.core.provider('avAnalytics', function(avAnalyticsConfigProvider) {

    var avAnalyticsConfig = avAnalyticsConfigProvider.$get();
    var plugins = [];
    var virtualPageTracking = avAnalyticsConfig.VIRTUAL_PAGE_TRACKING;
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

        if(!plugins || plugins.length === 0) {
          plugins = [avAnalyticsConfig.SERVICES.PIWIK, avAnalyticsConfig.SERVICES.SPLUNK];
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

      proto.init = function() {

        var self = this;

        if(this.isVirtualPageTracking()) {
          $rootScope.$on(avAnalyticsConfig.EVENTS.PAGE, function() {
            self.trackPageView($location.absUrl());
          });
        }

        angular.forEach(this.services, function(handler) {
          if(handler.isEnabled() && handler.init) {
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

})(window);
