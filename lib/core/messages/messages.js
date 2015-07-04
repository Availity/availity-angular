/* global JSON:false */

// https://github.com/kylewelsby/angular-post-message/blob/master/src/angular-post-message.js
(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.provider('avMessages', function() {

    var enabled = true;

    this.enable = function(value) {
      if(arguments.length) {
        enabled = !!value;
      }
      return enabled;
    };

    this.register = function() {

    };

    this.$get = function($window, $rootScope, $log, AV_MESSAGES) {

      var AvMessages = function() {

      };

      var proto = AvMessages.prototype;

      proto.init = function() {

        var self = this;

        $(window).on(AV_MESSAGES.EVENTS.MESSAGE, this.onMessage);

        this.send(AV_MESSAGES.EVENTS._MAXIMIZE);

        window.onbeforeunload = function() {
          self.send(AV_MESSAGES.EVENTS._MINIMIZE);
        };

      };

      proto.destroy = function() {
        $(window).off(AV_MESSAGES.EVENTS.MESSAGE);
        delete window.onbeforeunload;
      };

      proto.onResize = function() {

      };

      proto.isEnabled = function() {
        return enabled;
      };

      proto.onMessage = function(event) {

        // jQuery places the actual event data inside originalEvent
        event = event.originalEvent || event;
        var message = null;

        if(!AV_MESSAGES.DOMAIN.test(event.origin)) {
          $log.warn('avMessages rejected a cross domain message since it does not match an availity.com domain or subdomain');
          return;
        }

        if(event && event.data) {
          try {
            message = angular.fromJson(event.data);
            message.origin = event.origin;
          } catch(err) {
            $log.error('avMessages.onMessage() ', err);
            message.error = err;
          }
        }else {
          message = event;
        }

        $rootScope.$root.$broadcast(AV_MESSAGES.EVENTS.RECEIVED, message);
      };

      proto.isIframe = function() {

        try {
          return window.self !== window.top;
        } catch(e) {
          // no op
        }

        return true;

      };

      proto.domain = function() {

        var win = root;

        if(win.location.origin) {
          return win.location.origin;
        }

        if(win.location.hostname) {
          return win.location.protocol + '//' + win.location.hostname + (win.location.port ? ':' + win.location.port : '');
        } else {
          return '*';
        }

      };

      proto.send = function(event, data) {

        if(!this.isIframe()) {
          $log.warn('avMessages not sending cross domain event[{}] since there is no parent frame', [event]);
          return;
        }

        var message = {
          id: availity.uuid('message-'),
          event: event,
          origin: this.domain()
        };

        if(_.isObject(data)) {
          message.data = data;
        }

        message = JSON.stringify(message);

        try {
          $window.parent.postMessage(message, this.domain());
        }catch(err) {
          $log.error('avMessages.send() ', err);
        }

      };

      return new AvMessages();

    };

  });

  availity.core.run(function(avMessages) {

    if(avMessages.isEnabled()) {
      avMessages.init();
    }

  });

})(window);

