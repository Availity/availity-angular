'use strict';

import angular from 'angular';
import _ from 'lodash';

import availity from '../module';

const defaultOptions = {
  // pre-prend the url with a value like `/public` so we can build urls like `public/api/v1/*`
  prefix: '',
  // default base url for endpoints
  path: '/api',
  // url resource group, such as `/foo`, for urls like `public/api/foo/v1/*`
  resourceGroup: '',
  // url to resource endpoint like `coverages` or `payers`
  url: null,
  // defaults to version 1
  version: '/v1',
  // governance level `/internal`
  level: '',
  // post-pend the url with `.json`, `.txt` or `.xml`
  suffix: '',
  // cache all request by default
  cache: true,
  // flag used to enable behaviors around the Availity Rest API
  api: true,
  // # of times the polling service has tried to get a response
  pollingRetryCount: 0,
  // in ms
  pollingInterval: 1000,
  // % the polling interval decays after every retry
  pollingDecay: 1.2,
  // maximum time polling is allowed before rejecting the request
  pollingMaxInterval: 30000

};

// Factory that creates ApiResourcess
const ApiResourcesFactory = function($http, $q, avPollingService) {

  const AvApiResource = function(_options) {

    let options = _options;

    if (!options) {
      throw new Error('[options] cannot be null or undefined');
    }

    // if string the assume url is being passed in
    if (angular.isString(options)) {
      options = options.charAt(0) === '/' ? options : '/' + options;
      options = angular.extend({}, {url: options});
    }

    if (!options.url) {
      throw new Error('[url] cannot be null');
    }

    // get the default options and merge into this instance
    this.options = angular.extend({}, defaultOptions, (options || {}));
  };

  // Alias the prototype
  const proto = AvApiResource.prototype;

  proto._config = function(config) {
    return angular.extend({}, this.options, (config || {}));
  };

  proto._cacheBust = function(config) {
    config.cacheBust = null;
    config.params = config.params || {};
    config.params.cacheBust = new Date().getTime();
    return config;
  };

  proto._getUrl = function(id) {
    if (this.options.api) {
      return this._getApiUrl(id);
    }

    return this.options.url;
  };

  proto._createResponse = function(data, status, headers, config) {
    return {
      data: data,
      status: status,
      headers: headers,
      config: config
    };
  };

  proto._request = function(config, afterCallback) {

    const self = this;
    const defer = $q.defer();

    $http(config)
      .success(function(data, status, headers, _config) {

        const _response = {
          data: data,
          status: status,
          headers: headers,
          config: _config
        };

        // handle the async response if applicable
        const _promise = $q.when(avPollingService.response(_response));
        // notify the promise listener of the original response
        defer.notify(_response);

        // handle the polling service promise
        _promise.then(function(_successResponse) {

          let successResponse = _successResponse;

          // if service has a callback then call it
          // var response = self._createResponse(data, status, headers, _config);
          if (afterCallback) {
            successResponse = afterCallback.call(self, successResponse, config.data);
          }
          defer.resolve(successResponse);
        }, function(errorResponse) {
          defer.reject(errorResponse);
        }, function(notifyResponse) {
          defer.notify(notifyResponse);
        });

      }).error(function(data, status, headers, _config) {
        const response = self._createResponse(data, status, headers, _config);
        defer.reject(response);
      });

    const promise = defer.promise;

    // recreate the success callback ala $http
    promise.success = function(fn) {
      promise.then(function(response) {
        fn(response.data, response.status, response.headers, response.config);
      });
      return promise;
    };

    // recreate the error callback ala $http
    promise.error = function(fn) {
      promise.then(null, function(response) {
        fn(response.data, response.status, response.headers, config);
      });
      return promise;
    };

    promise.always = promise.finally;

    return promise;
  };

  proto.normalize = function(url) {
    return url
      .replace(/[\/]+/g, '/')
      .replace(/\/$/, '');
  };

  proto.join = function() {
    const joined = [].slice.call(arguments, 0).join('/');
    return this.normalize(joined);
  };

  proto._getApiUrl = function(_id) {

    const id = _id ? '/' + _id : '';

    const url = this.join(
      this.options.prefix,
      this.options.path,
      this.options.level,
      this.options.resourceGroup,
      this.options.version,
      this.options.url,
      id);

    return url + this.options.suffix;
  };

  proto.create = function(_data, _config) {

    let data = _data;
    let config = _config;

    if (!data) {
      throw new Error('called method without [data]');
    }

    if (this.beforeCreate) {
      data = this.beforeCreate(data);
    }

    config = this._config(config);
    config.method = 'POST';
    config.url = this._getUrl();
    config.data = data;

    return this._request(config, this.afterCreate);

  };

  proto.get = function(id, _config) {

    let config = _config;

    if (!id) {
      throw new Error('called method without [id]');
    }

    config = this._config(config);
    if (config.cacheBust) {
      config = this._cacheBust(config);
    }
    config.method = 'GET';
    config.url = this._getUrl(id);


    return this._request(config, this.afterGet);

  };

  proto.query = function(_config) {

    let config = _config;

    config = this._config(config);
    if (config.cacheBust) {
      config = this._cacheBust(config);
    }
    config.method = 'GET';
    config.url = this._getUrl();

    return this._request(config, this.afterQuery);

  };

  proto.update = function(id, _data, _config) {

    let config = _config;
    let data = _data;

    let url;

    if (_.isString(id) || _.isNumber(id)) {
      url = this._getUrl(id);
    }else {
      url = this._getUrl();
      // At this point the function signature becomes:
      //
      // proto.update = function(data, config) {} a.k.a function(id, data)
      //
      config = data;  // config is really the 2nd param
      data = id; // data is really the first param
    }

    if (this.beforeUpdate) {
      data = this.beforeUpdate(data);
    }

    config = this._config(config);
    config.method = 'PUT';
    config.url = url;
    config.data = data;

    return this._request(config, this.afterUpdate);

  };

  proto.remove = function(id, _config) {

    let config = _config;

    let url;
    let data;

    if (_.isString(id) || _.isNumber(id)) {
      url = this._getUrl(id);
    }else {
      // At this point the function signature becomes:
      //
      // proto.remove = function(data, config)
      //
      url = this._getUrl();
      data = id;
    }

    config = this._config(config);
    config.method = 'DELETE';
    config.url = url;
    config.data = data;

    return this._request(config, this.afterRemove);
  };

  proto.beforeCreate = null;
  proto.afterCreate = null;
  proto.afterQuery = null;
  proto.afterGet = null;
  proto.beforeUpdate = null;
  proto.afterUpdate = null;
  proto.afterRemove = null;

  return AvApiResource;

};

availity.core.factory('AvApiResource', ApiResourcesFactory);
