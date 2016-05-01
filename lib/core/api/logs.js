'use strict';

import angular from 'angular';
import availity from '../module';

const LogMessagesFactory = function(AvApiResource) {

  const AvLogMessagesResource = function() {

    AvApiResource.call(this, {
      version: '/v1',
      url: '/log-messages'
    });
  };

  angular.extend(AvLogMessagesResource.prototype, AvApiResource.prototype, {

    buildRequest(level, entries) {

      const requestPayload = {};

      if (entries.level) {
        delete entries.level;
      }

      requestPayload.level = level;
      requestPayload.entries = entries;

      return requestPayload;
    },

    debug(entries) {
      return this.create(this.buildRequest('debug', entries));
    },

    info(entries) {
      return this.create(this.buildRequest('info', entries));
    },

    warn(entries) {
      return this.create(this.buildRequest('warn', entries));
    },

    error(entries) {
      return this.create(this.buildRequest('error', entries));
    }

  });

  return new AvLogMessagesResource();

};

availity.core.factory('avLogMessagesResource', LogMessagesFactory);

