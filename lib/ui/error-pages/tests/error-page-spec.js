/* global beforeEach, availity, expect, module, inject, describe, it, spyOn */
describe('avErrorPageProvider', function() {

  'use strict';

  var $stateProvider;
  var $state;
  var $location;
  var AV_ERROR;
  var avErrorPageProvider;
  var avErrorPage;
  availity.mock.providerSpecHelper();

  beforeEach(function() {
    module('ui.router');
    module('availity');
    module('availity.ui');
    module('availity.ui.templates');
  });

  beforeEach(module(function(_AV_ERROR_, _avErrorPageProvider_, _$stateProvider_) {
    AV_ERROR = _AV_ERROR_;
    avErrorPageProvider = _avErrorPageProvider_;
    $stateProvider = _$stateProvider_;
    avErrorPageProvider.configure();
  }));

  beforeEach(inject(function(_avErrorPage_, _$state_, _$location_) {
    avErrorPage = _avErrorPage_;
    $state = _$state_;
    $location = _$location_;
  }));

  it('should be defined', function() {
    expect(avErrorPageProvider.$get).toBeDefined();
    expect(avErrorPageProvider.configure).toBeDefined();
  });

  describe('avErrorPage', function() {
    it('should be defined', function() {
      expect(avErrorPage.show).toBeDefined();
      expect(avErrorPage.notFound).toBeDefined();
      expect(avErrorPage.unauthorized).toBeDefined();
    });

    describe('notFound', function() {
      it('should go to av-not-found', function() {
        spyOn($state, 'go');
        avErrorPage.notFound();
        expect($state.go).toHaveBeenCalledWith(AV_ERROR.PAGES.NOT_FOUND);
      });
    });

    describe('unauthorized', function() {
      it('should go to av-unauthorized', function() {
        spyOn($state, 'go');
        avErrorPage.unauthorized();
        expect($state.go).toHaveBeenCalledWith(AV_ERROR.PAGES.UNAUTHORIZED);
      });
    });
  });
});
