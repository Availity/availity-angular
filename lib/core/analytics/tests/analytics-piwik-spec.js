/*global inject, /*global availity, beforeEach, expect, module, describe, it */
describe('PiwikAnalyticService', function() {
  'use strict';

  var PiwikAnalyticService;

  beforeEach(function() {
    module('availity');

    inject(function(_avPiwikAnalyticService_) {
      PiwikAnalyticService = _avPiwikAnalyticService_;
    });

  });

  it('should exist', function() {
    expect(PiwikAnalyticService).toBeDefined();
  });

});
