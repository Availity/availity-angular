/*!
 * 
 * availity-angular v2.0.0-beta.0 (07/25/2016)
 * (c) Availity, LLC
 */
webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(304);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _module = __webpack_require__(419);
	
	var _module2 = _interopRequireDefault(_module);
	
	__webpack_require__(423);
	
	__webpack_require__(418);
	
	__webpack_require__(424);
	
	__webpack_require__(425);
	
	__webpack_require__(426);
	
	__webpack_require__(427);
	
	__webpack_require__(430);
	
	__webpack_require__(432);
	
	__webpack_require__(436);
	
	__webpack_require__(442);
	
	__webpack_require__(443);
	
	__webpack_require__(444);
	
	__webpack_require__(448);
	
	__webpack_require__(449);
	
	__webpack_require__(450);
	
	__webpack_require__(451);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.controller('PageController', function () {
	  // no op
	});
	
	function toggleButtons() {
	
	  // Add View Code toggle button for each example
	  (0, _jquery2.default)('.docs-example').each(function () {
	
	    var btn = '\n      <div>\n        <hr class="divider-lg" />\n        <div class="btn-toolbar">\n          <button class="btn btn-ghost btn-sm" data-toggle="code">View Code<i class="icon icon-code"></i></button>\n        </div>\n      </div>';
	
	    if ((0, _jquery2.default)(this).next().is('[class*="language-"]')) {
	      (0, _jquery2.default)(this).append((0, _jquery2.default)(btn));
	    }
	  });
	
	  (0, _jquery2.default)('[data-toggle="code"]').click(function (e) {
	
	    e.preventDefault();
	
	    var target = (0, _jquery2.default)(this).parents('.docs-example').next('[class*="language-"]');
	
	    if (target.is(':visible')) {
	      target.velocity('slideUp', { duration: 200 });
	    } else {
	      target.velocity('fadeIn', {
	        duration: 300,
	        display: 'block'
	      });
	    }
	  });
	}
	
	(0, _jquery2.default)(document).ready(function () {
	  toggleButtons();
	});
	
	_module2.default.run(function ($httpBackend) {
	  $httpBackend.whenRoute('POST', '/api/v1/log-messages').respond({});
	});

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _angular = __webpack_require__(302);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('availity', ['ng']);

/***/ },

/***/ 309:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Inspiration: https://github.com/seeden/angular-es6
	
	function storeInjections() {
	  var injected = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var instance = arguments[1];
	  var args = arguments[2];
	  var name = arguments.length <= 3 || arguments[3] === undefined ? 'av' : arguments[3];
	
	
	  var instanceInject = instance[name] = instance[name] || {};
	
	  injected.forEach(function (injectName, index) {
	    instanceInject[injectName] = args[index];
	  });
	}
	
	var Base = function Base() {
	  _classCallCheck(this, Base);
	
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  storeInjections(this.constructor.$inject, this, args);
	};
	
	Base.$inject = [];
	exports.default = Base;

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.print = exports.uuid = exports.REGEX_API_URL = exports.regions = exports.getRelativeUrl = exports.isBlank = exports.stringify = undefined;
	
	var _strings = __webpack_require__(313);
	
	var _urls = __webpack_require__(314);
	
	var _uuid = __webpack_require__(315);
	
	var _uuid2 = _interopRequireDefault(_uuid);
	
	var _print = __webpack_require__(316);
	
	var _print2 = _interopRequireDefault(_print);
	
	var _regions = __webpack_require__(317);
	
	var _regions2 = _interopRequireDefault(_regions);
	
	__webpack_require__(318);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.stringify = _strings.stringify;
	exports.isBlank = _strings.isBlank;
	exports.getRelativeUrl = _urls.getRelativeUrl;
	exports.regions = _regions2.default;
	exports.REGEX_API_URL = _urls.REGEX_API_URL;
	exports.uuid = _uuid2.default;
	exports.print = _print2.default;

/***/ },

/***/ 313:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
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

/***/ },

/***/ 314:
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
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

/***/ },

/***/ 315:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
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

/***/ },

/***/ 316:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.print = print;
	// https://github.com/jasonday/printThis/commit/66f9cbd0e3760767342eed4ef32cf8294417b227
	
	function print() {
	
	  if (document.queryCommandSupported('print')) {
	    document.execCommand('print', false, null);
	  } else {
	    window.focus();
	    window.print();
	  }
	}

/***/ },

