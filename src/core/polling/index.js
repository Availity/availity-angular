import angular from 'angular';
import * as _ from 'lodash';

import ngModule from './constants';
import { getRelativeUrl, isBlank, uuid } from '../utils';
import Base from '../base';

class AvPollingService extends Base {

  static $inject = ['$rootScope', '$q', '$injector', '$timeout', '$log', 'AV_POLLING', 'AV_API'];

  constructor(...args) {
    super(...args);
    this.pendingRequests = []; // stores all request for polling
  }

  response(response) {

    if (this.isAsyncResponse(response)) {
      return this.onAsyncReponse(response);
    }

    return response || this.av.$q.when(response);
  }

  setDefaults(config) {

    const defaultOptions = {
      pollingInterval: this.av.AV_POLLING.INTERVAL,
      pollingDecay: this.av.AV_POLLING.DECAY,
      pollingMaxInterval: this.av.AV_POLLING.MAX_ELAPSED_TIME,
      pollingRetryCount: 0,
      pollingStartTime: new Date().getTime()
    };

    return _.extend(defaultOptions, config);
  }

  responseError(response) {
    // Return the promise rejection
    return this.av.$q.reject(response);
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
      angular.isFunction(response.headers) && !isBlank(response.headers(this.av.AV_API.HEADERS.SERVER.LOCATION));
  }

  onAsyncReponse(response) {

    response.config = this.setDefaults(response.config);

    const deferred = this.av.$q.defer();

    this.queueRequest(deferred, response);

    // [rm3]: Can't call notify before you return promise object?
    this.av.$timeout(function() {
      // Notify deferred listeners with the original server response
      deferred.notify(response);
    }, 0, false);

    return deferred.promise;
  }

  getUrl(url) {

    const result = url.match(this.av.AV_POLLING.REGEX_URL);
    if (result && result[1]) {
      return `/api${result[1]}`;
    }

    return url;
  }

  queueRequest(deferred, response) {

    const self = this;
    // server replies with location header so set the url into config
    const _url = getRelativeUrl(response.headers(this.av.AV_API.HEADERS.SERVER.LOCATION));
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
      id: uuid('request-'),
      config,
      deferred
    };

    const timeout = this.getPollingTimeout(config);

    // each async request should run on its own timer
    const timer = this.av.$timeout(function() {
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
    return config.pollingRetryCount >= this.av.AV_POLLING.MAX_RETRY;
  }

  isPollable(config) {
    const _isTimeout = this.isPollingMaxTimeout(config);
    const _isMax = this.isMaxRetried(config);

    return _isTimeout || _isMax ? false : true;

  }

  retryRequest(id) {

    const self = this;
    const request = this.popRequest(id);
    this.av.$timeout.cancel(request.timer);

    const config = request.config;

    const deferred = request.deferred;

    if (!this.isPollable(config)) {
      this.av.$log.info('Rejecting pollable response due to timeout');
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
    const $http = this.av.$injector.get('$http');

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
    const self = this;
    angular.forEach(this.pendingRequests, function(request) {
      self.av.$timeout.cancel(request.timer);
    });
    this.pendingRequests = [];
  }

}

ngModule.service('avPollingService', AvPollingService);

export default ngModule;


