/*!
 * 
 * availity-angular v2.6.0 (05/07/2018)
 * (c) Availity, LLC
 */
webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ngModule = _angular2.default.module('availity.ui', ['ng']);

exports.default = ngModule;

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angular2.default.module('availity', ['ng']);

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.print = exports.uuid = exports.REGEX_API_URL = exports.getRelativeUrl = exports.isBlank = exports.stringify = undefined;

var _strings = __webpack_require__(41);

var _urls = __webpack_require__(42);

var _uuid = __webpack_require__(43);

var _uuid2 = _interopRequireDefault(_uuid);

var _print = __webpack_require__(44);

var _print2 = _interopRequireDefault(_print);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.stringify = _strings.stringify;
exports.isBlank = _strings.isBlank;
exports.getRelativeUrl = _urls.getRelativeUrl;
exports.REGEX_API_URL = _urls.REGEX_API_URL;
exports.uuid = _uuid2.default;
exports.print = _print2.default;

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = function Validator(name) {
  _classCallCheck(this, Validator);

  this.name = name;
};

exports.default = Validator;

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

__webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LogMessagesProvider = function () {
  function LogMessagesProvider() {
    _classCallCheck(this, LogMessagesProvider);
  }

  _createClass(LogMessagesProvider, [{
    key: '$get',
    value: function $get(AvApiResource) {
      var AvLogMessagesResource = function (_AvApiResource) {
        _inherits(AvLogMessagesResource, _AvApiResource);

        function AvLogMessagesResource() {
          _classCallCheck(this, AvLogMessagesResource);

          return _possibleConstructorReturn(this, (AvLogMessagesResource.__proto__ || Object.getPrototypeOf(AvLogMessagesResource)).call(this, {
            version: '/v1',
            name: '/log-messages'
          }));
        }

        _createClass(AvLogMessagesResource, [{
          key: 'requestPayload',
          value: function requestPayload(level, entries) {

            var payload = {};

            if (entries.level) {
              delete entries.level;
            }

            payload.level = level;
            payload.entries = entries;

            return payload;
          }
        }, {
          key: 'debug',
          value: function debug(entries) {
            return this.create(this.requestPayload('debug', entries));
          }
        }, {
          key: 'info',
          value: function info(entries) {
            return this.create(this.requestPayload('info', entries));
          }
        }, {
          key: 'warn',
          value: function warn(entries) {
            return this.create(this.requestPayload('warn', entries));
          }
        }, {
          key: 'error',
          value: function error(entries) {
            return this.create(this.requestPayload('error', entries));
          }
        }]);

        return AvLogMessagesResource;
      }(AvApiResource);

      return new AvLogMessagesResource();
    }
  }]);

  return LogMessagesProvider;
}();

_module2.default.provider('avLogMessagesResource', LogMessagesProvider);

exports.default = _module2.default;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _moment = __webpack_require__(14);

var _moment2 = _interopRequireDefault(_moment);

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

__webpack_require__(22);

__webpack_require__(32);

__webpack_require__(46);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApiResourceProvider = function () {
  function ApiResourceProvider(AV_API) {
    _classCallCheck(this, ApiResourceProvider);

    this.defaultOptions = _extends({}, AV_API.OPTIONS);
  }

  _createClass(ApiResourceProvider, [{
    key: 'setOptions',
    value: function setOptions(options) {
      _extends(this.defaultOptions, options);
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      return _angular2.default.copy(this.defaultOptions);
    }
  }, {
    key: '$get',
    value: function $get($http, $q, avPollingService, avLocalStorageService, AV_STORAGE) {

      var that = this;

      var AvApiResource = function () {
        function AvApiResource(_options) {
          _classCallCheck(this, AvApiResource);

          this.options = _options;

          if (!this.options) {
            throw new Error('[options] cannot be null or undefined');
          }

          if (this.options.name) {
            this.options.name = this.options.name.charAt(0) === '/' ? this.options.name : '/' + this.options.name;
          }

          if (!this.options.url && !this.options.name) {
            throw new Error('AvApiResource options [url] or [name] cannot be null');
          }

          // get the default options and merge into this instance
          this.options = _angular2.default.extend({}, that.defaultOptions, this.options);

          this.pageBustValue;
        }

        _createClass(AvApiResource, [{
          key: 'config',
          value: function config(_config2) {
            return _angular2.default.extend({}, this.options, _config2 || {});
          }
        }, {
          key: 'cacheBust',
          value: function cacheBust(config) {

            if (config.cacheBust === true) {
              config.params.cacheBust = (0, _moment2.default)().unix();
            } else if (_angular2.default.isFunction(config.cacheBust)) {
              config.params.cacheBust = config.cacheBust();
            } else {
              config.params.cacheBust = config.cacheBust;
            }
          }
        }, {
          key: 'setPageBust',
          value: function setPageBust(value) {
            this.pageBustValue = _angular2.default.isUndefined(value) ? (0, _moment2.default)().unix() : value;
          }
        }, {
          key: 'getPageBust',
          value: function getPageBust() {
            if (_angular2.default.isUndefined(this.pageBustValue)) {
              this.setPageBust();
            }
            return this.pageBustValue;
          }
        }, {
          key: 'pageBust',
          value: function pageBust(config) {
            if (config.pageBust === true) {
              config.params.pageBust = this.getPageBust();
            } else if (_angular2.default.isFunction(config.pageBust)) {
              config.params.pageBust = config.pageBust();
            } else {
              config.params.pageBust = config.pageBust;
            }
          }

          // cacheBust: supports the following types
          //    - true|false: Generate a timestamp each call
          //    - Value: Use this as a chacheBust variable for each call
          //    - Function: Call this function to return the cacheBust variable
          // pageBust: true|false, if true, set a cachebust variable to a timestamp of page load
          // sessionBust: true|false, if true, get the avCacheBust variable from local storage, set at
          //    login (if value not set, works like pageBust)

        }, {
          key: 'cacheParams',
          value: function cacheParams(_config) {

            var config = _angular2.default.copy(_config);
            config.params = config.params || {};

            if (config.cacheBust) {
              this.cacheBust(config);
            }

            if (config.pageBust) {
              this.pageBust(config);
            }

            if (config.sessionBust) {
              config.params.sessionBust = avLocalStorageService.getVal(AV_STORAGE.SESSION_CACHE) || this.getPageBust();
            }

            return config;
          }
        }, {
          key: 'getUrl',
          value: function getUrl(id) {

            if (this.options.api) {
              return this.getApiUrl(id);
            }

            return this.options.url;
          }
        }, {
          key: 'request',
          value: function request(config, afterCallback) {

            var self = this;
            var defer = $q.defer();

            $http(config).then(function (response) {

              // handle the async response if applicable
              var _promise = $q.when(avPollingService.response(response));

              // notify the promise listener of the original response
              defer.notify(response);

              // handle the polling service promise
              _promise.then(function (_successResponse) {

                var successResponse = _successResponse;

                if (afterCallback) {
                  successResponse = afterCallback.call(self, successResponse, config.data);
                }
                defer.resolve(successResponse);
              }, function (errorResponse) {
                return defer.reject(errorResponse);
              }, function (notifyResponse) {
                return defer.notify(notifyResponse);
              });
            }).catch(function (response) {
              defer.reject(response);
            });

            var promise = defer.promise;

            // recreate the success callback ala $http
            promise.success = function (fn) {
              promise.then(function (response) {
                fn(response.data, response.status, response.headers, response.config);
              });
              return promise;
            };

            // recreate the error callback ala $http
            promise.error = function (fn) {

              promise.then(null, function (response) {
                fn(response.data, response.status, response.headers, config);
              });

              return promise;
            };

            promise.always = promise.finally;

            return promise;
          }
        }, {
          key: 'normalize',
          value: function normalize(url) {
            return url.replace(/[\/]+/g, '/').replace(/\/$/, '');
          }
        }, {
          key: 'join',
          value: function join() {
            var joined = [].slice.call(arguments, 0).join('/');
            return this.normalize(joined);
          }
        }, {
          key: 'getApiUrl',
          value: function getApiUrl(_id) {

            var id = _id ? '/' + _id : '';

            var uri = void 0;

            var _options2 = this.options,
                path = _options2.path,
                version = _options2.version,
                name = _options2.name,
                url = _options2.url;


            if (name) {
              uri = this.join('/', path, version, name, id);
            } else {
              uri = this.join(url, id);
            }

            return uri;
          }
        }, {
          key: 'create',
          value: function create(_data, _config) {

            var data = _data;
            var config = _config;

            if (!data) {
              throw new Error('called method without [data]');
            }

            if (this.beforeCreate) {
              data = this.beforeCreate(data);
            }

            config = this.config(config);
            config.method = 'POST';
            config.url = this.getUrl();
            config.data = data;

            return this.request(config, this.afterCreate);
          }
        }, {
          key: 'postGet',
          value: function postGet(_data, _config) {
            var data = _data;
            var config = _config;

            if (!data) {
              throw new Error('called method without [data]');
            }
            if (this.beforePostGet) {
              data = this.beforePostGet(data);
            }
            config = this.config(config);
            config.method = 'POST';
            config.headers['X-HTTP-Method-Override'] = 'GET';
            config.url = this.getUrl();
            config.data = data;

            return this.request(config, this.afterPostGet);
          }
        }, {
          key: 'get',
          value: function get(id, _config) {

            var config = _config;

            if (!id) {
              throw new Error('called method without [id]');
            }

            config = this.config(config);
            config = this.cacheParams(config);

            config.method = 'GET';
            config.url = this.getUrl(id);

            return this.request(config, this.afterGet);
          }
        }, {
          key: 'query',
          value: function query(_config) {

            var config = _config;

            config = this.config(config);
            config = this.cacheParams(config);

            config.method = 'GET';
            config.url = this.getUrl();

            return this.request(config, this.afterQuery);
          }
        }, {
          key: 'update',
          value: function update(id, _data, _config) {

            var config = _config;
            var data = _data;

            var url = void 0;

            if (_angular2.default.isString(id) || _angular2.default.isNumber(id)) {
              url = this.getUrl(id);
            } else {
              url = this.getUrl();

              // At this point the function signature becomes:
              //
              // update(data, config) {} a.k.a function(id, data)
              //
              config = data; // config is really the 2nd param
              data = id; // data is really the first param
            }

            if (this.beforeUpdate) {
              data = this.beforeUpdate(data);
            }

            config = this.config(config);
            config.method = 'PUT';
            config.url = url;
            config.data = data;

            return this.request(config, this.afterUpdate);
          }
        }, {
          key: 'remove',
          value: function remove(id, _config) {

            var config = _config;

            var url = void 0;
            var data = void 0;

            if (_angular2.default.isString(id) || _angular2.default.isNumber(id)) {
              url = this.getUrl(id);
            } else {

              // At this point the function signature becomes:
              //
              // remove(data, config)
              //
              url = this.getUrl();
              data = id;
            }

            config = this.config(config);
            config.method = 'DELETE';
            config.url = url;
            config.data = data;

            return this.request(config, this.afterRemove);
          }
        }, {
          key: 'beforeCreate',
          value: function beforeCreate(data) {
            return data;
          }
        }, {
          key: 'afterCreate',
          value: function afterCreate(response) {
            return response;
          }
        }, {
          key: 'beforePostGet',
          value: function beforePostGet(data) {
            return data;
          }
        }, {
          key: 'afterPostGet',
          value: function afterPostGet(response) {
            return response;
          }
        }, {
          key: 'afterQuery',
          value: function afterQuery(response) {
            return response;
          }
        }, {
          key: 'afterGet',
          value: function afterGet(response) {
            return response;
          }
        }, {
          key: 'beforeUpdate',
          value: function beforeUpdate(data) {
            return data;
          }
        }, {
          key: 'afterUpdate',
          value: function afterUpdate(response) {
            return response;
          }
        }, {
          key: 'afterRemove',
          value: function afterRemove(response) {
            return response;
          }
        }]);

        return AvApiResource;
      }();

      return AvApiResource;
    }
  }]);

  return ApiResourceProvider;
}();

_module2.default.provider('AvApiResource', ApiResourceProvider);

exports.default = _module2.default;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.constant('AV_API', {
  HEADERS: {
    SERVER: {
      ID: 'X-API-ID',
      LOCATION: 'Location',
      STATUS: 'X-Status-Message',
      GLOBAL_ID: 'X-Global-Transaction-ID'
    },
    CLIENT: {
      SESSION_ID: 'X-Session-ID',
      AUTH: 'Authorization',
      OVERRIDE: 'X-HTTP-Method-Override',
      CALLBACK_URL: 'X-Callback-URL',
      CUSTOMER_ID: 'X-Availity-Customer-ID',
      RESPONSE_ENCODING: 'X-Response-Encoding-Context'
    }
  },
  OPTIONS: {

    // default base segment for Availity API endpoints
    path: '/api',

    // full url to api resource
    url: null,

    // name of resource
    name: null,

    // defaults version for api
    version: '/v1',

    // cache all request by default
    cache: true,

    // flag used to enable behaviors around the Availity Rest API
    api: true,

    // in ms
    pollingInterval: 1000,

    // % the polling interval decays after every retry
    pollingDecay: 1.2,

    // maximum time polling is allowed before rejecting the request
    pollingMaxInterval: 30000,

    // default headers
    headers: {
      // Turn off content encoding for angular apis
      'X-Response-Encoding-Context': 'NONE'
    },
    sessionBust: true
  }
});

exports.default = _module2.default;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.factory('avValUtils', function () {

  return {
    isDefined: function isDefined(value) {
      return _angular2.default.isDefined(value) && value !== '' && value !== null;
    },
    isEmpty: function isEmpty(value) {
      return !this.isDefined(value) || _angular2.default.isString(value) && value.trim() === '';
    }
  };
});

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvConfig = function () {
  function AvConfig() {
    _classCallCheck(this, AvConfig);

    // 1: value expression (valueFn)
    // 2: label expression (displayFn)
    // 3: group by expression (groupByFn)
    // 4: disable when expression (disableWhenFn)
    // 5: array item variable name
    // 6: object item key variable name
    // 7: object item value variable name
    // 8: collection expression
    // 9: track by expression
    this.NG_OPTIONS_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/;

    this.SELECT2_OPTIONS = ['width', 'minimumInputLength', 'maximumInputLength', 'minimumResultsForSearch', 'maximumSelectionSize', 'placeholderOption', 'separator', 'allowClear', 'multiple', 'closeOnSelect', 'openOnEnter', 'id', 'matcher', 'sortResults', 'formatSelection', 'formatResult', 'formatResultCssClass', 'formatNoMatches', 'formatSearching', 'formatAjaxError', 'formatInputTooShort', 'formatInputTooLong', 'formatSelectionTooBig', 'formatLoadMore', 'createSearchChoice', 'createSearchChoicePosition', 'initSelection', 'tokenizer', 'tokenSeparators', 'query', 'ajax', 'data', 'tags', 'containerCss', 'containerCssClass', 'dropdownCss', 'dropdownCssClass', 'dropdownAutoWidth', 'adaptContainerCssClass', 'adaptDropdownCssClass', 'escapeMarkup', 'selectOnBlur', 'loadMorePadding', 'nextSearchTerm', 'correlationId', 'eventListeners'];

    this.DEFAULTS = {
      closeOnResize: true,
      dropdownAutoWidth: true,
      minimumResultsForSearch: 5,
      width: '100%'
    };
  }

  _createClass(AvConfig, [{
    key: 'set',
    value: function set(options) {
      _angular2.default.extend(this.DEFAULTS, options);
    }
  }, {
    key: '$get',
    value: function $get() {

      return _angular2.default.copy({
        SELECT2_OPTIONS: this.SELECT2_OPTIONS,
        DEFAULTS: this.DEFAULTS,
        NG_OPTIONS_REGEXP: this.NG_OPTIONS_REGEXP
      });
    }
  }]);

  return AvConfig;
}();

_module2.default.provider('avDropdownConfig', AvConfig);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _lodash = __webpack_require__(71);

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = __webpack_require__(72);

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = __webpack_require__(73);

var _lodash6 = _interopRequireDefault(_lodash5);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

var _utils = __webpack_require__(12);

__webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvDropdownController = function () {
  function AvDropdownController($element, $attrs, avDropdownConfig, $scope, $timeout, $parse) {
    _classCallCheck(this, AvDropdownController);

    this.av = { $element: $element, $attrs: $attrs, avDropdownConfig: avDropdownConfig, $scope: $scope, $timeout: $timeout, $parse: $parse };

    this.options = {};
    this.match = null;
    this.ngModel = null;
    this.locals = {};
  }

  _createClass(AvDropdownController, [{
    key: 'init',
    value: function init(context) {
      var _this = this;

      this.ngModel = context.ngModel;

      this.multiple = _angular2.default.isDefined(this.av.$attrs.multiple);

      this.options = _angular2.default.extend({}, this.av.avDropdownConfig.DEFAULTS, this.av.$scope.$eval(this.av.$attrs.options));

      if (this.isRemoteMultiple()) {
        this.options.multiple = _angular2.default.isDefined(this.av.$attrs.multiple);
      }

      if (this.options.query) {

        // Map AvSelectResource into Select2 options
        this.resource = this.options.query;

        // Function used to query results for the search term.
        this.options.query = function (options) {
          _this.query(options);
        };
        // Function used to get the id from the choice object or a string representing the key under which the id is stored.
        this.options.id = this.resource.getId;
        this.options.initSelection = this.resource.initSelection;
      }

      // if element is type input, initSelection is required to use val
      if (!this.av.$element.is('select') && !this.options.initSelection) {
        this.options.initSelection = this.initSelection;
      }
    }
  }, {
    key: 'isRemoteMultiple',
    value: function isRemoteMultiple() {
      return _angular2.default.isDefined(this.av.$attrs.multiple) && this.av.$element.get(0).tagName.toLowerCase() === 'input';
    }
  }, {
    key: 'initSelection',
    value: function initSelection(element, callback) {
      callback();
    }
  }, {
    key: 'setRemoteViewValue',
    value: function setRemoteViewValue(e) {

      var values = this.ngModel.$viewValue;

      if (!_angular2.default.isArray(values) || !_angular2.default.isObject(values)) {
        values = [];
      }

      if (e.added) {
        // Adding to collection
        values.push(e.added);
      } else {
        // Removing from collection
        var index = (0, _lodash2.default)(values, function (value) {
          return (0, _lodash4.default)(e.removed)(value);
        });
        values.splice(index, 1);
      }

      this.ngModel.$setViewValue(values);
    }
  }, {
    key: 'setViewValue',
    value: function setViewValue(e) {
      this.ngModel.$setViewValue(e.added);
    }
  }, {
    key: 'hashKey',
    value: function hashKey(obj, nextUidFn) {
      var key = obj && obj.$$hashKey;

      if (key) {
        if (typeof key === 'function') {
          key = obj.$$hashKey();
        }
        return key;
      }

      var objType = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
      if (objType === 'function' || objType === 'object' && obj !== null) {
        key = obj.$$hashKey = objType + ':' + (nextUidFn || _utils.uuid)();
      } else {
        key = objType + ':' + obj;
      }

      return key;
    }
  }, {
    key: 'getTrackByValueFn',
    value: function getTrackByValueFn(value, locals) {

      if (this.trackBy) {
        return this.trackByFn(this.av.$scope, locals);
      }

      return this.hashKey(value);
    }
  }, {
    key: 'getSelected',
    value: function getSelected(model) {
      var _this2 = this;

      var self = this;

      if (this.options.query) {
        return 0;
      }

      if (!this.collection) {
        // If we're not using ng-options, the model value is just the raw value of the option,
        // rather than an index, so return it as is.
        return model;
      }

      var optionValues = this.valuesFn(self.av.$scope) || [];
      var optionValuesKeys = this.getOptionValuesKeys(optionValues);

      var index = (0, _lodash2.default)(this.collection, function (item) {
        return _angular2.default.equals(model, item) || _angular2.default.isObject(item) && _this2.valueName && _angular2.default.equals(model, item[_this2.valueName]);
      });

      var key = optionValues === optionValuesKeys ? index : optionValuesKeys[index];
      var value = optionValues[key];
      var locals = self.getLocals(value, key);
      var viewValue = self.viewValueFn(self.av.$scope, locals);
      var selectValue = self.getTrackByValueFn(viewValue, locals);

      return selectValue;
    }
  }, {
    key: 'getMultiSelected',
    value: function getMultiSelected(viewValues) {

      var self = this;

      var values = [];

      if (!viewValues) {
        return values;
      }

      if (this.av.$element.get(0).tagName.toLowerCase() !== 'input') {

        viewValues.forEach(function (viewValue) {

          var selected = self.getSelected(viewValue);

          values.push(selected);
        });
      }

      return values;
    }

    // Wrapper around the query function for Select2.  When the promise resolves
    // the callback

  }, {
    key: 'query',
    value: function query(options) {

      this.resource.onQuery(options).then(function (response) {

        // Callback function that should be called with the result object. The result object:
        //
        // result.results (object) - Array of result objects. The default renderers
        //    expect objects with id and text keys. The id property is required,
        //    even if custom renderers are used. The object may also contain a children
        //    key if hierarchical data is displayed. The object may also contain a disabled
        //    boolean property indicating whether this result can be selected.
        //
        // result.more (boolean) - true if more results are available for the current
        //    search term.
        //
        // results.context (object) - A user-defined object that should be made available
        //    as the context parameter to the query function on subsequent queries to load
        //    more result pages for the same search term. See the description of
        //    options.context parameter.
        options.callback({ more: response.more, results: response.results });
      });
    }
  }, {
    key: 'setValue',
    value: function setValue() {
      var self = this;
      if (this.options.query) {
        var modelValue = this.ngModel.$modelValue;
        this.av.$timeout(function () {
          return self.av.$element.select2('data', modelValue);
        });
      } else {
        var viewValue = this.ngModel.$viewValue;

        var selected = null;
        if (this.multiple) {
          selected = this.getMultiSelected(viewValue);
        } else {
          selected = this.getSelected(viewValue);
        }

        // null === '' for Select2
        selected = selected === null || selected === 'undefined' ? '' : selected;

        this.av.$timeout(function () {
          return self.av.$element.select2('val', selected);
        });
      }
    }
  }, {
    key: 'setValues',
    value: function setValues() {
      var _this3 = this;

      if (this.options.query) {
        var modelValue = this.ngModel.$modelValue;
        this.av.$timeout(function () {
          return self.av.$element.select2('data', modelValue);
        });
      } else {
        var viewValue = this.ngModel.$viewValue;

        if (!_angular2.default.isArray(viewValue)) {
          viewValue = [];
        }

        if (!(0, _lodash6.default)(viewValue) && _angular2.default.isObject(viewValue[0])) {
          viewValue = this.getMultiSelected(viewValue);
        }

        this.av.$timeout(function () {
          return _this3.av.$element.select2('val', viewValue);
        });
      }
    }
  }, {
    key: 'ngOptions',
    value: function ngOptions() {

      this.match = this.av.$attrs.ngOptions.match(this.av.avDropdownConfig.NG_OPTIONS_REGEXP);
      if (!this.match) {
        throw new Error('Invalid ngOptions for avDropdown.  @See https://docs.angularjs.org/api/ng/directive/ngOptions');
      }

      // NG_OPTIONS_REGEXP regex will parse into arrays like below:

      // 1: value expression (valueFn)
      // 2: label expression (displayFn)
      // 3: group by expression (groupByFn)
      // 4: disable when expression (disableWhenFn)
      // 5: array item variable name
      // 6: object item key variable name
      // 7: object item value variable name
      // 8: collection expression
      // 9: track by expression

      // The variable name for the value of the item in the collection
      this.valueName = this.match[5] || this.match[7];

      // An expression that generates the viewValue for an option if there is no label expression
      this.valueFn = this.av.$parse(this.match[2] ? this.match[1] : this.valueName);

      // The variable name for the key of the item in the collection
      this.keyName = this.match[6];

      // An expression that generates the viewValue for an option if there is a label expression
      this.selectAs = / as /.test(this.match[0]) && this.match[1];

      // An expression that generates the viewValue for an option if there is a label expression
      // An expression that is used to track the id of each object in the options collection
      this.trackBy = this.match[9];
      this.selectAsFn = this.selectAs && this.av.$parse(this.selectAs);
      this.viewValueFn = this.selectAsFn || this.valueFn;
      this.trackByFn = this.trackBy && this.av.$parse(this.trackBy);

      this.displayFn = this.av.$parse(this.match[2] || this.match[1]);
      this.groupByFn = this.av.$parse(this.match[3] || '');
      this.disableWhenFn = this.av.$parse(this.match[4] || '');
      this.valuesFn = this.av.$parse(this.match[8]);
      this.collection = this.valuesFn(this.av.$scope);

      this.av.$scope.$watchCollection(this.collection, function (newVal, oldVal) {

        if (_angular2.default.equals(newVal, oldVal)) {
          return;
        }

        self.setValue();
      }, true);
    }
  }, {
    key: 'getLocals',
    value: function getLocals(value, key) {

      var locals = {};

      if (this.keyName) {
        locals[this.keyName] = key;
        locals[this.valueName] = value;
      } else {
        locals[this.valueName] = value;
      }

      return locals;
    }
  }, {
    key: 'getOptionValuesKeys',
    value: function getOptionValuesKeys(optionValues) {

      var optionValuesKeys = void 0;

      if (!this.keyName && Array.isArray(optionValues)) {
        optionValuesKeys = optionValues;
      } else {
        // if object, extract keys, in enumeration order, unsorted
        optionValuesKeys = [];
        for (var itemKey in optionValues) {
          if (optionValues.hasOwnProperty(itemKey) && itemKey.charAt(0) !== '$') {
            optionValuesKeys.push(itemKey);
          }
        }
      }
      return optionValuesKeys;
    }
  }]);

  return AvDropdownController;
}();

_module2.default.controller('AvDropdownController', AvDropdownController);

exports.default = AvDropdownController;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// A basic clone of /src/core/api/organizations.js. The original services applies afterQuery
// transformation which removes the pagination bits of the response (needed by dropdown pagination)
var OrganizationsSelectResourceFactory = function OrganizationsSelectResourceFactory(AvSelectResource, avUsersResource) {
  var OrganizationsSelectResource = function (_AvSelectResource) {
    _inherits(OrganizationsSelectResource, _AvSelectResource);

    function OrganizationsSelectResource() {
      _classCallCheck(this, OrganizationsSelectResource);

      return _possibleConstructorReturn(this, (OrganizationsSelectResource.__proto__ || Object.getPrototypeOf(OrganizationsSelectResource)).call(this, {
        path: '/api/sdk/platform',
        name: 'organizations'
      }));
    }

    _createClass(OrganizationsSelectResource, [{
      key: 'queryOrganizations',
      value: function queryOrganizations(user, config) {

        var params = {
          params: {
            userId: user.id
          }
        };

        // merge in params with user ID
        var queryConfig = _angular2.default.merge({}, params, config);

        return this.query(queryConfig);
      }
    }, {
      key: 'defaultQuery',
      value: function defaultQuery(config) {
        return this.getOrganizations(config);
      }
    }, {
      key: 'getOrganizations',
      value: function getOrganizations(config) {

        var self = this;

        return avUsersResource.me().then(function (user) {
          return self.queryOrganizations.call(self, user, config);
        });
      }
    }, {
      key: 'getResults',
      value: function getResults(response) {
        return response.organizations;
      }
    }, {
      key: 'mapResult',
      value: function mapResult(item) {
        return {
          id: item.customerId,
          text: item.name
        };
      }
    }]);

    return OrganizationsSelectResource;
  }(AvSelectResource);

  return new OrganizationsSelectResource();
};

_module2.default.factory('avSelectOrganizationsResource', OrganizationsSelectResourceFactory);

exports.default = _module2.default;

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _constants = __webpack_require__(45);

var _constants2 = _interopRequireDefault(_constants);

