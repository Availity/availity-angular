/*global inject, describe, beforeEach, it, expect, module*/

describe('avCodesResource', function() {

  'use strict';

  var avCodesResource;

  beforeEach(function() {

    module('availity');

    inject(function(_$httpBackend_, _$q_, _avCodesResource_) {
      avCodesResource = _avCodesResource_;
    });

  });

  it('should exist', function() {
    expect(avCodesResource).toBeDefined();
  });

});
