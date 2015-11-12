/*global availity, JSON, spyOn, it, inject, module, beforeEach, expect, describe */
describe('avMessagesProvider', function() {

  'use strict';

  var provider;
  var service;
  var root;

  availity.mock.providerSpecHelper();

  beforeEach(module('availity'));

  beforeEach(module(function(avMessagesProvider) {
    avMessagesProvider.enable(true);
    avMessagesProvider.setProd(true);
    provider = avMessagesProvider;
  }));

  beforeEach(inject(function(avMessages, $injector) {
    root = $injector.get('$rootScope').$root;
    service = avMessages;
    spyOn(root, '$broadcast');
  }));

  it('should be defined', function() {
    expect(provider.$get).toBeDefined();
    expect(provider.enable).toBeDefined();
    expect(provider.setSender).toBeDefined();
    expect(provider.setProd).toBeDefined();
  });

  describe('avMessages', function() {

    it('should handle messages', function() {
      var event = {
        originalEvent: {
          origin: 'http://test.availity.com',
          data: JSON.stringify('testing')
        }
      };
      service.onMessage(event);
      expect(root.$broadcast).toHaveBeenCalled();
    });

    it('should regect messages from unknown origin', function() {
      var event = {
        originalEvent: {
          origin: 'http://hackerSite.com',
          data: JSON.stringify('testing')
        }
      };
      service.onMessage(event);
      expect(root.$broadcast).not.toHaveBeenCalled();
    });
  });

});