var _utils = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvPollingService = function () {
  function AvPollingService($rootScope, $q, $injector, $timeout, $log, AV_POLLING, AV_API) {
    _classCallCheck(this, AvPollingService);

    this.av = { $rootScope: $rootScope, $q: $q, $injector: $injector, $timeout: $timeout, $log: $log, AV_POLLING: AV_POLLING, AV_API: AV_API };
    this.pendingRequests = []; // stores all request for polling
  }

  _createClass(AvPollingService, [{
    key: 'response',
    value: function response(_response) {

      if (this.isAsyncResponse(_response)) {
        return this.onAsyncReponse(_response);
      }

      return _response || this.av.$q.when(_response);
    }
  }, {
    key: 'setDefaults',
    value: function setDefaults(config) {

      var defaultOptions = {
        pollingInterval: this.av.AV_POLLING.INTERVAL,
        pollingDecay: this.av.AV_POLLING.DECAY,
        pollingMaxInterval: this.av.AV_POLLING.MAX_ELAPSED_TIME,
        pollingRetryCount: 0,
        pollingStartTime: new Date().getTime()
      };

      return _extends(defaultOptions, config);
    }
  }, {
    key: 'responseError',
    value: function responseError(response) {
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

  }, {
    key: 'isAsyncResponse',
    value: function isAsyncResponse(response) {

      return response && response.config && response.config.api && response.status && response.status === 202 && _angular2.default.isFunction(response.headers) && !(0, _utils.isBlank)(response.headers(this.av.AV_API.HEADERS.SERVER.LOCATION));
    }
  }, {
    key: 'onAsyncReponse',
    value: function onAsyncReponse(response) {

      response.config = this.setDefaults(response.config);

      var deferred = this.av.$q.defer();

      this.queueRequest(deferred, response);

      // [rm3]: Can't call notify before you return promise object?
      this.av.$timeout(function () {
        // Notify deferred listeners with the original server response
        deferred.notify(response);
      }, 0, false);

      return deferred.promise;
    }
  }, {
    key: 'getUrl',
    value: function getUrl(url) {

      var result = url.match(this.av.AV_POLLING.REGEX_URL);
      if (result && result[1]) {
        return '/api' + result[1];
      }

      return url;
    }
  }, {
    key: 'queueRequest',
    value: function queueRequest(deferred, response) {

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
    }
  }, {
    key: 'popRequest',
    value: function popRequest(id) {

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
    }
  }, {
    key: 'pushRequest',
    value: function pushRequest(request) {
      this.pendingRequests.push(request);
    }
  }, {
    key: 'getPollingTimeout',
    value: function getPollingTimeout(config) {
      return config.pollingDecay * config.pollingInterval;
    }
  }, {
    key: 'isPollingMaxTimeout',
    value: function isPollingMaxTimeout(config) {
      var now = new Date().getTime();
      var elaspedTime = now - config.pollingStartTime;
      var isElapsed = elaspedTime > config.pollingMaxInterval;
      return isElapsed;
    }
  }, {
    key: 'isMaxRetried',
    value: function isMaxRetried(config) {
      return config.pollingRetryCount >= this.av.AV_POLLING.MAX_RETRY;
    }
  }, {
    key: 'isPollable',
    value: function isPollable(config) {
      var _isTimeout = this.isPollingMaxTimeout(config);
      var _isMax = this.isMaxRetried(config);

      return _isTimeout || _isMax ? false : true;
    }
  }, {
    key: 'retryRequest',
    value: function retryRequest(id) {

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
    }
  }, {
    key: 'increment',
    value: function increment(config) {
      this.incrementCounter(config);
      this.incrementDecay(config);
    }
  }, {
    key: 'incrementDecay',
    value: function incrementDecay(config) {
      if (!config._pollingDecay) {
        // store the original decay param
        config._pollingDecay = config.pollingDecay;
      }
      config.pollingDecay *= config._pollingDecay;
    }
  }, {
    key: 'incrementCounter',
    value: function incrementCounter(config) {
      config.pollingRetryCount++;
    }
  }, {
    key: 'clearRequests',
    value: function clearRequests() {
      var self = this;
      _angular2.default.forEach(this.pendingRequests, function (request) {
        self.av.$timeout.cancel(request.timer);
      });
      this.pendingRequests = [];
    }
  }]);

  return AvPollingService;
}();

_constants2.default.service('avPollingService', AvPollingService);

exports.default = _constants2.default;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(22);

__webpack_require__(20);

__webpack_require__(49);

__webpack_require__(50);

__webpack_require__(51);

__webpack_require__(52);

__webpack_require__(53);

__webpack_require__(21);

__webpack_require__(34);

__webpack_require__(54);

__webpack_require__(55);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spaces = function Spaces(AvApiResource) {
  var SpacesResource = function (_AvApiResource) {
    _inherits(SpacesResource, _AvApiResource);

    function SpacesResource() {
      _classCallCheck(this, SpacesResource);

      return _possibleConstructorReturn(this, (SpacesResource.__proto__ || Object.getPrototypeOf(SpacesResource)).call(this, {
        path: '/api/sdk/platform',
        name: '/spaces'
      }));
    }

    return SpacesResource;
  }(AvApiResource);

  return new SpacesResource();
};

_module2.default.factory('avSpacesResource', Spaces);

exports.default = _module2.default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.constant('AV_UI', {
  FALLBACK_VALIDATION_MESSAGE: 'This field is invalid.'
});

_module2.default.constant('AV_BOOTSTRAP_ADAPTER', {
  CLASSES: {
    SUCCESS: 'has-success',
    WARNING: 'has-warning',
    ERROR: 'has-error',
    FEEDBACK: 'has-feedback',
    HELP: 'help-block',
    FORM_GROUP: '.form-group:first',
    NAVBAR: 'navbar-fixed-top'
  },
  SELECTORS: {
    CONTAINER: 'container-id',
    DATA_CONTAINER: 'data-container-id'
  },
  CONTROLLER: '$avValContainerController'
});

_module2.default.constant('AV_VAL_ADAPTER', {
  DEFAULT: 'avValBootstrapAdapter'
});

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringify = stringify;
exports.isBlank = isBlank;
// https://github.com/epeli/underscore.string/blob/cebddf40cf2e10f0e9b596d9654edd0a1cfefc15/helper/makeString.js
function stringify(object) {
  if (object === null) {
    return '';
  }
  return '' + object;
}

// https://github.com/epeli/underscore.string/blob/cebddf40cf2e10f0e9b596d9654edd0a1cfefc15/isBlank.js
function isBlank(str) {
  return (/^\s*$/.test(stringify(str))
  );
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var REGEX_API_URL = /^.*?api.availity.com(.*)$/;

function getRelativeUrl(url) {

  var result = url.match(REGEX_API_URL);
  if (result && result[1]) {
    return "/api" + result[1];
  }

  return url;
}

exports.REGEX_API_URL = REGEX_API_URL;
exports.getRelativeUrl = getRelativeUrl;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uuid;
var uid = ['0', '0', '0'];

function uuid(prefix) {

  var index = uid.length;
  var digit = void 0;

  while (index) {
    index--;
    digit = uid[index].charCodeAt(0);
    if (digit === 57 /* '9' */) {
        uid[index] = 'A';
        return prefix ? prefix + uid.join('') : uid.join('');
      }
    if (digit === 90 /* 'Z' */) {
        uid[index] = '0';
      } else {
      uid[index] = String.fromCharCode(digit + 1);
      return prefix ? prefix + uid.join('') : uid.join('');
    }
  }
  uid.unshift('0');

  return prefix ? prefix + uid.join('') : uid.join('');
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = print;
// https://github.com/jasonday/printThis/commit/66f9cbd0e3760767342eed4ef32cf8294417b227

function print() {

  if (document.queryCommandSupported('print')) {
    document.execCommand('print', false, null);
  } else {
    window.focus();
    window.print();
  }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.constant('AV_POLLING', {
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

exports.default = _module2.default;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = __webpack_require__(14);

var _moment2 = _interopRequireDefault(_moment);

var _lodash = __webpack_require__(47);

var _lodash2 = _interopRequireDefault(_lodash);

var _constants = __webpack_require__(48);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvLocalStorageService = function () {
  function AvLocalStorageService($window) {
    _classCallCheck(this, AvLocalStorageService);

    this.$window = $window;
    this.hasSupport;
  }

  _createClass(AvLocalStorageService, [{
    key: 'supportsLocalStorage',
    value: function supportsLocalStorage() {

      if (!this.hasSupport) {

        var hasSupport = false;
        try {

          var localStorage = this.$window.localStorage;
          if (localStorage) {
            var uid = (0, _moment2.default)().unix();

            localStorage.setItem(uid, uid);
            var testVal = localStorage.getItem(uid);
            hasSupport = testVal === uid.toString();

            localStorage.removeItem(uid);
          }
        } catch (e) {
          hasSupport = false;
        }

        this.hasSupport = hasSupport;
      }
      return this.hasSupport;
    }
  }, {
    key: 'getVal',
    value: function getVal(key) {
      if (this.supportsLocalStorage()) {
        return this.$window.localStorage.getItem(key);
      }
    }
  }, {
    key: 'getObjVal',
    value: function getObjVal(key) {
      var rawVal = this.getVal(key);
      return rawVal ? rawVal : JSON.parse(rawVal);
    }
  }, {
    key: 'setVal',
    value: function setVal(key, value) {
      if (this.supportsLocalStorage()) {
        this.$window.localStorage.setItem(key, value);
      }
    }
  }, {
    key: 'removeVal',
    value: function removeVal(key) {
      if (this.supportsLocalStorage()) {
        this.$window.localStorage.removeItem(key);
      }
    }
  }, {
    key: 'removeKeys',
    value: function removeKeys(searchKey) {
      var _this = this;

      if (this.supportsLocalStorage()) {

        var regexString = (0, _lodash2.default)(searchKey) ? searchKey : new RegExp(searchKey);
        if (regexString) {

          var removeKeys = [];
          var length = this.$window.localStorage.length;
          for (var i = 0; i < length; i++) {
            var thisKey = this.$window.localStorage.key(i);
            if (regexString.test(thisKey)) {
              removeKeys.push(thisKey);
            }
          }

          removeKeys.forEach(function (key) {
            _this.removeVal(key);
          });
        }
      }
    }
  }]);

  return AvLocalStorageService;
}();

AvLocalStorageService.$inject = ['$window'];


_constants2.default.service('avLocalStorageService', AvLocalStorageService);

exports.default = _constants2.default;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var regexpTag = '[object RegExp]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */
function baseIsRegExp(value) {
  return isObject(value) && objectToString.call(value) == regexpTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */
var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

module.exports = isRegExp;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), __webpack_require__(11)(module)))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.constant('AV_STORAGE', {
  SESSION_CACHE: 'avCacheBust'
});

exports.default = _module2.default;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrganizationResourceFactory = function OrganizationResourceFactory(AvApiResource, avUsersResource) {
  var OrganizationResource = function (_AvApiResource) {
    _inherits(OrganizationResource, _AvApiResource);

    function OrganizationResource() {
      _classCallCheck(this, OrganizationResource);

      return _possibleConstructorReturn(this, (OrganizationResource.__proto__ || Object.getPrototypeOf(OrganizationResource)).call(this, {
        path: '/api/sdk/platform',
        name: 'organizations'
      }));
    }

    _createClass(OrganizationResource, [{
      key: 'afterQuery',
      value: function afterQuery(response) {
        return response.data.organizations || [];
      }
    }, {
      key: 'queryOrganizations',
      value: function queryOrganizations(user, config) {

        var params = {
          params: {
            userId: user.id
          }
        };

        // merge in params with user ID
        var queryConfig = _angular2.default.merge({}, params, config);

        return this.query(queryConfig);
      }
    }, {
      key: 'getOrganizations',
      value: function getOrganizations(config) {

        var self = this;

        return avUsersResource.me().then(function (user) {
          return self.queryOrganizations.call(self, user, config);
        });
      }
    }]);

    return OrganizationResource;
  }(AvApiResource);

  return new OrganizationResource();
};

_module2.default.factory('avOrganizationsResource', OrganizationResourceFactory);

exports.default = _module2.default;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvUserPermissionsResourceFactory = function AvUserPermissionsResourceFactory(AvApiResource) {
  var AvUserPermissionsResource = function (_AvApiResource) {
    _inherits(AvUserPermissionsResource, _AvApiResource);

    function AvUserPermissionsResource() {
      _classCallCheck(this, AvUserPermissionsResource);

      return _possibleConstructorReturn(this, (AvUserPermissionsResource.__proto__ || Object.getPrototypeOf(AvUserPermissionsResource)).call(this, {
        path: '/api/sdk/platform',
        name: 'permissions'
      }));
    }

    _createClass(AvUserPermissionsResource, [{
      key: 'afterQuery',
      value: function afterQuery(response) {
        return response.data.permissions ? response.data.permissions : [];
      }
    }, {
      key: 'getPermissions',
      value: function getPermissions(permissionIds, region) {

        return this.query({
          params: {
            permissionId: permissionIds,
            region: region
          }
        });
      }
    }]);

    return AvUserPermissionsResource;
  }(AvApiResource);

  return new AvUserPermissionsResource();
};

_module2.default.factory('avPermissionsResource', AvUserPermissionsResourceFactory);

exports.default = _module2.default;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProvidersResourceFactory = function ProvidersResourceFactory(AvApiResource) {
  var ProvidersResource = function (_AvApiResource) {
    _inherits(ProvidersResource, _AvApiResource);

    function ProvidersResource() {
      _classCallCheck(this, ProvidersResource);

      return _possibleConstructorReturn(this, (ProvidersResource.__proto__ || Object.getPrototypeOf(ProvidersResource)).call(this, {
        path: '/api/internal',
        name: 'providers'
      }));
    }

    _createClass(ProvidersResource, [{
      key: 'afterQuery',
      value: function afterQuery(response) {
        return response.data.providers || [];
      }
    }, {
      key: 'getProviders',
      value: function getProviders(customerId, config) {

        var params = {
          params: {
            customerId: customerId
          }
        };

        // merge in params with user ID
        var queryConfig = _angular2.default.merge({}, params, config);

        return this.query(queryConfig);
      }
    }]);

    return ProvidersResource;
  }(AvApiResource);

  return new ProvidersResource();
};

_module2.default.factory('avProvidersResource', ProvidersResourceFactory);

exports.default = _module2.default;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProxyResourceFactory = function ProxyResourceFactory(AvApiResource) {
  var ProxyResource = function (_AvApiResource) {
    _inherits(ProxyResource, _AvApiResource);

    function ProxyResource(options) {
      _classCallCheck(this, ProxyResource);

      if (!options && !options.tenant) {
        throw Error('Must specify tenant name for ProxyResource');
      }

      // /v1/proxy/{tenant}/{name}
      return _possibleConstructorReturn(this, (ProxyResource.__proto__ || Object.getPrototypeOf(ProxyResource)).call(this, {
        path: '/api/v1/proxy/' + options.tenant,
        version: '',
        name: options.name
      }));
    }

    return ProxyResource;
  }(AvApiResource);

  return ProxyResource;
};

_module2.default.service('AvProxyResource', ProxyResourceFactory);

exports.default = _module2.default;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvRegionsFactory = function AvRegionsFactory(AvApiResource, avUsersResource) {
  var AvRegionsResource = function (_AvApiResource) {
    _inherits(AvRegionsResource, _AvApiResource);

    function AvRegionsResource() {
      _classCallCheck(this, AvRegionsResource);

      return _possibleConstructorReturn(this, (AvRegionsResource.__proto__ || Object.getPrototypeOf(AvRegionsResource)).call(this, {
        path: '/api/sdk/platform',
        name: '/regions',
        sessionBust: false,
        pageBust: true
      }));
    }

    _createClass(AvRegionsResource, [{
      key: 'afterGet',
      value: function afterGet(response) {
        return response.data.regions || [];
      }
    }, {
      key: 'afterUpdate',
      value: function afterUpdate(response) {
        this.setPageBust();
        return response;
      }
    }, {
      key: 'getRegions',
      value: function getRegions(config) {
        var _this2 = this;

        return this.checkUser(config).then(function (checkedConfig) {
          return _this2.query(checkedConfig);
        });
      }
    }, {
      key: 'checkUser',
      value: function checkUser() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


        config.params = config.params || {};
        if (config.params.userId) {
          return Promise.resolve(config);
        }

        return avUsersResource.me().then(function (user) {
          config.params.userId = user.id;
          return config;
        });
      }
    }, {
      key: 'getCurrentRegion',
      value: function getCurrentRegion() {
        return this.query({
          params: {
            currentlySelected: true
          }
        });
      }
    }]);

    return AvRegionsResource;
  }(AvApiResource);

  return new AvRegionsResource();
};

_module2.default.factory('avRegionsResource', AvRegionsFactory);

exports.default = _module2.default;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvUserPermissionsResourceFactory = function AvUserPermissionsResourceFactory(AvApiResource) {
  var AvUserPermissionsResource = function (_AvApiResource) {
    _inherits(AvUserPermissionsResource, _AvApiResource);

    function AvUserPermissionsResource() {
      _classCallCheck(this, AvUserPermissionsResource);

      /**
       * sessionDate used by api to determine if server side cache is out of date.
       * i.e if user cache on server is older then sessionDate it will repull user information.
       */
      var _this = _possibleConstructorReturn(this, (AvUserPermissionsResource.__proto__ || Object.getPrototypeOf(AvUserPermissionsResource)).call(this, {
        path: '/api/internal',
        version: '/v1',
        name: '/axi-user-permissions'
      }));

      _this.sessionDate = new Date().toJSON();
      return _this;
    }

    _createClass(AvUserPermissionsResource, [{
      key: 'afterQuery',
      value: function afterQuery(response) {
        return response.data.axiUserPermissions ? response.data.axiUserPermissions : [];
      }
    }, {
      key: 'getPermissions',
      value: function getPermissions(permissionIds, region) {

        return this.query({
          params: {
            region: region,
            permissionId: permissionIds,
            sessionDate: this.sessionDate
          }
        });
      }
    }]);

    return AvUserPermissionsResource;
  }(AvApiResource);

  return new AvUserPermissionsResource();
};

_module2.default.factory('avUserPermissionsResource', AvUserPermissionsResourceFactory);

exports.default = _module2.default;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserServiceFactory = function UserServiceFactory(AvApiResource) {
  var AvUsersResource = function (_AvApiResource) {
    _inherits(AvUsersResource, _AvApiResource);

    function AvUsersResource() {
      _classCallCheck(this, AvUsersResource);

      return _possibleConstructorReturn(this, (AvUsersResource.__proto__ || Object.getPrototypeOf(AvUsersResource)).call(this, {
        path: '/api/sdk/platform',
        name: '/users'
      }));
    }

    _createClass(AvUsersResource, [{
      key: 'afterGet',
      value: function afterGet(response) {
        var user = response.data.user ? response.data.user : response.data;
        return user;
      }
    }, {
      key: 'me',
      value: function me(config) {
        return this.get('me', config);
      }
    }]);

    return AvUsersResource;
  }(AvApiResource);

  return new AvUsersResource();
};

_module2.default.factory('avUsersResource', UserServiceFactory);

exports.default = _module2.default;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _lodash = __webpack_require__(57);

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = __webpack_require__(58);

var _lodash4 = _interopRequireDefault(_lodash3);

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

__webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvUserAuthorizationsFactory = function AvUserAuthorizationsFactory($q, $log, avUserPermissionsResource) {
  var AvUserAuthorizations = function () {
    function AvUserAuthorizations() {
      _classCallCheck(this, AvUserAuthorizations);

      /**
       * Region is used to return permission/resources relative to region. If null service will
       * return all permission relative to current.  If value 'ALL' used it will return value relative
       * to all regions the user has access to.
       */
      this.region = null;

      /**
       * PermissionIds contains the set of permissionIds to request from service. If user of service calls
       * setPermissionIds() or call getPermissions() with complete set of permissionIds needed by application,
       * then service should only make that one hit to retrieve permission information.
       */
      this.permissionIds = [];
    }

    _createClass(AvUserAuthorizations, [{
      key: 'setRegion',
      value: function setRegion(region) {
        this.region = region;
        return this;
      }
    }, {
      key: 'setPermissionIds',
      value: function setPermissionIds(permissionIds) {

        if (!_angular2.default.isArray(permissionIds)) {
          throw new Error('permissionsIds must be an array of strings in setPermissionIds()');
        }

        this.permissionIds = permissionIds;

        return this;
      }
    }, {
      key: 'isAuthorized',
      value: function isAuthorized(permissionId) {
        return this.getPermission(permissionId).then(function (permission) {
          return permission.isAuthorized;
        });
      }
    }, {
      key: 'isAnyAuthorized',
      value: function isAnyAuthorized(permissionIds) {
        return this.getPermissions(permissionIds).then(function (permissions) {
          return permissions.some(function (permission) {
            return permission.isAuthorized;
          });
        });
      }
    }, {
      key: 'getPermission',
      value: function getPermission(permissionId) {

        if (!_angular2.default.isString(permissionId)) {
          throw new Error('permissionsId must be a string ID for getPermission()');
        }

        return this.getPermissions([permissionId]).then(function (permissions) {
          return (0, _lodash4.default)(permissions, ['id', permissionId]);
        });
      }
    }, {
      key: 'getPermissions',
      value: function getPermissions(permissionIds) {
        var _this = this;

        if (!_angular2.default.isArray(permissionIds)) {
          throw new Error('permissionsIds must be an array of string IDs for getPermissions()');
        }

        // Combine pre-loaded permission ids with the ids from this function invocation
        this.permissionIds = (0, _lodash2.default)(this.permissionIds, permissionIds);

        return avUserPermissionsResource.getPermissions(this.permissionIds, this.region).then(function (permissions) {
          return _this.map(permissionIds, permissions);
        });
      }
    }, {
      key: 'getOrganizations',
      value: function getOrganizations(permissionId) {
        return this.getPermission(permissionId).then(function (permission) {
          return permission.organizations;
        });
      }
    }, {
      key: 'getPayers',
      value: function getPayers(permissionId, organizationId) {

        return this.getPermission(permissionId).then(function (permission) {
          var organization = (0, _lodash4.default)(permission.organizations, ['id', organizationId]);

          if (organization && organization.resources) {
            return organization.resources;
          }

          return [];
        });
      }
    }, {
      key: 'map',
      value: function map(permissionIds, permissions) {

        var self = this;

        var result = permissionIds.map(function (permissionId) {

          var key = { id: permissionId };
          var permission = (0, _lodash4.default)(permissions, ['id', permissionId]);
          permission = permission ? self.convert(permission) : self.convert(key);
          return permission;
        });

        return result;
      }
    }, {
      key: 'convert',
      value: function convert(permission) {

        permission.isAuthorized = permission.organizations ? permission.organizations.length > 0 : false;
        permission.geographies = permission.geographies || [];
        permission.organizations = permission.organizations || [];

        return permission;
      }
    }]);

    return AvUserAuthorizations;
  }();

  return new AvUserAuthorizations();
};

_module2.default.factory('avUserAuthorizations', AvUserAuthorizationsFactory);

exports.default = _module2.default;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    Set = getNative(root, 'Set'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = union;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max;

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!seen.has(othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity]
 *  The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array ? array.length : 0;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity]
 *  The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = find;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), __webpack_require__(11)(module)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(91);

__webpack_require__(145);

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.constant('AV_VAL', {
  EVENTS: {
    REVALIDATE: 'av:val:revalidate',
    SUBMITTED: 'av:val:submitted',
    FAILED: 'av:val:failed',
    RESET: 'av:val:reset'
  },
  DEBOUNCE: 400,
  DEBOUNCE_QUICK: 100,
  DATE_FORMAT: {
    SIMPLE: 'MM/DD/YYYY'
  },
  PATTERNS: {
    ALPHA_ONLY: /[^A-Za-z]+/g,
    NUMERIC_ONLY: /[^0-9]+/g
  }
});

exports.default = _module2.default;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

var _validator = __webpack_require__(15);

var _validator2 = _interopRequireDefault(_validator);

__webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_module2.default.factory('avValPattern', function (avValUtils) {
  var PatternValidator = function (_Validator) {
    _inherits(PatternValidator, _Validator);

    function PatternValidator() {
      _classCallCheck(this, PatternValidator);

      var _this = _possibleConstructorReturn(this, (PatternValidator.__proto__ || Object.getPrototypeOf(PatternValidator)).call(this, 'pattern'));

      _this.REGEX = /^\/(.*)\/([gim]*)$/; // regular expression to test a regular expression
      return _this;
    }

    _createClass(PatternValidator, [{
      key: 'asRegExp',
      value: function asRegExp(pattern) {

        // if regex then return it
        if (pattern.test) {
          return pattern;
        }

        // if string then test for valid regex then convert to regex and return
        var match = pattern.match(this.REGEX);
        if (match) {
          return new RegExp(match[1], match[2]);
        }

        throw new Error('Expected ' + pattern + ' to be a RegExp');
      }
    }, {
      key: 'validate',
      value: function validate(context) {
        var value = context.value,
            constraint = context.constraint;


        var self = this;

        var values = Array.isArray(constraint.value) ? constraint.value : [constraint.value];

        var valid = false;

        values.forEach(function (expression) {
          var pattern = self.asRegExp(expression);
          if (avValUtils.isEmpty(value) || pattern.test(value)) {
            valid = true;
          }
        });

        return valid;
      }
    }]);

    return PatternValidator;
  }(_validator2.default);

  return new PatternValidator();
});

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(63);

__webpack_require__(66);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(64);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(24);

__webpack_require__(25);

var _template = __webpack_require__(65);

var _template2 = _interopRequireDefault(_template);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvLoaderController = function () {
  function AvLoaderController($element) {
    _classCallCheck(this, AvLoaderController);

    this.endAnimation = function () {
      this.av.$element.find('.loading-bullet').velocity('stop', true);
      this.av.$element.removeData();
    };

    this.av = { $element: $element };

    this.active = false;
  }

  _createClass(AvLoaderController, [{
    key: 'start',
    value: function start() {
      this.active = true;
      this.animate();
    }
  }, {
    key: 'animate',
    value: function animate() {

      var self = this;

      this.av.$element.find('.loading-bullet').velocity('transition.slideRightIn', { stagger: 250 }).velocity({ opacity: 0 }, {
        delay: 750,
        duration: 500,
        complete: function complete() {
          if (self.active) {
            setTimeout(function () {
              self.animate();
            }, 500);
          } else {
            self.endAnimation();
          }
        }
      });
    }
  }, {
    key: '$destroy',
    value: function $destroy() {
      this.active = false;
    }
  }, {
    key: '$postLink',
    value: function $postLink() {
      this.start();
    }
  }]);

  return AvLoaderController;
}();

_module2.default.directive('avLoader', function () {
  return {
    restrict: 'AE',
    replace: true,
    controller: AvLoaderController,
    templateUrl: _template2.default
  };
});

exports.default = _module2.default;

/***/ }),
/* 65 */
/***/ (function(module, exports) {

var path = 'src/ui/animation/loader/template.html';
var html = "<div class=\"loading-indicator\">\n  <span class=\"loading-bullet\">&bull;</span>\n  <span class=\"loading-bullet\">&bull;</span>\n  <span class=\"loading-bullet\">&bull;</span>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(24);

__webpack_require__(25);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.directive('avAnimate', function () {
  return {
    restrict: 'AE',
    scope: {
      watch: '<?avAnimate',
      animation: '<?avAnimateType',
      eventType: '@?avAnimateOn',
      onLoad: '<?avAnimateOnLoad',
      veclocityOptions: '<?avAnimateOptions'
    },
    link: function link(scope, element) {

      var loaded = false;

      var hasWatch = !_angular2.default.isUndefined(scope.watch);
      var hasEvent = !_angular2.default.isUndefined(scope.eventType);

      var eventType = scope.eventType;

      var onLoad = _angular2.default.isUndefined(scope.onLoad) ? !hasEvent : scope.onLoad;

      var elmToBounce = element.children().length > 0 ? element.children() : element;

      var animate = function animate() {
        var velocityAnimation = scope.animation || 'transition.bounceIn';
        var animationOptions = _angular2.default.extend({}, {
          duration: 1000
        }, scope.veclocityOptions);

        elmToBounce.velocity(velocityAnimation, animationOptions);
      };

      if (onLoad && !hasWatch) {
        animate();
      }

      if (!_angular2.default.isUndefined(eventType)) {
        element.on(eventType, function () {
          animate();
        });
      }

      if (!_angular2.default.isUndefined(scope.watch)) {
        scope.$watch('watch', function () {
          if (loaded || onLoad) {
            animate();
          }
          loaded = true;
        });
      }
    }
  };
});

exports.default = _module2.default;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildRegExp = buildRegExp;
exports.forEachFn = forEachFn;
exports.forEachFnHook = forEachFnHook;
exports.isElementInBlockScope = isElementInBlockScope;
exports.findElement = findElement;
exports.indexOf = indexOf;

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildRegExp(pattern) {

  var match = pattern.match(/^\/(.*)\/([gim]*)$/);
  var regExp = void 0;

  if (match) {
    regExp = new RegExp(match[1], match[2]);
  } else {
    throw Error('Incorrect regular expression format: ' + pattern);
  }

  return regExp;
}

function forEachFn(arr, fnName, args) {
  var i = arr.length;
  while (i--) {
    var t = arr[i];
    t[fnName].apply(t, args);
  }
}

function forEachFnHook(arr, fnName) {
  arr[fnName] = function () {
    forEachFn(this, fnName, arguments);
  };
}

function isElementInBlockScope($element, blockScope) {

  var c = $element.inheritedData('av-block');

  while (c) {
    if (c === blockScope) {
      return true;
    }

    c = c._parent;
  }

  return false;
}

function findElement($element, predicateFn, traverse) {
  var ret = null;

  if (predicateFn($element)) {
    ret = $element;
  } else {

    var $elements = void 0;

    if (traverse) {
      $elements = $element.parent();
    } else {
      $elements = $element.children();
    }

    var i = $elements.length;
    while (!ret && i--) {
      ret = findElement(_angular2.default.element($elements[i]), predicateFn, traverse);
    }
  }

  return ret;
}

function indexOf(arr, obj, start) {

  for (var i = start || 0, j = arr.length; i < j; i++) {
    if (arr[i] === obj) {
      return i;
    }
  }

  return -1;
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(26);

__webpack_require__(69);

__webpack_require__(27);

__webpack_require__(74);

__webpack_require__(28);

__webpack_require__(75);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _jquery = __webpack_require__(4);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(70);

__webpack_require__(27);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-undef */
if (!jQuery.avPatchedTouchEvents) {
  jQuery.avPatchedTouchEvents = true;

  jQuery.event.special.touchstart = {
    setup: function setup(_, ns, handle) {
      if (ns.indexOf('noPreventDefault') >= 0) {
        this.addEventListener('touchstart', handle, { passive: false });
      } else {
        this.addEventListener('touchstart', handle, { passive: true });
      }
    }
  };

  jQuery.event.special.touchend = {
    setup: function setup(_, ns, handle) {
      if (ns.indexOf('noPreventDefault') >= 0) {
        this.addEventListener('touchend', handle, { passive: false });
      } else {
        this.addEventListener('touchend', handle, { passive: true });
      }
    }
  };

  jQuery.event.special.touchmove = {
    setup: function setup(_, ns, handle) {
      if (ns.indexOf('noPreventDefault') >= 0) {
        this.addEventListener('touchmove', handle, { passive: false });
      } else {
        this.addEventListener('touchmove', handle, { passive: true });
      }
    }
  };
}

_module2.default.directive('avDropdown', function ($timeout) {

  return {
    restrict: 'A',
    priority: 10, // select directive priority is 1
    require: ['ngModel', 'avDropdown'],
    controller: 'AvDropdownController',
    link: function link(scope, element, attrs, controllers) {

      element.addClass('select2');

      var ngModel = controllers[0];
      var avDropdown = controllers[1];

      avDropdown.init({
        ngModel: ngModel
      });

      if (attrs.ngOptions) {
        avDropdown.ngOptions();
      }

      ngModel.$parsers.push(function (value) {

        var parent = element.prev();
        parent.toggleClass('ng-invalid', !ngModel.$valid).toggleClass('ng-valid', ngModel.$valid).toggleClass('ng-invalid-required', !ngModel.$valid).toggleClass('ng-valid-required', ngModel.$valid).toggleClass('ng-dirty', ngModel.$dirty).toggleClass('ng-pristine', ngModel.$pristine);
        return value;
      });

      element.on('change', function (e) {

        // special case since the ajax handling doesn't bind to the model correctly
        // this has to do with select2 (v3.5.2) using a hidden field instead of a select for ajax
        if (avDropdown.options.query) {

          $timeout(function () {
            if (avDropdown.isRemoteMultiple()) {
              avDropdown.setRemoteViewValue(e);
            } else {
              avDropdown.setViewValue(e);
            }
          }, false, 0);
        }
      });

      var _$render = ngModel.$render;
      ngModel.$render = function () {
        _$render();
        avDropdown.setValue();
      };

      if (attrs.ngFocus) {
        element.on('select2-focus', function () {
          scope.$eval(scope.$eval(attrs.ngFocus));
        });
      }

      if (attrs.ngBlur) {
        element.on('select2-blur', function () {
          scope.$eval(scope.$eval(attrs.ngBlur));
        });
      }

      // https://github.com/t0m/select2-bootstrap-css/issues/37#issuecomment-42714589
      element.on('select2-open', function () {

        // look for .has-success, .has-warning, .has-error
        // (really look for .has-* … might interfere with other CSS-classes starting with "has-")
        if (element.parents('[class*="has-"]').length) {

          // get all CSS-classes from the element where we found "has-*" and collect them in an array
          var classNames = (0, _jquery2.default)(this).parents('[class*="has-"]')[0].className.split(/\s+/);

          // go through the class names, find "has-"
          for (var i = 0; i < classNames.length; ++i) {
            if (classNames[i].match('has-')) {
              (0, _jquery2.default)('#select2-drop').addClass(classNames[i]);
            }
          }
        }
      });

      if (avDropdown.options.closeOnResize) {

        (0, _jquery2.default)(window).on('resize.select2', function () {
          element.select2('close');
        });
      }

      attrs.$observe('disabled', function (value) {
        element.select2('enable', !value);
      });

      attrs.$observe('readonly', function (value) {
        element.select2('readonly', !!value);
      });

      var disposeTimeout = $timeout(function () {
        element.select2(avDropdown.options);
        return;
      });

      scope.$on('$destroy', function () {
        (0, _jquery2.default)(window).off('resize.select2');
        element.select2('destroy');
        $timeout.cancel(disposeTimeout);
      });
    }
  };
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max;

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!seen.has(othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity]
 *  The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array ? array.length : 0;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = findIndex;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), __webpack_require__(11)(module)))

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!seen.has(othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates a function that performs a partial deep comparison between a given
 * object and `source`, returning `true` if the given object has equivalent
 * property values, else `false`.
 *
 * **Note:** The created function is equivalent to `_.isMatch` with `source`
 * partially applied.
 *
 * Partial comparisons will match empty array and empty object `source`
 * values against any array or object value, respectively. See `_.isEqual`
 * for a list of supported value comparisons.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 * @example
 *
 * var objects = [
 *   { 'a': 1, 'b': 2, 'c': 3 },
 *   { 'a': 4, 'b': 5, 'c': 6 }
 * ];
 *
 * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
 * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
 */
function matches(source) {
  return baseMatches(baseClone(source, true));
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = matches;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), __webpack_require__(11)(module)))

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap');

/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' ||
        typeof value.splice == 'function' || isBuffer(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (nonEnumShadows || isPrototype(value)) {
    return !nativeKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEmpty;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), __webpack_require__(11)(module)))

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectResourceFactory = function SelectResourceFactory(AvApiResource) {
  var AvSelectResource = function (_AvApiResource) {
    _inherits(AvSelectResource, _AvApiResource);

    function AvSelectResource(options) {
      _classCallCheck(this, AvSelectResource);

      return _possibleConstructorReturn(this, (AvSelectResource.__proto__ || Object.getPrototypeOf(AvSelectResource)).call(this, options));
    }

    _createClass(AvSelectResource, [{
      key: 'onQuery',
      value: function onQuery(data) {
        var _this2 = this;

        var config = this.getConfig(data);

        return this.defaultQuery(config).then(function (response) {

          var results = _this2.getResults(response.data);
          results = _this2.mapResults(results);

          return _this2.getResponse(response, results);
        });
      }
    }, {
      key: 'defaultQuery',
      value: function defaultQuery(config) {
        return this.query(config);
      }
    }, {
      key: 'getConfig',
      value: function getConfig(data) {

        // config for the api resource query
        var config = {
          params: {}
        };

        config.params.offset = this.getOffset(data);

        if (data.term) {
          config.params[this.getQueryParam()] = data.term;
        }

        return config;
      }
    }, {
      key: 'getOffset',
      value: function getOffset(data) {
        var offset = void 0;
        if (data.page) {
          offset = this.getPageSize() * (data.page - 1);
        }
        if (data.offset) {
          offset = data.offset;
        }
        return offset;
      }
    }, {
      key: 'getQueryParam',
      value: function getQueryParam() {
        return 'q';
      }
    }, {
      key: 'getResponse',
      value: function getResponse(response, results) {

        // Calculate if we want to continue searching.
        // True if more results are available for the current search term
        var more = response.data.offset < response.data.totalCount - response.data.limit;

        return {
          more: more,
          results: results
        };
      }
    }, {
      key: 'getResult',
      value: function getResult() /* item */{
        // return  item.code;
        throw new Error('getResult() must be implemented when extending from AvSelectResource');
      }

      // Format the collection items for Select2:
      //
      //    http://select2.github.io/select2/#documentation
      //
      //    The default renderers expect objects with `id` and `text` keys.
      //    The id property is required, even if custom renderers are used.
      //    The object may also contain a children key if hierarchical data is displayed.
      //    The object may also contain a disabled boolean property indicating whether this result can be selected.
      //

    }, {
      key: 'mapResults',
      value: function mapResults(results) {
        var _this3 = this;

        if (results && results.length > 0 && (!results[0].id || !results[0].text)) {

          results = results.map(function (item) {
            var _mapResult = _this3.mapResult(item),
                id = _mapResult.id,
                text = _mapResult.text;

            item.id = id;
            item.text = text;
            return item;
          });
        }

        return results;
      }

      // Result:
      //
      // {
      //   "code": "252Y00000X",
      //   "value": "AGENCIES,EARLY INTERVENTION PROVIDER AGENCY,NOT APPLICABLE|Agency",
      //   "id": "252Y00000X"
      // }

    }, {
      key: 'getId',
      value: function getId(result) {
        return result.id;
      }
    }, {
      key: 'initSelection',
      value: function initSelection(element, callback) {
        callback(null);
      }
    }, {
      key: 'getResults',
      value: function getResults() /* response */{
        // EX:
        //  return response.data.codes
        throw new Error('getResults() must be implemented when extending from AvSelectResource');
      }
    }, {
      key: 'getPageSize',
      value: function getPageSize() {
        return 50;
      }
    }]);

    return AvSelectResource;
  }(AvApiResource);

  return AvSelectResource;
};

