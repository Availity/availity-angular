'use strict';

import moment from 'moment';

import availity from '../module';

// Orginal => https://github.com/ericzon/angular-ny-logger/blob/0c594e864c93e7f33d36141200096bc6139ddde1/angular-ny-logger.js
availity.core.provider('AvLogger', function() {

  let enabled = false;

  this.enabled = function(isEnabled) {
    enabled = !!isEnabled;
  };

  this.$get = function($injector, $interpolate) {

    class AvLogger {

      constructor(context, $delegate) {
        this.context = context || '';
        this.$log = $delegate;
      }

      timestamp() {
        return moment(new Date()).format('HH:mm:ss:SSS');
      }

      // - Disable logging by default
      // - Allow enabling logger through query params. Ex: http://localhost:3000/ui.html#avLogger
      canLog(fn) {

        let hash = window.location.hash;
        hash = hash || '';

        return enabled && hash.indexOf('avLogger') >= 0 && fn === 'error';

      }

      record(originalFn, args) {

        if (!this.canLog()) {
          return;
        }

        let time = this.timestamp();
        let context = this.context ? ' [' + this.context + '] ' : '';
        let exp = $interpolate('{time} {context}');
        let message  = exp({
          time: time,
          context: context
        });

        let $log = this.$log || $injector.get('$log');
        $log[originalFn].apply(null, args instanceof Error ? args : message);
      }

      log() {
        this.record('log', arguments);
      }

      info() {
        this.record('info', arguments);
      }

      warn() {
        this.record('warn', arguments);
      }

      debug() {
        this.record('debug', arguments);
      }

      error() {
        this.record('error', arguments);
      }

    }

    return AvLogger;

  };

});


