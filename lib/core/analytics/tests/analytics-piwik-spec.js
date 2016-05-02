/* global describe, afterEach, module, beforeEach, expect, it, inject, spyOn */
import $ from 'jquery';

describe('avPiwikAnalytics', () => {

  let avPiwikAnalytics;
  let $location;
  let avUsersResource;

  beforeEach( () => {
    module('availity');
  });

  afterEach(() => {
    window._paq = undefined;
  });

  beforeEach(module( (avPiwikAnalyticsProvider) => {

    avPiwikAnalyticsProvider.setSiteID(1);

  }));

  beforeEach(inject( ($q, _avPiwikAnalytics_, _$location_, _avUsersResource_) => {

    avPiwikAnalytics = _avPiwikAnalytics_;
    $location = _$location_;
    avUsersResource = _avUsersResource_;


    spyOn(window._paq, 'push');
    spyOn($location, '$$absUrl').and.returnValue('http://www.abscefghighklmopqrstuvwxyz.com/app');
    spyOn(avUsersResource, 'me').and.callFake( () => {
      return $q.when({id: 'thor'});
    });

  }));

  it('should check window._paq toBeDefined()', () => {
    expect(window._paq).toBeDefined();
  });

  it('should trackEvent(properties)', () => {

    const event = {
      category: 'movies',
      action: 'play',
      label: 'Hipaa Compliance Training'
    };

    avPiwikAnalytics.trackEvent(event);

    expect(window._paq.push.calls.argsFor(0)).toBeEqual([[ 'trackEvent', 'movies', 'play', 'Hipaa Compliance Training', undefined ]]);
  });

  it('should trackPageView(url)', () => {

    avPiwikAnalytics.trackPageView($location.$$absUrl());

    expect(window._paq.push.calls.argsFor(0)).toBeEqual([['setCustomUrl', 'http://www.abscefghighklmopqrstuvwxyz.com/app']]);
    expect(window._paq.push.calls.argsFor(1)).toBeEqual([['trackPageView', 'http://www.abscefghighklmopqrstuvwxyz.com/app']]);

  });

  it('should init()', () => {

    spyOn($, 'getScript');

    avPiwikAnalytics.init();

    expect(avUsersResource.me).toHaveBeenCalled();
    expect(window._paq.push.calls.argsFor(0)).toBeEqual([['enableLinkTracking']]);
    expect(window._paq.push.calls.argsFor(1)).toBeEqual([['setTrackerUrl', 'https://qa-piwik.availity.com/piwik/piwik.php']]);
    expect(window._paq.push.calls.argsFor(2)).toBeEqual([['setSiteId', 1]]);

  });
});
