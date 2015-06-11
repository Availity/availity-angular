/* global describe, module, beforeEach, expect, it, inject, spyOn */
describe('avSplunkAnalytics', function () {

  'use strict';

  var avSplunkAnalytics;
  var avLogMessagesResource;

  beforeEach(module('availity'));

  beforeEach(inject(function (_avLogMessagesResource_, $q, _avSplunkAnalytics_, $location) {


    avSplunkAnalytics = _avSplunkAnalytics_;
    avLogMessagesResource = _avLogMessagesResource_;

    spyOn(avLogMessagesResource, 'info').and.callThrough();
    spyOn(avLogMessagesResource, 'create');

    spyOn($location, '$$absUrl').and.returnValue('http://www.abscefghighklmopqrstuvwxyz.com/app');

  }));

  it('should track events', function () {

    var event = {
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
});
