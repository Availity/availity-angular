/* global it, inject, jasmine, module, spyOn, beforeEach, expect, describe */

import angular from 'angular';
import $ from 'jquery';

import Tester from 'tester';

import '../';

describe('avMessagesProvider', () => {

  let avMessagesProvider;
  let $rootScope;
  let avMessages;
  let AV_MESSAGES;

  const tester = new Tester();
  tester.provider();

  beforeEach(angular.mock.module('availity', _avMessagesProvider_ => {

    avMessagesProvider = _avMessagesProvider_;
    avMessagesProvider.enable(false);

  }));

  beforeEach(inject((_$rootScope_, _avMessages_, _AV_MESSAGES_) => {
    $rootScope = _$rootScope_;
    avMessages = _avMessages_;
    AV_MESSAGES = _AV_MESSAGES_;
  }));

  it('should be defined', () => {
    expect(avMessagesProvider.$get).toBeDefined();
    expect(avMessagesProvider.enable).toBeDefined();
  });

  describe('avMessages', () => {

    function testDomain(domain) {
      avMessages.domain = jasmine.createSpy().and.returnValue(domain);
      expect(avMessages.isDomain(domain)).toBeTruthy();
    }

    it('regex should validate availity.com domains', () => {

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

    it('should send AV_RESIZE when window is resized', () => {

      avMessages.init();
      const flush = avMessages.onResize.flush;

      spyOn(avMessages, 'onResize').and.callThrough();
      spyOn(avMessages, 'send');

      window.scroll(0, 1000);
      $(window).trigger('resize');

      flush();

      expect(avMessages.send).toHaveBeenCalled();

      const payload = avMessages.send.calls.mostRecent().args[0];
      expect(payload.event).toBe(AV_MESSAGES.EVENTS.AV_RESIZE);
      expect(payload.height).toBeDefined();

      avMessages.destroy();

    });

    it('send() should post string event', () => {

      spyOn(avMessages, 'postMessage');
      avMessages.send('hipaa');
      expect(avMessages.postMessage).toHaveBeenCalledWith('hipaa', jasmine.any(String));

    });

    it('send() should post object event', () => {

      spyOn(avMessages, 'postMessage');

      avMessages.send({event: 'resize', height: '45px'});

      expect(avMessages.postMessage).toHaveBeenCalledWith('{"event":"resize","height":"45px"}', jasmine.any(String));

    });

    it('onMessage() should emit string event', () => {

      spyOn($rootScope, '$broadcast');

      avMessages.onMessage({
        origin: 'http://localhost:9876',
        data: 'window:resize'
      });

      expect($rootScope.$broadcast).toHaveBeenCalledWith('window:resize', null);

    });

    it('onMessage() should emit string event and object', () => {

      spyOn($rootScope, '$broadcast');

      avMessages.onMessage({
        origin: 'http://localhost:9876',
        data: '{"event":"window:resize","height":"45px"}'
      });

      expect($rootScope.$broadcast).toHaveBeenCalledWith('window:resize', {'event': 'window:resize', 'height': '45px'});


    });

  });
});
