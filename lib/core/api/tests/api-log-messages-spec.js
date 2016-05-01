/*global inject, describe, beforeEach, it, expect, module*/

/*global inject, describe, beforeEach, it, expect, module*/

describe('avLogMessagesResource', function() {
  let avLogMessagesResource;

  beforeEach(function() {

    module('availity');

    inject(function(_avLogMessagesResource_) {
      avLogMessagesResource = _avLogMessagesResource_;
    });

  });

  it('should exist', function() {
    expect(avLogMessagesResource).toBeDefined();
  });
});