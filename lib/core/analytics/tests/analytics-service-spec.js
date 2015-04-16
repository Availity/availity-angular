/*global availity, beforeEach, expect, module, describe, it, inject */
describe('analytic service provider', function() {
  'use strict';

  var analyticsServices;
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
    
    module('availity', function(analyticsServicesProvider) {
      analyticsServices = analyticsServicesProvider;
    });
  });

  describe('by default', function() {
    it('should register two services', inject(function(analyticsServices) {
      var services = Object.keys(analyticsServices.services).length;
      expect(services).toEqual(2);
    }));
    
  });

  describe('registerPlugins', function() {
    beforeEach(function() {
      analyticsServices.registerPlugins(['TestAnalyticService']);
    });

    it('shoud add a new analytic', inject(function(analyticsServices) {
      var services = Object.keys(analyticsServices.services).length;
      expect(services).toEqual(3);
    }));
  });

  describe('deregisterPlugins', function() {
    beforeEach(function() {
      analyticsServices.deregisterPlugins(['TestAnalyticService']);
    });

    it('shoud remove a services from being registered', inject(function(analyticsServices) {
      var services = Object.keys(analyticsServices.services).length;
      expect(services).toEqual(2);
    }));
  });

  describe('getServiceName', function() {
    beforeEach(function() {
      serviceName = analyticsServices.getServiceName('TestAnalyticService');
    });

    it('shoud add return only the first word of the service in all uppercase ', function() {
      expect(serviceName).toEqual('TEST');
    });
  });

  describe('virtualPageTracking', function() {
    beforeEach(function() {
      analyticsServices.virtualPageTracking(false);
    });

    it('shoud set AV_ANALYTIC.VIRTUALPAGETRACKING to the value you pass in', inject(function(AV_ANALYTIC) {
      expect(AV_ANALYTIC.VIRTUALPAGETRACKING).toEqual(false);
    }));
  });

});
