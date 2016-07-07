/* global  describe, beforeEach, it, expect, inject */

import angular from 'angular';

import '../';

describe('avPopoverConfig Provider', function () {
  describe('set method', () => {
    this.mockOptions = {showDelay: 2413, otherOption: 'would go here'};

    it('should set the config to the options provided', () => {
      angular.mock.module('availity', 'availity.ui', avPopoverConfigProvider => {
        this.avPopoverConfigProvider = avPopoverConfigProvider;
        this.defaultOptions = avPopoverConfigProvider.$get();
        this.avPopoverConfigProvider.set(this.mockOptions);
        expect(this.avPopoverConfigProvider.$get()).toEqual({...this.defaultOptions, ...this.mockOptions});
      });
    })
  });

  describe('service', () => {
    beforeEach(angular.mock.module('availity', 'availity.ui', avPopoverConfigProvider => {
      this.avPopoverConfigProvider = avPopoverConfigProvider;
      this.defaultOptions = avPopoverConfigProvider.$get();
      this.avPopoverConfigProvider.set(this.mockOptions);
    }));

    beforeEach(inject(avPopoverConfig => {
      this.avPopoverConfig = avPopoverConfig;
    }));

    it('should return the config', () => {
      expect(this.avPopoverConfig).toEqual({...this.defaultOptions, ...this.mockOptions});
    })
  });
});
