/*global availity, it, spyOn, inject, module, beforeEach, expect, describe */
describe('avExceptionAnalyticsProvider', function() {

  'use strict';

  var provider;
  var service;
  var $exceptionHandler;
  var $q;

  availity.mock.providerSpecHelper();

  beforeEach(module('availity'));

  beforeEach(module(function(avExceptionAnalyticsProvider, $exceptionHandlerProvider) {
    provider = avExceptionAnalyticsProvider;
    $exceptionHandlerProvider.mode('log');
  }));

  beforeEach(inject(function(avExceptionAnalytics, _$exceptionHandler_, _$q_) {
    service = avExceptionAnalytics;
    $exceptionHandler = _$exceptionHandler_;
    $q = _$q_;

    spyOn(service, 'trackEvent').and.callThrough();
    spyOn(service, 'onError').and.callThrough();
    spyOn(service, 'log').and.callFake(function(message) {
      return $q.when(message);
    });
  }));

  it('should be defined', function() {
    expect(provider.$get).toBeDefined();
    expect(provider.enabled).toBeDefined();
    expect(provider.setAppId).toBeDefined();
  });

  describe('avExceptionAnalytics', function() {

    var exception;

    beforeEach(function() {

      try {
        throw new Error('mock error');
      }catch(e) {
        exception = e;
      }

    });

    it('should track exception event', function() {

      $exceptionHandler(exception);
      expect(service.trackEvent).toHaveBeenCalled();
      expect(service.onError).toHaveBeenCalled();
      expect(service.log).toHaveBeenCalled();

      var message = service.log.calls.mostRecent().args[0];

      expect(message.errorName).toBe('Error');
      expect(message.errorMessage).toBe('mock error');
    });

  });

});
