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
      IDLE: 15 * 60 * 1000, // 15 minutes
      SESSION: 30 * 60 * 1000 // 30 minutes
    },
    URLS: {
      HOME: '/availity/web/public.elegant.login',
      PING: '/api/v1/users/me'
    }
  });

  // Rules:
  //
  //  * ping after 3 minutes from last human activity
  //  * reset session after api success except 401
  //  * idle show after 15 of inactivity
  //
  availity.core.provider('avIdle', function() {

    var enabled = true;

    this.enabled = function(value) {
      if(arguments.length) {
        enabled = !!value;
      }
      return enabled;
    };

    this.$get = function(AV_IDLE, $document, $rootScope, $timeout, avThrottle, $q) {

      var AvIdle = function() {

        this._idleTimer = null;
        this._sessionTimer = null;

        this.init();

      };

      var proto = AvIdle.prototype;

      proto.init = function() {

        if(!enabled) {
          this.onDisabled();
          return;
        }

        this.onEnabled();
      };

      proto.onEnabled = function() {
        var self = this;

        $document.find('body').on(AV_IDLE.EVENTS.HUMAN, function(event) {
          self.onEvent(event);
        });

        $rootScope.$on(AV_IDLE.EVENTS.MACHINE, function(event) {
          self.onEvent(event);
        });
      };

      proto.onDisabled = function() {
        $document.find('body').off(AV_IDLE.EVENTS.HUMAN);
        $rootScope.off(AV_IDLE.EVENTS.MACHINE);
      };

      proto.isEnabled = function() {
        return enabled;
      };

      proto.enabled = function(value) {
        if(arguments.length) {
          enabled = !!value;
        }

        this.init();
        return enabled;
      };

      proto.request = function(config) {
        return config;
      };

      proto.responseError = function(response) {
        return $q.reject(response);
      };

      proto.sessionTimer = function() {
        $timeout.cancel(this._sessionTimer);
        this._sessionTimer = $timeout(this.onSessionTimer.call(this), AV_IDLE.INTERVALS.SESSION, false);
      };

      proto.idleTimer = function() {
        $timeout.cancel(this._idleTimer);
        this._idleTimer = $timeout(this.onIdleTimer.call(this), AV_IDLE.INTERVALS.IDLE, false);
      };

      proto.onSessionTimer = function() {
        this.onDisabled();
        document.location.href = AV_IDLE.URLS.HOME;
      };

      proto.onIdleTimer = function() {
        // show idle modal
      };

      proto.ping = function() {
        avThrottle(function() {
          // send ping
        }, AV_IDLE.INTERVALS.PING);
      };

      proto.onEvent = function() {
        this.idleTimer();
        this.ping();
      };

      return new AvIdle();

    };

  });

})(window);
