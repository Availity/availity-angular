/* global inject, describe, beforeEach, it, expect, module, spyOn */

import angular from 'angular';

describe('avLocalStorageService', () => {

  let avLocalStorageService;
  let $window;
  // let mockLocalStorage;

  beforeEach(() => {

    angular.mock.module('availity');

    inject((_avLocalStorageService_, _$window_ ) => {
      avLocalStorageService = _avLocalStorageService_;
      $window = _$window_;
    });
  });

  it('should exist', () => {
    expect(avLocalStorageService).toBeDefined();
  });

  describe('localStorage supported', () => {

    it('should return true', () => {
      expect(avLocalStorageService.supportsLocalStorage()).toBeTruthy();
    });

    // it('should return false if localStorage does not exist', () => {
    //   $window.localStorage = undefined;
    //   expect(avLocalStorageService.supportsLocalStorage()).not.toBeTruthy();
    // });

    it('should return false if localStorage functions throw error', () => {
      spyOn($window.localStorage, 'getItem').and.callFake(function() {
        throw new Error('mock error');
      });
      expect(avLocalStorageService.supportsLocalStorage()).toBeFalsy();
    });

  });

  it('should set and retrieve correct values', () => {
    expect(avLocalStorageService.supportsLocalStorage()).toBeTruthy();
    const testVal = 'testVal';
    avLocalStorageService.setVal(testVal, testVal);
    expect(avLocalStorageService.getVal(testVal)).toEqual(testVal);
  });

  it('should remove all keys that match regex test', () => {
    expect(avLocalStorageService.supportsLocalStorage()).toBeTruthy();
    avLocalStorageService.setVal('testVal1', 1);
    avLocalStorageService.setVal('testVal2', 2);
    avLocalStorageService.setVal('testVal3', 3);
    avLocalStorageService.setVal('otherVal', 4);

    expect(avLocalStorageService.getVal('testVal1')).toBeDefined();
    expect(avLocalStorageService.getVal('testVal2')).toBeDefined();
    expect(avLocalStorageService.getVal('testVal3')).toBeDefined();
    expect(avLocalStorageService.getVal('otherVal')).toBeDefined();

    avLocalStorageService.removeKeys('testVal');

    expect(avLocalStorageService.getVal('testVal1')).toBeNull();
    expect(avLocalStorageService.getVal('testVal2')).toBeNull();
    expect(avLocalStorageService.getVal('testVal3')).toBeNull();
    expect(avLocalStorageService.getVal('otherVal')).toBeDefined();
  });


});
