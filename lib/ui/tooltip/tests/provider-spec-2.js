/* global  describe, beforeEach, it, expect, inject */

import angular from 'angular';

import '../';

describe('avTooltipConfig Provider', function () {
  describe('set method', () => {
    this.mockOptions = {showDelay: 2413, otherOption: 'would go here'};

    it('should set the config to the options provided', () => {
      angular.mock.module('availity', 'availity.ui', avTooltipConfigProvider => {
        this.avTooltipConfigProvider = avTooltipConfigProvider;
        this.defaultOptions = avTooltipConfigProvider.$get();
        this.avTooltipConfigProvider.set(this.mockOptions);
        expect(this.avTooltipConfigProvider.$get()).toEqual({...this.defaultOptions, ...this.mockOptions});
      });
    })
  });

  describe('service', () => {
    beforeEach(angular.mock.module('availity', 'availity.ui', avTooltipConfigProvider => {
      this.avTooltipConfigProvider = avTooltipConfigProvider;
      this.defaultOptions = avTooltipConfigProvider.$get();
      this.avTooltipConfigProvider.set(this.mockOptions);
    }));

    beforeEach(inject(avTooltipConfig => {
      this.avTooltipConfig = avTooltipConfig;
    }));

    it('should return the config', () => {
      expect(this.avTooltipConfig).toEqual({...this.defaultOptions, ...this.mockOptions});
    })
  });
});
