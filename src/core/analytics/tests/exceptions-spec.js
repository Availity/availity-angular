/* global it, spyOn, inject, module, beforeEach, expect, describe */

import Tester from 'tester';
import angular from 'angular';

import '../exceptions';

describe('avExceptionAnalyticsProvider', () => {

  let provider;
  let service;
  let $exceptionHandler;
  let $q;

  const tester = new Tester();
  tester.provider();

  beforeEach(angular.mock.module('availity'));

  beforeEach(angular.mock.module( (avExceptionAnalyticsProvider, $exceptionHandlerProvider) => {
    provider = avExceptionAnalyticsProvider;
    $exceptionHandlerProvider.mode('log');
  }));

  beforeEach(inject( (avExceptionAnalytics, _$exceptionHandler_, _$q_) => {

    service = avExceptionAnalytics;
    $exceptionHandler = _$exceptionHandler_;
    $q = _$q_;

    spyOn(service, 'trackEvent').and.callThrough();
    spyOn(service, 'onError').and.callThrough();
    spyOn(service, 'log').and.callFake(function(message) {
      return $q.when(message);
    });

  }));

  it('should be defined', () => {

    expect(provider.$get).toBeDefined();
    expect(provider.enabled).toBeDefined();
    expect(provider.setAppId).toBeDefined();

  });

  describe('avExceptionAnalytics', () => {

    let exception;
    let blacklistException;

    beforeEach(() => {

      try {
        throw new Error('mock error');
      } catch (e) {
        exception = e;
      }

      try {
        throw new Error('ResizeObserver loop limit exceeded');
      } catch (e) {
        blacklistException = e;
      }

    });

    it('should track exception event', () => {

      $exceptionHandler(exception);
      expect(service.trackEvent).toHaveBeenCalled();
      expect(service.onError).toHaveBeenCalled();
      expect(service.log).toHaveBeenCalled();

      const message = service.log.calls.mostRecent().args[0];

      expect(message.errorName).toBe('Error');
      expect(message.errorMessage).toBe('mock error');

    });

    it('should blacklist and omit track exception event', () => {

      $exceptionHandler(blacklistException);
      expect(service.trackEvent).toHaveBeenCalled();
      expect(service.trackEvent.calls.count()).toEqual(1);
      expect(service.onError.calls.count()).toEqual(0);
      expect(service.log.calls.count()).toEqual(0);

    });

    it('should not track rapid exceptions more than once', function() {

      $exceptionHandler(exception);
      $exceptionHandler(exception);
      expect(service.trackEvent.calls.count()).toEqual(2);
      expect(service.onError.calls.count()).toEqual(1);
      expect(service.log.calls.count()).toEqual(1);

    });

  });
});
