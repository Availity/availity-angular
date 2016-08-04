/* global  inject, describe, beforeEach, it, expect, jasmine, spyOn */

import angular from 'angular';
import Tester from 'tester';

import '../';

describe('avAnalytics', () => {

  let avAnalytics;
  let analyticsController;

  const tester = new Tester();

  beforeEach(angular.mock.module('availity', 'availity.ui'));

  tester.directive();

  beforeEach(inject( (_avAnalytics_, $q) => {
    avAnalytics = _avAnalytics_;
    spyOn(avAnalytics, 'trackEvent').and.callFake( () => {
      return $q.when(true);
    });
  }));

  beforeEach(inject(($rootScope, $controller) => {
    analyticsController = $controller('AvAnalyticsController', {$scope: {} });
  }));

  describe('controller', () => {

    const mockEvent = {
      type: 'click',
      preventDefault: jasmine.createSpy(),
      stopPropagation: jasmine.createSpy()
    };

    const mockElement = {
      text() {
        return 'mockElement';
      }
    };

    let mockOptions = {};

    it('onEvent should be defined', () => {
      expect(analyticsController.onEvent).toBeDefined();
    });

    it('label should be info if not defined', () => {
      mockOptions = {};
      analyticsController.onEvent(mockEvent, mockElement, mockOptions);
      expect(avAnalytics.trackEvent).toHaveBeenCalledWith({ event: 'click', level: 'info', label: 'mockElement'});
    });

    it('options should override values from event/element', () => {
      mockOptions = {
        event: 'testEvent',
        level: 'testLevel',
        label: 'testLabel'
      };
      analyticsController.onEvent(mockEvent, mockElement, mockOptions);
      expect(avAnalytics.trackEvent).toHaveBeenCalledWith({ event: 'testEvent', level: 'testLevel', label: 'testLabel'});
    });

  });

  describe('directives', () => {

    it('should have directive', () => {
      const el = tester.compileDirective('<div data-av-analytics="{ \'category\': \'testCategory\'}"></div>');
      expect(el.data('$avAnalyticsController')).toBeDefined();
    });

    it('should have on-directive', () => {
      const el = tester.compileDirective('<div data-av-analytics-on="click"></div>');
      expect(el.data('$avAnalyticsOnController')).toBeDefined();
    });

    it('should pass data down to on-directive', () => {
      const el = tester.compileDirective('<div data-av-analytics="{ \'category\': \'testCategory\'}"><div data-av-analytics-on="click">Test</div></div>');
      el.children().trigger('click');
      tester.flush();
      expect(avAnalytics.trackEvent).toHaveBeenCalledWith({ event: 'click', level: 'info', label: 'Test', category: 'testCategory'});
    });

    it('defining event overrides actual event type', () => {
      const el = tester.compileDirective('<div data-av-analytics="{ \'category\': \'testCategory\'}"><div data-av-analytics-on="click" data-av-analytics-event="play">Test</div></div>');
      el.children().trigger('click');
      tester.flush();
      expect(avAnalytics.trackEvent).toHaveBeenCalledWith({ event: 'play', level: 'info', label: 'Test', category: 'testCategory'});
    });

  });

});
