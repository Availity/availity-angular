/*global inject, module, describe, beforeEach, it, expect*/

describe('avSession', function() {

  'use strict';

  var avSession;

  beforeEach(function() {

    module('availity');

    inject(function(_$httpBackend_, _$q_, _avSession_) {
      avSession = _avSession_;
    });

  });

  it('should exist', function() {
    expect(avSession).toBeDefined();
  });


});
