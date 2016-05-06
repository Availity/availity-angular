/* global it, expect, inject, describe, beforeEach */

import angular from 'angular';

import ngModule from '../constants';

describe('AV_ANALYTICS', () => {

  let AV_ANALYTICS;

  beforeEach(angular.mock.module(ngModule.name));

  beforeEach(inject( _AV_ANALYTICS_ => {
    AV_ANALYTICS = _AV_ANALYTICS_;
  }));

  it('should be defined', () => {
    expect(AV_ANALYTICS).toBeDefined();
  });

});
