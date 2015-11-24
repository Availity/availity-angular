/* global _paq, describe, afterEach, module, beforeEach, expect, it, inject, spyOn */
describe('avPiwikAnalytics', function () {

  'use strict';

  var avPiwikAnalytics;
  var $location;
  var avUsersResource;

  beforeEach(function() {
    window._paq = [];
    module('availity');
  });

  beforeEach(module(function(avPiwikAnalyticsProvider) {

    avPiwikAnalyticsProvider.setSiteID('ABCDEFG123456789');

  }));

  beforeEach(inject(function ($q, _avPiwikAnalytics_, _$location_, _avUsersResource_) {

    avPiwikAnalytics = _avPiwikAnalytics_;
    $location = _$location_;
    avUsersResource = _avUsersResource_;

    spyOn(window._paq, 'push');
    spyOn($location, '$$absUrl').and.returnValue('http://www.abscefghighklmopqrstuvwxyz.com/app');
    spyOn(avUsersResource, 'me').and.callFake(function() {
      return $q.when({id: 'thor'});
    });

  }));

  afterEach(function() {
    window._paq = undefined;
  });

  it('should trackEvent(properties)', function () {

    var event = {
      category: 'movies',
      action: 'play',
      label: 'Hipaa Compliance Training'
    };

    avPiwikAnalytics.trackEvent(event);

    expect(_paq.push.calls.argsFor(0)).toBeEqual([[ 'trackEvent', 'movies', 'play', 'Hipaa Compliance Training', undefined ]]);
  });

  it('should trackPageView(url)', function() {

    avPiwikAnalytics.trackPageView($location.$$absUrl());

    expect(_paq.push.calls.argsFor(0)).toBeEqual([['setCustomUrl', 'http://www.abscefghighklmopqrstuvwxyz.com/app']]);
    expect(_paq.push.calls.argsFor(1)).toBeEqual([['trackPageView', 'http://www.abscefghighklmopqrstuvwxyz.com/app']]);

  });

  it('should init()', function() {

    avPiwikAnalytics.init();

    spyOn($, 'getScript');

    expect(avUsersResource.me).toHaveBeenCalled();
    expect(_paq.push.calls.argsFor(0)).toBeEqual([['enableLinkTracking']]);
    expect(_paq.push.calls.argsFor(1)).toBeEqual([['setTrackerUrl', 'https://qa-piwik.availity.com/piwik/piwik.php']]);
    expect(_paq.push.calls.argsFor(2)).toBeEqual([['setSiteId', 'ABCDEFG123456789']]);

  });
});
