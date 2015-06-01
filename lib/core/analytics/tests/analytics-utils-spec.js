/*global inject, /*global availity, beforeEach, expect, module, describe, it */
describe('avAnalyticsUtils', function() {
  'use strict';

  var avAnalyticsUtils;
  var properties;
  var attrs;
  var key;
  var value;
  var ANALYTICS_CONFIG;
  var str;

  beforeEach(function() {
    module('availity');

    ANALYTICS_CONFIG = {
      PRE_FIX: /^avAnalytics(.*)$/,
      // should ignore these since they are part of the directives API
      IGNORE: ['avAnalyticsOn', 'avAnalyticsIf']
    };

    inject(function(_avAnalyticsUtils_) {
      avAnalyticsUtils = _avAnalyticsUtils_;
    });

  });

  it('should exist', function() {
    expect(avAnalyticsUtils).toBeDefined();
  });

  //Move these test to the utils test
  it('should keep the number that was passed', function() {
    properties = {value: 4};
    var holder = avAnalyticsUtils.checkIsNum(properties.value);
    expect(holder).toEqual(4);
  });

  it('should covert the anything that is not a number to 0', function() {
    properties = {value: 'test'};
    expect(avAnalyticsUtils.checkIsNum(properties.value)).toEqual(0);

    properties = {value: null};
    expect(avAnalyticsUtils.checkIsNum(properties.value)).toEqual(0);

    properties = {value: undefined};
    expect(avAnalyticsUtils.checkIsNum(properties.value)).toEqual(0);
  });

  it('should be true if a external link is passed and false if a non external link is passed', function() {
    attrs = {
      href: 'http://www.google.com'
    };
    expect(avAnalyticsUtils.isExternalLink(attrs)).toBeTruthy();
    attrs = {
      ngClick: {}
    };
    expect(avAnalyticsUtils.isExternalLink(attrs)).not.toBeTruthy();
  });

  it('should ignore the attribute if defined in the ANALYTICS_CONFIG.IGNORE constant', function() {
    key = 'avAnalyticsOn';
    expect(avAnalyticsUtils.isNotIgnored(key)).not.toBeTruthy();

    key = 'avAnalyticsCategory';
    expect(avAnalyticsUtils.isNotIgnored(key)).toBeTruthy();
  });

  it('should return true if a attribute contain avAnalytics else it should return false', function() {
    key = 'avAnalyticsCategory';
    expect(avAnalyticsUtils.isValidAttribute(key)).toBeTruthy();

    key = 'AnalyticsCategory';
    expect(avAnalyticsUtils.isValidAttribute(key)).not.toBeTruthy();
  });

  it('should convert a string the first character to a lowercase letters', function() {
    str = 'Hello';
    expect(avAnalyticsUtils.lowercase(str)).toEqual('hello');
    expect(avAnalyticsUtils.lowercase(str)).not.toEqual('Hello');
  });

  it('should return a object with 2 items', function() {
    key = 'avAnalyticsLabel';
    value = 'Something cool';
    var holder = avAnalyticsUtils.getAttribute(key, value);
    expect(holder.key).toEqual('label');
    expect(holder.value).toEqual('Something cool');
  });

  it('should return a object with only analytic properties', function() {
    attrs = {
      $element: 'test',
      $attr: {},
      analyticsType: '2',
      avAnalyticsCategory: 'yumm',
      avAnalyticsEvent: 'Play',
      avAnalyticsLabel: '',
      avAnalyticsOn: 'click',
      avAnalyticsValue: '7'
    };

    var holder = avAnalyticsUtils.getProperties(attrs);

    expect(holder.category).toEqual('yumm');
    expect(holder.event).toEqual('Play');
    expect(holder.analyticsType).not.toBeDefined();
  });

});
