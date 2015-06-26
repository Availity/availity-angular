(function(root) {

  'use strict';

  var availity = root.availity;

  var LogMessagesFactory = function(AvApiResource) {

    var AvLogMessagesResource = function() {

      AvApiResource.call(this, {
        version: '/v1',
        url: '/log-messages'
      });
    };

    angular.extend(AvLogMessagesResource.prototype, AvApiResource.prototype, {

      buildRequest: function(level, entries) {

        var requestPayload = {};

        if(entries.level) {
          delete entries.level;
        }

        requestPayload.level = level;
        requestPayload.entries = entries;

        return requestPayload;
      },

      debug: function(entries) {
        return this.create(this.buildRequest('debug', entries));
      },

      info: function(entries) {
        return this.create(this.buildRequest('info', entries));
      },

      warn: function(entries) {
        return this.create(this.buildRequest('warn', entries));
      },

      error: function(entries) {
        return this.create(this.buildRequest('error', entries));
      }

    });

    return new AvLogMessagesResource();

  };

  availity.core.factory('avLogMessagesResource', LogMessagesFactory);

})(window);
