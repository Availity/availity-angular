/* global JSON:false */

// https://github.com/kylewelsby/angular-post-message/blob/master/src/angular-post-message.js
(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.constant('AV_MESSAGES', {
    EVENTS: {
      MESSAGE: 'message'
    },
    DOMAIN: /https:\/\/[^\.]*\.availity\.com$/gi
  });

  availity.core.provider('avMessages', function() {

    this.register = function() {

    };

    this.$get = function($window, $rootScope, $log, AV_MESSAGES) {

      var AvMessages = function() {

      };

      var proto = AvMessages.prototype;

      proto.init = function() {
        angular.element($window).bind(AV_MESSAGES.EVENTS.MESSAGE, this.onMessage);
      };

      proto.onResize = function() {

      };

      proto.onMessage = function(event) {

        event = event.originalEvent || event;

        if(!AV_MESSAGES.DOMAIN.test(event.origin)) {
          return;
        }

        if(event && event.data) {

          var message = {
            origin: event.origin,
            source : event.source
          };

          try {
            message.data = angular.fromJson(event.data);
          } catch(err) {
            $log.error('avMessages.onMessage() ', err);
            message.error = err;
          }

          $rootScope.$root.$broadcast('av:message:received', message);

        }
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

      proto.send = function(message) {

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

  availity.core.run(function(avMessage) {
    avMessage.init();
  });

})(window);

