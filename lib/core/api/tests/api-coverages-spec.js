/*global inject, module, describe, beforeEach, it, expect */

describe('avCoveragesResource', function() {

  'use strict';

  var avCoveragesResource;

  beforeEach(function() {

    module('availity');

    inject(function(_$httpBackend_, _$q_, _avCoveragesResource_) {
      avCoveragesResource = _avCoveragesResource_;
    });

  });

  it('should exist', function() {
    expect(avCoveragesResource).toBeDefined();
  });

});
