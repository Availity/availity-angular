/*global availity, beforeEach, expect, module, describe, it, inject */
describe('analytic service provider', function() {
  'use strict';

  var avAnalyticsServices;
  var serviceName;

  beforeEach(function() {
    // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    if(!Object.keys) {
      Object.keys = (function() {
        'use strict';
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString');
        var dontEnums = [
              'toString',
              'toLocaleString',
              'valueOf',
              'hasOwnProperty',
              'isPrototypeOf',
              'propertyIsEnumerable',
              'constructor'
            ];

        var dontEnumsLength = dontEnums.length;

        return function(obj) {
          if(typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
            throw new TypeError('Object.keys called on non-object');
          }

          var result = [];
          var prop;
          var i;

          for(prop in obj) {
            if(hasOwnProperty.call(obj, prop)) {
              result.push(prop);
            }
          }

          if(hasDontEnumBug) {
            for(i = 0; i < dontEnumsLength; i++) {
              if(hasOwnProperty.call(obj, dontEnums[i])) {
                result.push(dontEnums[i]);
              }
            }
          }
          return result;
        };
      }());
    }

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

    it('should add a new analytic', inject(function(avAnalyticsServices) {
      var services = Object.keys(avAnalyticsServices.services).length;
      expect(services).toEqual(3);
    }));
  });

  describe('deregisterPlugins', function() {
    beforeEach(function() {
      avAnalyticsServices.deregisterPlugins(['TestAnalyticService']);
    });

    it('should remove a services from being registered', inject(function(avAnalyticsServices) {
      var services = Object.keys(avAnalyticsServices.services).length;
      expect(services).toEqual(2);
    }));
  });

  describe('getServiceName', function() {
    beforeEach(function() {
      serviceName = avAnalyticsServices.getServiceName('TestAnalyticService');
    });

    it('should add return only the first word of the service in all uppercase ', function() {
      expect(serviceName).toEqual('TEST');
    });
  });

  describe('virtualPageTracking', function() {
    beforeEach(function() {
      avAnalyticsServices.virtualPageTracking(false);
    });

    it('should set AV_ANALYTIC.VIRTUALPAGETRACKING to the value you pass in', inject(function(AV_ANALYTIC) {
      expect(AV_ANALYTIC.VIRTUALPAGETRACKING).toEqual(false);
    }));
  });

});
