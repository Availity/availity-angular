import angular from 'angular';
import $ from 'jquery';
import debounce from 'lodash.debounce';
import isString from 'lodash.isstring';

import ngModule from '../module';
import './constants';

// https://github.com/kylewelsby/angular-post-message/blob/master/src/angular-post-message.js
class AvMessageProvider {

  constructor() {
    this.enabled = true;
  }

  enable(value) {

    if (arguments.length) {
      this.enabled = !!value;
    }

    return this.enabled;

  }

  $get($rootScope, $log, AV_MESSAGES) {

    const that = this;

    class AvMessages {

      init() {

        const $window = $(window);

        $window.on(AV_MESSAGES.EVENTS.MESSAGE, ::this.onMessage);

        $window.on(AV_MESSAGES.EVENTS.RESIZE, ::this.onResize);

        $window.on(AV_MESSAGES.EVENTS.UNLOAD, ::this.onUnload);

        $rootScope.$on('$destroy', ::this.destroy);

      }

      destroy() {

        $(window).off(AV_MESSAGES.EVENTS.MESSAGE);
        $(window).off(AV_MESSAGES.EVENTS.RESIZE);
        $(window).off(AV_MESSAGES.EVENTS.UNLOAD);

      }

      onResize = debounce( () => {

        const height = $('html').height();
        this.send({
          event: AV_MESSAGES.EVENTS.AV_RESIZE,
          height
        });

      }, AV_MESSAGES.RESIZE_DEBOUNCE);

      onUnload() {

        this.send({
          event: AV_MESSAGES.EVENTS.UNLOAD
        });

      }

      isDomain(url) {

        if (AV_MESSAGES.DOMAIN.test(this.domain())) {
          return AV_MESSAGES.DOMAIN.test(url);
        }

        return AV_MESSAGES.LOCAL.test(url);
      }

      isEnabled() {
        return that.enabled;
      }

      onMessage(_event) {

        let event = _event;

        event = event.originalEvent || event;  // jQuery wraps in `originalEvent`

        if (!event && !event.data) {
          // no op
          return;
        }

        // don't process messages emitted from same window
        if (event.source === window) {
          return;
        }

        if (!this.isDomain(event.origin)) {
          $log.warn('avMessages rejected a cross domain message since it does not match an *.availity.com  or localhost');
          return;
        }


        let data = event.data;

        try {
          data = angular.fromJson(data);
        } catch (err) {
          $log.warn('avMessages.onMessage() failed to convert event to json payload');
        }

        if (angular.isString(data)) {
          event = data;
          data = null;
        } else {
          event = data.event ? data.event : AV_MESSAGES.AV_RECEIVED;
        }

        $rootScope.$root.$broadcast(event, data);

      }

      isIframe() {
        return window.self !== window.parent;
      }

      domain() {

        if (window.location.origin) {
          return window.location.origin;
        }

        if (window.location.hostname) {
          return `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`;
        }

        return '*';

      }

      send(payload) {

        try {

          const message = isString(payload) ? payload : JSON.stringify(payload);
          this.postMessage(message, this.domain());

        } catch (err) {
          $log.error('avMessages.send() ', err);
        }
      }

      postMessage(message, domain) {
        window.parent.postMessage(message, domain);
      }

    }

    return new AvMessages();
  }
}

ngModule.provider('avMessages', AvMessageProvider);

ngModule.run(function(avMessages) {

  if (avMessages.isEnabled()) {
    avMessages.init();
  }

});
