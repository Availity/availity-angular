import angular from 'angular';
import _ from 'lodash';

import availity from '../module';

availity.core.constant('AV_POLLING', {
  INTERVAL: 1000, // delay in ms before retrying an async request
  MAX_ELAPSED_TIME: 5000, // max time in ms before polling stops and rejects original request
  MAX_RETRY: 30, // # of times the request will be tried
  DECAY: 1.2, // % the polling interval decays after every retry
  // maximum time polling is allowed before rejecting the request
  EVENTS: {
    MAX_RETRY: 'av:polling:max:retry'
  },
  REGEX_URL: /^.*?api.availity.com(.*)$/ // capture the relative url from API
});

const PollingServiceFactory = function($rootScope, $q, $injector, $timeout, $log, AV_POLLING, AV_API) {

  class AvPollingService {

    constructor() {
      this.pendingRequests = []; // stores all request for polling
    }

    response(response) {

      if (this.isAsyncResponse(response)) {
        return this.onAsyncReponse(response);
      }

      return response || $q.when(response);
    }

    setDefaults(config) {

      const defaultOptions = {
        pollingInterval: AV_POLLING.INTERVAL,
        pollingDecay: AV_POLLING.DECAY,
        pollingMaxInterval: AV_POLLING.MAX_ELAPSED_TIME,
        pollingRetryCount: 0,
        pollingStartTime: new Date().getTime()
      };

      return _.extend(defaultOptions, config);
    }

    responseError(response) {
      // Return the promise rejection
      return $q.reject(response);
    }

    /**
     * API layer return a link with a polling url for
     * async responses.
     *
     * @param  {Object}  response ajax response
     * @return {Boolean} true if response has status of 202 (accepted) and location param in header with uri+session link
     */
    isAsyncResponse(response) {

      return response &&
        response.config &&
        response.config.api &&
        response.status &&
        response.status === 202 &&
        angular.isFunction(response.headers) && !availity.isBlank(response.headers(AV_API.HEADERS.SERVER.LOCATION));
    }

    onAsyncReponse(response) {

      response.config = this.setDefaults(response.config);

      const deferred = $q.defer();

      this.queueRequest(deferred, response);

      // [rm3]: Can't call notify before you return promise object?
      $timeout(function() {
        // Notify deferred listeners with the original server response
        deferred.notify(response);
      }, 0, false);

      return deferred.promise;
    }

    getUrl(url) {

      const result = url.match(AV_POLLING.REGEX_URL);
      if (result && result[1]) {
        return `/api${result[1]}`;
      }

      return url;
    }

    queueRequest(deferred, response) {

      const self = this;
      // server replies with location header so set the url into config
      const _url = availity.getRelativeUrl(response.headers(AV_API.HEADERS.SERVER.LOCATION));
      const _config = response.config;


      // headers – {Object} – Map of strings or functions which return strings representing HTTP headers
      //  to send to the server. If the return value of a function is null, the header
      //  will not be sent. Functions accept a config object as an argument.
      const config = {
        method: 'GET',
        api: true,
        headers: _config.headers,
        pollingInterval: _config.pollingInterval,
        pollingMaxRetry: _config.pollingMaxRetry,
        pollingMaxInterval: _config.pollingMaxInterval,
        pollingStartTime: _config.pollingStartTime,
        _pollingDecay: _config._pollingDecay,
        pollingRetryCount: _config.pollingRetryCount,
        pollingDecay: _config.pollingDecay,
        url: _url, /* set the url from the server response */
        cache: false
      };

      const request = {
        id: availity.uuid('request-'),
        config,
        deferred
      };

      const timeout = this.getPollingTimeout(config);

      // each async request should run on its own timer
      const timer = $timeout(function() {
        self.retryRequest(request.id);
      }, timeout, false);

      request.timer = timer;

      // add the async request to the queue
      this.pushRequest(request);

    }

    popRequest(id) {

      let index = null;
      let request = null;

      for (let i = 0; i < this.pendingRequests.length; i++) {
        if (this.pendingRequests[i].id === id) {
          index = i;
          break;
        }
      }

      request = this.pendingRequests[index];
      this.pendingRequests.splice(index, 1);

      return request;
    }

    pushRequest(request) {
      this.pendingRequests.push(request);
    }

    getPollingTimeout(config) {
      return config.pollingDecay * config.pollingInterval;
    }

    isPollingMaxTimeout(config) {
      const now = new Date().getTime();
      const elaspedTime = now - config.pollingStartTime;
      const isElapsed = elaspedTime > config.pollingMaxInterval;
      return isElapsed;
    }

    isMaxRetried(config) {
      return config.pollingRetryCount >= AV_POLLING.MAX_RETRY;
    }

    isPollable(config) {
      const _isTimeout = this.isPollingMaxTimeout(config);
      const _isMax = this.isMaxRetried(config);

      return _isTimeout || _isMax ? false : true;

    }

    retryRequest(id) {

      const self = this;
      const request = this.popRequest(id);
      $timeout.cancel(request.timer);

      const config = request.config;

      const deferred = request.deferred;

      if (!this.isPollable(config)) {
        $log.info('Rejecting pollable response due to timeout');
        return deferred.reject(request);
      }

      // increment counters and polling timeouts
      this.increment(config);

      function successCallback(response) {
        if (self.isAsyncResponse(response)) {
          deferred.notify(response);
          self.queueRequest(request.deferred, response);
        } else {
          deferred.resolve(response);
        }
      }

      function errorCallback(response) {
        deferred.reject(response);
      }

      // Silly circular dependency trick
      const $http = $injector.get('$http');

      $http(config).then(successCallback, errorCallback);

    }

    increment(config) {
      this.incrementCounter(config);
      this.incrementDecay(config);
    }

    incrementDecay(config) {
      if (!config._pollingDecay) {
        // store the original decay param
        config._pollingDecay = config.pollingDecay;
      }
      config.pollingDecay *= config._pollingDecay;
    }

    incrementCounter(config) {
      config.pollingRetryCount++;
    }

    clearRequests() {
      angular.forEach(this.pendingRequests, function(request) {
        $timeout.cancel(request.timer);
      });
      this.pendingRequests = [];
    }

  }

  return new AvPollingService();

};

availity.core.factory('avPollingService', PollingServiceFactory);