/***/ 317:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var regions = [{
	  'name': 'Alabama',
	  'code': 'AL'
	}, {
	  'name': 'Alaska',
	  'code': 'AK'
	}, {
	  'name': 'Arizona',
	  'code': 'AZ'
	}, {
	  'name': 'Arkansas',
	  'code': 'AR'
	}, {
	  'name': 'California',
	  'code': 'CA'
	}, {
	  'name': 'Colorado',
	  'code': 'CO'
	}, {
	  'name': 'Connecticut',
	  'code': 'CT'
	}, {
	  'name': 'Delaware',
	  'code': 'DE'
	}, {
	  'name': 'District Of Columbia',
	  'code': 'DC'
	}, {
	  'name': 'Florida',
	  'code': 'FL'
	}, {
	  'name': 'Georgia',
	  'code': 'GA'
	}, {
	  'name': 'Hawaii',
	  'code': 'HI'
	}, {
	  'name': 'Idaho',
	  'code': 'ID'
	}, {
	  'name': 'Illinois',
	  'code': 'IL'
	}, {
	  'name': 'Indiana',
	  'code': 'IN'
	}, {
	  'name': 'Iowa',
	  'code': 'IA'
	}, {
	  'name': 'Kansas',
	  'code': 'KS'
	}, {
	  'name': 'Kentucky',
	  'code': 'KY'
	}, {
	  'name': 'Louisiana',
	  'code': 'LA'
	}, {
	  'name': 'Maine',
	  'code': 'ME'
	}, {
	  'name': 'Maryland',
	  'code': 'MD'
	}, {
	  'name': 'Massachusetts',
	  'code': 'MA'
	}, {
	  'name': 'Michigan',
	  'code': 'MI'
	}, {
	  'name': 'Minnesota',
	  'code': 'MN'
	}, {
	  'name': 'Mississippi',
	  'code': 'MS'
	}, {
	  'name': 'Missouri',
	  'code': 'MO'
	}, {
	  'name': 'Montana',
	  'code': 'MT'
	}, {
	  'name': 'Nebraska',
	  'code': 'NE'
	}, {
	  'name': 'Nevada',
	  'code': 'NV'
	}, {
	  'name': 'New Hampshire',
	  'code': 'NH'
	}, {
	  'name': 'New Jersey',
	  'code': 'NJ'
	}, {
	  'name': 'New Mexico',
	  'code': 'NM'
	}, {
	  'name': 'New York',
	  'code': 'NY'
	}, {
	  'name': 'North Carolina',
	  'code': 'NC'
	}, {
	  'name': 'North Dakota',
	  'code': 'ND'
	}, {
	  'name': 'Ohio',
	  'code': 'OH'
	}, {
	  'name': 'Oklahoma',
	  'code': 'OK'
	}, {
	  'name': 'Oregon',
	  'code': 'OR'
	}, {
	  'name': 'Pennsylvania',
	  'code': 'PA'
	}, {
	  'name': 'Rhode Island',
	  'code': 'RI'
	}, {
	  'name': 'South Carolina',
	  'code': 'SC'
	}, {
	  'name': 'South Dakota',
	  'code': 'SD'
	}, {
	  'name': 'Tennessee',
	  'code': 'TN'
	}, {
	  'name': 'Texas',
	  'code': 'TX'
	}, {
	  'name': 'Utah',
	  'code': 'UT'
	}, {
	  'name': 'Vermont',
	  'code': 'VT'
	}, {
	  'name': 'Virginia',
	  'code': 'VA'
	}, {
	  'name': 'Washington',
	  'code': 'WA'
	}, {
	  'name': 'West Virginia',
	  'code': 'WV'
	}, {
	  'name': 'Wisconsin',
	  'code': 'WI'
	}, {
	  'name': 'Wyoming',
	  'code': 'WY'
	}];
	
	exports.default = regions;

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(305);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _regions = __webpack_require__(317);
	
	var _regions2 = _interopRequireDefault(_regions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.constant('AV_GLOBALS', { REGIONS: _regions2.default });

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(305);
	
	var _module2 = _interopRequireDefault(_module);
	
	__webpack_require__(323);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LogMessagesProvider = function () {
	  function LogMessagesProvider() {
	    _classCallCheck(this, LogMessagesProvider);
	  }
	
	  LogMessagesProvider.prototype.$get = function $get(AvApiResource) {
	    var AvLogMessagesResource = function (_AvApiResource) {
	      _inherits(AvLogMessagesResource, _AvApiResource);
	
	      function AvLogMessagesResource() {
	        _classCallCheck(this, AvLogMessagesResource);
	
	        return _possibleConstructorReturn(this, _AvApiResource.call(this, {
	          version: '/v1',
	          name: '/log-messages'
	        }));
	      }
	
	      AvLogMessagesResource.prototype.buildRequest = function buildRequest(level, entries) {
	
	        var requestPayload = {};
	
	        if (entries.level) {
	          delete entries.level;
	        }
	
	        requestPayload.level = level;
	        requestPayload.entries = entries;
	
	        return requestPayload;
	      };
	
	      AvLogMessagesResource.prototype.debug = function debug(entries) {
	        return this.create(this.buildRequest('debug', entries));
	      };
	
	      AvLogMessagesResource.prototype.info = function info(entries) {
	        return this.create(this.buildRequest('info', entries));
	      };
	
	      AvLogMessagesResource.prototype.warn = function warn(entries) {
	        return this.create(this.buildRequest('warn', entries));
	      };
	
	      AvLogMessagesResource.prototype.error = function error(entries) {
	        return this.create(this.buildRequest('error', entries));
	      };
	
	      return AvLogMessagesResource;
	    }(AvApiResource);
	
	    return new AvLogMessagesResource();
	  };
	
	  return LogMessagesProvider;
	}();
	
	_module2.default.provider('avLogMessagesResource', LogMessagesProvider);
	
	exports.default = _module2.default;

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _angular = __webpack_require__(302);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(305);
	
	var _module2 = _interopRequireDefault(_module);
	
	__webpack_require__(324);
	
	__webpack_require__(325);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ApiResourceProvider = function () {
	  function ApiResourceProvider(AV_API) {
	    _classCallCheck(this, ApiResourceProvider);
	
	    this.defaultOptions = _extends({}, AV_API.OPTIONS);
	  }
	
	  ApiResourceProvider.prototype.setOptions = function setOptions(options) {
	    _extends(this.defaultOptions, options);
	  };
	
	  ApiResourceProvider.prototype.getOptions = function getOptions() {
	    return _angular2.default.copy(this.defaultOptions);
	  };
	
	  ApiResourceProvider.prototype.$get = function $get($http, $q, avPollingService) {
	
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
	      }
	
	      AvApiResource.prototype.config = function config(_config2) {
	        return _angular2.default.extend({}, this.options, _config2 || {});
	      };
	
	      AvApiResource.prototype.cacheBust = function cacheBust(config) {
	
	        config.cacheBust = null;
	        config.params = config.params || {};
	        config.params.cacheBust = new Date().getTime();
	
	        return config;
	      };
	
	      AvApiResource.prototype.getUrl = function getUrl(id) {
	
	        if (this.options.api) {
	          return this.getApiUrl(id);
	        }
	
	        return this.options.url;
	      };
	
	      AvApiResource.prototype.createResponse = function createResponse(data, status, headers, config) {
	        return {
	          data: data,
	          status: status,
	          headers: headers,
	          config: config
	        };
	      };
	
	      AvApiResource.prototype.request = function request(config, afterCallback) {
	
	        var self = this;
	        var defer = $q.defer();
	
	        $http(config).success(function (data, status, headers, _config) {
	
	          var _response = {
	            data: data,
	            status: status,
	            headers: headers,
	            config: _config
	          };
	
	          // handle the async response if applicable
	          var _promise = $q.when(avPollingService.response(_response));
	          // notify the promise listener of the original response
	          defer.notify(_response);
	
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
	        }).error(function (data, status, headers, _config) {
	          var response = self.createResponse(data, status, headers, _config);
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
	      };
	
	      AvApiResource.prototype.normalize = function normalize(url) {
	        return url.replace(/[\/]+/g, '/').replace(/\/$/, '');
	      };
	
	      AvApiResource.prototype.join = function join() {
	        var joined = [].slice.call(arguments, 0).join('/');
	        return this.normalize(joined);
	      };
	
	      AvApiResource.prototype.getApiUrl = function getApiUrl(_id) {
	
	        var id = _id ? '/' + _id : '';
	
	        var uri = void 0;
	
	        var _options2 = this.options;
	        var path = _options2.path;
	        var version = _options2.version;
	        var name = _options2.name;
	        var url = _options2.url;
	
	
	        if (name) {
	          uri = this.join('/', path, version, name, id);
	        } else {
	          uri = this.join(url, id);
	        }
	
	        return uri;
	      };
	
	      AvApiResource.prototype.create = function create(_data, _config) {
	
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
	      };
	
	      AvApiResource.prototype.get = function get(id, _config) {
	
	        var config = _config;
	
	        if (!id) {
	          throw new Error('called method without [id]');
	        }
	
	        config = this.config(config);
	        if (config.cacheBust) {
	          config = this.cacheBust(config);
	        }
	        config.method = 'GET';
	        config.url = this.getUrl(id);
	
	        return this.request(config, this.afterGet);
	      };
	
	      AvApiResource.prototype.query = function query(_config) {
	
	        var config = _config;
	
	        config = this.config(config);
	        if (config.cacheBust) {
	          config = this.cacheBust(config);
	        }
	        config.method = 'GET';
	        config.url = this.getUrl();
	
	        return this.request(config, this.afterQuery);
	      };
	
	      AvApiResource.prototype.update = function update(id, _data, _config) {
	
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
	      };
	
	      AvApiResource.prototype.remove = function remove(id, _config) {
	
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
	      };
	
	      AvApiResource.create = function create() {
	        return new AvApiResource();
	      };
	
	      AvApiResource.prototype.beforeCreate = function beforeCreate(data) {
	        return data;
	      };
	
	      AvApiResource.prototype.afterCreate = function afterCreate(response) {
	        return response;
	      };
	
	      AvApiResource.prototype.afterQuery = function afterQuery(response) {
	        return response;
	      };
	
	      AvApiResource.prototype.afterGet = function afterGet(response) {
	        return response;
	      };
	
	      AvApiResource.prototype.beforeUpdate = function beforeUpdate(data) {
	        return data;
	      };
	
	      AvApiResource.prototype.afterUpdate = function afterUpdate(response) {
	        return response;
	      };
	
	      AvApiResource.prototype.afterRemove = function afterRemove(response) {
	        return response;
	      };
	
	      return AvApiResource;
	    }();
	
	    return AvApiResource;
	  };
	
	  return ApiResourceProvider;
	}();
	
	_module2.default.provider('AvApiResource', ApiResourceProvider);
	
	exports.default = _module2.default;

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(305);
	
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
	    }
	  }
	});
	
	exports.default = _module2.default;

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _angular = __webpack_require__(302);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _constants = __webpack_require__(326);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _utils = __webpack_require__(312);
	
	var _base = __webpack_require__(309);
	
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

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(305);
	
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

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(305);
	
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
	
	      return _possibleConstructorReturn(this, _AvApiResource.call(this, { name: 'users' }));
	    }
	
	    AvUsersResource.prototype.afterGet = function afterGet(response) {
	      var user = response.data.user ? response.data.user : response.data;
	      return user;
	    };
	
	    AvUsersResource.prototype.me = function me(config) {
	      return this.get('me', config);
	    };
	
	    return AvUsersResource;
	  }(AvApiResource);
	
	  return new AvUsersResource();
	};
	
	_module2.default.factory('avUsersResource', UserServiceFactory);
	
	exports.default = _module2.default;

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(324);
	
	__webpack_require__(322);
	
	__webpack_require__(331);
	
	__webpack_require__(332);
	
	__webpack_require__(323);
	
	__webpack_require__(328);

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(305);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var OrganizationResourceFactory = function OrganizationResourceFactory(AvApiResource) {
	  var OrganizationResource = function (_AvApiResource) {
	    _inherits(OrganizationResource, _AvApiResource);
	
	    function OrganizationResource() {
	      _classCallCheck(this, OrganizationResource);
	
	      return _possibleConstructorReturn(this, _AvApiResource.call(this, { name: 'organizations' }));
	    }
	
	    OrganizationResource.prototype.getOrganizations = function getOrganizations(config) {
	      return this.query(config).then(function (response) {
	        return response.data.organizations ? response.data.organizations : response.data;
	      });
	    };
	
	    return OrganizationResource;
	  }(AvApiResource);
	
	  return new OrganizationResource();
	};
	
	_module2.default.factory('avOrganizationsResource', OrganizationResourceFactory);
	
	exports.default = _module2.default;

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _moment = __webpack_require__(320);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _module = __webpack_require__(305);
	
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
	
	      var _this = _possibleConstructorReturn(this, _AvApiResource.call(this, {
	        path: '/api/internal',
	        version: '/v1',
	        name: '/axi-user-permissions'
	      }));
	
	      _this.cacheBust = (0, _moment2.default)().unix();
	      return _this;
	    }
	
	    AvUserPermissionsResource.prototype.afterQuery = function afterQuery(response) {
	      return response.data.axiUserPermissions ? response.data.axiUserPermissions : [];
	    };
	
	    AvUserPermissionsResource.prototype.getPermissions = function getPermissions(permissionIds, region) {
	
	      return this.query({
	        params: {
	          permissionId: permissionIds,
	          region: region,
	          cacheBust: this.cacheBust
	        }
	      });
	    };
	
	    return AvUserPermissionsResource;
	  }(AvApiResource);
	
	  return new AvUserPermissionsResource();
	};
	
	_module2.default.factory('avUserPermissionsResource', AvUserPermissionsResourceFactory);
	
	exports.default = _module2.default;

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(302);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _lodash = __webpack_require__(306);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _module = __webpack_require__(305);
	
	var _module2 = _interopRequireDefault(_module);
	
	__webpack_require__(330);
	
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
	
	    AvUserAuthorizations.prototype.setRegion = function setRegion(region) {
	      this.region = region;
	      return this;
	    };
	
	    AvUserAuthorizations.prototype.setPermissionIds = function setPermissionIds(permissionIds) {
	
	      if (!_angular2.default.isArray(permissionIds)) {
	        throw new Error('permissionsIds must be an array of strings in setPermissionIds()');
	      }
	
	      this.permissionIds = permissionIds;
	
	      return this;
	    };
	
	    AvUserAuthorizations.prototype.isAuthorized = function isAuthorized(permissionId) {
	      return this.getPermission(permissionId).then(function (permission) {
	        return permission.isAuthorized;
	      });
	    };
	
	    AvUserAuthorizations.prototype.isAnyAuthorized = function isAnyAuthorized(permissionIds) {
	      return this.getPermissions(permissionIds).then(function (permissions) {
	        return permissions.some(function (permission) {
	          return permission.isAuthorized;
	        });
	      });
	    };
	
	    AvUserAuthorizations.prototype.getPermission = function getPermission(permissionId) {
	
	      if (!_angular2.default.isString(permissionId)) {
	        throw new Error('permissionsId must be a string ID for getPermission()');
	      }
	
	      return this.getPermissions([permissionId]).then(function (permissions) {
	        return permissions.find(function (permission) {
	          return permission.id === permissionId;
	        });
	      });
	    };
	
	    AvUserAuthorizations.prototype.getPermissions = function getPermissions(permissionIds) {
	      var _this = this;
	
	      if (!_angular2.default.isArray(permissionIds)) {
	        throw new Error('permissionsIds must be an array of string IDs for getPermissions()');
	      }
	
	      // Combine pre-loaded permission ids with the ids from this function invocation
	      this.permissionIds = _lodash2.default.union(this.permissionIds, permissionIds);
	
	      return avUserPermissionsResource.getPermissions(this.permissionIds, this.region).then(function (permissions) {
	        return _this.map(permissionIds, permissions);
	      });
	    };
	
	    AvUserAuthorizations.prototype.getOrganizations = function getOrganizations(permissionId) {
	      return this.getPermission(permissionId).then(function (permission) {
	        return permission.organizations;
	      });
	    };
	
	    AvUserAuthorizations.prototype.getPayers = function getPayers(permissionId, organizationId) {
	
	      return this.getPermission(permissionId).then(function (permission) {
	
	        var organization = permission.organizations.find(function (thisPermission) {
	          return thisPermission.id === organizationId;
	        });
	
	        if (organization && organization.resources) {
	          return organization.resources;
	        }
	
	        return [];
	      });
	    };
	
	    AvUserAuthorizations.prototype.map = function map(permissionIds, permissions) {
	
	      var self = this;
	
	      var result = permissionIds.map(function (permissionId) {
	
	        var key = { id: permissionId };
	        var permission = permissions.find(function (thisPermission) {
	          return thisPermission.id === permissionId;
	        });
	        permission = permission ? self.convert(permission) : self.convert(key);
	        return permission;
	      });
	
	      return result;
	    };
	
	    AvUserAuthorizations.prototype.convert = function convert(permission) {
	
	      permission.isAuthorized = permission.organizations ? permission.organizations.length > 0 : false;
	      permission.geographies = permission.geographies || [];
	      permission.organizations = permission.organizations || [];
	
	      return permission;
	    };
	
	    return AvUserAuthorizations;
	  }();
	
	  return new AvUserAuthorizations();
	};
	
	_module2.default.factory('avUserAuthorizations', AvUserAuthorizationsFactory);

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _angular = __webpack_require__(302);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ngModule = _angular2.default.module('availity.ui', ['ng']);
	
	exports.default = ngModule;

/***/ },

/***/ 356:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Inspiration: https://github.com/seeden/angular-es6
	
	function storeInjections() {
	  var injected = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var instance = arguments[1];
	  var args = arguments[2];
	  var name = arguments.length <= 3 || arguments[3] === undefined ? 'av' : arguments[3];
	
	
	  var instanceInject = instance[name] = instance[name] || {};
	
	  injected.forEach(function (injectName, index) {
	    instanceInject[injectName] = args[index];
	  });
	}
	
	var Base = function Base() {
	  _classCallCheck(this, Base);
	
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  storeInjections(this.constructor.$inject, this, args);
	};
	
	Base.$inject = [];
	exports.default = Base;

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(360);
	
	__webpack_require__(361);
	
	__webpack_require__(362);
	
	__webpack_require__(365);

