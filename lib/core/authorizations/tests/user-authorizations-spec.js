/*global inject, module, describe, beforeEach, it, expect */

describe('avUserAuthorizations', function() {

  'use strict';

  var avUserAuthorizations;

  beforeEach(function() {

    module('availity');

    inject(function(_$httpBackend_, _$q_, _avUserAuthorizations_) {
      avUserAuthorizations = _avUserAuthorizations_;
    });

  });

  it('should exist and initialized', function() {
    expect(avUserAuthorizations).toBeDefined();
    expect(avUserAuthorizations.userPermissionsMap).toEqual({});
    expect(avUserAuthorizations.region).toEqual('');
    expect(avUserAuthorizations.invalidateUser).toEqual(true);
  });


});
