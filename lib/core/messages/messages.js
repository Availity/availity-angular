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

    this.$get = function($window, $rootScope, $log, AV_MESSAGES) {

      var AvMessages = function() {

      };

      var proto = AvMessages.prototype;

      proto.init = function() {

        var self = this;

        $(window).on(AV_MESSAGES.EVENTS.MESSAGE, this.onMessage);

        this.send(AV_MESSAGES.EVENTS.MAXIMIZE);

        window.onbeforeunload = function() {
          self.send(AV_MESSAGES.EVENTS.MINIMIZE);
        };

      };

      proto.destroy = function() {

        $(window).off(AV_MESSAGES.EVENTS.MESSAGE);
        delete window.onbeforeunload;

      };

      proto.onResize = function() {

        var height = $('html').height();
        this.send({height: height});

      };

      proto.isDomain = function(event) {
        return AV_MESSAGES.DOMAIN.test(event.origin) || AV_MESSAGES.LOCAL.test(event.origin);
      };

      proto.isEnabled = function() {
        return enabled;
      };

      proto.onMessage = function(event) {

        var message;
        event = event.originalEvent || event;

        if(!this.isDomain(event)) {
          $log.warn('avMessages rejected a cross domain message since it does not match an *.availity.com subdomain or localhost');
          return;
        }


        if(event && event.data) {

          message = null;

          try {
            message = angular.fromJson(event.data);
          } catch(error) {
            $log.error('avMessages.onMessage()', error);
            message.error = error;
          }

          $rootScope.$root.$broadcast(AV_MESSAGES.EVENTS.RECEIVED, message);

        }
      };

      proto.isIframe = function() {
        return window.self !== window.parent;
      };

      proto.domain = function() {

        var win = root;

        if(win.location.origin) {
          return win.location.origin;
        }

        if(win.location.hostname) {
          return win.location.protocol + '//' + win.location.hostname + (win.location.port ? ':' + win.location.port : '');
        }

        return '*';

      };

      proto.send = function(event, data) {

        var destination = window.parent;

        var message = {
          event: event,
          data: data
        };

        message = data ? message : event; // if data is undefined send simple event as string

        try {
          destination.postMessage(JSON.stringify(message), this.domain());
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