/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(363);

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _template = __webpack_require__(364);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _module = __webpack_require__(353);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.directive('avLoader', function () {
	  return {
	    restrict: 'AE',
	    replace: true,
	    templateUrl: _template2.default,
	    link: function link(scope, element, attr) {
	
	      var active = void 0;
	
	      var endAnimation = function endAnimation() {
	        element.find('.loading-bullet').velocity('stop', true);
	        element.removeData();
	      };
	
	      var animate = function animate() {
	        element.find('.loading-bullet').velocity('transition.slideRightIn', { stagger: 250 }).velocity({ opacity: 0 }, {
	          delay: 750,
	          duration: 500,
	          complete: function complete() {
	            if (active) {
	              setTimeout(function () {
	                animate();
	              }, 500);
	            } else {
	              endAnimation();
	            }
	          }
	        });
	      };
	
	      if (!attr.delay) {
	        active = true;
	        animate();
	      }
	
	      scope.$on('$destroy', function () {
	        active = false;
	      });
	    }
	  };
	});
	
	exports.default = _module2.default;

/***/ },

/***/ 364:
/***/ function(module, exports) {

	var path = 'src/ui/animation/loader/template.html';
	var html = "<div class=\"loading-indicator\">\n  <span class=\"loading-bullet\">&bull;</span>\n  <span class=\"loading-bullet\">&bull;</span>\n  <span class=\"loading-bullet\">&bull;</span>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(353);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _angular = __webpack_require__(302);
	
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

/***/ },

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(384);
	
	__webpack_require__(385);
	
	__webpack_require__(388);
	
	__webpack_require__(389);

/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(302);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(353);
	
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
	
	  AvConfig.prototype.set = function set(options) {
	    _angular2.default.extend(this.DEFAULTS, options);
	  };
	
	  AvConfig.prototype.$get = function $get() {
	
	    return _angular2.default.copy({
	      SELECT2_OPTIONS: this.SELECT2_OPTIONS,
	      DEFAULTS: this.DEFAULTS,
	      NG_OPTIONS_REGEXP: this.NG_OPTIONS_REGEXP
	    });
	  };
	
	  return AvConfig;
	}();
	
	_module2.default.provider('avDropdownConfig', AvConfig);

/***/ },

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(304);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(386);
	
	__webpack_require__(388);
	
	var _module = __webpack_require__(353);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import angular from 'angular';
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
	
	      scope.$on('$destroy', function () {
	        (0, _jquery2.default)(window).off('resize.select2');
	        element.select2('destroy');
	      });
	
	      $timeout(function () {
	        element.select2(avDropdown.options);
	      });
	    }
	  };
	});

/***/ },

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _lodash = __webpack_require__(306);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _angular = __webpack_require__(302);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _base = __webpack_require__(356);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _module = __webpack_require__(353);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _utils = __webpack_require__(312);
	
	__webpack_require__(384);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AvDropdownController = function (_Base) {
	  _inherits(AvDropdownController, _Base);
	
	  function AvDropdownController() {
	    _classCallCheck(this, AvDropdownController);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var _this = _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));
	
	    _this.options = {};
	    _this.match = null;
	    _this.ngModel = null;
	    _this.locals = {};
	
	    return _this;
	  }
	
	  AvDropdownController.prototype.init = function init(context) {
	    var _this2 = this;
	
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
	        _this2.query(options);
	      };
	      // Function used to get the id from the choice object or a string representing the key under which the id is stored.
	      this.options.id = this.resource.getId;
	      this.options.initSelection = this.resource.initSelection;
	    }
	  };
	
	  AvDropdownController.prototype.isRemoteMultiple = function isRemoteMultiple() {
	    return _angular2.default.isDefined(this.av.$attrs.multiple) && this.av.$element.get(0).tagName.toLowerCase() === 'input';
	  };
	
	  AvDropdownController.prototype.initSelection = function initSelection() {};
	
	  AvDropdownController.prototype.setRemoteViewValue = function setRemoteViewValue(e) {
	
	    var values = this.ngModel.$viewValue;
	
	    if (!_angular2.default.isArray(values) || !_angular2.default.isObject(values)) {
	      values = [];
	    }
	
	    if (e.added) {
	      // Adding to collection
	      values.push(e.added);
	    } else {
	      // Removing from collection
	      var index = values.findIndex(function (value) {
	        return _.matches(e.removed)(value);
	      });
	      values.splice(index, 1);
	    }
	
	    this.ngModel.$setViewValue(values);
	  };
	
	  AvDropdownController.prototype.setViewValue = function setViewValue(e) {
	    this.ngModel.$setViewValue(e.added);
	  };
	
	  AvDropdownController.prototype.hashKey = function hashKey(obj, nextUidFn) {
	    var key = obj && obj.$$hashKey;
	
	    if (key) {
	      if (typeof key === 'function') {
	        key = obj.$$hashKey();
	      }
	      return key;
	    }
	
	    var objType = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
	    if (objType === 'function' || objType === 'object' && obj !== null) {
	      key = obj.$$hashKey = objType + ':' + (nextUidFn || (0, _utils.uuid)())();
	    } else {
	      key = objType + ':' + obj;
	    }
	
	    return key;
	  };
	
	  AvDropdownController.prototype.getTrackByValueFn = function getTrackByValueFn(value, locals) {
	
	    if (this.trackBy) {
	      return this.trackByFn(this.av.$scope, locals);
	    }
	
	    return this.hashKey(value);
	  };
	
	  AvDropdownController.prototype.getSelected = function getSelected(model) {
	
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
	
	    var index = this.collection.findIndex(function (item) {
	      return _angular2.default.equals(model, item);
	    });
	
	    var key = optionValues === optionValuesKeys ? index : optionValuesKeys[index];
	    var value = optionValues[key];
	    var locals = self.getLocals(value, key);
	    var viewValue = self.viewValueFn(self.av.$scope, locals);
	    var selectValue = self.getTrackByValueFn(viewValue, locals);
	    // const label = this.displayFn(this.av.$scope, locals);
	    // const group = this.groupByFn(this.av.$scope, locals);
	    // const disabled = this.disableWhenFn(this.av.$scope, locals);
	
	    return selectValue;
	  };
	
	  AvDropdownController.prototype.getMultiSelected = function getMultiSelected(viewValues) {
	
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
	  };
	
	  // Wrapper around the query function for Select2.  When the promise resolves
	  // the callback
	
	
	  AvDropdownController.prototype.query = function query(options) {
	
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
	  };
	
	  AvDropdownController.prototype.setValue = function setValue() {
	
	    var self = this;
	
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
	      self.av.$element.select2('val', selected);
	    });
	  };
	
	  AvDropdownController.prototype.setValues = function setValues() {
	    var _this3 = this;
	
	    var viewValue = this.ngModel.$viewValue;
	
	    if (!_angular2.default.isArray(viewValue)) {
	      viewValue = [];
	    }
	
	    if (!_.isEmpty(viewValue) && _angular2.default.isObject(viewValue[0])) {
	      viewValue = this.getMultiSelected(viewValue);
	    }
	
	    this.av.$timeout(function () {
	      return _this3.av.$element.select2('val', viewValue);
	    });
	  };
	
	  AvDropdownController.prototype.ngOptions = function ngOptions() {
	
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
	  };
	
	  AvDropdownController.prototype.getLocals = function getLocals(value, key) {
	
	    var locals = {};
	
	    if (this.keyName) {
	      locals[this.keyName] = key;
	      locals[this.valueName] = value;
	    } else {
	      locals[this.valueName] = value;
	    }
	
	    return locals;
	  };
	
	  AvDropdownController.prototype.getOptionValuesKeys = function getOptionValuesKeys(optionValues) {
	
	    var optionValuesKeys = void 0;
	
	    if (!this.keyName && _.isArray(optionValues)) {
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
	  };
	
	  return AvDropdownController;
	}(_base2.default);
	
	AvDropdownController.$inject = ['$element', '$attrs', 'avDropdownConfig', '$scope', '$timeout', '$parse'];
	
	
	_module2.default.controller('AvDropdownController', AvDropdownController);
	
	exports.default = AvDropdownController;

/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(353);
	
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
	
	      return _possibleConstructorReturn(this, _AvApiResource.call(this, options));
	    }
	
	    AvSelectResource.prototype.onQuery = function onQuery(data) {
	      var _this2 = this;
	
	      var config = this.getConfig(data);
	
	      return this.query(config).then(function (response) {
	
	        var results = _this2.getResults(response.data);
	        results = _this2.mapResults(results);
	
	        return _this2.getResponse(response, results);
	      });
	    };
	
	    AvSelectResource.prototype.getConfig = function getConfig(data) {
	
	      // config for the api resource query
	      var config = {
	        params: {}
	      };
	
	      if (data.page) {
	        config.params.offset = this.getPageSize() * (data.page - 1);
	      }
	      if (data.offset) {
	        config.params.offset = data.offset;
	      }
	
	      if (data.term) {
	        config.params.q = data.term;
	      }
	
	      return config;
	    };
	
	    AvSelectResource.prototype.getResponse = function getResponse(response, results) {
	
	      // Calculate if we want to continue searching.
	      // True if more results are available for the current search term
	      var more = response.data.offset < response.data.totalCount - response.data.limit;
	
	      return {
	        more: more,
	        results: results
	      };
	    };
	
	    AvSelectResource.prototype.getResult = function getResult() /* item */{
	      // return  item.code;
	      throw new Error('getResult() must be implemented when extending from AvSelectResource');
	    };
	
	    // Format the collection items for Select2:
	    //
	    //    http://select2.github.io/select2/#documentation
	    //
	    //    The default renderers expect objects with `id` and `text` keys.
	    //    The id property is required, even if custom renderers are used.
	    //    The object may also contain a children key if hierarchical data is displayed.
	    //    The object may also contain a disabled boolean property indicating whether this result can be selected.
	    //
	
	
	    AvSelectResource.prototype.mapResults = function mapResults(results) {
	      var _this3 = this;
	
	      if (results && (!results[0].id || !results[0].text)) {
	
	        results = results.map(function (item) {
	          var _mapResult = _this3.mapResult(item);
	
	          var id = _mapResult.id;
	          var text = _mapResult.text;
	
	          item.id = id;
	          item.text = text;
	          return item;
	        });
	      }
	
	      return results;
	    };
	
	    // Result:
	    //
	    // {
	    //   "code": "252Y00000X",
	    //   "value": "AGENCIES,EARLY INTERVENTION PROVIDER AGENCY,NOT APPLICABLE|Agency",
	    //   "id": "252Y00000X"
	    // }
	
	
	    AvSelectResource.prototype.getId = function getId(result) {
	      return result.id;
	    };
	
	    AvSelectResource.prototype.initSelection = function initSelection(element, callback) {
	      callback(null);
	    };
	
	    AvSelectResource.prototype.getResults = function getResults() /* response */{
	      // EX:
	      //  return response.data.codes
	      throw new Error('getResults() must be implemented when extending from AvSelectResource');
	    };
	
	    AvSelectResource.prototype.getPageSize = function getPageSize() {
	      return 50;
	    };
	
	    return AvSelectResource;
	  }(AvApiResource);
	
	  return AvSelectResource;
	};
	
	_module2.default.factory('AvSelectResource', SelectResourceFactory);
	
	exports.default = _module2.default;

/***/ },

/***/ 418:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 419:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _angular = __webpack_require__(302);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	__webpack_require__(420);
	
	__webpack_require__(422);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('availity.demo', ['availity', 'availity.ui', 'availity.config', 'ngAnimate', 'ui.mask', 'ngSanitize', 'ui.router', 'ngMockE2E']);

