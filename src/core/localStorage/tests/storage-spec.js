/* global inject, describe, beforeEach, it, expect, module */

import angular from 'angular';

describe('avLocalStorageService', () => {

  let avLocalStorageService;

  beforeEach(() => {

    angular.mock.module('availity');

    inject(_avLocalStorageService_ => {
      avLocalStorageService = _avLocalStorageService_;
    });

  });

  it('should exist', () => {
    expect(avLocalStorageService).toBeDefined();
  });
});
