(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.constant('AV_IDLE', {
    EVENTS: {
      IDLE_TIMEOUT: 'av:idle:inactive:timeout',
      SESSION_TIMEOUT: 'av:idle:session:timeout',
      HUMAN: 'mousemove keydown DOMMouseScroll mousewheel mousedown touchstart touchmove scroll',
      MACHINE: '$locationChangeStart'
    },
    INTERVALS: {
      PING: 3 * 60 * 1000, // 3 minutes
      IDLE: 25 * 60 * 1000, // 25 minutes
      SESSION: 30 * 60 * 1000 // 30 minutes
    },
    URLS: {
      HOME: '/availity/web/public.elegant.login',
      PING: '/api/v1/users/me'
    }
  });

  availity.core.provider('avIdle', function() {

    this.$get = function(AV_IDLE, $document, $rootScope, $timeout) {

      var AvIdle = function() {

        this.idleEnd = null;
        this.sessionEnd = null;
        this.pingEnd = null;

        this.idleTimer = null;
        this.sessionTimer = null;

        this.setInactivity();
        this.setTimeout();
      };

      var proto = AvIdle.prototype;

      proto.init = function() {
        $document.find('body').on(AV_IDLE.EVENTS.HUMAN, this.onEvent);
        $rootScope.on(AV_IDLE.EVENTS.MACHINE, this.onEvent);
      };

      proto.idleTime = function() {
        var now = new Date().getTime();
        this.idleEnd = now + AV_IDLE.INTERVALS.IDLE;
      };

      proto.pingTime = function() {
        var now = new Date().getTime();
        this.pingEnd = now + AV_IDLE.INTERVALS.PING;
      };

      proto.sessionTimer = function() {
        $timeout.cancel(this.sessionTimer);
        this.sessionTimer = $timeout(this.onSessionTimer.call(this), AV_IDLE.INTERVALS.SESSION, false);
      };

      proto.idleTimer = function() {
        $timeout.cancel(this.idleTimer);
        this.idleTimer = $timeout(this.onIdleTimer.call(this), AV_IDLE.INTERVALS.IDLE, false);
      };

      proto.onSessionTimer = function() {
        // update modal if present
        // redirect to home page
      };

      proto.onIdleTimer = function() {
        // show idle modal
      };

      proto.onPingEnd = function() {
        // keep alive
      };

      proto.onEvent = function() {

        this.idleTimer();
        this.sessionTimer();

        var now = new Date().getTime();

        if(now > this.pingEnd) {
          this.onPingEnd();
          this.pingTime();
          return;
        }

      };

      return new AvIdle();

    };

  });

})(window);
