/* global describe, beforeEach, expect, it, inject, spyOn */

import angular from 'angular';
import Tester from 'tester';

import '../splunk';

describe('avSplunkAnalytics', () => {

  let avSplunkAnalytics;
  let avLogMessagesResource;
  let $location;

  Tester.matchers();

  beforeEach(angular.mock.module('availity'));

  beforeEach(inject( (_avLogMessagesResource_, $q, _avSplunkAnalytics_, _$location_) => {


    avSplunkAnalytics = _avSplunkAnalytics_;
    avLogMessagesResource = _avLogMessagesResource_;
    $location = _$location_;

    spyOn(avLogMessagesResource, 'info').and.callThrough();
    spyOn(avLogMessagesResource, 'create');

    spyOn($location, '$$absUrl').and.returnValue('http://www.abscefghighklmopqrstuvwxyz.com/app');

  }));

  it('should track events', () => {

    const event = {
      user: 'u',
      page: 'p'
    };

    avSplunkAnalytics.trackEvent(event);

    expect(avLogMessagesResource.info).toHaveBeenCalled();
    expect(avLogMessagesResource.create.calls.mostRecent().args[0]).toBeEqual({
      'level': 'info',
      'entries': {
        'user': 'u',
        'page': 'p'
      }
    });

  });

  it('should track page views', () => {

    avSplunkAnalytics.trackPageView($location.$$absUrl());

    expect(avLogMessagesResource.info).toHaveBeenCalled();
    expect(avLogMessagesResource.create.calls.mostRecent().args[0]).toBeEqual({
      'level': 'info',
      'entries': {
        'event': 'page',
        'url': 'http://www.abscefghighklmopqrstuvwxyz.com/app'
      }
    });

  });
});
