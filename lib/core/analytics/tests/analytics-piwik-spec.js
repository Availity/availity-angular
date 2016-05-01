/* global describe, afterEach, module, beforeEach, expect, it, inject, spyOn */
/* global describe, afterEach, module, beforeEach, expect, it, inject, spyOn */
describe('avPiwikAnalytics', function () {
  let avPiwikAnalytics;
  let $location;
  let avUsersResource;

  beforeEach(function() {
    module('availity');
  });

  afterEach(function() {
    window._paq = undefined;
  });

  beforeEach(module(function(avPiwikAnalyticsProvider) {

    avPiwikAnalyticsProvider.setSiteID(1);

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

  it('should check window._paq toBeDefined()', function() {
    expect(window._paq).toBeDefined();
  });

  it('should trackEvent(properties)', function () {

    const event = {
      category: 'movies',
      action: 'play',
      label: 'Hipaa Compliance Training'
    };

    avPiwikAnalytics.trackEvent(event);

    expect(window._paq.push.calls.argsFor(0)).toBeEqual([[ 'trackEvent', 'movies', 'play', 'Hipaa Compliance Training', undefined ]]);
  });

  it('should trackPageView(url)', function() {

    avPiwikAnalytics.trackPageView($location.$$absUrl());

    expect(window._paq.push.calls.argsFor(0)).toBeEqual([['setCustomUrl', 'http://www.abscefghighklmopqrstuvwxyz.com/app']]);
    expect(window._paq.push.calls.argsFor(1)).toBeEqual([['trackPageView', 'http://www.abscefghighklmopqrstuvwxyz.com/app']]);

  });

  it('should init()', function() {

    spyOn($, 'getScript');

    avPiwikAnalytics.init();

    expect(avUsersResource.me).toHaveBeenCalled();
    expect(window._paq.push.calls.argsFor(0)).toBeEqual([['enableLinkTracking']]);
    expect(window._paq.push.calls.argsFor(1)).toBeEqual([['setTrackerUrl', 'https://qa-piwik.availity.com/piwik/piwik.php']]);
    expect(window._paq.push.calls.argsFor(2)).toBeEqual([['setSiteId', 1]]);

  });
});