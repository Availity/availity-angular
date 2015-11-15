/*global availity, it, inject, jasmine, module, spyOn, beforeEach, expect, describe */
describe('avMessagesProvider', function() {

  'use strict';

  var avMessagesProvider;
  var $rootScope;
  var avMessages;
  var AV_MESSAGES;

  availity.mock.providerSpecHelper();

  beforeEach(module('availity', function(_avMessagesProvider_) {

    avMessagesProvider = _avMessagesProvider_;
    avMessagesProvider.enable(false);

  }));

  beforeEach(inject(function(_$rootScope_, _avMessages_, _AV_MESSAGES_) {
    $rootScope = _$rootScope_;
    avMessages = _avMessages_;
    AV_MESSAGES = _AV_MESSAGES_;
  }));

  it('should be defined', function() {
    expect(avMessagesProvider.$get).toBeDefined();
    expect(avMessagesProvider.enable).toBeDefined();
  });

  describe('avMessages', function() {

    function testDomain(domain) {
      avMessages.domain = jasmine.createSpy().and.returnValue(domain);
      expect(avMessages.isDomain(domain)).toBeTruthy();
    }

    it('regex should validate availity.com domains', function() {

      testDomain('https://availity.com');
      testDomain('https://availity.com');
      testDomain('https://www.availity.com');
      testDomain('https://apps.availity.com');
      testDomain('https://test-apps.availity.com');
      testDomain('https://availity.net');

      testDomain('http://localhost:3000');
      testDomain('http://0.0.0.0:3000');
      testDomain('http://127.0.0.1:3000');

    });

    it('should send AV_MAXIMIZE event on init()', function() {

      spyOn(avMessages, 'send');
      avMessages.init();

      expect(avMessages.send).toHaveBeenCalledWith(AV_MESSAGES.EVENTS.AV_MAXIMIZE);

      avMessages.destroy();

    });

    beforeEach(function() {

      // Make debounce sync
      spyOn(_, 'debounce').and.callFake(function(func) {
        return function () {
          func.apply(this, arguments);
        };
      });

    });

    it('should send AV_RESIZE when window is resized', function() {

      avMessages.init();

      spyOn(avMessages, 'onResize').and.callThrough();
      spyOn(avMessages, 'send');

      window.scroll(0, 1000);
      $(window).trigger("resize");

      expect(avMessages.onResize).toHaveBeenCalled();
      expect(avMessages.send).toHaveBeenCalled();

      var payload = avMessages.send.calls.mostRecent().args[0];
      expect(payload.event).toBe(AV_MESSAGES.EVENTS.AV_RESIZE);
      expect(payload.height).toBeDefined();

      avMessages.destroy();

    });

    it('send() should post string event', function() {

      // Can't spyOn postMessage in Phantomjs because it's marked as non-configurable
      if(/PhantomJS/.test(navigator.userAgent)) {
        return;
      }

      spyOn(window.parent, 'postMessage');
      avMessages.send('hipaa');
      expect(window.parent.postMessage).toHaveBeenCalledWith('hipaa', jasmine.any(String));

    });

    it('send() should post object event', function() {

      // Can't spyOn postMessage in Phantomjs because it's marked as non-configurable
      if(/PhantomJS/.test(navigator.userAgent)) {
        return;
      }

      spyOn(window.parent, 'postMessage');

      avMessages.send({event: 'resize', height: '45px'});

      expect(window.parent.postMessage).toHaveBeenCalledWith('{"event":"resize","height":"45px"}', jasmine.any(String));

    });

    it('onMessage() should emit string event', function() {

      spyOn($rootScope, '$broadcast');

      avMessages.onMessage({
        origin: 'http://localhost:9876',
        data: 'window:resize'
      });

      expect($rootScope.$broadcast).toHaveBeenCalledWith('window:resize', null);

    });

    it('onMessage() should emit string event', function() {

      spyOn($rootScope, '$broadcast');

      avMessages.onMessage({
        origin: 'http://localhost:9876',
        data: '{"event":"window:resize","height":"45px"}'
      });

      expect($rootScope.$broadcast).toHaveBeenCalledWith('window:resize', {"event":"window:resize","height":"45px"});


    });

  });

});
