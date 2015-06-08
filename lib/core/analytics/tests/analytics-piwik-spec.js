/*global availity, beforeEach, inject, it, expect, describe, ddescribe */
ddescribe('avAnalyticsProvider', function() {
  'use strict';

  availity.mock.providerSpecHelper();

  it('should be defined', function() {
    var avAnalyticsProvider = availity.mock.provider(availity.MODULE, 'avAnalyticsProvider')();
    console.log('avAnalyticsProvider', avAnalyticsProvider);
    expect(avAnalyticsProvider.$get).toBeDefined();
    expect(avAnalyticsProvider.setVisitVariable).toBeDefined();
  });

  it('should throw error from index not being a number', function() {
    var avAnalyticsProvider = availity.mock.provider(availity.MODULE, 'avAnalyticsProvider')();

    expect(function() {avAnalyticsProvider.setVisitVariable('T', 'testName', 'testValue');}).toThrow(new Error('index must be a number'));
  });

  it('should throw error from valueName not being a string', function() {
    var avAnalyticsProvider = availity.mock.provider(availity.MODULE, 'avAnalyticsProvider')();

    expect(function() {avAnalyticsProvider.setVisitVariable('1', undefined, 'testValue');}).toThrow(new Error('valueName must be declared'));
  });
});
