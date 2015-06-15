/*global inject, availity, spyOn, module, it, expect, describe, beforeEach*/
describe('avAnalyticsProvider', function() {

  'use strict';

  var provider;
  var service;
  var analyticsService;
  var q;

  availity.mock.providerSpecHelper();

  beforeEach(module('availity'));

  beforeEach(module(function(avAnalyticsProvider, $provide) {

    // Fake analytics plugin
    analyticsService = {
      trackEvent: function () {
        return q.when(true);
      },
      trackPageView: function() {
        return q.when(true);
      }
    };
    spyOn(analyticsService, 'trackEvent').and.callThrough();
    spyOn(analyticsService, 'trackPageView').and.callThrough();
    $provide.value('analyticsService', analyticsService);

    provider = avAnalyticsProvider;
    // Register fake plugin
    provider.registerPlugins('analyticsService');
  }));

  beforeEach(inject(function(avAnalytics, $q) {
    service = avAnalytics;
    q = $q;
  }));

  it('should be defined', function() {
    expect(provider.$get).toBeDefined();
    expect(provider.registerPlugins).toBeDefined();
    expect(provider.setVirtualPageTracking).toBeDefined();
    expect(provider.setAppID).toBeDefined();
  });

  describe('avAnalytics', function() {

    it('should call trackEvent() for each registered plugin', function() {
      service.trackEvent({});
      availity.mock.flush();
      expect(analyticsService.trackEvent).toHaveBeenCalled();
    });

    it('should call trackPageView() for each registered plugin', function() {
      service.trackPageView({});
      availity.mock.flush();
      expect(analyticsService.trackPageView).toHaveBeenCalled();
    });

  });


});
