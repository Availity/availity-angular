/*global inject, module*/

describe('avLogMessagesResource', function() {

  'use strict';

  var avLogMessagesResource;

  beforeEach(function() {

    module('availity');

    inject(function(_$httpBackend_, _$q_, _avLogMessagesResource_) {
      avLogMessagesResource = _avLogMessagesResource_;
    });

  });

  it('should exist', function() {
    expect(avLogMessagesResource).toBeDefined();
  });

});