_module2.default.factory('AvSelectResource', SelectResourceFactory);

exports.default = _module2.default;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

var _organizationsSelect = __webpack_require__(76);

var _organizationsSelect2 = _interopRequireDefault(_organizationsSelect);

__webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.directive('avSelectOrganizations', function () {
  return {
    restrict: 'AE',
    replace: true,
    require: ['ngModel'],
    templateUrl: _organizationsSelect2.default,
    controller: function controller($scope, avSelectOrganizationsResource) {
      $scope.avSelectOrganizationsResource = avSelectOrganizationsResource;
    }
  };
});

exports.default = _module2.default;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

var path = 'src/ui/dropdown/organizations-select.html';
var html = "<input\n  type=\"hidden\"\n  class=\"form-control\"\n  av-dropdown\n  options=\"{ allowClear: true, placeholder: 'Select an Organization', minimumInputLength: 0, query: avSelectOrganizationsResource }\"\n>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.constant('AV_MASK', {
  date: '99/99/9999',
  phone: '(999) 999-9999',
  ssn: '999-99-9999'
});

/***/ }),
/* 78 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(88);

__webpack_require__(137);

__webpack_require__(138);

__webpack_require__(89);

__webpack_require__(139);

__webpack_require__(141);

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CONFIG = {
  VIRTUAL_PAGE_TRACKING: true,
  SERVICES: {
    SPLUNK: 'avSplunkAnalytics'
  },
  EVENTS: {
    PAGE: '$locationChangeSuccess',
    DEFAULT: 'click'
  },
  PRE_FIX: /^avAnalytics(.*)$/,
  // should ignore these since they are part of the directives API
  IGNORE: ['avAnalyticsOn', 'avAnalyticsIf']
};

var AvAnalyticsConfigProvider = function () {
  function AvAnalyticsConfigProvider() {
    _classCallCheck(this, AvAnalyticsConfigProvider);

    this.options = CONFIG;
  }

  _createClass(AvAnalyticsConfigProvider, [{
    key: 'get',
    value: function get() {
      return _angular2.default.copy(this.options);
    }
  }, {
    key: 'set',
    value: function set(options) {
      _angular2.default.merge(this.options, options);
    }
  }, {
    key: '$get',
    value: function $get() {
      return _angular2.default.copy(this.options);
    }
  }]);

  return AvAnalyticsConfigProvider;
}();

_module2.default.provider('avAnalyticsConfig', AvAnalyticsConfigProvider);

exports.default = _module2.default;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

var _utils = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_module2.default.factory('avAnalyticsUtils', function (avAnalyticsConfig, $log) {
  var AnalyticsUtils = function () {
    function AnalyticsUtils() {
      _classCallCheck(this, AnalyticsUtils);
    }

    _createClass(AnalyticsUtils, [{
      key: 'getProperties',
      value: function getProperties(attributes) {

        var self = this;
        var props = {};

        Object.keys(attributes).forEach(function (key) {
          if (self.isValidAttribute(key) && self.isNotIgnored(key)) {
            var result = self.getAttribute(key, attributes[key]);
            props[result.key] = result.value;
          }
        });

        return props;
      }

      // Function detects external links in order to allow the analytics framework to run
      // before the browser follows a link.
      //
      //    - target="_self" - This opens an anchor in the same frame
      //    - target="_parent" - Opens the in the next level up of a frame if they were nested to inside one another
      //    - target="_top" - Opens the link as top document in the browser window
      //    - target="_blank" - Opens link in new tab new tab
      //

    }, {
      key: 'isExternalLink',
      value: function isExternalLink(attrs) {
        return attrs.href && !attrs.ngClick;
      }
    }, {
      key: 'isNotIgnored',
      value: function isNotIgnored(key) {
        var ignored = avAnalyticsConfig.IGNORE.indexOf(key) > -1;
        return !ignored;
      }
    }, {
      key: 'isValidAttribute',
      value: function isValidAttribute(key) {
        return avAnalyticsConfig.PRE_FIX.test(key);
      }
    }, {
      key: 'lowercase',
      value: function lowercase(str) {
        return str.substr(0, 1).toLowerCase() + str.substr(1);
      }
    }, {
      key: 'getAttribute',
      value: function getAttribute(key, value) {

        var simpleKey = key.match(avAnalyticsConfig.PRE_FIX);

        if (simpleKey && simpleKey[1]) {
          return {
            key: this.lowercase(simpleKey[1]),
            value: value
          };
        }
      }
    }, {
      key: 'toNum',
      value: function toNum(value) {
        var parsed = parseInt(value, 10);
        return isNaN(parsed) ? 0 : parsed;
      }
    }, {
      key: 'isValid',
      value: function isValid(trackingValues) {

        var valid = true;

        if (trackingValues.value || trackingValues.value === 0) {
          delete trackingValues.value;
        }

        Object.keys(trackingValues).forEach(function (key) {
          var value = trackingValues[key];
          if ((0, _utils.isBlank)(value) || _angular2.default.isUndefined(value)) {
            $log.warn('The analytic tracking value for ' + key.toUpperCase() + ' is not defined.');
            valid = false;
          }
        });

        return valid;
      }
    }]);

    return AnalyticsUtils;
  }();

  return new AnalyticsUtils();
});

/***/ }),
/* 90 */,
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

var _rules = __webpack_require__(91);

var _rules2 = _interopRequireDefault(_rules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.factory('avRules', function () {
  return _rules2.default;
});

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

var _utils = __webpack_require__(67);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_module2.default.factory('AvBlock', function (avBlockConfig, $timeout, $document) {

  var $body = $document.find('body');

  // These properties are not allowed to be specified in the start method.
  var reservedStateProperties = ['id', 'blockCount', 'blocking'];

  var AvBlock = function () {
    function AvBlock(id) {
      _classCallCheck(this, AvBlock);

      this.startPromise;
      this.doneCallbacks = [];
      this._id = id;

      this._state = {
        id: id,
        blockCount: 0,
        message: avBlockConfig.message,
        blocking: false
      };
    }

    _createClass(AvBlock, [{
      key: 'block',
      value: function block() {
        this.startPromise = null;
        this._state.blocking = true;
      }
    }, {
      key: 'start',
      value: function start(messageOrOptions) {
        var _this = this;

        messageOrOptions = messageOrOptions || {};

        if (_angular2.default.isString(messageOrOptions)) {

          messageOrOptions = {
            message: messageOrOptions
          };
        } else {

          _angular2.default.forEach(reservedStateProperties, function (x) {
            if (messageOrOptions[x]) {
              throw new Error('The property ' + x + ' is reserved for the block state.');
            }
          });
        }

        _angular2.default.extend(this._state, messageOrOptions);

        if (this._state.blockCount > 0) {
          this._state.message = messageOrOptions.message || this._state.message || avBlockConfig.message;
        } else {
          this._state.message = messageOrOptions.message || avBlockConfig.message;
        }

        this._state.blockCount++;

        // Check if the focused element is part of the block scope
        var $ae = _angular2.default.element($document[0].activeElement);

        if ($ae.length && (0, _utils.isElementInBlockScope)($ae, self)) {

          // Let the active element lose focus and store a reference
          // to restore focus when we're done (reset)
          self._restoreFocus = $ae[0];

          // https://github.com/McNull/angular-block-ui/issues/13
          // http://stackoverflow.com/questions/22698058/apply-already-in-progress-error-when-using-typeahead-plugin-found-to-be-relate
          // Queue the blur after any ng-blur expression.
          $timeout(function () {
            // Ensure we still need to blur
            // Don't restore if active element is body, since this causes IE to switch windows (see http://tjvantoll.com/2013/08/30/bugs-with-document-activeelement-in-internet-explorer/)
            if (self._restoreFocus && self._restoreFocus !== $body[0]) {
              self._restoreFocus.blur();
            }
          });
        }

        if (!this.startPromise && avBlockConfig.delay !== 0) {
          this.startPromise = $timeout(function () {
            return _this.block();
          }, avBlockConfig.delay);
        } else if (avBlockConfig.delay === 0) {
          this.block();
        }
      }
    }, {
      key: 'stop',
      value: function stop() {

        this._state.blockCount = Math.max(0, --this._state.blockCount);

        if (this._state.blockCount === 0) {
          this.reset(true);
        }
      }
    }, {
      key: '_cancelStartTimeout',
      value: function _cancelStartTimeout() {

        if (this.startPromise) {
          $timeout.cancel(this.startPromise);
          this.startPromise = null;
        }
      }
    }, {
      key: 'isBlocking',
      value: function isBlocking() {
        return this._state.blocking;
      }
    }, {
      key: 'message',
      value: function message(value) {
        this._state.message = value;
      }
    }, {
      key: 'pattern',
      value: function pattern(regexp) {
        if (regexp !== undefined) {
          this._pattern = regexp;
        }

        return this._pattern;
      }
    }, {
      key: 'reset',
      value: function reset(executeCallbacks) {

        this._cancelStartTimeout();
        this._state.blockCount = 0;
        this._state.blocking = false;

        // Restore the focus to the element that was active
        // before the block start, but not if the user has
        // focused something else while the block was active.

        if (this._restoreFocus && (!$document[0].activeElement || $document[0].activeElement === $body[0])) {

          // IE8 will throw if element for setting focus is invisible
          try {
            this._restoreFocus.focus();
          } catch (e1) {

            var elementToFocus = this._restoreFocus;
            $timeout(function () {
              if (elementToFocus) {
                try {
                  elementToFocus.focus();
                } catch (e2) {/* no op */}
              }
            }, 100);
          }

          this._restoreFocus = null;
        }

        try {

          if (executeCallbacks) {
            _angular2.default.forEach(this.doneCallbacks, function (cb) {
              cb();
            });
          }
        } finally {
          this.doneCallbacks.length = 0;
        }
      }
    }, {
      key: 'done',
      value: function done(fn) {
        this.doneCallbacks.push(fn);
      }
    }, {
      key: 'state',
      value: function state() {
        return this._state;
      }
    }]);

    return AvBlock;
  }();

  return AvBlock;
});

/***/ }),
/* 93 */,
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.factory('avTemplateCache', function ($q, $templateCache, $http) {

  return {
    get: function get(options) {

      var valid = !options.template || !options.templateUrl;

      if (!valid) {
        throw new Error('Either options.template or options.templateUrl must be defined for avTemplateCache');
      }

      return options.template ? $q.when(options.template) : $http.get(options.templateUrl, { cache: $templateCache }).then(function (result) {
        return result.data;
      });
    }
  };
});

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.constant('AV_MODAL', {

  OPTIONS: {
    scope: null,
    templateUrl: null,
    template: null,
    id: null,
    container: null,
    controller: null,
    controllerAs: null,
    locals: null,

    // Bootstrap defaults
    keyboard: true,
    backdrop: true,
    show: false,
    remote: false
  },

  EVENTS: {
    SHOW: 'show.av.modal',
    SHOWN: 'shown.av.modal',
    HIDE: 'hide.av.modal',
    HIDDEN: 'hidden.av.modal'
  },

  NAMESPACE: {
    MODAL: 'bs.modal'
  },

  BS_EVENTS: {
    SHOW: 'show.bs.modal',
    SHOWN: 'shown.bs.modal',
    HIDE: 'hide.bs.modal',
    HIDDEN: 'hidden.bs.modal'
  }

});

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

var _modal = __webpack_require__(189);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.directive('avModal', function () {
  return {
    restrict: 'AE',
    replace: true,
    transclude: true,
    scope: {
      size: '@'
    },
    templateUrl: _modal2.default
  };
});

/***/ }),
/* 97 */,
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _jquery = __webpack_require__(4);

var _jquery2 = _interopRequireDefault(_jquery);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

__webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.factory('avValBootstrapAdapter', function (AV_BOOTSTRAP_ADAPTER, $timeout, $log) {
  return {
    element: function element(context) {
      var ngModel = context.ngModel,
          element = context.element;


      if (ngModel.$valid) {
        element.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).removeClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);
      } else {
        element.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).addClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);
      }
    },
    reset: function reset(element) {
      element.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).removeClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);
    },
    message: function message(context) {
      var element = context.element;


      var selector = '.' + AV_BOOTSTRAP_ADAPTER.CLASSES.HELP;

      var $el = (0, _jquery2.default)(element);

      var target = $el.attr(AV_BOOTSTRAP_ADAPTER.SELECTORS.CONTAINER);
      target = target || $el.attr(AV_BOOTSTRAP_ADAPTER.SELECTORS.DATA_CONTAINER);
      // default to siblings
      target = target ? (0, _jquery2.default)('#' + target) : $el.siblings(selector);

      if (target.length === 0) {
        $log.warn('avValBootstrapAdapter could not find validation container for ' + element);
        return;
      }

      var el = target[0];
      $el = _angular2.default.element(el);
      var avValModel = $el.data(AV_BOOTSTRAP_ADAPTER.CONTROLLER); // get the av val message controller
      if (avValModel) {
        avValModel.message(context);
      }
    },
    scroll: function scroll(form) {

      // Bootstrap fixed navbars causes bad scroll-to offsets so find them all
      var navbarSelector = '.' + AV_BOOTSTRAP_ADAPTER.CLASSES.NAVBAR;

      // Add up all the heights to find the true offset
      var offset = 0;
      (0, _jquery2.default)(navbarSelector).each(function () {
        offset += (0, _jquery2.default)(this).outerHeight();
      });

      var selector = '.' + AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR + ':first';

      var $target = (0, _jquery2.default)(form).find(selector);
      if ($target && $target.offset()) {
        $timeout(function () {
          // scroll to offset top of first error minus the offset of the navbars
          (0, _jquery2.default)('body, html').animate({ scrollTop: $target.offset().top - offset }, 'fast');
        }, 0, false);
      }
    }
  };
});

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

__webpack_require__(35);

__webpack_require__(98);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_module2.default.provider('avValAdapter', function () {

  var that = this;

  this.setAdapter = function (adapter) {
    this.adapter = adapter;
  };

  this.$get = function (AV_VAL_ADAPTER, $injector) {
    var Adapter = function () {
      function Adapter() {
        _classCallCheck(this, Adapter);

        var adapterName = that.adapter || AV_VAL_ADAPTER.DEFAULT;
        this.adapter = $injector.get(adapterName);
      }

      _createClass(Adapter, [{
        key: 'element',
        value: function element(context) {
          this.adapter.element(context);
        }
      }, {
        key: 'reset',
        value: function reset(element) {
          this.adapter.reset(element);
        }
      }, {
        key: 'message',
        value: function message(context) {
          this.adapter.message(context);
        }
      }, {
        key: 'scroll',
        value: function scroll(form) {
          this.adapter.scroll(form);
        }
      }]);

      return Adapter;
    }();

    return new Adapter();
  };
});

/***/ }),
/* 100 */,
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

var _utils = __webpack_require__(12);

