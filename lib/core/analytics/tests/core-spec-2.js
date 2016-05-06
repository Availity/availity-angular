/* global inject, spyOn, it, expect, describe, beforeEach */

import angular from 'angular';

import Tester from 'tester';
import ngModule from '../core';

describe('avAnalyticsProvider', () => {

  let avAnalyticsProvider;
  let avAnalytics;
  let analyticsPlugin;
  let q;
  let $rootScope;

  const tester = new Tester();
  tester.provider();

  beforeEach(angular.mock.module(ngModule.name));

  beforeEach(angular.mock.module( (_avAnalyticsProvider_, $provide) => {

    // Fake analytics plugin
    analyticsPlugin = {
      trackEvent() {
        return q.when(true);
      },
      trackPageView() {
        return q.when(true);
      },
      isEnabled() {
        return true;
      },
      init() {

      }
    };

    spyOn(analyticsPlugin, 'trackEvent').and.callThrough();
    spyOn(analyticsPlugin, 'trackPageView').and.callThrough();
    spyOn(analyticsPlugin, 'init');
    $provide.value('analyticsPlugin', analyticsPlugin);

    avAnalyticsProvider = _avAnalyticsProvider_;
    // Register fake plugin
    avAnalyticsProvider.registerPlugins('analyticsPlugin');

  }));

  beforeEach(inject( (_avAnalytics_, $q, _$rootScope_) => {

    avAnalytics = _avAnalytics_;
    q = $q;
    $rootScope = _$rootScope_;

  }));

  it('should be defined', () => {

    expect(avAnalyticsProvider.$get).toBeDefined();
    expect(avAnalyticsProvider.registerPlugins).toBeDefined();
    expect(avAnalyticsProvider.setVirtualPageTracking).toBeDefined();
    expect(avAnalyticsProvider.isVirtualPageTracking).toBeDefined();
    expect(avAnalyticsProvider.setAppID).toBeDefined();

  });

  describe('avAnalytics', () => {

    it('should call trackEvent() for each registered plugin', () => {

      avAnalytics.trackEvent({});
      tester.flush();

      expect(analyticsPlugin.trackEvent).toHaveBeenCalled();

    });

    it('should call trackPageView() for each registered plugin', () => {

      avAnalytics.trackPageView({});
      tester.flush();

      expect(analyticsPlugin.trackPageView).toHaveBeenCalled();

    });

    it('should trackPageView() on route change', () => {

      avAnalyticsProvider.setVirtualPageTracking(true);
      avAnalytics.init();

      $rootScope.$broadcast('$locationChangeSuccess');

      $rootScope.$digest();
      expect(analyticsPlugin.trackPageView).toHaveBeenCalled();

    });

    it('should call init()', () => {
      avAnalytics.init();
      expect(analyticsPlugin.init).toHaveBeenCalled();
    });


  });
});
