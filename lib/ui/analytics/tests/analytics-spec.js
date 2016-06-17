/* global describe, inject, spyOn, availity, it, module, expect, beforeEach */
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
    avAnalytics = _avAnalytics_;
    spyOn(avAnalytics, 'trackEvent').and.callFake(function() {
      return $q.when(true);
    });
  }));

  it('should have AvAnalytics be undefined', function () {
    $el = availity.mock.compileDirective('<div data-av-analytics-on="click"></div>');
    var controller = $el.data('$avAnalyticsOnController');
    var controller2 = $el.data('$avAnalyticsController');

    spyOn(controller, 'onEvent').and.callThrough();

    $el.trigger('click');
    availity.mock.flush();
    expect(controller.onEvent).toHaveBeenCalled();
    expect(controller2).toBeUndefined();
  });

  it('should track event', function () {
    $el = availity.mock.compileDirective('<div><div data-av-analytics-on="click"></div></div>');
    var controller = $el.children().data('$avAnalyticsOnController');

    spyOn(controller, 'onEvent').and.callThrough();

    $el.children().trigger('click');
    availity.mock.flush();
    expect(controller.onEvent).toHaveBeenCalled();
    expect(avAnalytics.trackEvent).toHaveBeenCalledWith({ event: 'click', level: 'info', label: ''});
  });

  it('should default to click', function () {
    $el = availity.mock.compileDirective('<div data-av-analytics="{abc:\'123\'}"><div data-av-analytics-on>Testing</div></div>');
    var controller = $el.children().data('$avAnalyticsOnController');

    spyOn(controller, 'onEvent').and.callThrough();


    $el.children().trigger('click');
    availity.mock.flush();
    expect(controller.onEvent).toHaveBeenCalled();
    expect(avAnalytics.trackEvent).toHaveBeenCalledWith({ event: 'click', level: 'info', abc: '123', label: 'Testing'});
  });

  it('should override default options', function () {
    $el = availity.mock.compileDirective('<div data-av-analytics="{abc:\'123\', category:\'test\'}"><div data-av-analytics-on="Play"' +
      ' data-av-analytics-category="test category" data-av-analytics-label="Testing 123">Checking</div></div>');
    var controller = $el.children().data('$avAnalyticsOnController');

    spyOn(controller, 'onEvent').and.callThrough();

    $el.children().trigger('Play');
    availity.mock.flush();
    expect(controller.onEvent).toHaveBeenCalled();
    expect(avAnalytics.trackEvent).toHaveBeenCalledWith({ event: 'Play', level: 'info', abc: '123', category: 'test category', label: 'Testing 123'});
  });

  it('should allow static label', function () {
    availity.mock.$scope.label = "Testing";
    $el = availity.mock.compileDirective('<div><div data-av-analytics-on="click" data-av-analytics-label="{{label}}"></div></div>');
    var controller = $el.children().data('$avAnalyticsOnController');

    spyOn(controller, 'onEvent').and.callThrough();

    $el.children().trigger('click');
    availity.mock.flush();
    expect(controller.onEvent).toHaveBeenCalled();
    expect(avAnalytics.trackEvent).toHaveBeenCalledWith({ event: 'click', level: 'info', label: 'Testing'});
  });

  it('should allow dynamic label', function () {
    availity.mock.$scope.label = "Testing";
    $el = availity.mock.compileDirective('<div><div data-av-analytics-on="click" data-av-analytics-label="{{label}}"></div></div>');
    var controller = $el.children().data('$avAnalyticsOnController');
    availity.mock.$scope.label = "Testing2";
    availity.mock.$scope.$digest();
    spyOn(controller, 'onEvent').and.callThrough();

    $el.children().trigger('click');
    availity.mock.flush();
    expect(controller.onEvent).toHaveBeenCalled();
    expect(avAnalytics.trackEvent).toHaveBeenCalledWith({ event: 'click', level: 'info', label: 'Testing2'});
  });



});
