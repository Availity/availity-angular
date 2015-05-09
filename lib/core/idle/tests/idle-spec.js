/*global availity, beforeEach, inject, it, spyOn, it, expect, describe */
describe('avIdleProvider', function() {

  'use strict';

  availity.mock.providerSpecHelper();

  it('should be defined', function() {

    var avIdleProvider = availity.mock.provider(availity.MODULE, 'avIdleProvider')();
    expect(avIdleProvider.$get).toBeDefined();
    expect(avIdleProvider.enable).toBeDefined();
    expect(avIdleProvider.setPingUrl).toBeDefined();

  });

  describe("avIdle", function() {

    var avIdle, $rootScope, AV_IDLE, $timeout;

    beforeEach(function() {
      availity.mock.provider(availity.MODULE, 'avIdleProvider')();
    });

    beforeEach(inject(function(_avIdle_, _$rootScope_, _AV_IDLE_, _$timeout_) {
      avIdle = _avIdle_;
      $timeout = _$timeout_;
      AV_IDLE = _AV_IDLE_;
      $rootScope = _$rootScope_;
    }));

    it('should be defined', function() {
      expect(avIdle).toBeDefined();
    });

    it('should disable when scope is destroyed', function() {
      spyOn(avIdle, 'onDisabled').and.callThrough();
      $rootScope.$destroy();

      expect(avIdle.onDisabled).toHaveBeenCalled();

    });

    it('should listen to machine events', function() {

      spyOn(avIdle, 'onEvent').and.callThrough();
      spyOn(avIdle, 'idleTimer');
      spyOn(avIdle, 'ping');

      $rootScope.$broadcast('$locationChangeSuccess');

      expect(avIdle.onEvent).toHaveBeenCalled();
      expect(avIdle.idleTimer).toHaveBeenCalled();
      expect(avIdle.ping).toHaveBeenCalled();
    });

    it('should listen to human events', function() {

      spyOn(avIdle, 'onEvent').and.callThrough();
      spyOn(avIdle, 'idleTimer');
      spyOn(avIdle, 'ping');

      var e = $.Event("keydown");
      e.which = 50;
      $('body').trigger(e);

      var offset = availity.mock.sandboxEl.offset();
      var event = $.Event( "mousedown", {
        which: 1,
        pageX: offset.left,
        pageY: offset.top
      });
      availity.mock.sandboxEl.trigger(event);

      expect(avIdle.onEvent).toHaveBeenCalled();
      expect(avIdle.idleTimer).toHaveBeenCalled();
      expect(avIdle.ping).toHaveBeenCalled();

      expect(avIdle.idleTimer.calls.count()).toEqual(2);

    });

    it('should broadcast idle event when no activity is detected', function() {

      spyOn(avIdle, 'idleTimerActive').and.callThrough();
      spyOn($rootScope, '$broadcast');

      $timeout.flush(AV_IDLE.INTERVALS.IDLE - 1); // 1 ms before timer should fire
      expect(avIdle.idleTimerActive).not.toHaveBeenCalled();

      $timeout.flush(1); // timer should fire here
      expect(avIdle.idleTimerActive).toHaveBeenCalled();
      expect($rootScope.$broadcast).toHaveBeenCalledWith(AV_IDLE.EVENTS.ACTIVE);

    });

  });





});
