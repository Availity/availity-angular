// Inspiration => https://github.com/HackedByChinese/ng-idle

(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.constant('AV_IDLE', {
    EVENTS: {
      INACTIVE: 'av:idle:inactive',
      ACTIVE: 'av:idle:active',
      SESSION_TIMEOUT_ACTIVE: 'av:idle:session:active',
      SESSION_TIMEOUT_INACTIVE: 'av:idle:session:inactive',
      HUMAN: 'keydown mousemove DOMMouseScroll mousewheel mousedown scroll',
      MACHINE: '$locationChangeSuccess'
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

  // Rules:
  //
  //  * ping after 3 minutes from last human activity
  //  * reset session after api success except 401
  //  * idle show after 25 of inactivity
  //
  availity.core.provider('avIdle', function(AV_IDLE) {

    var enabled = true;
    var pingUrl;
    var sessionTimeout;
    var idleTimeout;
    var pingTimeout;

    this.enable = function(value) {
      if(arguments.length) {
        enabled = !!value;
      }
      return enabled;
    };

    this.setSessionTimeout = function(timeout) {
      sessionTimeout = timeout || AV_IDLE.INTERVALS.SESSION;
    };

    this.setIdleTimeout = function(timeout) {
      idleTimeout = timeout || AV_IDLE.INTERVALS.IDLE;
    };

    this.setPingTimeout = function(timeout) {
      pingTimeout = timeout || AV_IDLE.INTERVALS.PING;
    };

    this.setPingUrl = function(url) {
      pingUrl = url;
    };

    this.$get = function(AV_IDLE, $log, $document, $rootScope, $timeout, avThrottle, $q, $injector) {

      var AvIdle = function() {

        pingUrl = pingUrl || AV_IDLE.URLS.PING;

        // $timeout references
        this._idleTimer = null;
        this._sessionTimer = null;
        this._pingTimer = null;

        // flag used to track if the if user is idle
        this.idleActive = false;

        this.listeners = [];

        this.init();

      };

      var proto = AvIdle.prototype;

      proto.init = function() {

        if(!enabled) {
          this.stop();
          return;
        }

        this.start();
      };

      proto.start = function() {

        var self = this;
        var listener;

        !sessionTimeout && this.setPingTimeout();
        !idleTimeout && this.setIdleTimeout();
        !pingTimeout && this.setPingTimeout();

        $rootScope.$on('$destroy', function() {
          self.stop();
        });

        $document.find('body').on(AV_IDLE.EVENTS.HUMAN, function(event) {
          self.onEvent(event);
        });

        listener = $rootScope.$on(AV_IDLE.EVENTS.MACHINE, function(event) {
          self.onEvent(event);
        });
        this.listeners.push(listener);

        listener = $rootScope.$on(AV_IDLE.EVENTS.INACTIVE, function() {
          self.idleTimerInActive();
        });
        this.listeners.push(listener);

        $rootScope.$on(AV_IDLE.EVENTS.SESSION_TIMEOUT_INACTIVE, function() {
          self.sessionInactive();
        });

        this.idleTimer();
        this.sessionTimer();
      };

      proto.stop = function() {

        $document.find('body').off(AV_IDLE.EVENTS.HUMAN);

        // turns off Angular event listeners @see http://stackoverflow.com/a/14898795
        _.each(this.listeners, function(listener) {
          listener();
        });

        $timeout.cancel(this._sessionTimer);
        $timeout.cancel(this._idleTimer);
      };

      proto.isEnabled = function() {
        return enabled;
      };

      proto.enable = function(value) {
        if(arguments.length) {
          enabled = !!value;
        }

        return this;
      };

      proto.setSessionTimeout = function(timeout) {
        sessionTimeout = timeout || AV_IDLE.INTERVALS.SESSION;
        return this;
      };

      proto.setIdleTimeout = function(timeout) {
        idleTimeout = timeout || AV_IDLE.INTERVALS.IDLE;
        return this;
      };

      proto.setPingTimeout = function(timeout) {
        pingTimeout = timeout || AV_IDLE.INTERVALS.PING;
        return this;
      };

      proto.response = function(response) {
        this.sessionTimer();
        return response;
      };

      proto.isApiRequest = function(response) {
        return response && response.config && response.config.api;
      };

      proto.responseError = function(response) {

        if(this.isApiRequest() && response.status !== 401) {
          this.sessionTimer();
        }

        if(this.isApiRequest() && response.status === 401) {
          this.stopPing();
        }

        return $q.reject(response);
      };

      proto.sessionTimer = function() {

        var self = this;
        $timeout.cancel(this._sessionTimer);

        var later = function() {
          self.sessionActive();
        };

        this._sessionTimer = $timeout(later, sessionTimeout, false);

      };

      proto.idleTimer = function() {

        var self = this;
        $timeout.cancel(this._idleTimer);

        var later = function() {
          self.idleTimerActive();
        };

        this._idleTimer = $timeout(later, idleTimeout, false);
      };

      proto.sessionActive = function() {
        $log.info('idle session active');
        $rootScope.$broadcast(AV_IDLE.EVENTS.SESSION_TIMEOUT_ACTIVE);
      };

      proto.idleTimerActive = function() {

        $log.info('avIdle active');
        this.idleActive = true;
        $rootScope.$broadcast(AV_IDLE.EVENTS.ACTIVE);
      };

      proto.idleTimerInActive = function() {
        $log.info('avIdle inactive');
        this.idleActive = false;
      };

      proto.sessionInactive = function() {
        $log.info('avIdle session inactive');
        this.stop();
        document.location.href = AV_IDLE.URLS.HOME;
      };

      proto.ping = function() {

        if(this.idleActive) {
          this.stopPing();
          return;
        }

        if(!this._send) {
          this._send = avThrottle(this.send, pingTimeout, {context: this});
        }

        this.stopPing();
        this._pingTimer = this._send();
      };

      proto.stopPing = function() {
        if(this._pingTimer) {
          $timeout.cancel(this._pingTimer);
        }
      };

      proto.send = function() {

        $log.info('avIdle sending ping');
        var $http = $injector.get('$http');

        $http.get(pingUrl, {
          cache: false
        }).success(function() {
          $log.info('avIdle ping success');
        }).error(function() {
          $log.error('avIdle ping failure');
        });
      };

      proto.onEvent = function() {
        this.idleTimer();
        this.ping();
      };

      return new AvIdle();

    };

  });

})(window);
