/*global availity, beforeEach, inject, it, expect, describe */
describe('avPiwikAnalyticsServiceProvider', function() {
  'use strict';

  availity.mock.providerSpecHelper();

  it('should be defined', function() {
    var avPiwikAnalyticsServiceProvider = availity.mock.provider(availity.MODULE, 'avPiwikAnalyticsServiceProvider')();
    expect(avPiwikAnalyticsServiceProvider.$get).toBeDefined();
    expect(avPiwikAnalyticsServiceProvider.setVisitVariable).toBeDefined();
  });

  it('should throw error from index not being a number', function() {
    var avPiwikAnalyticsServiceProvider = availity.mock.provider(availity.MODULE, 'avPiwikAnalyticsServiceProvider')();

    expect(function() {avPiwikAnalyticsServiceProvider.setVisitVariable('T', 'testName', 'testValue')}).toThrow(new Error('index must be a number'));
  });

  it('should throw error from valueName not being a string', function() {
    var avPiwikAnalyticsServiceProvider = availity.mock.provider(availity.MODULE, 'avPiwikAnalyticsServiceProvider')();

    expect(function() {avPiwikAnalyticsServiceProvider.setVisitVariable('1', undefined, 'testValue')}).toThrow(new Error('valueName must be declared'));
  });
});
