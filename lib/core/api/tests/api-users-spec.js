/*global inject, describe, beforeEach, it, expect, module*/

describe('avUsersResource', function() {

  'use strict';

  var avUsersResource;

  beforeEach(function() {

    module('availity');

    inject(function(_$httpBackend_, _$q_, _avUsersResource_) {
      avUsersResource = _avUsersResource_;
    });

  });

  it('should exist', function() {
    expect(avUsersResource).toBeDefined();
  });

});
