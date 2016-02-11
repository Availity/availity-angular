/*global inject, availity, spyOn, module, it, expect, describe, beforeEach*/
describe('avAnalyticsProvider', function() {

  'use strict';

  var avAnalyticsProvider;
  var AV_ANALYTICS;
  var avAnalyticsConfigProvider;
  var defaultAvAnalyticsConfig;
  var avAnalytics;
  var analyticsPlugin;
  var q;
  var $rootScope;

  availity.mock.providerSpecHelper();

  beforeEach(module('availity'));

  beforeEach(module(function(_avAnalyticsProvider_, _avAnalyticsConfigProvider_, _AV_ANALYTICS_,  $provide) {

    // Fake analytics plugin
    analyticsPlugin = {
      trackEvent: function () {
        return q.when(true);
      },
      trackPageView: function() {
        return q.when(true);
      },
      isEnabled: function() {
        return true;
      },
      init: function() {

      }
    };

    spyOn(analyticsPlugin, 'trackEvent').and.callThrough();
    spyOn(analyticsPlugin, 'trackPageView').and.callThrough();
    spyOn(analyticsPlugin, 'init');
    $provide.value('analyticsPlugin', analyticsPlugin);

    avAnalyticsProvider = _avAnalyticsProvider_;
    AV_ANALYTICS = _AV_ANALYTICS_;
    avAnalyticsConfigProvider = _avAnalyticsConfigProvider_;
    defaultAvAnalyticsConfig = avAnalyticsConfigProvider.$get();
    // Register fake plugin
    avAnalyticsProvider.registerPlugins('analyticsPlugin');
  }));

  beforeEach(inject(function(_avAnalytics_, $q, _$rootScope_) {
    avAnalytics = _avAnalytics_;
    q = $q;
    $rootScope = _$rootScope_;
  }));

  it('should be defined', function() {
    expect(avAnalyticsConfigProvider.$get).toBeDefined();
    expect(avAnalyticsConfigProvider.set).toBeDefined();

    expect(avAnalyticsProvider.$get).toBeDefined();
    expect(avAnalyticsProvider.registerPlugins).toBeDefined();
    expect(avAnalyticsProvider.setVirtualPageTracking).toBeDefined();
    expect(avAnalyticsProvider.isVirtualPageTracking).toBeDefined();
    expect(avAnalyticsProvider.setAppID).toBeDefined();
  });

  describe('avAnalyticsConfig', function() {
    it('should default to availity domain', function() {
      expect(defaultAvAnalyticsConfig.ENV.PROD.DOMAIN).toEqual('apps.availity.com');
      expect(defaultAvAnalyticsConfig.ENV.PROD.URL).toEqual('https://piwik.availity.com/piwik/');
    });

    it('should be overrideable', function() {
      var appConfig = {
        ENV: {
          PROD: {
            DOMAIN: 'my.domain.com'
          }
        }
      };

      avAnalyticsConfigProvider.set(appConfig);

      var modifiedAvAnalyticsConfig = avAnalyticsConfigProvider.$get();
      expect(modifiedAvAnalyticsConfig.ENV.PROD.DOMAIN).not.toBe(defaultAvAnalyticsConfig.ENV.PROD.DOMAIN);
      expect(modifiedAvAnalyticsConfig.ENV.PROD.URL).toBe(defaultAvAnalyticsConfig.ENV.PROD.URL);
    });

    it('should be backwards compatible with AV_ANALYTICS constant', function() {
      expect(defaultAvAnalyticsConfig.ENV.PROD.DOMAIN).toBe(AV_ANALYTICS.ENV.PROD.DOMAIN);

      AV_ANALYTICS.ENV.PROD.DOMAIN = 'my.domain.com';
      expect(avAnalyticsConfigProvider.$get().ENV.PROD.DOMAIN).toBe(AV_ANALYTICS.ENV.PROD.DOMAIN);

      avAnalyticsConfigProvider.set({
        ENV: {
          PROD: {
            DOMAIN: 'my.config.domain'
          }
        }
      });
      expect(avAnalyticsConfigProvider.$get().ENV.PROD.DOMAIN).toBe(AV_ANALYTICS.ENV.PROD.DOMAIN);
    });
  });

  describe('avAnalytics', function() {

    it('should call trackEvent() for each registered plugin', function() {
      avAnalytics.trackEvent({});
      availity.mock.flush();

      expect(analyticsPlugin.trackEvent).toHaveBeenCalled();
    });

    it('should call trackPageView() for each registered plugin', function() {
      avAnalytics.trackPageView({});
      availity.mock.flush();

      expect(analyticsPlugin.trackPageView).toHaveBeenCalled();
    });

    it('should trackPageView() on route change', function() {
      avAnalyticsProvider.setVirtualPageTracking(true);
      avAnalytics.init();

      $rootScope.$broadcast('$locationChangeSuccess');

      $rootScope.$digest();
      expect(analyticsPlugin.trackPageView).toHaveBeenCalled();
    });

    it('should call init()', function() {
      avAnalytics.init();
      expect(analyticsPlugin.init).toHaveBeenCalled();
    });

  });

});
