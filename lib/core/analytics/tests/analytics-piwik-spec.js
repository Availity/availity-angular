/*global inject, /*global availity, beforeEach, expect, module, describe, it */
describe('piwikAnalyticService', function() {
  'use strict';

  var piwikAnalyticService;

  beforeEach(function() { 
    module('availity');

    inject(function(_piwikAnalyticService_) {
      piwikAnalyticService = _piwikAnalyticService_;
    });

  });

  it('should exist', function() {
    expect(piwikAnalyticService).toBeDefined();
  });

});
