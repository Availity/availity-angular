/* global describe, beforeEach, inject, module, expect, it */
import angular from 'angular';

import '../permissions';

describe('avUserPermissionsResource', () => {

  let avUserPermissionsResource;

  beforeEach(() => {

    angular.mock.module('availity');

    inject(_avUserPermissionsResource_ => {
      avUserPermissionsResource = _avUserPermissionsResource_;
    });

  });

  it('should exist', () => {
    expect(avUserPermissionsResource).toBeDefined();
  });
});
