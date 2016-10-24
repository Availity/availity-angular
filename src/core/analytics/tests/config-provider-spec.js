/* global it, expect, inject, describe, beforeEach */

import angular from 'angular';

import ngModule from '../config-provider';

describe('avAnalyticsConfig', () => {

  let avAnalyticsConfig;

  beforeEach(angular.mock.module(ngModule.name));

  beforeEach(inject( _avAnalyticsConfig_ => {
    avAnalyticsConfig = _avAnalyticsConfig_;
  }));

  it('should be defined', () => {
    expect(avAnalyticsConfig).toBeDefined();
  });

});
