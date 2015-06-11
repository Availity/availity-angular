/* global describe, inject, spyOn, availity, it, module, expect, beforeEach, fixture */
describe('avAnalytics', function() {

  'use strict';

  var avAnalytics;

  beforeEach(function() {
    module('availity');
    module('availity.ui');
  });

  availity.mock.directiveSpecHelper();

  beforeEach(inject(function(_avAnalytics_, $q) {
    this.el = fixture.load('ui/analytics/tests/analytics-fixture.html');
    avAnalytics = _avAnalytics_;
    spyOn(avAnalytics, 'trackEvent').and.callFake(function() {
      return $q.when(true);
    });
  }));

  it('should track event', function () {
    var $el = availity.mock.compileDirective(this.el);
    var controller = $el.data('$avAnalyticsOnController');

    spyOn(controller, 'onEvent').and.callThrough();

    $el.trigger('click');
    availity.mock.flush();
    expect(controller.onEvent).toHaveBeenCalled();
    expect(avAnalytics.trackEvent).toHaveBeenCalled();
  });

});
