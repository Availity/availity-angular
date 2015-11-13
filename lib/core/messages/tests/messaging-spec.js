/*global availity, it, inject, module, beforeEach, expect, describe */
describe('avMessagesProvider', function() {

  'use strict';

  var provider;
  var $rootScope;
  var avMessages;
  var AV_MESSAGES;

  availity.mock.providerSpecHelper();

  beforeEach(module('availity'));

  beforeEach(module(function(avMessagesProvider) {
    provider = avMessagesProvider;
  }));

  beforeEach(inject(function(_$rootScope_, _avMessages_, _AV_MESSAGES_) {
    $rootScope = _$rootScope_;
    avMessages = _avMessages_;
    AV_MESSAGES = _AV_MESSAGES_;
  }));

  it('should be defined', function() {
    expect(provider.$get).toBeDefined();
    expect(provider.enable).toBeDefined();
  });

  it('regex should validate availity domains', function() {

    expect(avMessages.isDomain({origin: 'https://availity.com'})).toBeTruthy();
    expect(avMessages.isDomain({origin: 'https://www.availity.com'})).toBeTruthy();
    expect(avMessages.isDomain({origin: 'https://apps.availity.com'})).toBeTruthy();
    expect(avMessages.isDomain({origin: 'https://test-apps.availity.com'})).toBeTruthy();
    expect(avMessages.isDomain({origin: 'https://availity.net'})).toBeTruthy();

    expect(avMessages.isDomain({origin: 'http://localhost:3000'})).toBeTruthy();
    expect(avMessages.isDomain({origin: 'http://0.0.0.0:3000'})).toBeTruthy();
    expect(avMessages.isDomain({origin: 'http://127.0.0.1:3000'})).toBeTruthy();

  });

});
