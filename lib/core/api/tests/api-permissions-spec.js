/*global inject, module*/

describe('avPermissionsResource', function() {

  'use strict';

  var avPermissionsResource;

  beforeEach(function() {

    module('availity');

    inject(function(_$httpBackend_, _$q_, _avPermissionsResource_) {
      avPermissionsResource = _avPermissionsResource_;
    });

  });

  it('should exist', function() {
    expect(avPermissionsResource).toBeDefined();
  });

});
