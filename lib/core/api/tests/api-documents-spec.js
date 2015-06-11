/*global describe, beforeEach, it, expect, inject, module*/

describe('avDocumentsResource', function() {

  'use strict';

  var avDocumentsResource;

  beforeEach(function() {

    module('availity');

    inject(function(_avDocumentsResource_) {
      avDocumentsResource = _avDocumentsResource_;
    });

  });

  it('should exist', function() {
    expect(avDocumentsResource).toBeDefined();
  });

});
