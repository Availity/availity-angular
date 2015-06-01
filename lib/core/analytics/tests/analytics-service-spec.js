/*global availity, beforeEach, expect, module, describe, it, inject */
describe('analytic service provider', function() {
  'use strict';

  var avAnalyticsServices;
  var serviceName;

  beforeEach(function() {

    var AnalyticsTestServiceFactory = function() {
      var TestAnalyticService = function() {};
      var proto = TestAnalyticService.prototype;
      proto.trackEvent = function() {};
      proto.trackPageView  = function() {};
      return new TestAnalyticService();
    };
    availity.core.factory('TestAnalyticService', AnalyticsTestServiceFactory);
    module('availity', function(avAnalyticsServicesProvider) {
      avAnalyticsServices = avAnalyticsServicesProvider;
    });
  });

  describe('by default', function() {
    it('should register two services', inject(function(avAnalyticsServices) {
      var services = Object.keys(avAnalyticsServices.services).length;
      expect(services).toEqual(2);
    }));

  });

  describe('registerPlugins', function() {
    beforeEach(function() {
      avAnalyticsServices.registerPlugins(['TestAnalyticService']);
    });

    it('shoud add a new analytic', inject(function(avAnalyticsServices) {
      var services = Object.keys(avAnalyticsServices.services).length;
      expect(services).toEqual(3);
    }));
  });

  describe('deregisterPlugins', function() {
    beforeEach(function() {
      avAnalyticsServices.deregisterPlugins(['TestAnalyticService']);
    });

    it('shoud remove a services from being registered', inject(function(avAnalyticsServices) {
      var services = Object.keys(avAnalyticsServices.services).length;
      expect(services).toEqual(2);
    }));
  });

  describe('getServiceName', function() {
    beforeEach(function() {
      serviceName = avAnalyticsServices.getServiceName('TestAnalyticService');
    });

    it('shoud add return only the first word of the service in all uppercase ', function() {
      expect(serviceName).toEqual('TEST');
    });
  });

  describe('virtualPageTracking', function() {
    beforeEach(function() {
      avAnalyticsServices.virtualPageTracking(false);
    });

    it('shoud set AV_ANALYTIC.VIRTUALPAGETRACKING to the value you pass in', inject(function(AV_ANALYTIC) {
      expect(AV_ANALYTIC.VIRTUALPAGETRACKING).toEqual(false);
    }));
  });

});