/***/ },

/***/ 423:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 424:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 425:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _demo = __webpack_require__(419);
	
	var _demo2 = _interopRequireDefault(_demo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_demo2.default.controller('DemoAnalyticsController', function ($scope) {
	
	  $scope.analytics = {
	    createError: function createError() {
	      throw new Error('Oh snap!');
	    }
	  };
	});
	
	_demo2.default.config(function (avPiwikAnalyticsProvider) {
	  avPiwikAnalyticsProvider.enable(true);
	});

/***/ },

/***/ 426:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _demo = __webpack_require__(419);
	
	var _demo2 = _interopRequireDefault(_demo);
	
	var _ = __webpack_require__(312);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_demo2.default.controller('DemoUtilsController', function ($scope) {
	
	  $scope.vm = {
	    print: function print() {
	      (0, _.print)();
	    }
	  };
	});

/***/ },

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _demo = __webpack_require__(419);
	
	var _demo2 = _interopRequireDefault(_demo);
	
	__webpack_require__(428);
	
	var _permissions = __webpack_require__(429);
	
	var _permissions2 = _interopRequireDefault(_permissions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_demo2.default.controller('DemoAuthenticationController', function ($scope, demoAuthenticationService) {
	  $scope.vm = demoAuthenticationService;
	});
	
	_demo2.default.run(function ($httpBackend) {
	  $httpBackend.whenRoute('GET', /\/api\/internal\/v1\/axi-user-permissions\?cacheBust=.*&permissionId=(7100|8100|9100)/).respond(_permissions2.default);
	});

/***/ },

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _demo = __webpack_require__(419);
	
	var _demo2 = _interopRequireDefault(_demo);
	
	__webpack_require__(333);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	_demo2.default.factory('demoAuthenticationService', function (avUserAuthorizations) {
	  var DemoAuthenticationService = function () {
	    function DemoAuthenticationService() {
	      _classCallCheck(this, DemoAuthenticationService);
	
	      this.permissionId = '7100';
	      this.isAuthorized = false;
	
	      this.init();
	    }
	
	    DemoAuthenticationService.prototype.init = function init() {
	
	      var self = this;
	
	      avUserAuthorizations.isAuthorized(this.permissionId).then(function (isAuthorized) {
	        self.isAuthorized = isAuthorized;
	      });
	    };
	
	    return DemoAuthenticationService;
	  }();
	
	  return new DemoAuthenticationService();
	});

/***/ },

/***/ 429:
/***/ function(module, exports) {

	module.exports = {
		"totalCount": 1,
		"count": 1,
		"offset": 0,
		"limit": 1000,
		"links": {
			"self": {
				"href": "https://dev.local/api/internal/v1/axi-user-permissions?limit=1000&offset=0&permissionId=7100&region=KY"
			}
		},
		"axiUserPermissions": [
			{
				"id": "8100",
				"description": "Eligibility and Benefits Inquiry",
				"organizations": [
					{
						"id": "1435",
						"customerId": "1194",
						"name": "AAA Org 1",
						"resources": [
							{
								"id": "4619",
								"payerId": "AAAA",
								"payerName": "Payer 1"
							},
							{
								"id": "3456",
								"payerId": "BBBB",
								"payerName": "Payer 2"
							}
						]
					},
					{
						"id": "100082",
						"customerId": "250332",
						"name": "BBB Org 2",
						"resources": [
							{
								"id": "4619",
								"payerId": "AAAA",
								"payerName": "Payer 3"
							}
						]
					}
				]
			}
		]
	};

/***/ },

/***/ 430:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _demo = __webpack_require__(419);
	
	var _demo2 = _interopRequireDefault(_demo);
	
	var _fixtures = __webpack_require__(431);
	
	var _fixtures2 = _interopRequireDefault(_fixtures);
	
	__webpack_require__(359);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	_demo2.default.factory('demoAnimationsService', function ($interval, $timeout) {
	  var DemoAnimationsService = function () {
	    function DemoAnimationsService() {
	      var _this = this;
	
	      _classCallCheck(this, DemoAnimationsService);
	
	      this.counter = 0;
	      $interval(function () {
	        _this.counter++;
	      }, 3000);
	
	      this.selectedAnimation = null;
	      this.velocityEffects = _fixtures2.default;
	      this.placeholder = 'Select an animation';
	      this.actualAnimation = this.placeholder;
	    }
	
	    DemoAnimationsService.prototype.onChange = function onChange(newAnimation) {
	      var _this2 = this;
	
	      if (newAnimation.type) {
	        if (newAnimation.type === 'transition') {
	
	          this.actualAnimation = newAnimation.name + 'Out';
	
	          $timeout(function () {
	            _this2.actualAnimation = newAnimation.name + 'In';
	          }, 1500);
	        } else if (newAnimation.type === 'callout') {
	          this.actualAnimation = newAnimation.name;
	        }
	      }
	    };
	
	    return DemoAnimationsService;
	  }();
	
	  return new DemoAnimationsService();
	});
	
	_demo2.default.controller('demoAnimationController', function ($scope, demoAnimationsService) {
	  $scope.anim = demoAnimationsService;
	});

/***/ },

/***/ 431:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = [{
	  name: 'callout.bounce',
	  type: 'callout'
	}, {
	  name: 'callout.shake',
	  type: 'callout'
	}, {
	  name: 'callout.flash',
	  type: 'callout'
	}, {
	  name: 'callout.pulse',
	  type: 'callout'
	}, {
	  name: 'callout.swing',
	  type: 'callout'
	}, {
	  name: 'callout.tada',
	  type: 'callout'
	}, {
	  name: 'transition.fade',
	  type: 'transition'
	}, {
	  name: 'transition.flipX',
	  type: 'transition'
	}, {
	  name: 'transition.flipY',
	  type: 'transition'
	}, {
	  name: 'transition.flipBounceX',
	  type: 'transition'
	}, {
	  name: 'transition.flipBounceY',
	  type: 'transition'
	}, {
	  name: 'transition.swoop',
	  type: 'transition'
	}, {
	  name: 'transition.whirl',
	  type: 'transition'
	}, {
	  name: 'transition.shrink',
	  type: 'transition'
	}, {
	  name: 'transition.expand',
	  type: 'transition'
	}, {
	  name: 'transition.bounce',
	  type: 'transition'
	}, {
	  name: 'transition.bounceUp',
	  type: 'transition'
	}, {
	  name: 'transition.bounceDown',
	  type: 'transition'
	}, {
	  name: 'transition.bounceLeft',
	  type: 'transition'
	}, {
	  name: 'transition.bounceRight',
	  type: 'transition'
	}, {
	  name: 'transition.slideUp',
	  type: 'transition'
	}, {
	  name: 'transition.slideDown',
	  type: 'transition'
	}, {
	  name: 'transition.slideLeft',
	  type: 'transition'
	}, {
	  name: 'transition.slideRight',
	  type: 'transition'
	}, {
	  name: 'transition.slideUpBig',
	  type: 'transition'
	}, {
	  name: 'transition.slideDownBig',
	  type: 'transition'
	}, {
	  name: 'transition.slideLeftBig',
	  type: 'transition'
	}, {
	  name: 'transition.slideRightBig',
	  type: 'transition'
	}, {
	  name: 'transition.perspectiveUp',
	  type: 'transition'
	}, {
	  name: 'transition.perspectiveDown',
	  type: 'transition'
	}, {
	  name: 'transition.perspectiveLeft',
	  type: 'transition'
	}, {
	  name: 'transition.perspectiveRight',
	  type: 'transition'
	}];

/***/ },

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(433);

/***/ },

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _demo = __webpack_require__(419);
	
	var _demo2 = _interopRequireDefault(_demo);
	
	__webpack_require__(434);
	
	var _validationRules = __webpack_require__(435);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_demo2.default.controller('DemoValidationController', function ($scope, demoValidationService) {
	  $scope.vm = demoValidationService;
	});
	
	_demo2.default.config(function (avValProvider) {
	
	  avValProvider.addRules({
	    defaultRules: _validationRules.defaultRules,
	    stateRules: _validationRules.stateRules
	  });
	});

/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _lodash = __webpack_require__(306);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _demo = __webpack_require__(419);
	
	var _demo2 = _interopRequireDefault(_demo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	_demo2.default.factory('demoValidationService', function (AV_VAL) {
	  var DemoValidationService = function () {
	    function DemoValidationService() {
	      _classCallCheck(this, DemoValidationService);
	
	      this.firstName = 'Robert';
	      this.lastName = null;
	      this.phone = null;
	      this.email = null;
	      this.ssn = null;
	      this.icd9 = null;
	      this.npi = null;
	      this.date = new Date();
	      this.rule = 'defaultRules';
	      this.selectedSate = null;
	      this.states = [{ id: 'AL', name: 'Alabama' }, { id: 'CA', name: 'California' }, { id: 'NM', name: 'New Mexico' }, { id: 'TX', name: 'Texas' }, { id: 'WY', name: 'Wyoming' }];
	
	      // keep a copy of the original state
	      this.originalState = _.assign({}, this);
	    }
	
	    DemoValidationService.prototype.onChangeRules = function onChangeRules() {
	      this.rule = this.rule === 'stateRules' ? 'defaultRules' : 'stateRules';
	    };
	
	    DemoValidationService.prototype.reset = function reset($scope) {
	      _.assign(this, this.originalState);
	      $scope.$broadcast(AV_VAL.EVENTS.RESET);
	    };
	
	    return DemoValidationService;
	  }();
	
	  return new DemoValidationService();
	});

/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	var _ = __webpack_require__(306);
	
	var defaultRules = {
	  ssn: {
	    required: {
	      message: 'SSN is required.'
	    },
	    pattern: {
	      value: /\d{3}-?\d{2}-?\d{4}/,
	      message: 'SSN must be between in a format like ***-**-****.'
	    }
	  },
	  lastName: {
	    required: {
	      message: 'Last name is required.'
	    },
	    size: {
	      min: 2,
	      max: 10,
	      message: 'Last name must be between 2 and 10 characters.'
	    }
	  },
	  firstName: {
	    required: {
	      message: 'First name is required.'
	    },
	    size: {
	      min: 2,
	      max: 20,
	      message: 'First name must be between 2 and 20 characters.'
	    }
	  },
	  date: {
	    dateFormat: {
	      format: 'MM/DD/YYYY',
	      message: 'Format needs to be MM/DD/YYYY'
	    },
	    dateRange: {
	      start: {
	        value: '-10',
	        units: 'days'
	      },
	      end: {
	        value: '10',
	        units: 'days'
	      },
	      format: 'MM/DD/YYYY',
	      message: 'Date is not within 10 days from today'
	    }
	  },
	  icd9: {
	    pattern: {
	      value: /(V\d{2}(\.\d{1,2})?|\d{3}(\.\d{1,2})?|E\d{3}(\.\d)?)/,
	      message: 'ICD-9 code is invalid'
	    }
	  },
	  npi: {
	    npi: {
	      message: 'NPI is invalid.'
	    }
	  },
	  checked: {
	    required: {
	      message: 'You must agree to terms.'
	    }
	  },
	  taxId: {
	    pattern: {
	      value: /^\d{3}-?\d{2}-?\d{4}|[0-9]{2}-[0-9]{7}|9\d{2}-[7,8]\d-\d{4}|p?-?\d{8}$/,
	      message: 'Tax ID needs to be a valid SSN, EIN, ITIN, ATIN, PTIN'
	    }
	  },
	  phone: {
	    required: {
	      message: 'Phone number is required'
	    },
	    phone: {
	      message: 'Phone number is invalid'
	    }
	  },
	  email: {
	    required: {
	      message: 'Email is required'
	    },
	    email: {
	      message: 'Email is invalid'
	    }
	  },
	  someRequiredField: {
	    required: {
	      message: 'This field is required, and the validation error shows even with a clean model.'
	    }
	  }
	};
	
	var stateRules = _.extend({}, defaultRules, {
	  'lastName': null,
	  'firstName': {
	    'required': null,
	    'size': {
	      'min': 2,
	      'max': 20,
	      'message': 'First name must be between 2 and 20 characters.'
	    }
	  },
	  'states': {
	    'required': {
	      'message': 'State selection is required.'
	    }
	  },
	  'checked': {
	    'required': {
	      'message': 'You just agree to terms.'
	    }
	  },
	  'date': {
	    'required': {
	      'message': 'Date is required.'
	    },
	    'dateFormat': {
	      'format': 'MM/DD/YYYY',
	      'message': 'Format needs to be MM/DD/YYYY'
	    },
	    'dateRange': {
	      'start': {
	        'value': '05022015'
	      },
	      'end': {
	        'value': '05152015'
	      },
	      'format': 'MMDDYYYY',
	      'message': 'Date Range is invalid.'
	    }
	  }
	});
	
	exports.defaultRules = defaultRules;
	exports.stateRules = stateRules;

/***/ },

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _demo = __webpack_require__(419);
	
	var _demo2 = _interopRequireDefault(_demo);
	
	__webpack_require__(437);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_demo2.default.controller('DemoModalController', function ($scope, demoModalService) {
	  demoModalService.init($scope);
	  $scope.vm = demoModalService;
	});
	
	_demo2.default.config(function ($stateProvider) {
	
	  $stateProvider.state('one', {
	    url: '/'
	  }).state('two', {
	    url: '/two'
	  }).state('three', {
	    url: '/three'
	  });
	});

