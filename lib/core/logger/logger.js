// Orginal => https://github.com/ericzon/angular-ny-logger/blob/0c594e864c93e7f33d36141200096bc6139ddde1/angular-ny-logger.js
(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.provider('AvLogger', function() {

    var _enabled = false;

    this.enabled = function(enabled) {
      _enabled = !!enabled;
    };

    this.$get = function($injector) {

      var AvLogger = function(context, $delegate) {

        this.context = context || '';
        this.$log = $delegate;

      };

      var proto = AvLogger.prototype;

      AvLogger.supplant = function(str, o) {

        var _supplant = function (a, b) {
          var r = o[b];
          return r;
        };

        return str.replace(/\{([^{}]*)\}/g, _supplant);
      };

      AvLogger.isObject = function(element) {
        var elemStr = ( !angular.isUndefined(element) && !angular.isUndefined(element.constructor) ) ? element.constructor.toString() : '';
        return (elemStr.indexOf('Object') > -1);
      };

      AvLogger.getFormattedTimestamp = function(date) {

        return AvLogger.supplant('{0}:{1}:{2}:{3}', [
          date.getHours(),
          date.getMinutes(),
          date.getSeconds(),
          date.getMilliseconds()
        ]);

      };

      proto._log = function(originalFn, args) {

        // Allow enabling logger through query params
        // Ex:
        //
        // http://localhost:3000/ui.html#avLogger

        var hash = window.location.hash;
        hash = hash || '';

        if(!_enabled && hash.indexOf('avLogger') < 0 && originalFn !== 'error') {
          return;
        }

        var now  = AvLogger.getFormattedTimestamp(new Date());
        var message = '';
        var supplantData = [];

        var context = this.context ? ' [' + this.context + '] ' : '';

        switch(args.length) {
          case 1:
            // (1) If the user supplied one argument, then the argument must be
            // the message itself and _log()
            // will print: <timestamp> - <context>: <message>
            supplantData = args[0];
            message = AvLogger.supplant('{0}{1} - {2}', [now, context, args[0]]);
            break;
          case 3:
            // (3) If the user supplied three arguments, then the first argument
            // is a method name, the second is the message and the third is an
            // object of variables to interpolate with the message. For this, _log()
            // will print: <timestamp> - <context> - <method name>('<message>')
            supplantData = args[2];
            message = AvLogger.supplant("{0}{1} - {2}(\'{3}\')", [now, context, args[0], args[1]]);
            break;
          case 2:
            // (2) If the user provided two arguments, we need to find out whether
            // they supplied a method name or an interpolation object.
            // In order to figure that out, we’ll check the type of the last argument.
            // If it is a string, then it has to be the message itself while the
            // first argument is the method name. Otherwise consider the first argument
            // as the message and the second as array of interpolation variables.
            // The output print will be according to this check.
            if(typeof args[1] === 'string') {

              message = AvLogger.supplant("{0}{1} - {2}(\'{3}\')", [now, context, args[0], args[1]]);

            } else {

              // If the message is an error, there may be a stack included. If so, we
              // should include the stack in the message to make it more meaningful.
              if(args[0].stack) {
                var errorMessage = this.formatError(args[0]);
                message = AvLogger.supplant('{0}{1} - {2}', [now, context, errorMessage]);
                supplantData = args[1];

              }else {
                supplantData = args[1];

              }

            }
            break;
        }

        var $log = this.$log || $injector.get('$log');

        var params = (AvLogger.isObject(supplantData)) ? [message, supplantData] : [AvLogger.supplant(message, supplantData)];
        $log[originalFn].apply(null, params);

      };

      proto.log = function() {
        this._log('log', arguments);
      };

      proto.info = function() {
        this._log('info', arguments);
      };

      proto.warn = function() {
        this._log('warn', arguments);
      };

      proto.debug = function() {
        this._log('debug', arguments);
      };

      // https://github.com/angular/angular.js/blob/v1.2.27/src/ng/log.js#L122
      proto.formatError = function(arg) {
        if(arg instanceof Error) {
          if(arg.stack) {

            arg = (arg.message && arg.stack.indexOf(arg.message) === -1) ?
              'Error: ' + arg.message + '\n' + arg.stack : arg.stack;

          } else if(arg.sourceURL) {
            arg = arg.message + '\n' + arg.sourceURL + ':' + arg.line;
          }
        }
        return arg;
      };

      proto.error = function() {
        this._log('error', arguments);
      };

      return AvLogger;

    };

  });


})(window);
