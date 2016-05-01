/*global describe, beforeEach, inject, module, expect, it*/

describe('avUserPermissionsResource', function() {

  'use strict';

  let avUserPermissionsResource;

  beforeEach(function() {

    module('availity');

    inject(function(_avUserPermissionsResource_) {
      avUserPermissionsResource = _avUserPermissionsResource_;
    });

  });

  it('should exist', function() {
    expect(avUserPermissionsResource).toBeDefined();
  });

});
