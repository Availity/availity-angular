/*global inject, describe, beforeEach, it, expect, module*/

describe('avConfigurationsResource', function() {

  'use strict';

  let avConfigurationsResource;

  beforeEach(function() {

    module('availity');

    inject(function(_$httpBackend_, _$q_, _avConfigurationsResource_) {
      avConfigurationsResource = _avConfigurationsResource_;
    });

  });

  it('should exist', function() {
    expect(avConfigurationsResource).toBeDefined();
  });

});
