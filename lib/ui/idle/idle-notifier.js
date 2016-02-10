(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.constant('AV_UI_IDLE', {
    EVENTS: {
      OK: 'mousedown.av.idle.notifier'
    },
    TEMPLATES: {
      BASE: 'ui/idle/idle-tpl.html',
      SESSION: 'ui/idle/idle-session-tpl.html',
      WARNING: 'ui/idle/idle-warning-tpl.html'
    }
  });

  availity.ui.provider('avIdleNotifier', function() {

    var sessionTemplate;
    var warningTemplate;
    var $scope;

    this.setSessionTemplate = function(template) {
      sessionTemplate = template;
    };

    this.setWarningTemplate = function(template) {
      warningTemplate = template;
    };

    this.$get = function(AV_IDLE, AV_UI_IDLE, $rootScope, AvModal, $document, $timeout) {

      var AvIdleNotifier = function() {
        this.listeners = [];
        this.modal = null;
      };

      var proto = AvIdleNotifier.prototype;

      proto.init = function() {

        $scope = $rootScope.$new(true);
        $scope.idle = {};

        this.initListeners();
      };

      proto.initListeners = function() {

        var self = this;
        var listener = null;

        // ACTIVE IDLING
        listener = $rootScope.$on(AV_IDLE.EVENTS.IDLE_ACTIVE, function(event, timeLeft) {
          self.showWarning(timeLeft);
        });
        this.listeners.push(listener);

        // INACTIVE IDLING
        listener = $rootScope.$on(AV_IDLE.EVENTS.IDLE_INACTIVE, function() {
          self.hideWarning();
        });
        this.listeners.push(listener);

        // SESSION TIMEOUT OUT
        listener = $rootScope.$on(AV_IDLE.EVENTS.SESSION_TIMEOUT_ACTIVE, function() {
          self.showSession();
        });
        this.listeners.push(listener);

      };

      proto.destroyListeners = function() {
        // turn off each listener @see http://stackoverflow.com/a/14898795
        _.each(this.listeners, function(listener) {
          listener();
        });
      };

      proto.showWarning = function(timeLeft) {

        var self = this;

        if(this.modal !== null) {
          return;
        }

        $scope = $rootScope.$new(true);
        timeLeft = Math.round(timeLeft / 1000 / 60);
        if (timeLeft < 1) {
          timeLeft = 1;
        }
        $scope.idle = {
          timeLeft: timeLeft
        };
        $scope.idle.template = AV_UI_IDLE.TEMPLATES.WARNING;

        this.modal = new AvModal({
          show: true,
          scope: $scope,
          backdrop: 'static',
          templateUrl: AV_UI_IDLE.TEMPLATES.BASE
        });

        $document.find('body').on(AV_UI_IDLE.EVENTS.OK, function() {
          self.hideWarning();
        });

        $scope.idle.intervalId = setInterval(function() {
          var timeLeft = _.get($scope, 'idle.timeLeft');
          if (!timeLeft || timeLeft <= 1 || !self.modal) {
            clearInterval($scope.idle.intervalId);
          } else {
            $scope.idle.timeLeft--;
            $scope.$apply();
          }
        }, 1000 * 60);

      };

      proto.hideWarning = function() {
        if(this.modal) {
          this.disableBackDrop();
          this.modal.hide();
        }
        clearInterval($scope.idle.intervalId);

        this.modal = null;
      };

      proto.disableBackDrop = function() {
        $document.find('body').off(AV_UI_IDLE.EVENTS.OK);
      };

      proto.showSession = function() {
        var self = this;
        this.disableBackDrop();
        $('.modal-backdrop').addClass('blackout');

        $timeout(function() {
          $scope.idle.template = AV_UI_IDLE.TEMPLATES.SESSION;
          $scope.idle.onSessionTimeout = _.bind(self.onSessionTimeout, self);
        }, 0, true);

      };

      proto.onSessionTimeout = function() {
        $rootScope.$broadcast(AV_IDLE.EVENTS.SESSION_TIMEOUT_REDIRECT);
      };

      return new AvIdleNotifier();

    };

  });

  availity.ui.run(function(avIdleNotifier) {
    avIdleNotifier.init();
  });

})(window);
