'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

var _utils = require('../utils');

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvPollingService = function (_Base) {
  _inherits(AvPollingService, _Base);

  function AvPollingService() {
    _classCallCheck(this, AvPollingService);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));

    _this.pendingRequests = []; // stores all request for polling
    return _this;
  }

  AvPollingService.prototype.response = function response(_response) {

    if (this.isAsyncResponse(_response)) {
      return this.onAsyncReponse(_response);
    }

    return _response || this.av.$q.when(_response);
  };

  AvPollingService.prototype.setDefaults = function setDefaults(config) {

    var defaultOptions = {
      pollingInterval: this.av.AV_POLLING.INTERVAL,
      pollingDecay: this.av.AV_POLLING.DECAY,
      pollingMaxInterval: this.av.AV_POLLING.MAX_ELAPSED_TIME,
      pollingRetryCount: 0,
      pollingStartTime: new Date().getTime()
    };

    return _extends(defaultOptions, config);
  };

  AvPollingService.prototype.responseError = function responseError(response) {
    // Return the promise rejection
    return this.av.$q.reject(response);
  };

  /**
   * API layer return a link with a polling url for
   * async responses.
   *
   * @param  {Object}  response ajax response
   * @return {Boolean} true if response has status of 202 (accepted) and location param in header with uri+session link
   */


  AvPollingService.prototype.isAsyncResponse = function isAsyncResponse(response) {

    return response && response.config && response.config.api && response.status && response.status === 202 && _angular2.default.isFunction(response.headers) && !(0, _utils.isBlank)(response.headers(this.av.AV_API.HEADERS.SERVER.LOCATION));
  };

  AvPollingService.prototype.onAsyncReponse = function onAsyncReponse(response) {

    response.config = this.setDefaults(response.config);

    var deferred = this.av.$q.defer();

    this.queueRequest(deferred, response);

    // [rm3]: Can't call notify before you return promise object?
    this.av.$timeout(function () {
      // Notify deferred listeners with the original server response
      deferred.notify(response);
    }, 0, false);

    return deferred.promise;
  };

  AvPollingService.prototype.getUrl = function getUrl(url) {

    var result = url.match(this.av.AV_POLLING.REGEX_URL);
    if (result && result[1]) {
      return '/api' + result[1];
    }

    return url;
  };

  AvPollingService.prototype.queueRequest = function queueRequest(deferred, response) {

    var self = this;
    // server replies with location header so set the url into config
    var _url = (0, _utils.getRelativeUrl)(response.headers(this.av.AV_API.HEADERS.SERVER.LOCATION));
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
      id: (0, _utils.uuid)('request-'),
      config: config,
      deferred: deferred
    };

    var timeout = this.getPollingTimeout(config);

    // each async request should run on its own timer
    var timer = this.av.$timeout(function () {
      self.retryRequest(request.id);
    }, timeout, false);

    request.timer = timer;

    // add the async request to the queue
    this.pushRequest(request);
  };

  AvPollingService.prototype.popRequest = function popRequest(id) {

    var index = null;
    var request = null;

    for (var i = 0; i < this.pendingRequests.length; i++) {
      if (this.pendingRequests[i].id === id) {
        index = i;
        break;
      }
    }

    request = this.pendingRequests[index];
    this.pendingRequests.splice(index, 1);

    return request;
  };

  AvPollingService.prototype.pushRequest = function pushRequest(request) {
    this.pendingRequests.push(request);
  };

  AvPollingService.prototype.getPollingTimeout = function getPollingTimeout(config) {
    return config.pollingDecay * config.pollingInterval;
  };

  AvPollingService.prototype.isPollingMaxTimeout = function isPollingMaxTimeout(config) {
    var now = new Date().getTime();
    var elaspedTime = now - config.pollingStartTime;
    var isElapsed = elaspedTime > config.pollingMaxInterval;
    return isElapsed;
  };

  AvPollingService.prototype.isMaxRetried = function isMaxRetried(config) {
    return config.pollingRetryCount >= this.av.AV_POLLING.MAX_RETRY;
  };

  AvPollingService.prototype.isPollable = function isPollable(config) {
    var _isTimeout = this.isPollingMaxTimeout(config);
    var _isMax = this.isMaxRetried(config);

    return _isTimeout || _isMax ? false : true;
  };

  AvPollingService.prototype.retryRequest = function retryRequest(id) {

    var self = this;
    var request = this.popRequest(id);
    this.av.$timeout.cancel(request.timer);

    var config = request.config;

    var deferred = request.deferred;

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
    var $http = this.av.$injector.get('$http');

    $http(config).then(successCallback, errorCallback);
  };

  AvPollingService.prototype.increment = function increment(config) {
    this.incrementCounter(config);
    this.incrementDecay(config);
  };

  AvPollingService.prototype.incrementDecay = function incrementDecay(config) {
    if (!config._pollingDecay) {
      // store the original decay param
      config._pollingDecay = config.pollingDecay;
    }
    config.pollingDecay *= config._pollingDecay;
  };

  AvPollingService.prototype.incrementCounter = function incrementCounter(config) {
    config.pollingRetryCount++;
  };

  AvPollingService.prototype.clearRequests = function clearRequests() {
    var self = this;
    _angular2.default.forEach(this.pendingRequests, function (request) {
      self.av.$timeout.cancel(request.timer);
    });
    this.pendingRequests = [];
  };

  return AvPollingService;
}(_base2.default);

AvPollingService.$inject = ['$rootScope', '$q', '$injector', '$timeout', '$log', 'AV_POLLING', 'AV_API'];


_constants2.default.service('avPollingService', AvPollingService);

exports.default = _constants2.default;