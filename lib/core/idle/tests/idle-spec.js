/*global availity, module, beforeEach, inject, it, spyOn, it, expect, describe */
describe('avIdleProvider', function() {

  'use strict';

  var provider;
  var avIdle;
  var $rootScope;
  var AV_IDLE;
  var $timeout;

  beforeEach(module('availity'));

  beforeEach(module(function(avIdleProvider) {
    provider = avIdleProvider;
    provider.enable(true);

  }));

  beforeEach(inject(function(_avIdle_, _$rootScope_, _AV_IDLE_, _$timeout_) {
    avIdle = _avIdle_;
    $timeout = _$timeout_;
    AV_IDLE = _AV_IDLE_;
    $rootScope = _$rootScope_;
  }));

  it('should be defined', function() {
    expect(provider.$get).toBeDefined();
    expect(provider.enable).toBeDefined();
    expect(provider.setPingUrl).toBeDefined();

  });

  describe('avIdle', function() {

    it('should be defined', function() {
      expect(avIdle).toBeDefined();
    });

    it('should disable when scope is destroyed', function() {
      spyOn(avIdle, 'stop').and.callThrough();
      $rootScope.$destroy();

      expect(avIdle.stop).toHaveBeenCalled();

    });

    it('should listen to url change event when route changes to different url', function() {

      spyOn(avIdle, 'onEvent').and.callThrough();
      spyOn(avIdle, 'startIdleTimer');
      spyOn(avIdle, 'startPing');

      $rootScope.$broadcast('$locationChangeSuccess', 'oldUrl', 'newUrl');

      expect(avIdle.onEvent).toHaveBeenCalled();
      expect(avIdle.startIdleTimer).toHaveBeenCalled();
      expect(avIdle.startPing).toHaveBeenCalled();
    });

    it('should listen to human events', function() {

      spyOn(avIdle, 'onEvent').and.callThrough();
      spyOn(avIdle, 'startIdleTimer');
      spyOn(avIdle, 'startPing');

      var e = $.Event('keydown');
      e.which = 50;
      $('body').trigger(e);

      var offset = availity.mock.sandboxEl.offset();
      var event = $.Event('mousedown', {
        which: 1,
        pageX: offset.left,
        pageY: offset.top
      });
      availity.mock.sandboxEl.trigger(event);

      expect(avIdle.onEvent).toHaveBeenCalled();
      expect(avIdle.startIdleTimer).toHaveBeenCalled();
      expect(avIdle.startPing).toHaveBeenCalled();

      // expect
      expect(avIdle.startIdleTimer.calls.count()).toEqual(2);

    });

    it('should broadcast idle event when no activity is detected', function() {

      spyOn($rootScope, '$broadcast');

      // 1 ms before timer should fire
      $timeout.flush(AV_IDLE.INTERVALS.IDLE - 1);
      expect($rootScope.$broadcast).not.toHaveBeenCalled();

      // timer should fire here
      $timeout.flush(1);
      expect($rootScope.$broadcast).toHaveBeenCalledWith(AV_IDLE.EVENTS.IDLE_ACTIVE);

    });

  });

});
