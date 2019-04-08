/* global describe, beforeEach, expect, it, inject, spyOn */

import angular from 'angular';
import Tester from 'tester';

import '../dma';

describe('avDmaAnalytics', () => {

  let avDmaAnalytics;
  let avDmaLogMessagesResource;
  let $location;

  Tester.matchers();

  beforeEach(angular.mock.module('availity'));

  beforeEach(inject( (_avDmaLogMessagesResource_, $q, _avDmaAnalytics_, _$location_) => {


    avDmaAnalytics = _avDmaAnalytics_;
    avDmaLogMessagesResource = _avDmaLogMessagesResource_;
    $location = _$location_;

    spyOn(avDmaLogMessagesResource, 'send').and.callThrough();
    spyOn(avDmaLogMessagesResource, 'create');

    spyOn($location, '$$absUrl').and.returnValue('http://www.abscefghighklmopqrstuvwxyz.com/app');

  }));

  it('should track events', () => {

    const event = {
      user: 'u',
      page: 'p'
    };

    avDmaAnalytics.trackEvent(event);

    expect(avDmaLogMessagesResource.send).toHaveBeenCalled();
    expect(avDmaLogMessagesResource.create.calls.mostRecent().args[0]).toBeEqual([{
      tradingPartnerId: 'NA',
      customerId: 'NA',
      data: {
        user: 'u',
        page: 'p'
      }
    }]);

  });

  it('should track page views', () => {

    avDmaAnalytics.trackPageView($location.$$absUrl());

    expect(avDmaLogMessagesResource.send).toHaveBeenCalled();
    expect(avDmaLogMessagesResource.create.calls.mostRecent().args[0]).toBeEqual([{
      tradingPartnerId: 'NA',
      customerId: 'NA',
      data: {
        event: 'page',
        url: 'http://www.abscefghighklmopqrstuvwxyz.com/app'
      }
    }]);

  });
});