__webpack_require__(59);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvValFieldController = function () {
  function AvValFieldController($element, avValAdapter, avVal, $log, $scope, $attrs) {
    _classCallCheck(this, AvValFieldController);

    this.av = { $element: $element, avValAdapter: avValAdapter, avVal: avVal, $log: $log, $scope: $scope, $attrs: $attrs };

    this.ngModel = null;
    this.rule = null;
    this.avValForm = null;
    this.avValInvalid = false;
    this.noEvent = {};
    this.placeholder = this.av.$element[0].placeholder;
  }

  _createClass(AvValFieldController, [{
    key: 'init',
    value: function init(options) {
      _extends(this, options);
      this.createId();
      this.setupValidators();
    }
  }, {
    key: 'createId',
    value: function createId() {
      this.ngModel.avId = (0, _utils.uuid)('avVal');
    }
  }, {
    key: 'isRadio',
    value: function isRadio() {
      return this.av.$element.is('input') && this.av.$attrs.type === 'radio';
    }
  }, {
    key: 'isCheckbox',
    value: function isCheckbox() {
      return this.av.$element.is('input') && this.av.$attrs.type === 'checkbox';
    }
  }, {
    key: 'updateElement',
    value: function updateElement() {

      this.av.avValAdapter.element({
        element: this.av.$element,
        ngModel: this.ngModel
      });

      this.av.avValAdapter.message({
        element: this.av.$element,
        ngModel: this.ngModel
      });
    }
  }, {
    key: 'setupValidators',
    value: function setupValidators() {

      var self = this;

      var schemaName = this.avValForm.rulesSchema;
      var ruleConfig = this.av.avVal.getRule(schemaName);

      if (!ruleConfig) {
        this.av.$log.error('Failed to get rules schema named [' + schemaName + '].  Forms must be tagged with a rules schema name for validation to work.');
        return;
      }

      var constraints = ruleConfig[this.ruleName];
      if (!constraints) {
        this.av.$log.info('Rule named [' + this.ruleName + '] could not be found in the current schema.');
        constraints = {};
      }

      Object.keys(constraints).forEach(function (constraintName) {

        var constraint = constraints[constraintName];
        if (!constraint) {

          // When extending rule sets, previous rules can be overridden with null so
          // delete the previous $validator
          delete self.ngModel.$validators[constraintName];
          return;
        }

        var validator = self.av.avVal.getService(constraintName);

        if (_angular2.default.isUndefined(validator)) {
          self.av.$log.warn('No validator defined for ' + constraintName);
          return;
        }

        self.ngModel.$validators[constraintName] = function constraintValidator(modelValue, viewValue) {

          var value = modelValue || viewValue;

          var valid = validator.validate({
            value: value,
            constraint: constraint,
            element: self.av.$element
          });

          return valid;
        };

        // Attach the constraint to the validator so that the message is available
        // to the validation container that is going to paint the message on screen.
        self.ngModel.$validators[constraintName].constraint = constraint;
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.ngModel.$setPristine();
      this.ngModel.$setUntouched();
      this.ngModel.$error = {};
      this.av.avValAdapter.reset(this.av.$element);
    }
  }, {
    key: 'onRunValidators',
    value: function onRunValidators() {
      if (this.ngModel.$dirty) {
        this.updateElement();
      }
    }
  }]);

  return AvValFieldController;
}();

_module2.default.controller('AvValFieldController', AvValFieldController);

_module2.default.directive('avValField', function ($log, avVal, avValAdapter, AV_VAL) {
  return {
    restrict: 'A',
    controller: 'AvValFieldController',
    require: ['^avValForm', 'ngModel', 'avValField', '?ngModelOptions', '?^ngModelOptions'],
    link: function link(scope, element, attrs, controllers) {

      var ruleName = attrs.avValField;

      var avValForm = controllers[0];
      var ngModel = controllers[1];
      var avValField = controllers[2];
      var ngModelOptions = controllers[3];
      var ngModelOptionsParent = controllers[4];

      if (!ngModelOptions || !ngModelOptionsParent) {

        ngModel.$options.createChild({
          '*': '$inherit',
          debounce: avValField.isCheckbox() || avValField.isRadio() ? AV_VAL.DEBOUNCE_QUICK : AV_VAL.DEBOUNCE
        });
      }

      // Wrap $$runValidators with our own function so we can intercept when the validation
      // pipeline finishes.
      var $$runValidators = ngModel.$$runValidators;
      var runValidators = function runValidators(modelValue, viewValue, doneCallback) {

        $$runValidators.call(ngModel, modelValue, viewValue, function (allValid) {
          doneCallback(allValid);
          avValField.onRunValidators();
        });
      };

      ngModel.$$runValidators = runValidators;

      if (!ngModel && !ruleName) {
        $log.error('avValField requires ngModel and a validation rule name to run.');
        return;
      }

      avValField.init({
        ngModel: ngModel,
        ruleName: ruleName,
        avValForm: avValForm
      });

      var reValidateOff = scope.$on(AV_VAL.EVENTS.REVALIDATE, function () {
        ngModel.$validate();
      });

      var submittedOff = scope.$on(AV_VAL.EVENTS.SUBMITTED, function () {
        ngModel.$dirty = true;
        ngModel.$validate();
      });

      // - Removes all errors on page,
      // - Does not reset view or model values.  This should to be handled by the application.
      var resetOff = scope.$on(AV_VAL.EVENTS.RESET, function () {
        avValField.reset();
      });

      scope.$on('$destroy', function () {
        reValidateOff();
        submittedOff();
        resetOff();
      });
    }
  };
});

/***/ }),
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.availityConfig = exports.availityUi = exports.availity = undefined;

__webpack_require__(132);

__webpack_require__(155);

var availity = exports.availity = 'availity';
var availityUi = exports.availityUi = 'availity.ui';
var availityConfig = exports.availityConfig = 'availity.config';

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);

__webpack_require__(33);

__webpack_require__(56);

__webpack_require__(142);

__webpack_require__(32);

__webpack_require__(12);

__webpack_require__(59);

/***/ }),
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

__webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvAnalyticsProvider = function () {
  function AvAnalyticsProvider(avAnalyticsConfigProvider) {
    _classCallCheck(this, AvAnalyticsProvider);

    this.av = { avAnalyticsConfigProvider: avAnalyticsConfigProvider };
    this.plugins = [];
    this.virtualPageTracking = this.av.avAnalyticsConfigProvider.get().VIRTUAL_PAGE_TRACKING;
    this.appId;
    this.plugins;
  }

  _createClass(AvAnalyticsProvider, [{
    key: 'registerPlugins',
    value: function registerPlugins(_plugins) {

      if (_angular2.default.isString(_plugins)) {
        this.plugins = [_plugins];
      } else if (Array.isArray(_plugins)) {
        this.plugins = _plugins;
      } else {
        throw new Error('AvAnalytics.registerPlugins() expects a string or an array.');
      }

      return this.plugins;
    }
  }, {
    key: 'setVirtualPageTracking',
    value: function setVirtualPageTracking(value) {
      if (arguments.length) {
        this.virtualPageTracking = !!value;
      }
    }
  }, {
    key: 'isVirtualPageTracking',
    value: function isVirtualPageTracking() {
      return this.virtualPageTracking;
    }
  }, {
    key: 'setAppID',
    value: function setAppID(id) {
      this.appId = id;
      return this.appId;
    }
  }, {
    key: '$get',
    value: function $get($injector, $q, $log, $rootScope, $location, avAnalyticsConfig) {

      var self = this;

      var AvAnalytics = function () {
        function AvAnalytics() {
          var _this = this;

          _classCallCheck(this, AvAnalytics);

          this.services = {};

          if (!self.plugins || self.plugins.length === 0) {
            self.plugins = [avAnalyticsConfig.SERVICES.SPLUNK];
          }

          _angular2.default.forEach(self.plugins, function (plugin) {

            try {
              _this.services[plugin] = $injector.get(plugin);
            } catch (err) {
              $log.error('Could not load ' + plugin + ' plugin');
            }
          });
        }

        _createClass(AvAnalytics, [{
          key: 'init',
          value: function init() {
            var _this2 = this;

            if (this.isVirtualPageTracking()) {

              $rootScope.$on(avAnalyticsConfig.EVENTS.PAGE, function () {
                _this2.trackPageView($location.absUrl());
              });
            }

            _angular2.default.forEach(this.services, function (handler) {

              if (handler.isEnabled() && handler.init) {
                handler.init();
              }
            });
          }
        }, {
          key: 'trackEvent',
          value: function trackEvent(properties) {

            var promises = [];

            _angular2.default.forEach(this.services, function (handler) {
              var promise = handler.trackEvent(properties);
              promises.push(promise);
            });

            return $q.all(promises);
          }
        }, {
          key: 'getAppId',
          value: function getAppId() {
            return self.appId;
          }
        }, {
          key: 'isVirtualPageTracking',
          value: function isVirtualPageTracking() {
            return self.virtualPageTracking;
          }
        }, {
          key: 'trackPageView',
          value: function trackPageView(url) {

            var promises = [];

            _angular2.default.forEach(this.services, function (handler) {
              var promise = handler.trackPageView(url);
              promises.push(promise);
            });

            return $q.all(promises);
          }
        }]);

        return AvAnalytics;
      }();

      return new AvAnalytics();
    }
  }]);

  return AvAnalyticsProvider;
}();

_module2.default.provider('avAnalytics', AvAnalyticsProvider);

exports.default = _module2.default;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _module = _angular2.default.module('availity.config', ['availity']);

_module.run(function (avAnalytics) {
  return avAnalytics.init();
});

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = __webpack_require__(14);

var _moment2 = _interopRequireDefault(_moment);

var _tracekit = __webpack_require__(90);

var _tracekit2 = _interopRequireDefault(_tracekit);

var _jquery = __webpack_require__(4);

var _jquery2 = _interopRequireDefault(_jquery);

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

__webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_module2.default.constant('AV_EXCEPTIONS', {
  MESSAGES: {
    NOT_APPLICABLE: 'N/A'
  },
  TYPES: {
    EXCEPTION: 'exception'
  },
  REPEAT_LIMIT_TIME: 5000
});

var AvExceptionAnalyticsProvider = function () {
  function AvExceptionAnalyticsProvider() {
    _classCallCheck(this, AvExceptionAnalyticsProvider);

    this._enabled = true;
    this.appId;
  }

  _createClass(AvExceptionAnalyticsProvider, [{
    key: 'enabled',
    value: function enabled(_enabled) {
      this._enabled = !!_enabled;
    }
  }, {
    key: 'setAppId',
    value: function setAppId(_id) {
      this.appId = _id;
    }
  }, {
    key: '$get',
    value: function $get($location, AV_EXCEPTIONS, $injector) {

      var that = this;

      var AvExceptionAnalytics = function () {
        function AvExceptionAnalytics() {
          _classCallCheck(this, AvExceptionAnalytics);
        }

        _createClass(AvExceptionAnalytics, [{
          key: 'init',
          value: function init() {

            var self = this;

            if (!that._enabled) {
              return;
            }

            _tracekit2.default.remoteFetching = false;
            _tracekit2.default.surroundingLinesToCollect = 11;

            // subscribe() hooks into window.error
            _tracekit2.default.report.subscribe(function (stacktrace) {
              self.onError(stacktrace);
            });

            this.messageTimestampMap = {};
          }
        }, {
          key: 'prettyPrint',
          value: function prettyPrint() {
            var stacktrace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


            var message = '';

            try {
              if (!stacktrace.stack) {
                stacktrace.stack = new Error('force-added stack').stack;
                if (stacktrace.stack) {
                  stacktrace.stack = stacktrace.stack.toString();
                }
              }
            } catch (e) {/* throw away */}

            var length = stacktrace.stack ? stacktrace.stack.length : 0;

            for (var i = 0; i < length; i++) {
              var iMessage = i.toString();
              while (iMessage.length < 2) {
                iMessage = '0' + iMessage;
              }
              message += ['[' + iMessage + '] ', stacktrace.stack[i].func, ' ', stacktrace.stack[i].url, ':', stacktrace.stack[i].line, ':', stacktrace.stack[i].column, i + 1 < length ? '\n' : ''].join('');
            }

            return message;
          }
        }, {
          key: 'onError',
          value: function onError(stacktrace) {

            var userAgent = window.navigator && window.navigator.userAgent ? window.navigator.userAgent : AV_EXCEPTIONS.MESSAGES.NOT_APPLICABLE;

            var message = {
              errorDate: (0, _moment2.default)(new Date()).format('YYYY-MM-DDTHH:mm:ssZZ'),
              errorName: stacktrace.name,
              errorMessage: stacktrace.message,
              errorStack: this.prettyPrint(stacktrace),
              url: $location.$$absUrl,
              appId: that.appId || AV_EXCEPTIONS.MESSAGES.NOT_APPLICABLE,
              appVersion: "Unknown" || AV_EXCEPTIONS.MESSAGES.NOT_APPLICABLE,
              userAgent: userAgent,
              userLanguage: navigator.userLanguage,
              referrer: document.referrer,
              host: document.domain,
              screenWidth: (0, _jquery2.default)(window).width(),
              screenHeight: (0, _jquery2.default)(window).height(),
              sdkVersion: "2.6.0"
            };

            return this.log(message);
          }
        }, {
          key: 'log',
          value: function log(message) {
            var avLogMessagesResource = $injector.get('avLogMessagesResource');
            return avLogMessagesResource.error(message);
          }
        }, {
          key: 'trackEvent',
          value: function trackEvent(exception) {

            if (!that._enabled) {
              return null;
            }

            // If we've already logged this error recently, don't log it again (no need to spam the API)
            if (this._isRepeatError(exception)) {
              return;
            }

            var stacktrace = _tracekit2.default.computeStackTrace(exception);

            return this.onError(stacktrace);
          }

          // Check to see if this error was reported within the last 5 seconds

        }, {
          key: '_isRepeatError',
          value: function _isRepeatError(exception) {
            var timestamp = (0, _moment2.default)();
            var message = exception.message;
            var lastTimestamp = this.messageTimestampMap[message];
            var isRepeat = false;

            if (lastTimestamp && timestamp.diff(lastTimestamp) < AV_EXCEPTIONS.REPEAT_LIMIT_TIME) {
              isRepeat = true;
            }

            this.messageTimestampMap[message] = timestamp;
            return isRepeat;
          }
        }]);

        return AvExceptionAnalytics;
      }();

      return new AvExceptionAnalytics();
    }
  }]);

  return AvExceptionAnalyticsProvider;
}();

_module2.default.provider('avExceptionAnalytics', AvExceptionAnalyticsProvider);

_module2.default.config(function ($provide) {

  $provide.decorator('$exceptionHandler', function ($delegate, $injector) {

    return function (exception, cause) {
      $delegate(exception, cause);
      var errorTacking = $injector.get('avExceptionAnalytics');
      errorTacking.trackEvent(exception);
    };
  });
});

_module2.default.run(function (avExceptionAnalytics) {
  return avExceptionAnalytics.init();
});

exports.default = _module2.default;

/***/ }),
/* 140 */,
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

__webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_module2.default.factory('avSplunkAnalytics', function ($log, avLogMessagesResource, $location) {
  var SplunkAnalyticsService = function () {
    function SplunkAnalyticsService() {
      _classCallCheck(this, SplunkAnalyticsService);
    }

    _createClass(SplunkAnalyticsService, [{
      key: 'trackEvent',
      value: function trackEvent(properties) {

        properties.url = $location.$$absUrl || 'N/A';
        properties.level = properties.level || 'info';

        return avLogMessagesResource[properties.level](properties);
      }
    }, {
      key: 'trackPageView',
      value: function trackPageView(url) {

        var properties = {
          event: 'page',
          level: 'info',
          url: url || $location.$$absUrl()
        };

        return avLogMessagesResource[properties.level](properties);
      }
    }, {
      key: 'isEnabled',
      value: function isEnabled() {
        return true;
      }
    }]);

    return SplunkAnalyticsService;
  }();

  return new SplunkAnalyticsService();
});

exports.default = _module2.default;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _jquery = __webpack_require__(4);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(143);

var _lodash2 = _interopRequireDefault(_lodash);

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

__webpack_require__(144);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// https://github.com/kylewelsby/angular-post-message/blob/master/src/angular-post-message.js
var AvMessageProvider = function () {
  function AvMessageProvider() {
    _classCallCheck(this, AvMessageProvider);

    this.enabled = true;
  }

  _createClass(AvMessageProvider, [{
    key: 'enable',
    value: function enable(value) {

      if (arguments.length) {
        this.enabled = !!value;
      }

      return this.enabled;
    }
  }, {
    key: '$get',
    value: function $get($rootScope, $log, AV_MESSAGES) {

      var that = this;

      var AvMessages = function () {
        function AvMessages() {
          var _this = this;

          _classCallCheck(this, AvMessages);

          this.onResize = (0, _lodash2.default)(function () {

            var height = (0, _jquery2.default)('html').height();
            _this.send({
              event: AV_MESSAGES.EVENTS.AV_RESIZE,
              height: height
            });
          }, AV_MESSAGES.RESIZE_DEBOUNCE);
        }

        _createClass(AvMessages, [{
          key: 'init',
          value: function init() {

            var $window = (0, _jquery2.default)(window);

            $window.on(AV_MESSAGES.EVENTS.MESSAGE, this.onMessage.bind(this));

            $window.on(AV_MESSAGES.EVENTS.RESIZE, this.onResize.bind(this));

            $window.on(AV_MESSAGES.EVENTS.UNLOAD, this.onUnload.bind(this));

            $rootScope.$on('$destroy', this.destroy.bind(this));
          }
        }, {
          key: 'destroy',
          value: function destroy() {

            (0, _jquery2.default)(window).off(AV_MESSAGES.EVENTS.MESSAGE);
            (0, _jquery2.default)(window).off(AV_MESSAGES.EVENTS.RESIZE);
            (0, _jquery2.default)(window).off(AV_MESSAGES.EVENTS.UNLOAD);
          }
        }, {
          key: 'onUnload',
          value: function onUnload() {

            this.send({
              event: AV_MESSAGES.EVENTS.UNLOAD
            });
          }
        }, {
          key: 'isDomain',
          value: function isDomain(url) {

            if (AV_MESSAGES.DOMAIN.test(this.domain())) {
              return AV_MESSAGES.DOMAIN.test(url);
            }

            return AV_MESSAGES.LOCAL.test(url);
          }
        }, {
          key: 'isEnabled',
          value: function isEnabled() {
            return that.enabled;
          }
        }, {
          key: 'onMessage',
          value: function onMessage(_event) {

            var event = _event;

            event = event.originalEvent || event; // jQuery wraps in `originalEvent`

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

            var data = event.data;

            try {
              data = _angular2.default.fromJson(data);
            } catch (err) {
              $log.warn('avMessages.onMessage() failed to convert event to json payload');
            }

            if (_angular2.default.isString(data)) {
              event = data;
              data = null;
            } else {
              event = data.event ? data.event : AV_MESSAGES.AV_RECEIVED;
            }

            $rootScope.$root.$broadcast(event, data);
          }
        }, {
          key: 'isIframe',
          value: function isIframe() {
            return window.self !== window.parent;
          }
        }, {
          key: 'domain',
          value: function domain() {

            if (window.location.origin) {
              return window.location.origin;
            }

            if (window.location.hostname) {
              return window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
            }

            return '*';
          }
        }, {
          key: 'send',
          value: function send(payload) {

            try {

              var message = _angular2.default.isString(payload) ? payload : JSON.stringify(payload);
              this.postMessage(message, this.domain());
            } catch (err) {
              $log.error('avMessages.send() ', err);
            }
          }
        }, {
          key: 'postMessage',
          value: function postMessage(message, domain) {
            window.parent.postMessage(message, domain);
          }
        }]);

        return AvMessages;
      }();

      return new AvMessages();
    }
  }]);

  return AvMessageProvider;
}();

_module2.default.provider('avMessages', AvMessageProvider);

_module2.default.run(function (avMessages) {

  if (avMessages.isEnabled()) {
    avMessages.init();
  }
});

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.constant('AV_MESSAGES', {

  EVENTS: {

    MESSAGE: 'message', // post message window event
    RESIZE: 'resize.av.message',
    UNLOAD: 'unload.av.message'

  },

  RESIZE_DEBOUNCE: 400,

  DOMAIN: /https?:\/\/([\w\d\-]+\.)?availity\.(com|net)/,
  LOCAL: /http:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0):(\d+)/

});

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

__webpack_require__(146);

__webpack_require__(60);

