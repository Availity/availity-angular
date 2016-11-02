'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

require('./constants');

require('../polling');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApiResourceProvider = function () {
  function ApiResourceProvider(AV_API) {
    _classCallCheck(this, ApiResourceProvider);

    this.defaultOptions = _extends({}, AV_API.OPTIONS);
    this.sessionBust = (0, _moment2.default)().unix();
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

      AvApiResource.prototype.cacheBust = function cacheBust(_config) {

        var config = _angular2.default.copy(_config);
        config.cacheBust = null;
        config.params = config.params || {};
        config.params.cacheBust = (0, _moment2.default)().unix();

        return config;
      };

      AvApiResource.prototype.sessionBust = function sessionBust(_config) {

        var config = _angular2.default.copy(_config);
        config.sessionBust = null;
        config.params = config.params || {};
        config.params.sessionBust = that.sessionBust;

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

        // If true cache bust the api on every call
        config = this.config(config);
        if (config.cacheBust) {
          config = this.cacheBust(config);
        }

        // Cache bust api once per application load
        if (config.sessionBust) {
          config = this.sessionBust(config);
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