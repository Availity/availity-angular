/*global inject, describe, beforeEach, it, expect, module*/

describe('avUsersResource', function() {

  'use strict';

  var avUsersResource;

  beforeEach(function() {

    module('availity');

    inject(function( _avUsersResource_) {
      avUsersResource = _avUsersResource_;
    });

  });

  it('should exist', function() {
    expect(avUsersResource).toBeDefined();
  });

});