/***/ },

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _demo = __webpack_require__(419);
	
	var _demo2 = _interopRequireDefault(_demo);
	
	var _modalTemplate = __webpack_require__(438);
	
	var _modalTemplate2 = _interopRequireDefault(_modalTemplate);
	
	var _modalLgTemplate = __webpack_require__(439);
	
	var _modalLgTemplate2 = _interopRequireDefault(_modalLgTemplate);
	
	var _modalSmTemplate = __webpack_require__(440);
	
	var _modalSmTemplate2 = _interopRequireDefault(_modalSmTemplate);
	
	var _modalRouteTemplate = __webpack_require__(441);
	
	var _modalRouteTemplate2 = _interopRequireDefault(_modalRouteTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	_demo2.default.factory('demoModalService', function (AvModal, $log, $state, avModalManager, $rootScope) {
	  var AvDemoService = function () {
	    function AvDemoService() {
	      _classCallCheck(this, AvDemoService);
	
	      this.listeners();
	    }
	
	    AvDemoService.prototype.init = function init($scope) {
	      this.$scope = $scope;
	    };
	
	    AvDemoService.prototype.listeners = function listeners() {
	
	      $rootScope.$on('$stateChangeSuccess', function (event, toState) {
	
	        if (toState.name === 'three') {
	          avModalManager.closeAll();
	        }
	      });
	    };
	
	    AvDemoService.prototype.navigate = function navigate() {
	
	      var state = 'two';
	      if ($state.includes('two')) {
	        state = 'three';
	      }
	
	      $state.go(state);
	    };
	
	    AvDemoService.prototype.modalOpen = function modalOpen() {
	
	      AvModal.create({
	        show: true,
	        scope: this.$scope,
	        templateUrl: _modalTemplate2.default
	      });
	    };
	
	    AvDemoService.prototype.modalOpenLarge = function modalOpenLarge() {
	
	      AvModal.create({
	        show: true,
	        scope: this.$scope,
	        templateUrl: _modalLgTemplate2.default
	      });
	    };
	
	    AvDemoService.prototype.modalOpenSmall = function modalOpenSmall() {
	
	      var modalSmall = new AvModal({
	        scope: this.$scope,
	        templateUrl: _modalSmTemplate2.default
	      });
	
	      modalSmall.show().then(function () {
	        $log.info('modal shown');
	      });
	    };
	
	    AvDemoService.prototype.routeChange = function routeChange() {
	
	      AvModal.create({
	        show: true,
	        scope: this.$scope,
	        templateUrl: _modalRouteTemplate2.default
	      });
	    };
	
	    return AvDemoService;
	  }();
	
	  return new AvDemoService();
	});

/***/ },

