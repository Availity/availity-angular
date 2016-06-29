import moment from 'moment';

import ngModule from '../module';

class AvLoggerProvider {

  contructor() {
    this.enabled = false;
  }

  enabled(isEnabled) {
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
      // - Allow enabling logger through query params. Ex: http://localhost:3000/ui.html#avLogger
      canLog(fn) {

        let hash = window.location.hash;
        hash = hash || '';

        return self.enabled && hash.indexOf('avLogger') >= 0 && fn === 'error';

      }

      record(originalFn, args) {

        if (!this.canLog()) {
          return;
        }

        const $interpolate = $injector.lget('$interpolate');

        const time = this.timestamp();
        const context = this.context ? ` [${this.context}] ` : '';
        const exp = $interpolate('{time} {context}');
        const message = exp({
          time,
          context
        });

        const $log = this.$log || $injector.get('$log');
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

  }

}

ngModule.provider('AvLogger', AvLoggerProvider);

export default ngModule;


