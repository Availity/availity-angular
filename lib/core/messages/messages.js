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

    this.$get = function($rootScope, $log, AV_MESSAGES) {

      var AvMessages = function() {

      };

      var proto = AvMessages.prototype;

      proto.init = function() {

        var self = this;
        var $window = $(window);

        $window.on(AV_MESSAGES.EVENTS.MESSAGE, function(event) {
          self.onMessage(event);
        });

        $window.on(AV_MESSAGES.EVENTS.RESIZE, function() {
          self.onResize();
        });

        this.send(AV_MESSAGES.EVENTS.AV_MAXIMIZE);

        $rootScope.$on('$destroy', function() {
          self.destroy();
        });

        $window.on(AV_MESSAGES.EVENTS.UNLOAD, function() {
          self.send(AV_MESSAGES.EVENTS.AV_MINIMIZE);
        });

      };

      proto.destroy = function() {

        $(window).off(AV_MESSAGES.EVENTS.MESSAGE);
        $(window).off(AV_MESSAGES.EVENTS.RESIZE);
        $(window).off(AV_MESSAGES.EVENTS.UNLOAD);

      };

      proto.onResize = function() {

        var self = this;

        var resize =  _.debounce(function() {

          var height = $('html').height();
          self.send({
            event: AV_MESSAGES.EVENTS.AV_RESIZE,
            height: height
          });

        }, AV_MESSAGES.RESIZE_DEBOUNCE);

        resize();

      };

      proto.isDomain = function(url) {

        if(AV_MESSAGES.DOMAIN.test(this.domain())) {
          return AV_MESSAGES.DOMAIN.test(url);
        }

        return AV_MESSAGES.LOCAL.test(url);
      };

      proto.isEnabled = function() {
        return enabled;
      };

      proto.onMessage = function(_event) {

        var event = _event;

        event = event.originalEvent || event;  // jQuery wraps in `originalEvent`

        if(!event && !event.data) {
          // no op
          return;
        }

        // don't process messages emitted from same window
        if(event.source === window) {
          return;
        }

        if(!this.isDomain(event.origin)) {
          $log.warn('avMessages rejected a cross domain message since it does not match an *.availity.com  or localhost');
          return;
        }


        var data = event.data;

        try {
          data =  angular.fromJson(data);
        } catch(err) {
          $log.warn('avMessages.onMessage() failed to convert event to json payload');
        }

        if(_.isString(data)) {
          event = data;
          data = null;
        }else {
          event = data.event ? data.event : AV_MESSAGES.AV_RECEIVED;
        }

        $rootScope.$root.$broadcast(event, data);

      };

      proto.isIframe = function() {
        return window.self !== window.parent;
      };

      proto.domain = function() {

        var window = root;

        if(window.location.origin) {
          return window.location.origin;
        }

        if(window.location.hostname) {
          return window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        }

        return '*';

      };

      proto.send = function(payload) {

        try {

          var message  = _.isString(payload) ? payload : JSON.stringify(payload);
          this.postMessage(message, this.domain());

        } catch(err) {
          $log.error('avMessages.send() ', err);
        }
      };

      proto.postMessage = function(message, domain) {
        window.parent.postMessage(message, domain);
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

