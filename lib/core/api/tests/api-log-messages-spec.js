/*global inject, describe, beforeEach, it, expect, module*/

describe('avLogMessagesResource', function() {

  'use strict';

  var avLogMessagesResource;

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