/***/ 438:
/***/ function(module, exports) {

	var path = 'src/ui/modal/docs/templates/modal-template.html';
	var html = "<div data-av-modal>\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n    <h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4>\n  </div>\n  <div class=\"modal-body\">\n    <h4>Text in a modal</h4>\n    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\n\n    <h4>Popover in a modal</h4>\n    <p>This <a role=\"button\" class=\"btn btn-default\" data-av-popover data-content=\"And here's some amazing content. It's very engaging. right?\" title=\"A Title\">button</a> should trigger a popover on click.</p>\n\n    <h4>Tooltips in a modal</h4>\n    <p><a href=\"#\" class=\"tooltip-test\" data-av-tooltip title=\"Tooltip\">This link</a> and <a href=\"#\" class=\"tooltip-test\" data-av-tooltip title=\"Tooltip\">that link</a> should have tooltips on hover.</p>\n\n    <hr>\n\n    <h4>Overflowing text to show scroll behavior</h4>\n    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\n    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\n    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\n    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n    <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n  </div>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },

/***/ 439:
/***/ function(module, exports) {

	var path = 'src/ui/modal/docs/templates/modal-lg-template.html';
	var html = "<div data-av-modal data-size=\"lg\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n    <h4 class=\"modal-title\">Modal title</h4>\n  </div>\n  <div class=\"modal-body\">\n    ...\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n  </div>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },

/***/ 440:
/***/ function(module, exports) {

	var path = 'src/ui/modal/docs/templates/modal-sm-template.html';
	var html = "<div data-av-modal data-size=\"sm\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n    <h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4>\n  </div>\n  <div class=\"modal-body\">\n    ...\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n  </div>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },

/***/ 441:
/***/ function(module, exports) {

	var path = 'src/ui/modal/docs/templates/modal-route-template.html';
	var html = "<div data-av-modal>\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n    <h4 class=\"modal-title\" id=\"myModalLabel\">Route Change</h4>\n  </div>\n  <div class=\"modal-body\">\n    ...\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-default\" ng-click=\"vm.navigate()\">Change Route</button>\n    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n  </div>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _demo = __webpack_require__(419);
	
	var _demo2 = _interopRequireDefault(_demo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_demo2.default.controller('DemoDatepickerController', function ($scope) {
	
	  $scope.demo = {
	    date1: new Date(),
	    date2: null,
	    date3: null
	  };
	});

/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _demo = __webpack_require__(419);
	
	var _demo2 = _interopRequireDefault(_demo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_demo2.default.controller('DemoPopoverController', function ($scope) {
	  $scope.showOnLoad = true;
	});

/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _demo = __webpack_require__(419);
	
	var _demo2 = _interopRequireDefault(_demo);
	
	__webpack_require__(445);
	
	__webpack_require__(447);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_demo2.default.service('demoMaskService', function () {
	
	  return {
	    phone: null,
	    date: null,
	    ssn: null,
	    random: null
	  };
	});
	
	_demo2.default.controller('DemoMaskController', function ($scope, demoMaskService, AV_MASK) {
	
	  $scope.vm = demoMaskService;
	  $scope.mask = AV_MASK;
	});

/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(353);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.constant('AV_MASK', {
	  date: '99/99/9999',
	  phone: '(999) 999-9999',
	  ssn: '999-99-9999'
	});

/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _demo = __webpack_require__(419);
	
	var _demo2 = _interopRequireDefault(_demo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_demo2.default.controller('DemoBlockController', function ($scope, avBlockManager) {
	
	  var blockDemo = avBlockManager.get('blockDemo');
	
	  $scope.vm = {
	    toggleBlock: function toggleBlock() {
	      if (blockDemo.state().blocking) {
	        blockDemo.stop();
	      } else {
	        blockDemo.start();
	      }
	    }
	  };
	});

/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _demo = __webpack_require__(419);
	
	var _demo2 = _interopRequireDefault(_demo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_demo2.default.controller('DemoTooltipController', function ($scope) {
	  $scope.showOnLoad = true;
	});

/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _demo = __webpack_require__(419);
	
	var _demo2 = _interopRequireDefault(_demo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_demo2.default.controller('DemoHidePermissionController', function () {});

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _demo = __webpack_require__(419);
	
	var _demo2 = _interopRequireDefault(_demo);
	
	__webpack_require__(452);
	
	var _photos = __webpack_require__(456);
	
	var _photos2 = _interopRequireDefault(_photos);
	
	var _photos3 = __webpack_require__(457);
	
	var _photos4 = _interopRequireDefault(_photos3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_demo2.default.controller('DemoDropdownController', function ($scope, demoDropdownService) {
	  $scope.vm = demoDropdownService;
	});
	
	_demo2.default.run(function ($httpBackend) {
	
	  $httpBackend.whenRoute('GET', /\/api\/v1\/photos\?offset=.*&q=a.*/).respond(_photos2.default);
	
	  $httpBackend.whenRoute('GET', /\/api\/v1\/photos\?offset=.*&q=.*/).respond(_photos4.default);
	});

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _demo = __webpack_require__(419);
	
	var _demo2 = _interopRequireDefault(_demo);
	
	__webpack_require__(383);
	
	var _states = __webpack_require__(453);
	
	var _states2 = _interopRequireDefault(_states);
	
	var _pokemon = __webpack_require__(454);
	
	var _pokemon2 = _interopRequireDefault(_pokemon);
	
	__webpack_require__(455);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	_demo2.default.factory('demoDropdownService', function ($log, demoDropdownResource) {
	  var DemoDropdownService = function () {
	    function DemoDropdownService() {
	      _classCallCheck(this, DemoDropdownService);
	
	      // SIMPLE DOM EXAMPLE
	      this.selectedNumber = null;
	
	      // ARRAY EXAMPLE
	      this.pokemon = _pokemon2.default;
	      this.selectedPoke = null;
	
	      // ARRAY OF OBJECTS EXAMPLE
	      this.states = _states2.default;
	      this.selectedState1 = null;
	      this.selectedState2 = null;
	      this.selectedState3 = null;
	      this.selectedStates = [{ id: 'WY', name: 'Wyoming' }, { id: 'NM', name: 'New Mexico' }];
	    }
	
	    DemoDropdownService.prototype.removeState = function removeState() {
	
	      if (this.states.length > 1) {
	        var removed = this.states.pop();
	        $log.info('State ' + JSON.stringify(removed) + ' was removed');
	      }
	    };
	
	    DemoDropdownService.prototype.setState1 = function setState1() {
	      this.selectedState1 = this.states[this.states.length - 1];
	    };
	
	    DemoDropdownService.prototype.setState2 = function setState2() {
	      this.selectedState2 = this.states[this.states.length - 1];
	    };
	
	    DemoDropdownService.prototype.setState3 = function setState3() {
	      this.selectedState3 = this.states[this.states.length - 1];
	    };
	
	    DemoDropdownService.prototype.setMultiple = function setMultiple() {
	      this.selectedStates = [{ id: 'AR', name: 'Arkansas' }, { id: 'NM', name: 'New Mexico' }];
	    };
	
	    DemoDropdownService.prototype.resetPoke = function resetPoke() {
	      this.selectedPoke = null;
	    };
	
	    DemoDropdownService.prototype.isPokeDisabled = function isPokeDisabled() {
	      return this.selectedPoke === null;
	    };
	
	    DemoDropdownService.prototype.resetNumber = function resetNumber() {
	      this.selectedNumber = null;
	    };
	
	    DemoDropdownService.prototype.isNumberDisabled = function isNumberDisabled() {
	      return this.selectedNumber === null;
	    };
	
	    DemoDropdownService.prototype.resetState1 = function resetState1() {
	      this.selectedState1 = null;
	    };
	
	    DemoDropdownService.prototype.resetState2 = function resetState2() {
	      this.selectedState2 = null;
	    };
	
	    DemoDropdownService.prototype.resetState3 = function resetState3() {
	      this.selectedState3 = null;
	    };
	
	    DemoDropdownService.prototype.resetMultiple = function resetMultiple() {
	      this.selectedStates = null;
	    };
	
	    DemoDropdownService.prototype.onChange = function onChange(selected) {
	
	      if (selected) {
	        $log.info('Selected value is ' + JSON.stringify(selected));
	      }
	    };
	
	    DemoDropdownService.prototype.getOptions = function getOptions() {
	      return {
	        allowClear: true,
	        placeholder: 'Find a photo',
	        minimumInputLength: 3,
	        query: demoDropdownResource
	      };
	    };
	
	    return DemoDropdownService;
	  }();
	
	  return new DemoDropdownService();
	});

/***/ },

/***/ 453:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = [{
	  'name': 'Alabama',
	  'id': 'AL'
	}, {
	  'name': 'Alaska',
	  'id': 'AK'
	}, {
	  'name': 'American Samoa',
	  'id': 'AS'
	}, {
	  'name': 'Arizona',
	  'id': 'AZ'
	}, {
	  'name': 'Arkansas',
	  'id': 'AR'
	}, {
	  'name': 'California',
	  'id': 'CA'
	}, {
	  'name': 'Colorado',
	  'id': 'CO'
	}, {
	  'name': 'Connecticut',
	  'id': 'CT'
	}, {
	  'name': 'Delaware',
	  'id': 'DE'
	}, {
	  'name': 'District Of Columbia',
	  'id': 'DC'
	}, {
	  'name': 'Federated States Of Micronesia',
	  'id': 'FM'
	}, {
	  'name': 'Florida',
	  'id': 'FL'
	}, {
	  'name': 'Georgia',
	  'id': 'GA'
	}, {
	  'name': 'Guam',
	  'id': 'GU'
	}, {
	  'name': 'Hawaii',
	  'id': 'HI'
	}, {
	  'name': 'Idaho',
	  'id': 'ID'
	}, {
	  'name': 'Illinois',
	  'id': 'IL'
	}, {
	  'name': 'Indiana',
	  'id': 'IN'
	}, {
	  'name': 'Iowa',
	  'id': 'IA'
	}, {
	  'name': 'Kansas',
	  'id': 'KS'
	}, {
	  'name': 'Kentucky',
	  'id': 'KY'
	}, {
	  'name': 'Louisiana',
	  'id': 'LA'
	}, {
	  'name': 'Maine',
	  'id': 'ME'
	}, {
	  'name': 'Marshall Islands',
	  'id': 'MH'
	}, {
	  'name': 'Maryland',
	  'id': 'MD'
	}, {
	  'name': 'Massachusetts',
	  'id': 'MA'
	}, {
	  'name': 'Michigan',
	  'id': 'MI'
	}, {
	  'name': 'Minnesota',
	  'id': 'MN'
	}, {
	  'name': 'Mississippi',
	  'id': 'MS'
	}, {
	  'name': 'Missouri',
	  'id': 'MO'
	}, {
	  'name': 'Montana',
	  'id': 'MT'
	}, {
	  'name': 'Nebraska',
	  'id': 'NE'
	}, {
	  'name': 'Nevada',
	  'id': 'NV'
	}, {
	  'name': 'New Hampshire',
	  'id': 'NH'
	}, {
	  'name': 'New Jersey',
	  'id': 'NJ'
	}, {
	  'name': 'New Mexico',
	  'id': 'NM'
	}, {
	  'name': 'New York',
	  'id': 'NY'
	}, {
	  'name': 'North Carolina',
	  'id': 'NC'
	}, {
	  'name': 'North Dakota',
	  'id': 'ND'
	}, {
	  'name': 'Northern Mariana Islands',
	  'id': 'MP'
	}, {
	  'name': 'Ohio',
	  'id': 'OH'
	}, {
	  'name': 'Oklahoma',
	  'id': 'OK'
	}, {
	  'name': 'Oregon',
	  'id': 'OR'
	}, {
	  'name': 'Palau',
	  'id': 'PW'
	}, {
	  'name': 'Pennsylvania',
	  'id': 'PA'
	}, {
	  'name': 'Puerto Rico',
	  'id': 'PR'
	}, {
	  'name': 'Rhode Island',
	  'id': 'RI'
	}, {
	  'name': 'South Carolina',
	  'id': 'SC'
	}, {
	  'name': 'South Dakota',
	  'id': 'SD'
	}, {
	  'name': 'Tennessee',
	  'id': 'TN'
	}, {
	  'name': 'Texas',
	  'id': 'TX'
	}, {
	  'name': 'Utah',
	  'id': 'UT'
	}, {
	  'name': 'Vermont',
	  'id': 'VT'
	}, {
	  'name': 'Virgin Islands',
	  'id': 'VI'
	}, {
	  'name': 'Virginia',
	  'id': 'VA'
	}, {
	  'name': 'Washington',
	  'id': 'WA'
	}, {
	  'name': 'West Virginia',
	  'id': 'WV'
	}, {
	  'name': 'Wisconsin',
	  'id': 'WI'
	}, {
	  'name': 'Wyoming',
	  'id': 'WY'
	}];

/***/ },

/***/ 454:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = ['Aerodactyl', 'Alakazam', 'Arbok', 'Arcanine', 'Articuno', 'Bellsprout', 'Blastoise', 'Bulbasaur', 'Butterfree', 'Caterpie', 'Chansey', 'Charizard', 'Charmander', 'Charmeleon', 'Cloyster', 'Cubone', 'Dewgong', 'Diglett', 'Dodrio', 'Doduo', 'Dragonair', 'Dragonite', 'Dratini', 'Drowzee', 'Dugtrio', 'Eevee', 'Ekans', 'Electabuzz', 'Electrode', 'Exeggutor', 'Farfetchd', 'Fearow', 'Flareon', 'Gastly', 'Gengar', 'Geodude', 'Golbat', 'Goldeen', 'Golduck', 'Golem', 'Grimer', 'Gyarados', 'Hitmonchan', 'Hitmonlee', 'Horsea', 'Hypno', 'Ivysaur', 'Jolteon', 'Jynx', 'Kabuto', 'Kabutops', 'Kangaskhan', 'Kingler', 'Koffing', 'Krabby', 'Lapras', 'Lickitung', 'Machamp', 'Machop', 'Magikarp', 'Magmar', 'Magnemite', 'Magneton', 'Mankey', 'Marowak', 'Meowth', 'Mew', 'Mewtwo', 'Moltres', 'Mr. mime', 'Muk', 'Nidoking', 'Nidoqueen', 'Nidoran', 'Nidoran', 'Ninetales', 'Omanyte', 'Omastar', 'Onix', 'Paras', 'Parasect', 'Persian', 'Pidgeot', 'Pidgeotto', 'Pidgey', 'Pinsir', 'Poliwag', 'Poliwrath', 'Ponyta', 'Porygon', 'Primeape', 'Psyduck', 'Raichu', 'Rapidash', 'Raticate', 'Rattata', 'Rhydon', 'Rhyhorn', 'Sandshrew', 'Sandslash', 'Scyther', 'Seadra', 'Seaking', 'Seel', 'Slowbro', 'Slowpoke', 'Snorlax', 'Spearow', 'Squirtle', 'Starmie', 'Tangela', 'Tauros', 'Tentacool', 'Tentacruel', 'Venomoth', 'Venonat', 'Venusaur', 'Victreebel', 'Voltorb', 'Wartortle', 'Weedle', 'Weezing', 'Zapdos', 'Zubat'];

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _demo = __webpack_require__(419);
	
	var _demo2 = _interopRequireDefault(_demo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	_demo2.default.factory('demoDropdownResource', function (AvSelectResource) {
	  var DemoPhotosResource = function (_AvSelectResource) {
	    _inherits(DemoPhotosResource, _AvSelectResource);
	
	    function DemoPhotosResource() {
	      _classCallCheck(this, DemoPhotosResource);
	
	      return _possibleConstructorReturn(this, _AvSelectResource.call(this, { name: 'photos' }));
	    }
	
	    DemoPhotosResource.prototype.getResults = function getResults(response) {
	      return response.photos;
	    };
	
	    DemoPhotosResource.prototype.mapResult = function mapResult(item) {
	      return {
	        id: item.id,
	        text: item.title
	      };
	    };
	
	    return DemoPhotosResource;
	  }(AvSelectResource);
	
	  return new DemoPhotosResource();
	});

/***/ },

/***/ 456:
/***/ function(module, exports) {

	module.exports = {
		"totalCount": 823,
		"count": 50,
		"offset": 0,
		"limit": 50,
		"links": {
			"last": {
				"href": "https://local.dev/api/v1/photos?limit=50&offset=800`"
			},
			"next": {
				"href": "https://local.dev/api/v1/photos?limit=50&offset=50"
			},
			"self": {
				"href": "https://local.dev/api/v1/photos?limit=50&offset=0"
			},
			"first": {
				"href": "https://local.dev/api/v1/photos?limit=50&offset=0"
			}
		},
		"photos": [
			{
				"albumId": 1,
				"id": 1,
				"title": "accusamus beatae ad facilis cum similique qui sunt",
				"url": "http://placehold.it/600/92c952",
				"thumbnailUrl": "http://placehold.it/150/30ac17"
			},
			{
				"albumId": 1,
				"id": 2,
				"title": "reprehenderit est deserunt velit ipsam",
				"url": "http://placehold.it/600/771796",
				"thumbnailUrl": "http://placehold.it/150/dff9f6"
			},
			{
				"albumId": 1,
				"id": 3,
				"title": "officia porro iure quia iusto qui ipsa ut modi",
				"url": "http://placehold.it/600/24f355",
				"thumbnailUrl": "http://placehold.it/150/1941e9"
			},
			{
				"albumId": 1,
				"id": 4,
				"title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
				"url": "http://placehold.it/600/d32776",
				"thumbnailUrl": "http://placehold.it/150/39e985"
			},
			{
				"albumId": 1,
				"id": 5,
				"title": "natus nisi omnis corporis facere molestiae rerum in",
				"url": "http://placehold.it/600/f66b97",
				"thumbnailUrl": "http://placehold.it/150/7735a"
			},
			{
				"albumId": 1,
				"id": 6,
				"title": "accusamus ea aliquid et amet sequi nemo",
				"url": "http://placehold.it/600/56a8c2",
				"thumbnailUrl": "http://placehold.it/150/c672a0"
			},
			{
				"albumId": 1,
				"id": 7,
				"title": "officia delectus consequatur vero aut veniam explicabo molestias",
				"url": "http://placehold.it/600/b0f7cc",
				"thumbnailUrl": "http://placehold.it/150/4105a5"
			},
			{
				"albumId": 1,
				"id": 8,
				"title": "aut porro officiis laborum odit ea laudantium corporis",
				"url": "http://placehold.it/600/54176f",
				"thumbnailUrl": "http://placehold.it/150/412ffd"
			},
			{
				"albumId": 1,
				"id": 9,
				"title": "qui eius qui autem sed",
				"url": "http://placehold.it/600/51aa97",
				"thumbnailUrl": "http://placehold.it/150/15c072"
			},
			{
				"albumId": 1,
				"id": 10,
				"title": "beatae et provident et ut vel",
				"url": "http://placehold.it/600/810b14",
				"thumbnailUrl": "http://placehold.it/150/980cc2"
			},
			{
				"albumId": 1,
				"id": 11,
				"title": "nihil at amet non hic quia qui",
				"url": "http://placehold.it/600/1ee8a4",
				"thumbnailUrl": "http://placehold.it/150/e65eee"
			},
			{
				"albumId": 1,
				"id": 12,
				"title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
				"url": "http://placehold.it/600/66b7d2",
				"thumbnailUrl": "http://placehold.it/150/bc9589"
			},
			{
				"albumId": 1,
				"id": 13,
				"title": "repudiandae iusto deleniti rerum",
				"url": "http://placehold.it/600/197d29",
				"thumbnailUrl": "http://placehold.it/150/f777f7"
			},
			{
				"albumId": 1,
				"id": 14,
				"title": "est necessitatibus architecto ut laborum",
				"url": "http://placehold.it/600/61a65",
				"thumbnailUrl": "http://placehold.it/150/8fa5e0"
			},
			{
				"albumId": 1,
				"id": 15,
				"title": "harum dicta similique quis dolore earum ex qui",
				"url": "http://placehold.it/600/f9cee5",
				"thumbnailUrl": "http://placehold.it/150/ae926c"
			},
			{
				"albumId": 1,
				"id": 16,
				"title": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
				"url": "http://placehold.it/600/fdf73e",
				"thumbnailUrl": "http://placehold.it/150/dc71a1"
			},
			{
				"albumId": 1,
				"id": 17,
				"title": "natus doloribus necessitatibus ipsa",
				"url": "http://placehold.it/600/9c184f",
				"thumbnailUrl": "http://placehold.it/150/554a30"
			},
			{
				"albumId": 1,
				"id": 18,
				"title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
				"url": "http://placehold.it/600/1fe46f",
				"thumbnailUrl": "http://placehold.it/150/ee9c6f"
			},
			{
				"albumId": 1,
				"id": 19,
				"title": "perferendis nesciunt eveniet et optio a",
				"url": "http://placehold.it/600/56acb2",
				"thumbnailUrl": "http://placehold.it/150/531b69"
			},
			{
				"albumId": 1,
				"id": 20,
				"title": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
				"url": "http://placehold.it/600/8985dc",
				"thumbnailUrl": "http://placehold.it/150/c435c1"
			},
			{
				"albumId": 1,
				"id": 21,
				"title": "ad et natus qui",
				"url": "http://placehold.it/600/5e12c6",
				"thumbnailUrl": "http://placehold.it/150/8fe27b"
			},
			{
				"albumId": 1,
				"id": 22,
				"title": "et ea illo et sit voluptas animi blanditiis porro",
				"url": "http://placehold.it/600/45601a",
				"thumbnailUrl": "http://placehold.it/150/305e2c"
			},
			{
				"albumId": 1,
				"id": 23,
				"title": "harum velit vero totam",
				"url": "http://placehold.it/600/e924e6",
				"thumbnailUrl": "http://placehold.it/150/8626dc"
			},
			{
				"albumId": 1,
				"id": 24,
				"title": "beatae officiis ut aut",
				"url": "http://placehold.it/600/8f209a",
				"thumbnailUrl": "http://placehold.it/150/c52599"
			},
			{
				"albumId": 1,
				"id": 25,
				"title": "facere non quis fuga fugit vitae",
				"url": "http://placehold.it/600/5e3a73",
				"thumbnailUrl": "http://placehold.it/150/5bddc1"
			},
			{
				"albumId": 1,
				"id": 26,
				"title": "asperiores nobis voluptate qui",
				"url": "http://placehold.it/600/474645",
				"thumbnailUrl": "http://placehold.it/150/aa4811"
			},
			{
				"albumId": 1,
				"id": 27,
				"title": "sit asperiores est quos quis nisi veniam error",
				"url": "http://placehold.it/600/c984bf",
				"thumbnailUrl": "http://placehold.it/150/f6f2a7"
			},
			{
				"albumId": 1,
				"id": 28,
				"title": "non neque eligendi molestiae repudiandae illum voluptatem qui aut",
				"url": "http://placehold.it/600/392537",
				"thumbnailUrl": "http://placehold.it/150/bcf316"
			},
			{
				"albumId": 1,
				"id": 29,
				"title": "aut ipsam quos ab placeat omnis",
				"url": "http://placehold.it/600/602b9e",
				"thumbnailUrl": "http://placehold.it/150/a01113"
			},
			{
				"albumId": 1,
				"id": 30,
				"title": "odio enim voluptatem quidem aut nihil illum",
				"url": "http://placehold.it/600/372c93",
				"thumbnailUrl": "http://placehold.it/150/96065f"
			},
			{
				"albumId": 1,
				"id": 31,
				"title": "voluptate voluptates sequi",
				"url": "http://placehold.it/600/a7c272",
				"thumbnailUrl": "http://placehold.it/150/ea66a5"
			},
			{
				"albumId": 1,
				"id": 32,
				"title": "ad enim dignissimos voluptatem similique",
				"url": "http://placehold.it/600/c70a4d",
				"thumbnailUrl": "http://placehold.it/150/52bd9c"
			},
			{
				"albumId": 1,
				"id": 33,
				"title": "culpa ipsam nobis qui fuga magni et mollitia",
				"url": "http://placehold.it/600/501fe1",
				"thumbnailUrl": "http://placehold.it/150/772814"
			},
			{
				"albumId": 1,
				"id": 34,
				"title": "vitae est facere quia itaque adipisci perferendis id maiores",
				"url": "http://placehold.it/600/35185e",
				"thumbnailUrl": "http://placehold.it/150/e511d8"
			},
			{
				"albumId": 1,
				"id": 35,
				"title": "tenetur minus voluptatum et",
				"url": "http://placehold.it/600/c96cad",
				"thumbnailUrl": "http://placehold.it/150/dff6ed"
			},
			{
				"albumId": 1,
				"id": 36,
				"title": "expedita rerum eaque",
				"url": "http://placehold.it/600/4d564d",
				"thumbnailUrl": "http://placehold.it/150/ac91a8"
			},
			{
				"albumId": 1,
				"id": 37,
				"title": "totam voluptas iusto deserunt dolores",
				"url": "http://placehold.it/600/ea51da",
				"thumbnailUrl": "http://placehold.it/150/5f54cf"
			},
			{
				"albumId": 1,
				"id": 38,
				"title": "natus magnam iure rerum pariatur molestias dolore nisi",
				"url": "http://placehold.it/600/4f5b8d",
				"thumbnailUrl": "http://placehold.it/150/d8d4fe"
			},
			{
				"albumId": 1,
				"id": 39,
				"title": "molestiae nam ullam et rerum doloribus",
				"url": "http://placehold.it/600/1e71a2",
				"thumbnailUrl": "http://placehold.it/150/efc5cf"
			},
			{
				"albumId": 1,
				"id": 40,
				"title": "est quas voluptates dignissimos sint praesentium nisi recusandae",
				"url": "http://placehold.it/600/3a0b95",
				"thumbnailUrl": "http://placehold.it/150/d1fa89"
			},
			{
				"albumId": 1,
				"id": 41,
				"title": "in voluptatem doloremque cum atque architecto deleniti",
				"url": "http://placehold.it/600/659403",
				"thumbnailUrl": "http://placehold.it/150/fe55f5"
			},
			{
				"albumId": 1,
				"id": 42,
				"title": "voluptatibus a autem molestias voluptas architecto culpa",
				"url": "http://placehold.it/600/ca50ac",
				"thumbnailUrl": "http://placehold.it/150/d39202"
			},
			{
				"albumId": 1,
				"id": 43,
				"title": "eius hic autem ad beatae voluptas",
				"url": "http://placehold.it/600/6ad437",
				"thumbnailUrl": "http://placehold.it/150/ba321b"
			},
			{
				"albumId": 1,
				"id": 44,
				"title": "neque eum provident et inventore sed ipsam dignissimos quo",
				"url": "http://placehold.it/600/29fe9f",
				"thumbnailUrl": "http://placehold.it/150/3edbef"
			},
			{
				"albumId": 1,
				"id": 45,
				"title": "praesentium fugit quis aut voluptatum commodi dolore corrupti",
				"url": "http://placehold.it/600/c4084a",
				"thumbnailUrl": "http://placehold.it/150/648222"
			},
			{
				"albumId": 1,
				"id": 46,
				"title": "quidem maiores in quia fugit dolore explicabo occaecati",
				"url": "http://placehold.it/600/e9b68",
				"thumbnailUrl": "http://placehold.it/150/37dab4"
			},
			{
				"albumId": 1,
				"id": 47,
				"title": "et soluta est",
				"url": "http://placehold.it/600/b4412f",
				"thumbnailUrl": "http://placehold.it/150/6294fd"
			},
			{
				"albumId": 1,
				"id": 48,
				"title": "ut esse id",
				"url": "http://placehold.it/600/68e0a8",
				"thumbnailUrl": "http://placehold.it/150/deaa1a"
			},
			{
				"albumId": 1,
				"id": 49,
				"title": "quasi quae est modi quis quam in impedit",
				"url": "http://placehold.it/600/2cd88b",
				"thumbnailUrl": "http://placehold.it/150/e320ba"
			},
			{
				"albumId": 1,
				"id": 50,
				"title": "et inventore quae ut tempore eius voluptatum",
				"url": "http://placehold.it/600/9e59da",
				"thumbnailUrl": "http://placehold.it/150/5e0a9f"
			}
		]
	};

/***/ },

/***/ 457:
/***/ function(module, exports) {

	module.exports = {
		"totalCount": 823,
		"count": 50,
		"offset": 50,
		"limit": 50,
		"links": {
			"last": {
				"href": "https://local.dev/api/v1/photos?limit=50&offset=800"
			},
			"next": {
				"href": "https://local.dev/api/v1/photos?limit=50&offset=100"
			},
			"self": {
				"href": "https://local.dev/api/v1/photos?limit=50&offset=50"
			},
			"first": {
				"href": "https://local.dev/api/v1/photos?limit=50&offset=0"
			}
		},
		"photos": [
			{
				"albumId": 2,
				"id": 51,
				"title": "non sunt voluptatem placeat consequuntur rem incidunt",
				"url": "http://placehold.it/600/8e973b",
				"thumbnailUrl": "http://placehold.it/150/bb7f4"
			},
			{
				"albumId": 2,
				"id": 52,
				"title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
				"url": "http://placehold.it/600/121fa4",
				"thumbnailUrl": "http://placehold.it/150/9ed3d5"
			},
			{
				"albumId": 2,
				"id": 53,
				"title": "soluta et harum aliquid officiis ab omnis consequatur",
				"url": "http://placehold.it/600/6efc5f",
				"thumbnailUrl": "http://placehold.it/150/f349d6"
			},
			{
				"albumId": 2,
				"id": 54,
				"title": "ut ex quibusdam dolore mollitia",
				"url": "http://placehold.it/600/aa8f2e",
				"thumbnailUrl": "http://placehold.it/150/d14fd5"
			},
			{
				"albumId": 2,
				"id": 55,
				"title": "voluptatem consequatur totam qui aut iure est vel",
				"url": "http://placehold.it/600/5e04a4",
				"thumbnailUrl": "http://placehold.it/150/5b3533"
			},
			{
				"albumId": 2,
				"id": 56,
				"title": "vel voluptatem esse consequuntur est officia quo aut quisquam",
				"url": "http://placehold.it/600/f9f067",
				"thumbnailUrl": "http://placehold.it/150/5d4dd0"
			},
			{
				"albumId": 2,
				"id": 57,
				"title": "vero est optio expedita quis ut molestiae",
				"url": "http://placehold.it/600/95acce",
				"thumbnailUrl": "http://placehold.it/150/ee6a9c"
			},
			{
				"albumId": 2,
				"id": 58,
				"title": "rem pariatur facere eaque",
				"url": "http://placehold.it/600/cde4c1",
				"thumbnailUrl": "http://placehold.it/150/81d13f"
			},
			{
				"albumId": 2,
				"id": 59,
				"title": "modi totam dolor eaque et ipsum est cupiditate",
				"url": "http://placehold.it/600/a46a91",
				"thumbnailUrl": "http://placehold.it/150/cd1d2a"
			},
			{
				"albumId": 2,
				"id": 60,
				"title": "ea enim temporibus asperiores placeat consectetur commodi ullam",
				"url": "http://placehold.it/600/323599",
				"thumbnailUrl": "http://placehold.it/150/e12c6c"
			},
			{
				"albumId": 2,
				"id": 61,
				"title": "quia minus sed eveniet accusantium incidunt beatae odio",
				"url": "http://placehold.it/600/e403d1",
				"thumbnailUrl": "http://placehold.it/150/c12924"
			},
			{
				"albumId": 2,
				"id": 62,
				"title": "dolorem cumque quo nihil inventore enim",
				"url": "http://placehold.it/600/65ad4f",
				"thumbnailUrl": "http://placehold.it/150/5de0f9"
			},
			{
				"albumId": 2,
				"id": 63,
				"title": "facere animi autem quod dolor",
				"url": "http://placehold.it/600/4e557c",
				"thumbnailUrl": "http://placehold.it/150/2c0db5"
			},
			{
				"albumId": 2,
				"id": 64,
				"title": "doloremque culpa quia",
				"url": "http://placehold.it/600/cd5a92",
				"thumbnailUrl": "http://placehold.it/150/76b95b"
			},
			{
				"albumId": 2,
				"id": 65,
				"title": "sed voluptatum enim eaque cumque qui sunt",
				"url": "http://placehold.it/600/149540",
				"thumbnailUrl": "http://placehold.it/150/44318f"
			},
			{
				"albumId": 2,
				"id": 66,
				"title": "provident rerum voluptatem illo asperiores qui maiores",
				"url": "http://placehold.it/600/ee0a7e",
				"thumbnailUrl": "http://placehold.it/150/8d491"
			},
			{
				"albumId": 2,
				"id": 67,
				"title": "veritatis labore ipsum unde aut quam dolores",
				"url": "http://placehold.it/600/1279e9",
				"thumbnailUrl": "http://placehold.it/150/f2297f"
			},
			{
				"albumId": 2,
				"id": 68,
				"title": "architecto aut quod qui ullam vitae expedita delectus",
				"url": "http://placehold.it/600/e9603b",
				"thumbnailUrl": "http://placehold.it/150/ff5ebe"
			},
			{
				"albumId": 2,
				"id": 69,
				"title": "et autem dolores aut porro est qui",
				"url": "http://placehold.it/600/46e3b1",
				"thumbnailUrl": "http://placehold.it/150/218855"
			},
			{
				"albumId": 2,
				"id": 70,
				"title": "quam quos dolor eum ea in",
				"url": "http://placehold.it/600/7375af",
				"thumbnailUrl": "http://placehold.it/150/1bee4b"
			},
			{
				"albumId": 2,
				"id": 71,
				"title": "illo qui vel laboriosam vel fugit deserunt",
				"url": "http://placehold.it/600/363789",
				"thumbnailUrl": "http://placehold.it/150/f3ca95"
			},
			{
				"albumId": 2,
				"id": 72,
				"title": "iusto sint enim nesciunt facilis exercitationem",
				"url": "http://placehold.it/600/45935c",
				"thumbnailUrl": "http://placehold.it/150/65dca6"
			},
			{
				"albumId": 2,
				"id": 73,
				"title": "rerum exercitationem libero dolor",
				"url": "http://placehold.it/600/1224bd",
				"thumbnailUrl": "http://placehold.it/150/d1b689"
			},
			{
				"albumId": 2,
				"id": 74,
				"title": "eligendi quas consequatur aut consequuntur",
				"url": "http://placehold.it/600/65ac19",
				"thumbnailUrl": "http://placehold.it/150/fabc1f"
			},
			{
				"albumId": 2,
				"id": 75,
				"title": "aut magni quibusdam cupiditate ea",
				"url": "http://placehold.it/600/a9ef52",
				"thumbnailUrl": "http://placehold.it/150/471d26"
			},
			{
				"albumId": 2,
				"id": 76,
				"title": "magni nulla et dolores",
				"url": "http://placehold.it/600/7644fe",
				"thumbnailUrl": "http://placehold.it/150/b9c756"
			},
			{
				"albumId": 2,
				"id": 77,
				"title": "ipsum consequatur vel omnis mollitia repellat dolores quasi",
				"url": "http://placehold.it/600/36d137",
				"thumbnailUrl": "http://placehold.it/150/f0dc33"
			},
			{
				"albumId": 2,
				"id": 78,
				"title": "aperiam aut est amet tenetur et dolorem",
				"url": "http://placehold.it/600/637984",
				"thumbnailUrl": "http://placehold.it/150/98cb85"
			},
			{
				"albumId": 2,
				"id": 79,
				"title": "est vel et laboriosam quo aspernatur distinctio molestiae",
				"url": "http://placehold.it/600/c611a9",
				"thumbnailUrl": "http://placehold.it/150/baa02f"
			},
			{
				"albumId": 2,
				"id": 80,
				"title": "et corrupti nihil cumque",
				"url": "http://placehold.it/600/a0c998",
				"thumbnailUrl": "http://placehold.it/150/3bbf6"
			},
			{
				"albumId": 2,
				"id": 81,
				"title": "error magni fugiat dolorem impedit molestiae illo ullam debitis",
				"url": "http://placehold.it/600/31a74c",
				"thumbnailUrl": "http://placehold.it/150/ebf621"
			},
			{
				"albumId": 2,
				"id": 82,
				"title": "voluptate voluptas molestias vitae illo iusto",
				"url": "http://placehold.it/600/88b703",
				"thumbnailUrl": "http://placehold.it/150/8a8165"
			},
			{
				"albumId": 2,
				"id": 83,
				"title": "quia quasi enim voluptatem repellat sit sint",
				"url": "http://placehold.it/600/a19891",
				"thumbnailUrl": "http://placehold.it/150/b4b309"
			},
			{
				"albumId": 2,
				"id": 84,
				"title": "aliquam dolorem ut modi ratione et assumenda impedit",
				"url": "http://placehold.it/600/b5205d",
				"thumbnailUrl": "http://placehold.it/150/b64008"
			},
			{
				"albumId": 2,
				"id": 85,
				"title": "ullam delectus architecto sint error",
				"url": "http://placehold.it/600/eb7e7f",
				"thumbnailUrl": "http://placehold.it/150/f1771"
			},
			{
				"albumId": 2,
				"id": 86,
				"title": "qui vel ut odio consequuntur",
				"url": "http://placehold.it/600/fd5751",
				"thumbnailUrl": "http://placehold.it/150/876048"
			},
			{
				"albumId": 2,
				"id": 87,
				"title": "eos nihil sunt accusantium omnis",
				"url": "http://placehold.it/600/224566",
				"thumbnailUrl": "http://placehold.it/150/90497"
			},
			{
				"albumId": 2,
				"id": 88,
				"title": "inventore veritatis magnam enim quasi",
				"url": "http://placehold.it/600/75334a",
				"thumbnailUrl": "http://placehold.it/150/7cf1d7"
			},
			{
				"albumId": 2,
				"id": 89,
				"title": "id at cum incidunt nulla dolor vero tenetur",
				"url": "http://placehold.it/600/21d35",
				"thumbnailUrl": "http://placehold.it/150/3b45de"
			},
			{
				"albumId": 2,
				"id": 90,
				"title": "et quae eligendi vitae maxime in",
				"url": "http://placehold.it/600/bfe0dc",
				"thumbnailUrl": "http://placehold.it/150/beda52"
			},
			{
				"albumId": 2,
				"id": 91,
				"title": "sunt quo laborum commodi porro consequatur nam delectus et",
				"url": "http://placehold.it/600/40591",
				"thumbnailUrl": "http://placehold.it/150/83864c"
			},
			{
				"albumId": 2,
				"id": 92,
				"title": "quod non quae",
				"url": "http://placehold.it/600/de79c7",
				"thumbnailUrl": "http://placehold.it/150/957389"
			},
			{
				"albumId": 2,
				"id": 93,
				"title": "molestias et aliquam natus repellendus accusamus dolore",
				"url": "http://placehold.it/600/2edde0",
				"thumbnailUrl": "http://placehold.it/150/3cda3e"
			},
			{
				"albumId": 2,
				"id": 94,
				"title": "et quisquam aspernatur",
				"url": "http://placehold.it/600/cc12f5",
				"thumbnailUrl": "http://placehold.it/150/6cce55"
			},
			{
				"albumId": 2,
				"id": 95,
				"title": "magni odio non",
				"url": "http://placehold.it/600/9cda61",
				"thumbnailUrl": "http://placehold.it/150/82c4ec"
			},
			{
				"albumId": 2,
				"id": 96,
				"title": "dolore esse a in eos sed",
				"url": "http://placehold.it/600/1fb08b",
				"thumbnailUrl": "http://placehold.it/150/21a3ee"
			},
			{
				"albumId": 2,
				"id": 97,
				"title": "labore magnam officiis nemo et",
				"url": "http://placehold.it/600/e2223e",
				"thumbnailUrl": "http://placehold.it/150/6ba424"
			},
			{
				"albumId": 2,
				"id": 98,
				"title": "sed commodi libero id nesciunt modi vitae",
				"url": "http://placehold.it/600/a77d08",
				"thumbnailUrl": "http://placehold.it/150/1681b9"
			},
			{
				"albumId": 2,
				"id": 99,
				"title": "magnam dolor sed enim vel optio consequuntur",
				"url": "http://placehold.it/600/b04f2e",
				"thumbnailUrl": "http://placehold.it/150/f8fcda"
			},
			{
				"albumId": 2,
				"id": 100,
				"title": "et qui rerum",
				"url": "http://placehold.it/600/14ba42",
				"thumbnailUrl": "http://placehold.it/150/93d242"
			}
		]
	};

/***/ }

});
//# sourceMappingURL=docs.js.map