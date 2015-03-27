/*global inject, module*/

describe('avUserPermissionsResource', function() {

  'use strict';

  var avUserPermissionsResource;

  beforeEach(function() {

    module('availity');

    inject(function(_$httpBackend_, _$q_, _avUserPermissionsResource_) {
      avUserPermissionsResource = _avUserPermissionsResource_;
    });

  });

  it('should exist', function() {
    expect(avUserPermissionsResource).toBeDefined();
  });

});
