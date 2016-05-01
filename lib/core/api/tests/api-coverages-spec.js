/*global inject, module, describe, beforeEach, it, expect */

/*global inject, module, describe, beforeEach, it, expect */

describe('avCoveragesResource', function() {
  let avCoveragesResource;

  beforeEach(function() {

    module('availity');

    inject(function(_avCoveragesResource_) {
      avCoveragesResource = _avCoveragesResource_;
    });

  });

  it('should exist', function() {
    expect(avCoveragesResource).toBeDefined();
  });
});