import moment from 'moment';
import TraceKit from 'tracekit';
import _ from 'lodash';
import $ from 'jquery';

import ngModule from '../module';

ngModule.constant('AV_EXCEPTIONS', {
  MESSAGES: {
    NOT_APPLICABLE: 'N/A'
  },
  TYPES: {
    EXCEPTION: 'exception'
  }
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

  $get(avLogMessagesResource, $location, AV_EXCEPTIONS) {

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

      }

      prettyPrint(stacktrace) {

        let message = '';

        const length = stacktrace.stack.length;

        for (let i = 0; i < length; i++) {
          message += [
            `[${_.padLeft(`${i}`, 2, '0')}] `,
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

        const userAgent = root.navigator && root.navigator.userAgent ? root.navigator.userAgent : AV_EXCEPTIONS.MESSAGES.NOT_APPLICABLE;

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
        return avLogMessagesResource.error(message);
      }

      trackEvent(exception) {

        if (!that._enabled) {
          return null;
        }

        const stacktrace = TraceKit.computeStackTrace(exception);

        return this.onError(stacktrace);

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


