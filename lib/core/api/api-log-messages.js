(function(root) {

  'use strict';

  var availity = root.availity;

  var LogMessagesFactory = function(AvApiResource) {

    var logMessagesResource = new AvApiResource({
      version: '/v1',
      url: '/log-messages'
    });

    var buildRequest = function(level, entries) {

      var requestPayload = {};

      if(entries.level) {
        delete entries.level;
      }

      requestPayload.level = level;
      requestPayload.entries = entries;

      return requestPayload;
    };

    return {

      debug: function(entries) {
        return logMessagesResource.create(buildRequest('debug', entries));
      },

      info: function(entries) {
        return logMessagesResource.create(buildRequest('info', entries));
      },

      warn: function(entries) {
        return logMessagesResource.create(buildRequest('warn', entries));
      },

      error: function(entries) {
        return logMessagesResource.create(buildRequest('error', entries));
      }

    };
  };

  availity.core.factory('avLogMessagesResource', LogMessagesFactory);

})(window);
