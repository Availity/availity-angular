/* global describe, inject, spyOn, availity, it, module, expect, beforeEach, fixture */
describe('avAnalytics', function() {

  'use strict';

  var avAnalytics;
  var $el;

  beforeEach(function() {
    module('availity');
    module('availity.ui');
  });

  availity.mock.directiveSpecHelper();

  beforeEach(inject(function(_avAnalytics_, $q) {
    fixture.base = 'lib';
    $el = availity.mock.compileDirective('<button data-av-analytics-on="click" data-av-analytics-event="save"></button>');
    avAnalytics = _avAnalytics_;
    spyOn(avAnalytics, 'trackEvent').and.callFake(function() {
      return $q.when(true);
    });
  }));

  it('should track event', function () {
    var controller = $el.data('$avAnalyticsOnController');

    spyOn(controller, 'onEvent').and.callThrough();

    $el.trigger('click');
    availity.mock.flush();
    expect(controller.onEvent).toHaveBeenCalled();
    expect(avAnalytics.trackEvent).toHaveBeenCalled();
  });

});
