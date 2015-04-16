/*global inject, /*global availity, beforeEach, expect, module, describe, it */
describe('PiwikAnalyticService', function() {
  'use strict';

  var PiwikAnalyticService;

  beforeEach(function() { 
    module('availity');

    inject(function(_PiwikAnalyticService_) {
      PiwikAnalyticService = _PiwikAnalyticService_;
    });

  });

  it('should exist', function() {
    expect(PiwikAnalyticService).toBeDefined();
  });

});
