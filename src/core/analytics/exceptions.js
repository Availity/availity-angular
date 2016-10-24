import moment from 'moment';
import TraceKit from 'tracekit';
import $ from 'jquery';

import ngModule from '../module';
import '../api/logs';

ngModule.constant('AV_EXCEPTIONS', {
  MESSAGES: {
    NOT_APPLICABLE: 'N/A'
  },
  TYPES: {
    EXCEPTION: 'exception'
  },
  REPEAT_LIMIT_TIME: 5000
});

class AvExceptionAnalyticsProvider {

  constructor() {
    this._enabled = true;
    this.appId;
  }

  enabled(enabled) {
    this._enabled = !!enabled;
  }

  setAppId(_id) {
    this.appId = _id;
  }

  $get($location, AV_EXCEPTIONS, $injector) {

    const that = this;

    class AvExceptionAnalytics {

      init() {

        const self = this;

        if (!that._enabled) {
          return;
        }

        TraceKit.remoteFetching = false;
        TraceKit.surroundingLinesToCollect = 11;

        // subscribe() hooks into window.error
        TraceKit.report.subscribe(function(stacktrace) {
          self.onError(stacktrace);
        });

        this.messageTimestampMap = {};
      }

      prettyPrint(stacktrace) {

        let message = '';

        const length = stacktrace.stack.length;

        for (let i = 0; i < length; i++) {
          message += [
            `[${i.toString().padStart(2, '0')}] `,
            stacktrace.stack[i].func,
            ' ',
            stacktrace.stack[i].url,
            ':',
            stacktrace.stack[i].line,
            ':',
            stacktrace.stack[i].column,
            i + 1 < length ? '\n' : ''
          ].join('');

        }

        return message;
      }

      onError(stacktrace) {

        const userAgent = window.navigator && window.navigator.userAgent ? window.navigator.userAgent : AV_EXCEPTIONS.MESSAGES.NOT_APPLICABLE;

        const message = {
          errorDate: moment(new Date()).format('YYYY-MM-DDTHH:mm:ssZZ'),
          errorName: stacktrace.name,
          errorMessage: stacktrace.message,
          errorStack: this.prettyPrint(stacktrace),
          url: $location.$$absUrl,
          appId: that.appId || AV_EXCEPTIONS.MESSAGES.NOT_APPLICABLE,
          appVersion: APP_VERSION || AV_EXCEPTIONS.MESSAGES.NOT_APPLICABLE,
          userAgent,
          userLanguage: navigator.userLanguage,
          referrer: document.referrer,
          host: document.domain,
          screenWidth: $(window).width(),
          screenHeight: $(window).height(),
          sdkVersion: process.env.VERSION
        };

        return this.log(message);

      }

      log(message) {
        const avLogMessagesResource = $injector.get('avLogMessagesResource');
        return avLogMessagesResource.error(message);
      }

      trackEvent(exception) {

        if (!that._enabled) {
          return null;
        }

        // If we've already logged this error recently, don't log it again (no need to spam the API)
        if (this._isRepeatError(exception)) {
          return;
        }

        const stacktrace = TraceKit.computeStackTrace(exception);

        return this.onError(stacktrace);

      }

      // Check to see if this error was reported within the last 5 seconds
      _isRepeatError(exception) {
        const timestamp = moment();
        const message = exception.message;
        const lastTimestamp = this.messageTimestampMap[message];
        let isRepeat = false;

        if (lastTimestamp && timestamp.diff(lastTimestamp) < AV_EXCEPTIONS.REPEAT_LIMIT_TIME) {
          isRepeat = true;
        }

        this.messageTimestampMap[message] = timestamp;
        return isRepeat;
      }

    }

    return new AvExceptionAnalytics();

  }
}

ngModule.provider('avExceptionAnalytics', AvExceptionAnalyticsProvider);

ngModule.config( $provide => {

  $provide.decorator('$exceptionHandler', ($delegate, $injector) => {

    return function(exception, cause) {
      $delegate(exception, cause);
      const errorTacking = $injector.get('avExceptionAnalytics');
      errorTacking.trackEvent(exception);
    };

  });

});

ngModule.run( avExceptionAnalytics => avExceptionAnalytics.init());

export default ngModule;


