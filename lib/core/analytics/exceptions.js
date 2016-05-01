'use strict';

import moment from 'moment';
import TraceKit from 'tracekit';
import _ from 'lodash';
import $ from 'jquery';

import availity from '../module';

availity.core.constant('AV_EXCEPTIONS', {
  MESSAGES: {
    NOT_APPLICABLE: 'N/A'
  },
  TYPES: {
    EXCEPTION: 'exception'
  }
});

availity.core.provider('avExceptionAnalytics', function() {

  let _enabled = true;
  let appId;

  this.enabled = function(enabled) {
    _enabled = !!enabled;
  };

  this.setAppId = function(_id) {
    appId = _id;
  };

  this.$get = function(avLogMessagesResource, $location, AV_EXCEPTIONS) {

    const AvExceptionAnalytics = function() {

    };

    const proto = AvExceptionAnalytics.prototype;

    proto.init = function() {

      const self = this;

      if (!_enabled) {
        return;
      }

      TraceKit.remoteFetching = false;
      TraceKit.surroundingLinesToCollect = 11;

      // subscribe() hooks into window.error
      TraceKit.report.subscribe(function(stacktrace) {
        self.onError(stacktrace);
      });

    };

    proto.prettyPrint = function(stacktrace) {

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
    };

    proto.onError = function(stacktrace) {

      const userAgent = root.navigator && root.navigator.userAgent ? root.navigator.userAgent : AV_EXCEPTIONS.MESSAGES.NOT_APPLICABLE;

      const message = {
        errorDate: moment(new Date()).format('YYYY-MM-DDTHH:mm:ssZZ'),
        errorName: stacktrace.name,
        errorMessage: stacktrace.message,
        errorStack: this.prettyPrint(stacktrace),
        url: $location.$$absUrl,
        appId: appId || AV_EXCEPTIONS.MESSAGES.NOT_APPLICABLE,
        // appVersion: AV_EXCEPTIONS.MESSAGES.NOT_APPLICABLE,
        userAgent,
        userLanguage: navigator.userLanguage,
        referrer: document.referrer,
        host: document.domain,
        screenWidth: $(window).width(),
        screenHeight: $(window).height(),
        sdkVersion: availity.VERSION
      };

      return this.log(message);

    };

    proto.log = function(message) {
      return avLogMessagesResource.error(message);
    };

    proto.trackEvent = function(exception) {

      if (!_enabled) {
        return null;
      }

      const stacktrace = TraceKit.computeStackTrace(exception);

      return this.onError(stacktrace);

    };

    return new AvExceptionAnalytics();

  };
});

availity.core.config(function($provide) {

  $provide.decorator('$exceptionHandler', function($delegate, $injector) {
    return function(exception, cause) {
      $delegate(exception, cause);
      const errorTacking = $injector.get('avExceptionAnalytics');
      errorTacking.trackEvent(exception);
    };
  });

});

availity.core.run(function(avExceptionAnalytics) {
  avExceptionAnalytics.init();
});