__webpack_require__(147);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvValProvider = function () {
  function AvValProvider() {
    _classCallCheck(this, AvValProvider);

    this.validators = [];
    this.rules = {};
    this.services = {};
  }

  _createClass(AvValProvider, [{
    key: 'addRules',
    value: function addRules(_rules) {
      this.rules = _angular2.default.extend({}, this.rules, _rules);
      return this.rules;
    }
  }, {
    key: 'addValidators',
    value: function addValidators(_validators) {
      this.validators = this.validators.concat(_validators);
      return this.validators;
    }
  }, {
    key: '$get',
    value: function $get($injector, $rootScope, avValConfig, AV_VAL) {

      var that = this;

      var AvValidation = function () {
        function AvValidation() {
          _classCallCheck(this, AvValidation);

          this.initValidators();
        }

        _createClass(AvValidation, [{
          key: 'initValidators',
          value: function initValidators() {

            var self = this;

            that.validators = avValConfig.validators.concat(that.validators);

            _angular2.default.forEach(that.validators, function (name) {
              self.addValidator(name);
            });
          }
        }, {
          key: 'addValidator',
          value: function addValidator(name) {
            var validator = $injector.get(name);
            that.services[validator.name] = validator;
          }
        }, {
          key: 'addRules',
          value: function addRules(rules) {
            that.rules = _angular2.default.extend({}, that.rules, rules);
            $rootScope.$broadcast(AV_VAL.EVENTS.REVALIDATE);
          }
        }, {
          key: 'getRule',
          value: function getRule(key) {
            return that.rules[key];
          }
        }, {
          key: 'getService',
          value: function getService(name) {
            return that.services[name];
          }
        }]);

        return AvValidation;
      }();

      return new AvValidation();
    }
  }]);

  return AvValProvider;
}();

_module2.default.provider('avVal', AvValProvider);

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.value('avValConfig', {
  classes: {
    valid: 'ng-valid',
    invalid: 'ng-invalid',
    dirty: 'ng-dirty',
    pristine: 'ng-pristine',
    touched: 'ng-touched',
    untouched: 'ng-untouched',
    submitted: 'ng-submitted'
  },
  validators: ['avValPattern', 'avValSize', 'avValRequired', 'avValDateRange', 'avValDate', 'avValPhone', 'avValEmail', 'avValNpi']
});

exports.default = _module2.default;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(148);

__webpack_require__(149);

__webpack_require__(150);

__webpack_require__(151);

__webpack_require__(61);

__webpack_require__(152);

__webpack_require__(153);

__webpack_require__(154);

__webpack_require__(23);

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _moment = __webpack_require__(14);

var _moment2 = _interopRequireDefault(_moment);

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

var _validator = __webpack_require__(15);

var _validator2 = _interopRequireDefault(_validator);

__webpack_require__(60);

__webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_module2.default.factory('avValDate', function (AV_VAL, avValUtils) {
  var DateValidator = function (_Validator) {
    _inherits(DateValidator, _Validator);

    function DateValidator() {
      _classCallCheck(this, DateValidator);

      return _possibleConstructorReturn(this, (DateValidator.__proto__ || Object.getPrototypeOf(DateValidator)).call(this, 'dateFormat'));
    }

    _createClass(DateValidator, [{
      key: 'validate',
      value: function validate(_ref) {
        var value = _ref.value,
            constraint = _ref.constraint;


        var _format = constraint && constraint.format ? constraint.format : AV_VAL.DATE_FORMAT.SIMPLE;
        return avValUtils.isEmpty(value) || _angular2.default.isDate(value) || (0, _moment2.default)(value, _format, true).isValid();
      }
    }]);

    return DateValidator;
  }(_validator2.default);

  return new DateValidator();
});

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _moment = __webpack_require__(14);

var _moment2 = _interopRequireDefault(_moment);

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

var _validator = __webpack_require__(15);

var _validator2 = _interopRequireDefault(_validator);

__webpack_require__(60);

__webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_module2.default.factory('avValDateRange', function (AV_VAL, avValUtils) {
  var DateRangeValidator = function (_Validator) {
    _inherits(DateRangeValidator, _Validator);

    function DateRangeValidator() {
      _classCallCheck(this, DateRangeValidator);

      return _possibleConstructorReturn(this, (DateRangeValidator.__proto__ || Object.getPrototypeOf(DateRangeValidator)).call(this, 'dateRange'));
    }

    _createClass(DateRangeValidator, [{
      key: 'getStartDate',
      value: function getStartDate(start) {
        return this.setMin((0, _moment2.default)().add(start.value, start.units));
      }
    }, {
      key: 'getEndDate',
      value: function getEndDate(end) {
        return this.setMax((0, _moment2.default)().add(end.value, end.units));
      }
    }, {
      key: 'setMin',
      value: function setMin(value) {

        value.set('hours', 0);
        value.set('minutes', 0);
        value.set('seconds', 0);

        return value;
      }
    }, {
      key: 'setMax',
      value: function setMax(value) {

        value.set('hours', 23);
        value.set('minutes', 59);
        value.set('seconds', 59);

        return value;
      }
    }, {
      key: 'validation',
      value: function validation(_ref) {
        var value = _ref.value,
            constraint = _ref.constraint;


        var startDate = void 0;
        var endDate = void 0;

        var date = _angular2.default.isDate(value) ? (0, _moment2.default)(value) : (0, _moment2.default)(value, constraint.format || AV_VAL.DATE_FORMAT.SIMPLE);
        date.set('hours', 0);
        date.set('minutes', 0);
        date.set('seconds', 0);

        if (!avValUtils.isEmpty(constraint.start.units) && !avValUtils.isEmpty(constraint.end.units)) {
          startDate = this.getStartDate(constraint.start);
          endDate = this.getEndDate(constraint.end);
        } else {
          startDate = (0, _moment2.default)(constraint.start.value, constraint.start.format || constraint.format);
          endDate = this.setMax((0, _moment2.default)(constraint.end.value, constraint.end.format || constraint.format));
        }
        return (_angular2.default.isDate(value) || date.isValid()) && (date.isBetween(startDate, endDate, 'day') || date.isSame(startDate, 'day') || date.isSame(endDate, 'day'));
      }
    }, {
      key: 'validate',
      value: function validate(context) {
        return avValUtils.isEmpty(context.value) || this.validation(context);
      }
    }]);

    return DateRangeValidator;
  }(_validator2.default);

  return new DateRangeValidator();
});

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

var _validator = __webpack_require__(15);

var _validator2 = _interopRequireDefault(_validator);

__webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_module2.default.factory('avValEmail', function (avValPattern) {

  var EMAIL_PATTERN = /[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;

  var EmailValidator = function (_Validator) {
    _inherits(EmailValidator, _Validator);

    function EmailValidator() {
      _classCallCheck(this, EmailValidator);

      return _possibleConstructorReturn(this, (EmailValidator.__proto__ || Object.getPrototypeOf(EmailValidator)).call(this, 'email'));
    }

    _createClass(EmailValidator, [{
      key: 'validate',
      value: function validate(context) {

        context.constraint = context.constraint || {};
        context.constraint.value = EMAIL_PATTERN;

        return avValPattern.validate(context);
      }
    }]);

    return EmailValidator;
  }(_validator2.default);

  return new EmailValidator();
});

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

var _validator = __webpack_require__(15);

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_module2.default.factory('avValNpi', function (avValUtils) {
  var NpiValidator = function (_Validator) {
    _inherits(NpiValidator, _Validator);

    function NpiValidator() {
      _classCallCheck(this, NpiValidator);

      var _this = _possibleConstructorReturn(this, (NpiValidator.__proto__ || Object.getPrototypeOf(NpiValidator)).call(this, 'npi'));

      _this.INTEGER_REGEX = /^\d*$/;
      return _this;
    }

    _createClass(NpiValidator, [{
      key: 'validate',
      value: function validate(context) {
        var value = context.value;


        var npi = value || '';

        if (avValUtils.isEmpty(npi)) {
          return true;
        }

        if (!this.INTEGER_REGEX.test(npi) || npi.length !== 10) {
          return false;
        }

        var firstDigit = npi.charAt(0);
        if ('1234'.indexOf(firstDigit) < 0) {
          return false;
        }

        var digit = parseInt(npi.charAt(9), 10);
        npi = npi.substring(0, 9);
        npi = '80840' + npi;

        var alternate = true;
        var total = 0;

        for (var i = npi.length; i > 0; i--) {
          var next = parseInt(npi.charAt(i - 1), 10);
          if (alternate) {
            next = next * 2;
            if (next > 9) {
              next = next % 10 + 1;
            }
          }
          total += next;
          alternate = !alternate;
        }

        var roundUp = Math.ceil(total / 10) * 10;
        var calculatedCheck = roundUp - total;

        return calculatedCheck === digit;
      }
    }]);

    return NpiValidator;
  }(_validator2.default);

  return new NpiValidator();
});

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

var _validator = __webpack_require__(15);

var _validator2 = _interopRequireDefault(_validator);

__webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_module2.default.factory('avValPhone', function (avValPattern) {

  var PHONE_PATTERN = /^([0-9][\.\-]?)?[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4}$/;

  var PhoneValidator = function (_Validator) {
    _inherits(PhoneValidator, _Validator);

    function PhoneValidator() {
      _classCallCheck(this, PhoneValidator);

      return _possibleConstructorReturn(this, (PhoneValidator.__proto__ || Object.getPrototypeOf(PhoneValidator)).call(this, 'phone'));
    }

    _createClass(PhoneValidator, [{
      key: 'validate',
      value: function validate(context) {
        context.constraint = context.constraint || {};
        context.constraint.value = PHONE_PATTERN;
        return avValPattern.validate(context);
      }
    }]);

    return PhoneValidator;
  }(_validator2.default);

  return new PhoneValidator();
});

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

var _validator = __webpack_require__(15);

var _validator2 = _interopRequireDefault(_validator);

__webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_module2.default.factory('avValRequired', function (avValUtils) {
  var RequiredValidator = function (_Validator) {
    _inherits(RequiredValidator, _Validator);

    function RequiredValidator() {
      _classCallCheck(this, RequiredValidator);

      return _possibleConstructorReturn(this, (RequiredValidator.__proto__ || Object.getPrototypeOf(RequiredValidator)).call(this, 'required'));
    }

    _createClass(RequiredValidator, [{
      key: 'validate',
      value: function validate(context) {
        var value = context.value,
            element = context.element;

        // Using ngModelController.$isEmpty for required checks.  A form component being empty is dependent on the
        // type of field:
        //
        //    - radio
        //    - checkbox
        //    - text
        //    - lists
        //
        // You can override $isEmpty for input directives whose concept of being empty is different to the
        // default. Radio and checkboxes directive do this because in its case a value of `false`
        // implies empty.
        //

        var ctrl = element && element.data('$ngModelController');
        if (ctrl) {
          return !ctrl.$isEmpty(value);
        }

        return !avValUtils.isEmpty(value);
      }
    }]);

    return RequiredValidator;
  }(_validator2.default);

  return new RequiredValidator();
});

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _validator = __webpack_require__(15);

var _validator2 = _interopRequireDefault(_validator);

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_module2.default.factory('avValSize', function (avValUtils) {
  var SizeValidator = function (_Validator) {
    _inherits(SizeValidator, _Validator);

    function SizeValidator() {
      _classCallCheck(this, SizeValidator);

      return _possibleConstructorReturn(this, (SizeValidator.__proto__ || Object.getPrototypeOf(SizeValidator)).call(this, 'size'));
    }

    _createClass(SizeValidator, [{
      key: 'validate',
      value: function validate(context) {
        var value = context.value,
            constraint = context.constraint;

        var _value = value;

        var min = constraint.min || 0;
        var max = constraint.max;
        var type = constraint.type ? constraint.type.toLowerCase() : 'text';

        if (_value === null || _angular2.default.isUndefined(_value)) {
          _value = '';
        }

        if (type === 'text') {
          _value = '' + _value;
          return avValUtils.isEmpty(_value) || _value.length >= min && (max === undefined || _value.length <= max);
        }

        // ... must be a Number
        if (!_angular2.default.isNumber(_value) && /^\d+$/.test(_value)) {
          _value = parseInt(_value, 10);
        }

        return avValUtils.isEmpty(_value) || _value >= min && (max === undefined || _value <= max);
      }
    }]);

    return SizeValidator;
  }(_validator2.default);

  return new SizeValidator();
});

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(156);

__webpack_require__(62);

__webpack_require__(160);

__webpack_require__(168);

__webpack_require__(175);

__webpack_require__(68);

__webpack_require__(77);

__webpack_require__(181);

__webpack_require__(184);

__webpack_require__(187);

__webpack_require__(191);

__webpack_require__(193);

__webpack_require__(198);

__webpack_require__(94);

__webpack_require__(204);

__webpack_require__(208);

__webpack_require__(78);

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(157);

__webpack_require__(158);

__webpack_require__(159);

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

__webpack_require__(89);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvAnalyticsController = function () {
  function AvAnalyticsController(avAnalyticsUtils, avAnalytics) {
    _classCallCheck(this, AvAnalyticsController);

    this.av = { avAnalyticsUtils: avAnalyticsUtils, avAnalytics: avAnalytics };
  }

  _createClass(AvAnalyticsController, [{
    key: 'onEvent',
    value: function onEvent(event, element, options) {
      var _this = this;

      var properties = _angular2.default.extend({
        level: 'info',
        label: element.text()
      }, {
        event: event.type
      }, options);

      if (this.av.avAnalyticsUtils.isExternalLink(properties)) {
        event.preventDefault();
        event.stopPropagation();
      }

      var promise = this.av.avAnalytics.trackEvent(properties);
      promise.finally(function () {
        if (_this.av.avAnalyticsUtils.isExternalLink(properties)) {
          document.location = element.attr('href');
        }
      });
    }
  }]);

  return AvAnalyticsController;
}();

_module2.default.controller('AvAnalyticsController', AvAnalyticsController);

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.directive('avAnalytics', function () {
  return {
    restrict: 'A',
    scope: {
      options: '=avAnalytics'
    },
    controller: function controller($scope) {
      this.getOptions = function () {
        return $scope.options;
      };
    }
  };
});

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

__webpack_require__(87);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.directive('avAnalyticsOn', function (avAnalyticsConfig, avAnalyticsUtils) {
  return {
    restrict: 'A',
    controller: 'AvAnalyticsController',
    require: ['avAnalyticsOn', '?^avAnalytics'],
    link: function link(scope, element, attrs, controllers) {

      var childCtrl = controllers[0];
      var parentCtrl = {};
      var parentOptions = {};

      if (controllers[1]) {
        parentCtrl = controllers[1];
        parentOptions = parentCtrl.getOptions();
      }

      var eventType = attrs.avAnalyticsOn || avAnalyticsConfig.EVENTS.DEFAULT;

      element.on(eventType, function (event) {

        if (parentCtrl.getOptions) {
          parentOptions = parentCtrl.getOptions();
        }

        var options = _angular2.default.extend({}, parentOptions, avAnalyticsUtils.getProperties(attrs));

        childCtrl.onEvent(event, element, options);
      });
    }
  };
});

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(161);

__webpack_require__(163);

__webpack_require__(164);

__webpack_require__(165);

__webpack_require__(92);

__webpack_require__(166);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.run(function ($document, avBlockConfig, $templateCache) {

  if (avBlockConfig.autoInjectBodyBlock) {
    $document.find('body').attr('av-block', 'main');
  }

  if (avBlockConfig.template) {

    // Swap the builtin template with the custom template.
    // Create a magic cache key and place the template in the cache.

    avBlockConfig.templateUrl = '$$av-block-template$$';
    $templateCache.put(avBlockConfig.templateUrl, avBlockConfig.template);
  }
});
// import './integration';

/***/ }),
/* 161 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 162 */,
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

var _utils = __webpack_require__(67);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Inspiration from https://github.com/McNull/angular-block-ui.
//
//  - Need npm compatible library
//  - Re-factor with better life-cycle hooks for starting and stopping animations

var BlockController = function () {
  function BlockController($element, avBlockManager, avBlockConfig, $attrs, $scope, $compile) {
    var _this = this;

    _classCallCheck(this, BlockController);

    this.av = { $element: $element, avBlockManager: avBlockManager, avBlockConfig: avBlockConfig, $attrs: $attrs, $scope: $scope, $compile: $compile };

    // Expose the blockMessageClass attribute value on the scope
    this.av.$attrs.$observe('blockMessageClass', function (value) {
      _this.av.$scope.$_blockMessageClass = value;
    });

    // Create the block instance
    // Prefix underscore to prevent integers:
    // https://github.com/McNull/angular-block-ui/pull/8

    this.instanceId = this.av.$attrs.avBlock || '_' + this.av.$scope.$id;
    this.serviceInstance = this.av.avBlockManager.get(this.instanceId);

    // Locate the parent block instance
    var parentInstance = this.av.$element.inheritedData('av-block');

    if (parentInstance) {
      this.serviceInstance._parent = parentInstance;
    }

    // Expose the state on the scope
    this.av.$scope.$_blockState = this.serviceInstance.state();

    this.av.$scope.$watch('$_blockState.blocking', function (value) {
      // Set the aria-busy attribute if needed
      _this.av.$element.attr('aria-busy', !!value);
      _this.av.$element.toggleClass('av-block-visible', !!value);
    });

    this.av.$scope.$watch('$_blockState.blockCount > 0', function (value) {
      _this.av.$element.toggleClass('av-block-active', !!value);
    });

    // If a pattern is provided assign it to the state
    var pattern = this.av.$attrs.blockPattern;

    if (pattern) {
      var regExp = (0, _utils.buildRegExp)(pattern);
      this.serviceInstance.pattern(regExp);
    }

    // Store a reference to the service instance on the element

    this.av.$element.data('av-block', this.serviceInstance);
  }

  _createClass(BlockController, [{
    key: 'moduleLoaded',
    value: function moduleLoaded(name) {

      try {
        _angular2.default.module(name);
      } catch (ex) {
        return false;
      }

      return true;
    }
  }, {
    key: 'registerLocationChange',
    value: function registerLocationChange() {

      this.av.$scope.$on('$locationChangeStart', function (event) {

        if (this.serviceInstance.$_blockLocationChange && this.serviceInstance.state().blockCount > 0) {
          event.preventDefault();
        }
      });

      this.av.$scope.$on('$locationChangeSuccess', function () {
        this.serviceInstance.$_blockLocationChange = this.serviceInstance.blockBrowserNavigation;
      });
    }
  }, {
    key: 'blockNavigation',
    value: function blockNavigation() {
      var _this2 = this;

      if (this.av.avBlockConfig.blockBrowserNavigation) {

        if (this.moduleLoaded('ngRoute')) {

          // After the initial content has been loaded we'll spy on any location
          // changes and discard them when needed.
          //
          var fn = this.av.$scope.$on('$viewContentLoaded', function () {

            // Unhook the view loaded and hook a function that will prevent
            // location changes while the block is active.

            fn();
            _this2.registerLocationChange();
          });
        } else {
          this.registerLocationChange();
        }
      }
    }

    // Ensure the instance is released when the scope is destroyed

  }, {
    key: '$destroy',
    value: function $destroy() {
      this.serviceInstance.release();
      this.av.$element.data('av-block', null);
    }
  }, {
    key: '$postLink',
    value: function $postLink() {

      this.container = this.av.$compile('<av-block-container class="av-block-container"></av-block-container >')(this.av.$scope);
      this.av.$element.append(this.container);

      // If the element does not have the class 'av-block' set, we set the
      // default css classes from the config.

      if (!this.av.$element.hasClass('av-block')) {
        this.av.$element.addClass(this.av.avBlockConfig.cssClass);
      }
    }
  }]);

  return BlockController;
}();

_module2.default.directive('avBlock', function () {
  return {
    scope: {},
    restrict: 'AE',
    controller: BlockController
  };
});

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

__webpack_require__(92);

var _utils = __webpack_require__(67);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_module2.default.factory('avBlockManager', function ($injector) {
  var AvBlockManager = function () {
    function AvBlockManager() {
      _classCallCheck(this, AvBlockManager);

      this.instances = [];
    }

    _createClass(AvBlockManager, [{
      key: 'get',
      value: function get(id) {

        // if (!this.main) {
        //   mainBlock.addRef();
        //   this.main = null;
        // }

        if (!isNaN(id)) {
          throw new Error('AvBlock id cannot be a number');
        }

        var instance = this.instances[id];

        if (!instance) {
          var AvBlock = $injector.get('AvBlock');
          instance = this.instances[id] = new AvBlock(id);
          this.instances.push(instance);
        }

        return instance;
      }
    }, {
      key: 'destroy',
      value: function destroy(idOrInstance) {

        if (_angular2.default.isString(idOrInstance)) {
          idOrInstance = this.instances[idOrInstance];
        }

        if (idOrInstance) {
          idOrInstance.reset();

          var i = (0, _utils.indexOf)(this.instances, idOrInstance);
          this.instances.splice(i, 1);

          delete this.instances[idOrInstance.state().id];
        }
      }
    }, {
      key: 'reset',
      value: function reset() {
        this.instances.forEach(function (instance) {
          return instance.reset();
        });
      }
    }, {
      key: 'locate',
      value: function locate(request) {

        var result = [];

        // Add function wrappers that will be executed on every item
        // in the array.

        (0, _utils.forEachFnHook)(result, 'start');
        (0, _utils.forEachFnHook)(result, 'stop');

        var i = this.instances.length;

        while (i--) {
          var instance = this.instances[i];
          var pattern = instance._pattern;

          if (pattern && pattern.test(request.url)) {
            result.push(instance);
          }
        }

        if (result.length === 0) {
          result.push(this.mainBlock);
        }

        return result;
      }
    }]);

    return AvBlockManager;
  }();

  return new AvBlockManager();
});

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvBlockContainerDirective = function () {
  function AvBlockContainerDirective(avBlockConfig) {
    _classCallCheck(this, AvBlockContainerDirective);

    this.av = { avBlockConfig: avBlockConfig };

    this.scope = true;
    this.restrict = 'AE';

    this.templateUrl = this.av.avBlockConfig.templateUrl;
  }

  _createClass(AvBlockContainerDirective, [{
    key: 'controller',
    value: function controller($scope, $element) {

      var service = $element.inheritedData('av-block');

      if (!service) {
        throw new Error('No parent av-block service instance located.');
      }

      // add state to scope of this directive
      $scope.state = service.state();
    }
  }]);

  return AvBlockContainerDirective;
}();

