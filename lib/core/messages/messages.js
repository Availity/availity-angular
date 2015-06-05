// https://github.com/kylewelsby/angular-post-message/blob/master/src/angular-post-message.js
//
(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.constant('AV_MESSAGES', {
    EVENTS: {
      MESSAGE: 'message'
    },
    DOMAIN: /https:\/\/[^\.]*\.availity\.com$/gi
  });

  availity.core.provider('avMessages', function(AV_MESSAGES) {

    this.register = function() {

    };

    this.$get = function($window, $rootScope) {

      var AvMessages = function() {

      };

      var proto = AvMessages.prototype;

      proto.init = function() {
        angular.element($window).bind(AV_MESSAGES.EVENTS.MESSAGE, this.onMessage);
      };

      proto.onMessage = function(event) {

      };

      proto.send = function(message, domain) {
        if (!domain) {
          domain = "*";
        }

        return $rootScope.$broadcast('av:messages:post', message, domain);
      };

      return new AvMessages();
    };

  });

  availity.core.run(function(avMessage) {
    avMessage.init();
  });


})(window);

