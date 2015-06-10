/*global availity, module, inject, it, expect, describe, beforeEach*/
describe('avAnalyticsProvider', function() {
  'use strict';

  availity.mock.providerSpecHelper();

  var avAnalyticsProvider;

  beforeEach(function () {

    var fakeModule = angular.module('availity.test', function() {});
    fakeModule.config(function(avAnalyticsProvider) {
      avAnalyticsProvider = avAnalyticsProvider;
    });
    // Initialize test.app injector
    module('availity', 'availity.test');

    inject(function () {});
  });

  it('should be defined', function() {
    expect(avAnalyticsProvider.$get).toBeDefined();
    expect(avAnalyticsProvider.registerPlugins).toBeDefined();
    expect(avAnalyticsProvider.setVirtualPageTracking).toBeDefined();
    expect(avAnalyticsProvider.setAppID).toBeDefined();
  });

  it('should add plugin', function() {
    var plugins = avAnalyticsProvider.registerPlugins('test');
    expect(plugins[0]).toBe('test');
  });

});
