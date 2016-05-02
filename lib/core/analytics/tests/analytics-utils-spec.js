/* global inject, beforeEach, expect, module, describe, it */

describe('avAnalyticsUtils', function() {
  let avAnalyticsUtils;
  let properties;

  beforeEach(function() {

    module('availity');

    inject(function(_avAnalyticsUtils_) {
      avAnalyticsUtils = _avAnalyticsUtils_;
    });

  });

  it('should exist', function() {
    expect(avAnalyticsUtils).toBeDefined();
  });

  it('toNum() should covert the anything that is NOT a number to 0', function() {
    properties = {value: 'test'};
    expect(avAnalyticsUtils.toNum(properties.value)).toEqual(0);

    properties = {value: null};
    expect(avAnalyticsUtils.toNum(properties.value)).toEqual(0);

    properties = {value: undefined};
    expect(avAnalyticsUtils.toNum(properties.value)).toEqual(0);
  });

  it('isExternalLink() should detect links that call `ng-click` vs use `href`', function() {

    expect(avAnalyticsUtils.isExternalLink({href: 'http://www.google.com'})).toBeTruthy();
    expect(avAnalyticsUtils.isExternalLink({ngClick: {}})).not.toBeTruthy();
  });

  it('isNotIgnored() should ignore the attribute if defined in the AV_ANALYTICS.IGNORE constant', function() {
    expect(avAnalyticsUtils.isNotIgnored('avAnalyticsOn')).not.toBeTruthy();
    expect(avAnalyticsUtils.isNotIgnored('avAnalyticsCategory')).toBeTruthy();
  });

  it('isValidAttribute() should detect directive attributes', function() {
    expect(avAnalyticsUtils.isValidAttribute('avAnalyticsCategory')).toBeTruthy();
    expect(avAnalyticsUtils.isValidAttribute('garbage')).not.toBeTruthy();
  });

  it('getAttribute() should return a object', function() {
    const obj = avAnalyticsUtils.getAttribute('avAnalyticsLabel', 'yumm');
    expect(obj.key).toEqual('label');
    expect(obj.value).toEqual('yumm');
  });

  it('getProperties() should return a object with only analytic properties', function() {

    const attrs = {
      $element: 'test',
      $attr: {},
      analyticsType: '2',
      avAnalyticsCategory: 'yumm',
      avAnalyticsEvent: 'Play',
      avAnalyticsLabel: '',
      avAnalyticsOn: 'click',
      avAnalyticsValue: '7'
    };

    const obj = avAnalyticsUtils.getProperties(attrs);

    expect(obj.category).toEqual('yumm');
    expect(obj.event).toEqual('Play');
    expect(obj.analyticsType).not.toBeDefined();
  });
});
