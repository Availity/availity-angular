/* global inject, availity, spyOn, module, it, expect, describe, beforeEach */
describe('avAnalyticsProvider', function() {

  'use strict';

  var avAnalyticsProvider;
  var avAnalytics;
  var analyticsPlugin;
  var q;
  var $rootScope;

  availity.mock.providerSpecHelper();

  beforeEach(module('availity'));

  beforeEach(module(function(_avAnalyticsProvider_, $provide) {

    // Fake analytics plugin
    analyticsPlugin = {
      trackEvent: function() {
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
    // Register fake plugin
    avAnalyticsProvider.registerPlugins('analyticsPlugin');
  }));

  beforeEach(inject(function(_avAnalytics_, $q, _$rootScope_) {

    avAnalytics = _avAnalytics_;
    q = $q;
    $rootScope = _$rootScope_;

  }));

  it('should be defined', function() {

    expect(avAnalyticsProvider.$get).toBeDefined();
    expect(avAnalyticsProvider.registerPlugins).toBeDefined();
    expect(avAnalyticsProvider.setVirtualPageTracking).toBeDefined();
    expect(avAnalyticsProvider.isVirtualPageTracking).toBeDefined();
    expect(avAnalyticsProvider.setAppID).toBeDefined();

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
