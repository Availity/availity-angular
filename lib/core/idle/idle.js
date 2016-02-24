// Inspiration => https://github.com/HackedByChinese/ng-idle
//
// Rules:
//
//  * ping after 3 minutes from last human activity
//  * reset session after api success except 401
//  * idle show after 25 of inactivity
//
(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.constant('AV_IDLE', {
    EVENTS: {
      IDLE_INACTIVE: 'av:idle:inactive',
      IDLE_ACTIVE: 'av:idle:active',
      SESSION_TIMEOUT_ACTIVE: 'av:idle:session:active',
      SESSION_TIMEOUT_REDIRECT: 'av:idle:session:redirect',
      HUMAN: 'keydown.av.idle mousedown.av.idle keydown.av.idle',
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

  availity.core.provider('avIdle', function(AV_IDLE) {

    var enabled = false;
    var pingUrl;
    var redirectUrl;
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
      pingUrl = url || AV_IDLE.URLS.PING;
    };

    this.$get = function(AV_IDLE, $log, $document, $rootScope, $timeout, avThrottle, $q, $injector) {

      var AvIdle = function() {

        // $timeout references
        this._idleTimer = null;
        this._sessionTimer = null;
        this._pingTimer = null;
        this._keepAlive = null;

        // flag used to track if the if user is idle or session expired
        this.idleActive = false;
        this.sessionActive = false;

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

        $log.info('avIdle start');

        var self = this;
        var listener;

        !sessionTimeout && this.setSessionTimeout();
        !idleTimeout && this.setIdleTimeout();
        !pingTimeout && this.setPingTimeout();
        !pingUrl && this.setPingUrl();
        !redirectUrl && this.setRedirectUrl();

        $rootScope.$on('$destroy', function() {
          self.stop();
        });

        $document.find('body').on(AV_IDLE.EVENTS.HUMAN, function(event) {
          self.onEvent(event);
        });

        listener = $rootScope.$on(AV_IDLE.EVENTS.MACHINE, function(event, oldUrl, newUrl) {
          if(oldUrl !== newUrl) {
            self.onEvent(event);
          }
        });
        this.listeners.push(listener);

        $rootScope.$on(AV_IDLE.EVENTS.SESSION_TIMEOUT_REDIRECT, function() {
          document.location.href = redirectUrl;
        });

        this.startIdleTimer();
        this.startSessionTimer();
      };

      proto.stop = function() {

        $document.find('body').off(AV_IDLE.EVENTS.HUMAN);

        // turns off Angular event listeners @see http://stackoverflow.com/a/14898795
        _.each(this.listeners, function(listener) {
          listener();
        });

        this.stopPing();
        this.stopSessionTimer();
        this.stopIdleTimer();
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

      proto.setPingUrl = function(url) {
        pingUrl = url || AV_IDLE.URLS.PING;
        return this;
      };

      proto.setRedirectUrl = function(url) {
        redirectUrl = url || AV_IDLE.URLS.HOME;
        return this;
      };

      proto.response = function(response) {

        if(this.isApiRequest(response)) {
          this.startSessionTimer();
        }

        return response;
      };

      proto.isApiRequest = function(response) {
        return response && response.config && response.config.api;
      };

      proto.responseError = function(response) {

        if(this.isApiRequest(response) && response.status !== 401) {
          this.startSessionTimer();
        }

        if(this.isApiRequest() && response.status === 401) {
          this.stopPing();
        }

        return $q.reject(response);
      };

      proto.startSessionTimer = function() {

        var self = this;

        this.stopSessionTimer();

        var later = function() {
          $log.info('avIdle session has TIMED OUT');
          self.stop();
          $rootScope.$broadcast(AV_IDLE.EVENTS.SESSION_TIMEOUT_ACTIVE);
        };

        $log.info('avIdle session timer has STARTED');
        this._sessionTimer = $timeout(later, sessionTimeout, false);

      };

      proto.stopSessionTimer = function() {
        $log.info('avIdle session timer has STOPPED');
        $timeout.cancel(this._sessionTimer);
      };

      proto.startIdleTimer = function() {

        var self = this;

        this.stopIdleTimer();

        var later = function() {
          self.stopIdleTimer();
          $log.info('avIdle is IDLING');
          $rootScope.$broadcast(AV_IDLE.EVENTS.IDLE_ACTIVE, sessionTimeout - idleTimeout);
        };

        $log.info('avIdle idle timer has STARTED');
        this._idleTimer = $timeout(later, idleTimeout, false);
      };

      proto.stopIdleTimer = function() {
        $log.info('avIdle idle timer has STOPPED');
        $timeout.cancel(this._idleTimer);
      };

      proto.startPing = function() {

        if(!this._keepAlive) {
          $log.info('avIdle ping timer has STARTED');
          this._keepAlive = avThrottle(this.keepAlive, pingTimeout, {context: this});
        }

        this._pingTimer = this._keepAlive();
      };

      proto.stopPing = function() {
        $log.info('avIdle ping timer has STOPPED');
        if(this._pingTimer) {
          $timeout.cancel(this._pingTimer);
        }
      };

      proto.keepAlive = function() {

        // destroy the reference to that a new throttle gets created upon
        // next user or system event
        this._keepAlive = null;
        var $http = $injector.get('$http');

        $http.get(pingUrl, {
          cache: false,
          api: true
        }).success(function() {
          $log.info('avIdle keep-alive SUCCESS');
        }).error(function() {
          $log.error('avIdle keep-alive FAILURE');
        });
      };

      proto.onEvent = function() {
        this.startIdleTimer();
        this.startPing();
      };

      return new AvIdle();

    };

  });

})(window);
