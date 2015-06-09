/*global availity, it, expect, fdescribe*/
fdescribe('avAnalyticsProvider', function() {
  'use strict';

  availity.mock.providerSpecHelper();

  it('should be defined', function() {
    var avAnalyticsProvider = availity.mock.provider(availity.MODULE, 'avAnalyticsProvider')();
    expect(avAnalyticsProvider.$get).toBeDefined();
    expect(avAnalyticsProvider.registerPlugins).toBeDefined();
    expect(avAnalyticsProvider.setVirtualPageTracking).toBeDefined();
    expect(avAnalyticsProvider.setAppID).toBeDefined();
  });

  it('should add plugin', function() {
    var avAnalyticsProvider = availity.mock.provider(availity.MODULE, 'avAnalyticsProvider')();
    var plugins = avAnalyticsProvider.registerPlugins('test');
    expect(plugins[0]).toBe('test');
  });

});
