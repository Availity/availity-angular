(function(root) {
  'use strict';

  var availity = root.availity;

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

  var PollingServiceFactory = function($rootScope, $q, $injector, $timeout, $log, AV_POLLING, AV_API) {

    var AvPollingService = function() {
      this.pendingRequests = []; // stores all request for polling
    };

    var proto = AvPollingService.prototype;

    proto.response = function(response) {

      if(this.isAsyncResponse(response)) {
        return this.onAsyncReponse(response);
      }

      return response || $q.when(response);
    };

    proto.setDefaults = function(config) {

      var defaultOptions = {
        pollingInterval: AV_POLLING.INTERVAL,
        pollingDecay: AV_POLLING.DECAY,
        pollingMaxInterval: AV_POLLING.MAX_ELAPSED_TIME,
        pollingRetryCount: 0,
        pollingStartTime: new Date().getTime()
      };

      return _.extend(defaultOptions, config);
    };

    proto.responseError = function(response) {
      // Return the promise rejection
      return $q.reject(response);
    };

    /**
     * API layer return a link with a polling url for
     * async responses.
     *
     * @param  {Object}  response ajax response
     * @return {Boolean} true if response has status of 202 (accepted) and location param in header with uri+session link
     */
    proto.isAsyncResponse = function(response) {

      return response &&
        response.config &&
        response.config.api &&
        response.status &&
        response.status === 202 &&
        angular.isFunction(response.headers) && !availity.isBlank(response.headers(AV_API.HEADERS.SERVER.LOCATION));
    };

    proto.onAsyncReponse = function(response) {

      response.config = this.setDefaults(response.config);

      var deferred = $q.defer();

      this.queueRequest(deferred, response);

      // [rm3]: Can't call notify before you return promise object?
      $timeout(function() {
        // Notify deferred listeners with the original server response
        deferred.notify(response);
      }, 0, false);

      return deferred.promise;
    };

    proto.getUrl = function(url) {

      var result = url.match(AV_POLLING.REGEX_URL);
      if(result && result[1]) {
        return '/api' + result[1];
      }

      return url;
    };

    proto.queueRequest = function(deferred, response) {

      var self = this;
      // server replies with location header so set the url into config
      var _url = availity.getRelativeUrl(response.headers(AV_API.HEADERS.SERVER.LOCATION));
      var _config = response.config;


      // headers – {Object} – Map of strings or functions which return strings representing HTTP headers
      //  to send to the server. If the return value of a function is null, the header
      //  will not be sent. Functions accept a config object as an argument.
      var config = {
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

      var request = {
        id: availity.uuid('request-'),
        config: config,
        deferred: deferred
      };

      var timeout = this.getPollingTimeout(config);

      // each async request should run on its own timer
      var timer = $timeout(function() {
        self.retryRequest(request.id);
      }, timeout, false);

      request.timer = timer;

      // add the async request to the queue
      this.pushRequest(request);

    };

    proto.popRequest = function(id) {

      var index = null;
      var request = null;

      for(var i = 0; i < this.pendingRequests.length; i++) {
        if(this.pendingRequests[i].id === id) {
          index = i;
          break;
        }
      }

      request = this.pendingRequests[index];
      this.pendingRequests.splice(index, 1);

      return request;
    };

    proto.pushRequest = function(request) {
      this.pendingRequests.push(request);
    };

    proto.getPollingTimeout = function(config) {
      return config.pollingDecay * config.pollingInterval;
    };

    proto.isPollingMaxTimeout = function(config) {
      var now = new Date().getTime();
      var elaspedTime = now - config.pollingStartTime;
      var isElapsed = elaspedTime > config.pollingMaxInterval;
      return isElapsed;
    },

      proto.isMaxRetried = function(config) {
        return config.pollingRetryCount >= AV_POLLING.MAX_RETRY;
      };

    proto.isPollable = function(config) {
      var _isTimeout = this.isPollingMaxTimeout(config);
      var _isMax = this.isMaxRetried(config);

      return _isTimeout || _isMax ? false : true;

    };

    proto.retryRequest = function(id) {

      var self = this;
      var request = this.popRequest(id);
      $timeout.cancel(request.timer);

      var config = request.config;

      var deferred = request.deferred;

      if(!this.isPollable(config)) {
        $log.info('Rejecting pollable response due to timeout');
        return deferred.reject(request);
      }

      // increment counters and polling timeouts
      this.increment(config);

      function successCallback(response) {
        if(self.isAsyncResponse(response)) {
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
      var $http = $injector.get('$http');

      $http(config).then(successCallback, errorCallback);

    };

    proto.increment = function(config) {
      this.incrementCounter(config);
      this.incrementDecay(config);
    };

    proto.incrementDecay = function(config) {
      if(!config._pollingDecay) {
        // store the original decay param
        config._pollingDecay = config.pollingDecay;
      }
      config.pollingDecay *= config._pollingDecay;
    };

    proto.incrementCounter = function(config) {
      config.pollingRetryCount++;
    };

    proto.clearRequests = function() {
      angular.forEach(this.pendingRequests, function(request) {
        $timeout.cancel(request.timer);
      });
      this.pendingRequests = [];
    };

    return new AvPollingService();

  };

  availity.core.factory('avPollingService', PollingServiceFactory);

})(window);
