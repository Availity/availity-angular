/* global beforeEach, availity, expect, module, inject, describe, it */
describe('avErrorPageProvider', function() {

  'use strict';

  var $stateProvider;
  var $state;
  var $rootScope;
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
    avErrorPageProvider.configureRoutes(true);
  }));

  beforeEach(inject(function(_avErrorPage_, _$rootScope_, _$state_) {
    avErrorPage = _avErrorPage_;
    $rootScope = _$rootScope_;
    $state = _$state_;
  }));

  it('should be defined', function() {
    expect(avErrorPageProvider.$get).toBeDefined();
    expect(avErrorPageProvider.getRoutes).toBeDefined();
    expect(avErrorPageProvider.setRoutes).toBeDefined();
    expect(avErrorPageProvider.configureRoutes).toBeDefined();
  });

  describe('avErrorPage', function() {
    it('should be defined', function() {
      expect(avErrorPage.show).toBeDefined();
      expect(avErrorPage.notFound).toBeDefined();
      expect(avErrorPage.unauthorized).toBeDefined();
    });

  });
});
