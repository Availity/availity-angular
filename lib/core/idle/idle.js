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
  availity.core.provider('avIdle', function() {

    var enabled = true;
    var pingUrl;


    this.enable = function(value) {
      if(arguments.length) {
        enabled = !!value;
      }
      return enabled;
    };

    this.setPingUrl = function(url) {
      pingUrl = url;
    };

    this.$get = function(AV_IDLE, $log, $document, $rootScope, $timeout, avThrottle, $q, $injector) {

      var AvIdle = function() {

        pingUrl = pingUrl || AV_IDLE.URLS.PING;

        this._idleTimer = null;
        this._sessionTimer = null;
        this._pingTimer = null;
        this.idleActive = false;

        this.listeners = [];

        this.init();

      };

      var proto = AvIdle.prototype;

      proto.init = function() {

        var self = this;

        if(!enabled) {
          this.onDisabled();
          return;
        }

        $rootScope.$on('$destroy', function() {
          self.onDisabled();
        });

        this.onEnabled();
      };

      proto.onEnabled = function() {
        var self = this;

        var listener;

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
          self.onSessionInactive();
        });


        this.idleTimer();
        this.sessionTimer();
      };

      proto.onDisabled = function() {

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

      proto.response = function(response) {
        this.sessionTimer();
        return response;
      };

      proto.responseError = function(response) {

        if(response.status !== 401) {
          this.sessionTimer();
        }

        if(response.status === 401) {
          this.unPing();
        }

        return $q.reject(response);
      };

      proto.sessionTimer = function() {

        var self = this;
        $timeout.cancel(this._sessionTimer);

        var later = function() {
          self.onSessionActive();
        };

        this._sessionTimer = $timeout(later, AV_IDLE.INTERVALS.SESSION, false);

      };

      proto.idleTimer = function() {

        var self = this;
        $timeout.cancel(this._idleTimer);

        var later = function() {
          self.idleTimerActive();
        };

        this._idleTimer = $timeout(later, AV_IDLE.INTERVALS.IDLE, false);
      };

      proto.onSessionActive = function() {
        $log.info('idle session active');
        $rootScope.$broadcast(AV_IDLE.EVENTS.SESSION_TIMEOUT_ACTIVE);
      };

      proto.idleTimerActive = function() {

        $log.info('idle active');
        this.idleActive = true;
        $rootScope.$broadcast(AV_IDLE.EVENTS.ACTIVE);
      };

      proto.idleTimerInActive = function() {
        $log.info('idle inactive');
        this.idleActive = false;
      };

      proto.onSessionInactive = function() {
        $log.info('idle session inactive');
        this.onDisabled();
        document.location.href = AV_IDLE.URLS.HOME;
      };

      proto.ping = function() {

        if(this.idleActive) {
          this.unPing();
          return;
        }

        if(!this._send) {
          this._send = avThrottle(this.send, AV_IDLE.INTERVALS.PING, {context: this});
        }

        this.unPing();
        this._pingTimer = this._send();
      };

      proto.unPing = function() {
        if(this._pingTimer) {
          $timeout.cancel(this._pingTimer);
        }
      };

      proto.send = function() {

        $log.info('sending ping');
        var $http = $injector.get('$http');

        $http.get(pingUrl, {
          cache: false
        }).success(function() {
          $log.info('ping success');
        }).error(function() {
          $log.error('ping failure');
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