_module2.default.directive('avBlockContainer', function (avBlockConfig) {
  return new AvBlockContainerDirective(avBlockConfig);
});

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

var _block = __webpack_require__(167);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.constant('avBlockConfig', {
  templateUrl: _block2.default,
  delay: 250,
  message: 'Loading ...',
  autoBlock: false,
  resetOnException: true,
  requestFilter: _angular2.default.noop,
  autoInjectBodyBlock: false,
  cssClass: 'av-block av-block-anim-fade',
  blockBrowserNavigation: false
});

/***/ }),
/* 167 */
/***/ (function(module, exports) {

var path = 'src/ui/block/block.html';
var html = "<div class=\"av-block-overlay\"></div>\n<div\n  class=\"av-block-message-container\"\n  aria-live=\"assertive\"\n  aria-atomic=\"true\">\n  <div class=\"av-block-message\">\n    <av-loader ng-if=\"state.blockCount > 0\"></av-loader>\n  </div>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(169);

__webpack_require__(170);

__webpack_require__(171);

__webpack_require__(172);

__webpack_require__(173);

__webpack_require__(174);

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dateConfig($provide) {
  // duck punch built in input validation to not date validation since it doesn't support different formats.
  $provide.decorator('inputDirective', function ($delegate) {
    var directive = $delegate[0];
    var link = directive.link;
    directive.compile = function () {
      return {
        pre: function pre(scope, element, attr, ctrls) {
          if (ctrls[0] && _angular2.default.lowercase(attr.type) === 'date' && _angular2.default.isDefined(attr.avDatepicker)) {
            // do not use the default date validation;
          } else {
            link.pre.apply(this, arguments);
          }
        }
      };
    };

    return $delegate;
  });
}

_module2.default.config(dateConfig);

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Options: http://bootstrap-datepicker.readthedocs.org/en/latest/options.html
_module2.default.constant('AV_DATEPICKER', {
  CONTROLLER: '$ngModelController',
  ADD_ON_SELECTOR: '[data-toggle="datepicker"]',
  OPTIONS: ['autoclose', 'beforeShowDay', 'beforeShowMonth', 'beforeShowYear', 'beforeShowDecade', 'beforeShowCentury', 'calendarWeeks', 'clearBtn', 'container', 'datesDisabled', 'daysOfWeekDisabled', 'daysOfWeekHighlighted', 'defaultViewDate', 'disableTouchKeyboard', 'enableOnReadonly', 'endDate', 'forceParse', 'assumeNearbyYear', 'format', 'immediateUpdates', 'inputs', 'keyboardNavigation', 'language', 'maxViewMode', 'minViewMode', 'multidate', 'multidateSeparator', 'orientation', 'showOnFocus', 'startDate', 'startView', 'templates', 'title', 'todayBtn', 'todayHighlight', 'toggleActive', 'weekStart', 'zIndexOffset']
});

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = {
  autoclose: true,
  todayHighlight: true,
  format: 'MM/DD/YYYY',
  forceParse: false
};

var AvDatepickerConfig = function () {
  function AvDatepickerConfig() {
    _classCallCheck(this, AvDatepickerConfig);
  }

  _createClass(AvDatepickerConfig, [{
    key: 'set',
    value: function set(options) {
      _extends(config, options);
    }
  }, {
    key: '$get',
    value: function $get() {
      return _angular2.default.copy(config);
    }
  }]);

  return AvDatepickerConfig;
}();

_module2.default.provider('avDatepickerConfig', AvDatepickerConfig);

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _jquery = __webpack_require__(4);

var _jquery2 = _interopRequireDefault(_jquery);

var _moment = __webpack_require__(14);

var _moment2 = _interopRequireDefault(_moment);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function hasDateInput() {
  var i = document.createElement('input');
  i.setAttribute('type', 'date');
  return i.type !== 'text';
}

var hasDateInputSupport = hasDateInput();

// Inspiration https://github.com/mgcrea/angular-strap/blob/v0.7.8/src/directives/datepicker.js

var AvDatepickerController = function () {
  function AvDatepickerController($element, $attrs, AV_DATEPICKER, $scope, avDatepickerConfig) {
    _classCallCheck(this, AvDatepickerController);

    this.hasDateInputSupport = hasDateInputSupport;

    this.av = { $element: $element, $attrs: $attrs, AV_DATEPICKER: AV_DATEPICKER, $scope: $scope, avDatepickerConfig: avDatepickerConfig };
  }

  _createClass(AvDatepickerController, [{
    key: 'setValue',
    value: function setValue() {

      var viewValue = this.ngModel.$viewValue;
      var plugin = this.plugin();

      if (!viewValue || !plugin) {
        return;
      }

      plugin.setDate(viewValue);
    }
  }, {
    key: 'setNgModel',
    value: function setNgModel(ngModel) {
      this.ngModel = ngModel;
    }
  }, {
    key: 'findModel',
    value: function findModel() {

      var ngModel = null;

      var $input = this.av.$element.find('input:first').andSelf();
      if ($input.length) {
        ngModel = $input.data(this.av.AV_DATEPICKER.CONTROLLER);
        this.setNgModel(ngModel);
      }

      return ngModel;
    }
  }, {
    key: 'modelToView',
    value: function modelToView(modelValue) {
      var viewValue = _jquery2.default.fn.datepicker.DPGlobal.formatDate(modelValue, this.options.format, 'en');
      return viewValue;
    }
  }, {
    key: 'viewToModel',
    value: function viewToModel(viewValue) {

      var plugin = this.plugin();

      if (!plugin || !viewValue || viewValue === '') {
        return null;
      }

      var isValid = (0, _moment2.default)(viewValue, this.options._format, true).isValid();
      if (!isValid) {
        return undefined;
      }

      var format = _jquery2.default.fn.datepicker.DPGlobal.parseFormat(this.options.format);
      var utcDate = _jquery2.default.fn.datepicker.DPGlobal.parseDate(this.ngModel.$viewValue, format, 'en');

      var localDate = plugin._utc_to_local(utcDate);

      return localDate;
    }
  }, {
    key: 'init',
    value: function init() {
      var _this = this;

      var self = this;

      this.options = _angular2.default.copy(this.av.avDatepickerConfig);

      Object.keys(this.av.$attrs).forEach(function (key) {
        var value = self.av.$attrs[key];
        var _key = key.replace('data-', '');
        if (_this.av.AV_DATEPICKER.OPTIONS.indexOf(_key) >= 0) {
          self.options[_key] = self.av.$scope.$eval(value);
        }
      });

      this.convertFormat();
    }

    // Developers are used to working with moment.js and availity-angular
    // validators also use moment.js so this function converts from moment.js
    // to bootstrap-datepicker.js format.
    //
    // bootstrap-datepicker date format supports a combination of d, dd, D, DD, m, mm, M, MM, yy, yyyy.
    // Below is the conversion table from moment.js format options to bootstrap-datepicker.
    //
    // Moment formatting options:
    //
    //  - DD => 01 02 ... 30 31
    //  - D => 1 2 ... 30 31
    //  - M => 1 2 ... 11 12
    //  - MM => 01 02 ... 11 12
    //  - MMM => Jan Feb ... Nov Dec
    //  - MMMM => January February ... November December
    //  - YY => 70 71 ... 29 30
    //  - YYYY => 1970 1971 ... 2029 2030
    //
    //  Table reads moment.js format => bootstrap-datepicker format
    //
    //  - D, DD => d, dd: Numeric date, no leading zero and leading zero, respectively. Eg, 5, 05.
    //  - ddd, dddd => D, DD: Abbreviated and full weekday names, respectively. Eg, Mon, Monday.
    //  - M, MM => m, mm: Numeric month, no leading zero and leading zero, respectively. Eg, 7, 07.
    //  - MMM, MMMM => M, MM: Abbreviated and full month names, respectively. Eg, Jan, January
    //  - YY, YYYY => yy, yyyy: 2- and 4-digit years, respectively. Eg, 12, 2012.
    //

  }, {
    key: 'convertFormat',
    value: function convertFormat() {

      var format = this.options.format;
      this.options._format = this.options.format; // store orginal Moment format

      if (format) {

        // lower case everything
        format = format.toLowerCase();

        // Since we lowercased everything convert the map is slightly different than above
        var map = { 'mmm': 'M', 'mmmm': 'MM', 'ddd': 'D', 'dddd': 'DD' };
        var re = new RegExp(Object.keys(map).join('|'), 'gi');
        format = format.replace(re, function (matched) {
          return map[matched];
        });
      }

      // this is moment format converted to bootstrap-datepicker.js format.
      this.options.format = format;
    }
  }, {
    key: 'plugin',
    value: function plugin() {
      return this.av.$element.data('datepicker');
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var plugin = this.plugin();
      if (plugin) {
        plugin.destroy();
        this.av.$element.data('datepicker', null);
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      var plugin = this.plugin();
      if (plugin) {
        plugin.hide();
      }
    }
  }]);

  return AvDatepickerController;
}();

_module2.default.controller('AvDatepickerController', AvDatepickerController);

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

__webpack_require__(93);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.directive('avDatepicker', function ($window, $log, AV_DATEPICKER) {
  return {
    restrict: 'A',
    require: ['ngModel', 'avDatepicker'],
    priority: 1,
    controller: 'AvDatepickerController',
    link: function link(scope, element, attrs, controllers) {

      var ngModel = controllers[0];
      var avDatepicker = controllers[1];

      if (!ngModel) {
        ngModel = avDatepicker.findModel();
        if (!ngModel) {
          $log.error('avDatepicker requires ngModel');
          return;
        }
      }

      avDatepicker.init();
      avDatepicker.setNgModel(ngModel);

      // Datepicker plugin triggers a change event on load that will read in
      // the input value and update the Angular model shortly after.  In order
      // to preserve model values on load, we read the model in from scope and
      // set the input value with jQuery
      var value = scope.$eval(attrs.ngModel);
      if (value) {
        var viewValue = avDatepicker.modelToView(value);
        element.val(viewValue);
      }

      ngModel.$parsers.push(avDatepicker.viewToModel.bind(avDatepicker));
      ngModel.$formatters.push(avDatepicker.modelToView.bind(avDatepicker));

      var _$render = ngModel.$render;
      ngModel.$render = function () {
        _$render();
        avDatepicker.setValue();
      };

      var win = _angular2.default.element($window);

      win.on('scroll.datepicker', function () {
        avDatepicker.hide();
      });

      var target = element.siblings(AV_DATEPICKER.ADD_ON_SELECTOR);
      target = target.length ? target : element.siblings(AV_DATEPICKER.ADD_ON_SELECTOR.replace('data-', ''));
      if (target.length) {
        target.on('click.datepicker', function () {
          if (!element.prop('disabled')) {
            // Hack check for IE 8
            element.focus();
          }
        });
      }

      scope.$on('$destroy', function () {
        avDatepicker.hide();
        avDatepicker.destroy();
        win.off('scroll.datepicker');
        if (target.length) {
          target.off('click.datepicker');
        }
      });

      scope.$evalAsync(function () {
        var options = _extends({}, avDatepicker.options);
        element.datepicker(options);
      });
    }
  };
});

exports.default = _module2.default;

/***/ }),
/* 174 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(176);

__webpack_require__(177);

__webpack_require__(178);

/***/ }),
/* 176 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CONFIG = {
  animationConfig: {
    duration: 250
  },
  showAnimation: 'transition.fadeIn',
  showEvent: 'mouseenter',
  hideAnimation: 'transition.fadeOut',
  hideEvent: 'mouseleave',
  overlaySelector: '.dimmer-content'
};

var AvDimmerConfig = function () {
  function AvDimmerConfig() {
    _classCallCheck(this, AvDimmerConfig);

    this.options = CONFIG;
  }

  _createClass(AvDimmerConfig, [{
    key: 'get',
    value: function get() {
      return _angular2.default.copy(this.options);
    }
  }, {
    key: 'set',
    value: function set(options) {
      _angular2.default.extend(this.options, options);
    }
  }, {
    key: '$get',
    value: function $get() {
      return _angular2.default.copy(this.options);
    }
  }]);

  return AvDimmerConfig;
}();

_module2.default.provider('avDimmerConfig', AvDimmerConfig);

exports.default = _module2.default;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

var _controller = __webpack_require__(179);

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.directive('avDimmer', function () {
  return {
    restrict: 'AE',
    scope: {
      avDimmerConfig: '<?'
    },
    controller: _controller2.default
  };
});

exports.default = _module2.default;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvDimmerController = function () {
  function AvDimmerController($scope, $element, avDimmerConfig) {
    _classCallCheck(this, AvDimmerController);

    this.av = { $scope: $scope, $element: $element, avDimmerConfig: avDimmerConfig };

    this.config = _angular2.default.extend({}, this.av.avDimmerConfig, this.av.$scope.avDimmerConfig || {});
  }

  _createClass(AvDimmerController, [{
    key: 'show',
    value: function show() {
      this.av.$element.find(this.config.overlaySelector).velocity('stop', true).velocity(this.config.showAnimation, this.config.animationConfig);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.av.$element.find(this.config.overlaySelector).velocity(this.config.hideAnimation, this.config.animationConfig);
    }
  }, {
    key: 'createListeners',
    value: function createListeners() {
      this.av.$element.on(this.config.showEvent, this.show.bind(this));
      this.av.$element.on(this.config.hideEvent, this.hide.bind(this));
    }
  }, {
    key: 'destroyListeners',
    value: function destroyListeners() {
      this.av.$element.off(this.config.showEvent, this.show.bind(this));
      this.av.$element.off(this.config.hideEvent, this.hide.bind(this));
    }
  }, {
    key: '$onChanges',
    value: function $onChanges(changesObj) {

      if (changesObj && changesObj.avDimmerConfig) {
        var newConfig = _angular2.default.extend({}, this.av.avDimmerConfig, changesObj.avDimmerConfig.currentValue);

        var resetListeners = !_angular2.default.equals(this.config.showEvent, newConfig.showEvent) || !_angular2.default.equals(this.config.hideEvent, newConfig.hideEvent);

        if (resetListeners) {
          this.destroyListeners();
        }

        this.config = newConfig;

        if (resetListeners) {
          this.createListeners();
        }
      }
    }
  }, {
    key: '$onInit',
    value: function $onInit() {
      this.createListeners();
    }
  }, {
    key: '$destroy',
    value: function $destroy() {
      this.destroyListeners();
    }
  }]);

  return AvDimmerController;
}();

exports.default = AvDimmerController;

/***/ }),
/* 180 */,
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(182);

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

__webpack_require__(183);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvHidePermissionController = function () {
  function AvHidePermissionController($element, avUserAuthorizations) {
    _classCallCheck(this, AvHidePermissionController);

    this.$element = $element;
    this.avUserAuthorizations = avUserAuthorizations;
  }

  _createClass(AvHidePermissionController, [{
    key: '$onInit',
    value: function $onInit() {
      this.$element.hide();
    }
  }, {
    key: '$onChanges',
    value: function $onChanges(changed) {
      var _this = this;

      var permissions = changed.avHidePermission.currentValue;

      if (!_angular2.default.isArray(permissions)) {
        permissions = ('' + permissions).split(/\s+/);
      }

      this.avUserAuthorizations.isAnyAuthorized(permissions).then(function (isAuthorized) {
        return _this.onSuccess(isAuthorized);
      }, function () {
        return _this.onError();
      });
    }
  }, {
    key: 'onSuccess',
    value: function onSuccess(isAuthorized) {
      if (isAuthorized) {
        this.$element.removeClass('ng-hide');
        this.$element.show();
      } else {
        this.$element.remove();
      }
    }
  }, {
    key: 'onError',
    value: function onError() {
      this.$element.remove();
    }
  }]);

  return AvHidePermissionController;
}();

_module2.default.directive('avHidePermission', function () {
  return {
    restrict: 'A',
    controller: AvHidePermissionController,
    scope: {},
    bindToController: {
      avHidePermission: '<' // array or comma delimited supported
    },
    controllerAs: 'vm'
  };
});

