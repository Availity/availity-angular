import moment from 'moment';

import ngModule from '../module';

class AvLoggerProvider {

  constructor() {
    this.enabled = true;
  }

  enable(isEnabled) {
    this.enabled = !!isEnabled;
  }

  $get($injector) {

    const self = this;

    class AvLogger {

      constructor(context, $delegate) {
        this.context = context || '';
        this.$log = $delegate;
      }

      timestamp() {
        return moment(new Date()).format('HH:mm:ss:SSS');
      }

      // - Disable logging by default
      // - Allow enabling logger through query params
      //
      // Ex:
      //    http://localhost:3000/ui.html#avLogger
      //
      canLog(fn) {

        let hash = window.location.hash;
        hash = hash || '';

        return self.enabled && hash.indexOf('avLogger') >= 0 || fn === 'error';

      }

      record(originalFn, args) {

        if (!this.canLog(originalFn)) {
          return;
        }

        const $interpolate = $injector.get('$interpolate');



        if (args[0] instanceof Error) {
          $log[originalFn].call(null, args[0]);
          return;
        }

        const context = {
          time: this.timestamp(),
          message: args[0].message
        };

        const exp = $interpolate('{{time}} {{message}}');
        const message = exp(context);

        debugger;
        const $log = this.$log || $injector.get('$log');

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

  }

}

ngModule.provider('AvLogger', AvLoggerProvider);

export default ngModule;


