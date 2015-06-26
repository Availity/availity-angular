/*global inject, module, describe, beforeEach, it, expect*/

describe('avOrganizationsResource', function() {

  'use strict';

  var avOrganizationsResource;

  beforeEach(function() {

    module('availity');

    inject(function(_avOrganizationsResource_) {
      avOrganizationsResource = _avOrganizationsResource_;
    });

  });

  it('should exist', function() {
    expect(avOrganizationsResource).toBeDefined();
  });

});