/***/ }),
/* 183 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(185);

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

var _spaces = __webpack_require__(186);

var _spaces2 = _interopRequireDefault(_spaces);

__webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.directive('avSpacesBreadcrumbs', function ($location, avSpacesResource, $log) {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      'pageName': '@',
      'spaceId': '@?'
    },
    templateUrl: _spaces2.default,
    link: function link(scope) {

      var spaceId = scope.spaceId;

      function parseQuery(queryString) {
        var query = {};
        var a = queryString.substr(1).split('&');
        for (var i = 0; i < a.length; i++) {
          var b = a[i].split('=');
          query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
        }
        return query;
      }

      // Find paramter in query string after hash (#)
      if (!spaceId) {
        spaceId = $location.search().spaceId;
      }

      // Find parameter in normal query string
      if (!spaceId) {
        var params = parseQuery(window.location.search);
        spaceId = params.spaceId;
      }

      if (spaceId) {
        avSpacesResource.get(spaceId).then(function (response) {
          scope.spaceName = response.data.name;
          scope.spaceId = spaceId;
        });
      } else {
        $log.warn('avSpacesBreadcrumbs could NOT detect a spaceId through scope or by parsing the URL.');
      }
    }
  };
});

exports.default = _module2.default;

/***/ }),
/* 186 */
/***/ (function(module, exports) {

var path = 'src/ui/breadcrumbs/spaces.html';
var html = "<ul class=\"breadcrumb breadcrumb-space\">\n  <li>\n    <a href=\"/public/apps/dashboard\" target=\"newBody\"\n      av-analytics-on=\"click\"\n      av-analytics-action=\"click\"\n      av-analytics-label=\"home\"\n      av-analytics-category=\"home breadcrumb\">\n      Home\n    </a>\n  </li>\n  <li ng-if=\"spaceName\">\n    <a href=\"/public/apps/spaces/#/{{spaceId}}\"\n      av-analytics-on=\"click\"\n      av-analytics-action=\"click\"\n      av-analytics-label=\"{{spaceId}}\"\n      av-analytics-category=\"page breadcrumb\">{{spaceName}}</a>\n  </li>\n  <li class=\"active\">\n    {{pageName}}\n  </li>\n</ul>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(188);

__webpack_require__(96);

__webpack_require__(95);

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

__webpack_require__(94);

__webpack_require__(95);

__webpack_require__(96);

__webpack_require__(190);

var _utils = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModalFactory = function ModalFactory($rootScope, $timeout, $compile, $controller, $log, AV_MODAL, avTemplateCache, $q, avModalManager) {
  var Modal = function () {
    function Modal(options) {
      _classCallCheck(this, Modal);

      var self = this;

      this.templateDefer = $q.defer();
      this.templatePromise = this.templateDefer.promise;

      this.options = this.buildOptions(options);

      avTemplateCache.get(options).then(function (_template) {
        self.options.template = _template;
        self.build();
      });
    }

    _createClass(Modal, [{
      key: 'buildOptions',
      value: function buildOptions(userOptions) {

        var options = _angular2.default.extend({}, AV_MODAL.OPTIONS, userOptions);

        options.scope = options.scope || $rootScope.$new();

        if (options.controller) {

          var locals = _angular2.default.extend({ $scope: options.scope }, options.locals);
          var controller = $controller(options.controller, locals);

          if (options.controllerAs) {
            if (options.scope[options.controllerAs]) {
              $log.warn('Overwriting ' + options.controllerAs + 'on scope with AvModal controllerAs, consider passing in no scope, or specifying a different controllerAs than the existing controller');
            }
            options.scope[options.controllerAs] = controller;
          }
        }
        return options;
      }
    }, {
      key: 'build',
      value: function build() {
        var _this = this;

        var scope = this.options.scope;
        this.$element = _angular2.default.element(this.options.template);

        this.createId();

        this.scope();

        $compile(this.$element)(scope);

        $timeout(function () {
          _this.init();
        }, 0, true);

        // Append to container or <body>
        this.options.container ? this.$element.appendTo(this.options.container) : this.$element.appendTo('body');
      }
    }, {
      key: 'init',
      value: function init() {

        this.$element.data('AvModal', this);

        this.templateDefer.resolve(true);

        this.listeners();

        // Initialize Bootstrap jQuery plugin
        this.$element.modal({
          'backdrop': this.options.backdrop,
          'keyboard': this.options.keyboard,
          'show': false,
          'remote': this.options.remote
        });

        if (_angular2.default.isUndefined(this.options.show) || this.options.show) {
          this.$element.modal('show');
        }
      }

      // Add helpers to scope so clients can call internal methods

    }, {
      key: 'scope',
      value: function scope() {

        var self = this;
        var scope = this.options.scope;

        scope.modalShow = function () {
          return self.show();
        };

        scope.modalToggle = function () {
          return self.toggle();
        };

        scope.modalHide = function () {
          return self.hide();
        };
      }
    }, {
      key: 'listeners',
      value: function listeners() {

        var self = this;
        var scope = this.options.scope;
        var $element = this.$element;

        this.animationShowDefer = $q.defer();
        this.animationHideDefer = $q.defer();

        $element.on(AV_MODAL.BS_EVENTS.SHOW, function (event) {
          scope.$emit(AV_MODAL.EVENTS.SHOW, event, self);
        });

        $element.on(AV_MODAL.BS_EVENTS.SHOWN, function (event) {

          if (_angular2.default.isFunction(self.options.onShown)) {
            self.options.onShown();
          }

          self.animationShowDefer.resolve(true);

          scope.$emit(AV_MODAL.EVENTS.SHOWN, event, self);
        });

        $element.on(AV_MODAL.BS_EVENTS.HIDE, function (event) {
          scope.$emit(AV_MODAL.EVENTS.HIDE, event, self);
        });

        $element.on(AV_MODAL.BS_EVENTS.HIDDEN, function (event) {

          if (_angular2.default.isFunction(self.options.onHidden)) {
            self.options.onHidden.call(this);
          }

          self.animationHideDefer.resolve(true);
          scope.$emit(AV_MODAL.EVENTS.HIDDEN, event, self);

          scope.$evalAsync(function () {
            self.destroy();
          });
        });

        // Garbage collection
        scope.$on('$destroy', function () {
          avModalManager.remove(self.id);
          self.destroy();
        });
      }
    }, {
      key: 'show',
      value: function show() {
        var _this2 = this;

        this.animationShowDefer = $q.defer();

        this.templatePromise.then(function () {
          _this2.isShown() ? _this2.animationShowDefer.resolve(true) : _this2.$element.modal('show');
        });

        return this.animationShowDefer.promise;
      }
    }, {
      key: 'hide',
      value: function hide() {
        var _this3 = this;

        this.animationHideDefer = $q.defer();

        this.templatePromise.then(function () {
          !_this3.isShown() ? _this3.animationHideDefer.resolve(true) : _this3.$element.modal('hide');
        });

        return this.animationHideDefer.promise;
      }
    }, {
      key: 'isShown',
      value: function isShown() {
        return this.$element.data(AV_MODAL.NAMESPACE.MODAL).isShown;
      }
    }, {
      key: 'toggle',
      value: function toggle() {
        var _this4 = this;

        return this.templatePromise.then(function () {
          return _this4.isShown() ? _this4.hide() : _this4.show();
        });
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        var _this5 = this;

        return this.templatePromise.then(function () {
          _this5.$element.data('AvModal', null);
          _this5.$element.off(AV_MODAL.BS_EVENTS.SHOWN);
          _this5.$element.off(AV_MODAL.BS_EVENTS.SHOW);
          _this5.$element.remove();
        });
      }
    }, {
      key: 'createId',
      value: function createId() {
        // Create a unique id for the modal if not present or passed in via options
        var id = this.$element.attr('id');
        if (!id) {
          // Get id from options or create a unique id
          id = this.options.id ? this.options.id : (0, _utils.uuid)('av-modal-id');
          this.$element.attr('id', id);
        }

        this.id = id;

        avModalManager.add(id);
      }
    }], [{
      key: 'create',
      value: function create(options) {
        return new Modal(options);
      }
    }]);

    return Modal;
  }();

  return Modal;
};

_module2.default.factory('AvModal', ModalFactory);

/***/ }),
/* 189 */
/***/ (function(module, exports) {

var path = 'src/ui/modal/modal.html';
var html = "<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\">\n  <div class=\"modal-dialog\" ng-class=\"{'modal-lg': size === 'lg', 'modal-sm': size === 'sm'}\">\n    <div class=\"modal-content\" ng-transclude>\n      <!--\n      <div class=\"modal-header\"></div>\n      <div class=\"modal-body\"></div>\n      <div class=\"modal-footer\"></div>\n      -->\n    </div>\n  </div>\n</div>\n\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_module2.default.factory('avModalManager', function () {
  var AvModalManager = function () {
    function AvModalManager() {
      _classCallCheck(this, AvModalManager);

      this.instances = [];
    }

    _createClass(AvModalManager, [{
      key: 'add',
      value: function add(id) {
        this.instances.push(id);
      }
    }, {
      key: 'remove',
      value: function remove(id) {
        this.instances = this.instances.filter(function (instance) {
          return instance !== id;
        });
      }
    }, {
      key: 'closeAll',
      value: function closeAll() {

        this.instances.forEach(function (id) {

          var $el = _angular2.default.element(document.getElementById(id));

          if (!$el) {
            return;
          }

          var bsModal = $el.data('bs.modal');
          if (bsModal) {
            bsModal.removeBackdrop();
            bsModal.$body.removeClass('modal-open');
            bsModal.resetAdjustments();
            bsModal.resetScrollbar();
          }

          var avModal = $el.data('AvModal');
          if (avModal) {
            avModal.destroy();
          }
        });
      }
    }]);

    return AvModalManager;
  }();

  return new AvModalManager();
});

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(97);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.requires.push('ng.shims.placeholder');

/***/ }),
/* 192 */,
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(194);

__webpack_require__(195);

__webpack_require__(196);

__webpack_require__(197);

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.constant('AV_POPOVER', {
  NAME: 'bs.popover'
});

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = {
  showDelay: 10000
};

var AvPopoverConfig = function () {
  function AvPopoverConfig() {
    _classCallCheck(this, AvPopoverConfig);
  }

  _createClass(AvPopoverConfig, [{
    key: 'set',
    value: function set(options) {
      _extends(config, options);
    }
  }, {
    key: '$get',
    value: function $get() {
      return _extends({}, config);
    }
  }]);

  return AvPopoverConfig;
}();

_module2.default.provider('avPopoverConfig', AvPopoverConfig);

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvPopoverController = function () {
  function AvPopoverController($element, $scope, AV_POPOVER, $timeout, avPopoverConfig) {
    _classCallCheck(this, AvPopoverController);

    this.di = { $element: $element, $scope: $scope, AV_POPOVER: AV_POPOVER, $timeout: $timeout };
    this.options = _extends({}, avPopoverConfig);
  }

  _createClass(AvPopoverController, [{
    key: 'listeners',
    value: function listeners() {
      var _this = this;

      ['show', 'shown', 'hide', 'hidden'].forEach(function (name) {
        _this.di.$element.on(name + '.bs.popover', function (ev) {
          return _this.di.$scope.$emit('av:popover:' + name, ev);
        });
      });
    }
  }, {
    key: 'plugin',
    value: function plugin() {
      return this.di.$element.data(this.di.AV_POPOVER.NAME);
    }
  }, {
    key: 'show',
    value: function show() {
      this.di.$element.popover('show');
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.di.$element.popover('hide');
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.di.$element.popover('toggle');
    }
  }, {
    key: '$destroy',
    value: function $destroy() {
      this.di.$element.popover('destroy');
    }
  }, {
    key: 'init',
    value: function init() {
      this.listeners();

      if (this.di.$scope.show) {

        // give the UI a chance to settle first.
        this.di.$timeout(this.show.bind(this), 0, false);

        if (this.di.$scope.delay && this.di.$scope.delay.hide) {
          this.di.$timeout(this.hide.bind(this), this.di.$scope.delay.hide, false);
          return;
        }

        // If no delay is found or cannot be parsed, set a default timeout so that the popover doesn't stick around forever
        this.di.$timeout(this.hide.bind(this), this.options.showDelay, false);
      }
    }
  }]);

  return AvPopoverController;
}();

_module2.default.controller('AvPopoverController', AvPopoverController);

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.directive('avPopover', function () {
  return {
    restrict: 'A',
    controller: 'AvPopoverController',
    scope: {
      show: '=',
      delay: '='
    },
    link: function link(scope, element, attrs, avPopover) {

      var options = {};

      scope.$evalAsync(function () {
        element.popover(_angular2.default.extend({}, options, {
          html: true
        }));
        avPopover.init();
      });
    }
  };
});

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(199);

__webpack_require__(200);

__webpack_require__(201);

__webpack_require__(202);

__webpack_require__(203);

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.constant('AV_TOOLTIP', {
  NAME: 'bs.tooltip'
});

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = {
  showDelay: 10000
};

var AvTooltipConfig = function () {
  function AvTooltipConfig() {
    _classCallCheck(this, AvTooltipConfig);
  }

  _createClass(AvTooltipConfig, [{
    key: 'set',
    value: function set(options) {
      _extends(config, options);
    }
  }, {
    key: '$get',
    value: function $get() {
      return _extends({}, config);
    }
  }]);

  return AvTooltipConfig;
}();

_module2.default.provider('avTooltipConfig', AvTooltipConfig);

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvTooltipController = function () {
  function AvTooltipController($element, $scope, AV_TOOLTIP, $timeout, avTooltipConfig) {
    _classCallCheck(this, AvTooltipController);

    this.di = { $element: $element, $scope: $scope, AV_TOOLTIP: AV_TOOLTIP, $timeout: $timeout };
    this.options = _extends({}, avTooltipConfig);
  }

  _createClass(AvTooltipController, [{
    key: 'listeners',
    value: function listeners() {
      var _this = this;

      ['show', 'shown', 'hide', 'hidden'].forEach(function (name) {
        _this.di.$element.on(name + '.bs.tooltip', function (ev) {
          return _this.di.$scope.$emit('av:tooltip:' + name, ev);
        });
      });
    }
  }, {
    key: 'plugin',
    value: function plugin() {
      return this.di.$element.data(this.di.AV_TOOLTIP.NAME);
    }
  }, {
    key: 'show',
    value: function show() {
      this.di.$element.tooltip('show');
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.di.$element.tooltip('hide');
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.di.$element.tooltip('toggle');
    }
  }, {
    key: '$destroy',
    value: function $destroy() {
      this.di.$element.tooltip('destroy');
    }
  }, {
    key: 'init',
    value: function init() {
      this.listeners();

      if (this.di.$scope.show) {

        // give the UI a chance to settle first.
        this.di.$timeout(this.show.bind(this), 0, false);

        if (this.di.$scope.delay && this.di.$scope.delay.hide) {
          this.di.$timeout(this.hide.bind(this), this.di.$scope.delay.hide, false);
          return;
        }

        // If no delay is found or cannot be parsed, set a default timeout so that the tooltip doesn't stick around forever
        this.di.$timeout(this.hide.bind(this), this.options.showDelay, false);
      }
    }
  }]);

  return AvTooltipController;
}();

_module2.default.controller('AvTooltipController', AvTooltipController);

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.directive('avTooltip', function () {
  return {
    restrict: 'A',
    controller: 'AvTooltipController',
    scope: {
      show: '=',
      delay: '='
    },
    link: function link(scope, element, attrs, avTooltip) {

      var options = {};

      scope.$evalAsync(function () {
        element.tooltip(_angular2.default.extend({}, options, {
          html: true
        }));
        avTooltip.init();
      });
    }
  };
});

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inlineHelp = {
  template: function template($element, $attrs) {
    return '\n      <span class="inline-help"\n        av-tooltip\n        placement="top"\n        trigger="hover"\n        title="' + $attrs.title + '"\n        >\n        What\'s this\n      </span>\n      ';
  }
};

_module2.default.component('inlineHelp', inlineHelp);

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(98);

__webpack_require__(99);

__webpack_require__(35);

__webpack_require__(205);

__webpack_require__(101);

__webpack_require__(207);

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

__webpack_require__(100);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_module2.default.requires.push('ngSanitize');

var AvValContainerController = function () {
  function AvValContainerController($scope, AV_UI) {
    _classCallCheck(this, AvValContainerController);

    this.av = { $scope: $scope, AV_UI: AV_UI };
  }

  _createClass(AvValContainerController, [{
    key: 'message',
    value: function message(context) {
      var _this = this;

      var ngModel = context.ngModel;


      var message = null;
      var violations = Object.keys(ngModel.$error);
      if (violations.length) {
        var validator = violations[0];
        var constraint = ngModel.$validators[validator] && ngModel.$validators[validator].constraint;
        if (constraint) {
          message = constraint.message;
        } else {
          message = this.av.AV_UI.FALLBACK_VALIDATION_MESSAGE;
        }
      } else {
        message = null;
      }

      // $applyAsync is needed to update the UI from $broadcast events
      this.av.$scope.$applyAsync(function () {
        _this.av.$scope.vm.message = message;
      });
    }
  }]);

  return AvValContainerController;
}();

_module2.default.directive('avValContainer', function () {
  return {
    restrict: 'AE',
    controller: AvValContainerController,
    template: '<p class="help-block" ng-bind-html="vm.message"></p>',
    replace: true,
    scope: {},
    link: function link(scope) {
      scope.vm = { message: null, id: null };
    }
  };
});

/***/ }),
/* 206 */,
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

__webpack_require__(59);

__webpack_require__(35);

__webpack_require__(99);

__webpack_require__(101);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AvValController = function () {
  function AvValController($scope) {
    _classCallCheck(this, AvValController);

    this.ngForm = null;
    this.rulesSchema = null;
    this.avValOn = null;
    this.avValDebounce = null;
    this.avValInvalid = false;
    this.di = { $scope: $scope };
  }

  _createClass(AvValController, [{
    key: 'init',
    value: function init(options) {
      _extends(this, options);
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.ngForm.$setPristine();
      this.ngForm.$setUntouched();
      this.ngForm.$submitted = false;
    }
  }]);

  return AvValController;
}();

_module2.default.controller('AvValFormController', AvValController);

// $pristine - True if user has not interacted with the form yet.
// $dirty - True if user has already interacted with the form.
// $valid - True if all of the containing forms and controls are valid.
// $invalid - True if at least one containing control or form is invalid.
// $pending - True if at least one containing control or form is pending.
// $submitted - True if user has submitted the form even if its invalid.
//
_module2.default.directive('avValForm', function ($log, $timeout, $parse, AV_VAL, avValAdapter, $rootScope) {
  return {

    restrict: 'A',
    priority: 10,
    require: ['form', 'avValForm'],
    controller: 'AvValFormController',
    compile: function compile() {
      return {
        pre: function pre(scope, iEl, iAttrs, controllers) {

          var ruleFn = $parse(iAttrs.avValForm);
          var rulesSchema = ruleFn(scope);

          var ngForm = controllers[0];
          var avForm = controllers[1];

          rulesSchema = rulesSchema || iAttrs.avValForm; // interpolated rule from scope || fixed string

          if (!rulesSchema) {
            $log.error('avValForm requires a rules schema in order to run a set of validation rules');
            return;
          }

          scope.$watch(ruleFn, function (_rulesSchema, _oldRulesSchema) {

            if (_rulesSchema !== _oldRulesSchema) {
              $timeout(function () {
                $rootScope.$broadcast(AV_VAL.EVENTS.REVALIDATE);
              });
            }
          });

          avForm.init({
            ngForm: ngForm,
            rulesSchema: rulesSchema
          });
        },
        post: function post(scope, el, iAttrs, controllers) {

          // Prevent HTML5 validation from kicking in
          el.attr('novalidate', 'novalidate');

          // Disable ng-submit or ng-click handlers and store the function to call for submitting
          var fn = void 0;
          if (iAttrs.ngSubmit) {
            // Disable ng-submit event
            el.off('submit');
            fn = $parse(iAttrs.ngSubmit, null, true);
          } else if (iAttrs.ngClick) {
            // Disable ng-click event
            el.off('click');
            fn = $parse(iAttrs.ngClick, null, true);
          }

          var ngForm = controllers[0];
          var avForm = controllers[1];

          scope.$on(AV_VAL.EVENTS.RESET, function () {
            avForm.reset();
          });

          var watcher = function watcher() {
            return ngForm.$pending;
          };
          var unwatch = void 0;

          el.bind('submit', function (event) {

            scope.$broadcast(AV_VAL.EVENTS.SUBMITTED);
            ngForm.$setSubmitted();

            if (ngForm.$invalid || ngForm.$pending) {

              event.preventDefault();
              event.stopImmediatePropagation();
              scope.$broadcast(event);

              if (ngForm.$pending) {

                unwatch = scope.$watch(watcher, function (pending) {
                  if (!pending) {
                    avValAdapter.scroll(el);
                  }
                });
              } else {
                avValAdapter.scroll(el);
              }

              return;
            }

            ngForm.$setPristine();

            if (!fn) {
              return;
            }

            var callback = function callback() {
              fn(scope, { $event: event });
            };

            scope.$apply(callback);
          });

          scope.$on('$destroy', function () {
            try {
              unwatch();
            } catch (e) {/* no op */}
          });
        }
      };
    }
  };
});

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(209);

__webpack_require__(210);

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.directive('avOnFileChange', function () {
  return {
    restrict: 'A',
    link: function link(scope, element, attrs) {
      element.on('change', function () {
        scope.$applyAsync(function () {
          var onFileChangeHandler = scope.$eval(attrs.avOnFileChange);
          var el = element[0];

          if (el.files) {
            onFileChangeHandler(scope, el);
            el.value = '';
          }
        });
      });

      scope.$on('$destroy', function () {
        element.off('change');
      });
    }
  };
});

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module = __webpack_require__(0);

var _module2 = _interopRequireDefault(_module);

var _uploadProgressBar = __webpack_require__(211);

var _uploadProgressBar2 = _interopRequireDefault(_uploadProgressBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.directive('avUploadProgressBar', function () {
  return {
    restrict: 'E',
    scope: {
      upload: '=',
      errorcallback: '='
    },
    templateUrl: _uploadProgressBar2.default,
    link: function link(scope) {
      scope.verifyPassword = function () {
        scope.upload.sendPassword(scope.upload.password);
      };
      scope.percentage = 0;

      var update = function update() {
        scope.percentage = scope.upload.percentage;
      };

      var error = function error() {
        scope.error = true;
        return scope.errorcallback(scope.upload);
      };

      var success = function success() {
        scope.error = false;
        scope.percentage = 100;
      };

      scope.upload.onProgress.push(function () {
        return scope.$applyAsync(update);
      });
      scope.upload.onSuccess.push(function () {
        return scope.$applyAsync(success);
      });
      scope.upload.onError.push(function () {
        return scope.$applyAsync(error);
      });
    }
  };
});

/***/ }),
/* 211 */
/***/ (function(module, exports) {

var path = 'src/ui/uploads/upload-progress-bar.html';
var html = "<div ng-if=\"!upload.errorMessage\" ng-class=\"{'progress': true, 'progress-complete': percentage === 100}\">\n  <div ng-class=\"{'progress-bar progress-bar-success': true, 'progress-bar-danger': error}\" role=\"progressbar\" aria-valuenow=\"{{percentage}}\" aria-valuemin=\"0\" aria-valuemax=\"100\" ng-style=\"{'width': percentage + '%'}\">\n    <span class=\"sr-only\">{{percentage}}% Complete</span>\n  </div>\n</div>\n<span ng-if=\"upload.errorMessage\" class=\"text-danger\">{{upload.errorMessage}}</span>\n<!-- file password -->\n<div ng-if=\"upload.status === 'encrypted'\" class=\"pwRequired\">\n  <button type=\"button\" class=\"btn btn-primary btn-sm pwPromptButton\" data-toggle=\"modal\" data-target=\"#{{upload.id}}\">\n    Enter password\n  </button>\n  <div class=\"modal fade\" id=\"{{upload.id}}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">×</span><span class=\"sr-only\">Close</span></button>\n          <h4 class=\"modal-title\" id=\"myModalLabel\">Enter Password</h4>\n        </div>\n        <form>\n          <div class=\"modal-body\">\n            Password: <input ng-model=\"upload.password\" type=\"password\" placeholder=\"password\"/>\n          </div>\n        </form>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" ng-click=\"verifyPassword()\">Ok</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ })
],[131]);
//# sourceMappingURL=availity-angular.js.map