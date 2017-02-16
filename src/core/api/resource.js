import angular from 'angular';
import moment from 'moment';

import ngModule from '../module';
import './constants';
import '../polling';
import '../localStorage';

class ApiResourceProvider {

  constructor(AV_API) {
    this.defaultOptions = {...AV_API.OPTIONS};
  }

  setOptions(options) {
    Object.assign(this.defaultOptions, options);
  }

  getOptions() {
    return angular.copy(this.defaultOptions);
  }

  $get($http, $q, avPollingService, avLocalStorageService, AV_STORAGE) {

    const that = this;

    class AvApiResource {

      constructor(_options) {

        this.options = _options;

        if (!this.options) {
          throw new Error('[options] cannot be null or undefined');
        }

        if (this.options.name) {
          this.options.name = this.options.name.charAt(0) === '/' ? this.options.name : `/${this.options.name}`;
        }

        if (!this.options.url && !this.options.name) {
          throw new Error('AvApiResource options [url] or [name] cannot be null');
        }

        // get the default options and merge into this instance
        this.options = angular.extend({}, that.defaultOptions, this.options);

        this.pageBustValue;
      }

      config(config) {
        return angular.extend({}, this.options, (config || {}));
      }

      cacheBust(config) {

        if (config.cacheBust === true) {
          config.params.cacheBust = moment().unix();
        } else if (angular.isFunction(config.cacheBust)) {
          config.params.cacheBust = config.cacheBust();
        } else {
          config.params.cacheBust = config.cacheBust;
        }

      }
      setPageBust(value) {
        this.pageBustValue = angular.isUndefined(value) ? moment().unix() : value;
      }
      getPageBust() {
        if (angular.isUndefined(this.pageBustValue)) {
          this.setPageBust();
        }
        return this.pageBustValue;
      }
      pageBust(config) {
        if (config.pageBust === true) {
          config.params.pageBust = this.getPageBust();
        } else if (angular.isFunction(config.pageBust)) {
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
      cacheParams(_config) {

        const config = angular.copy(_config);
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

      getUrl(id) {

        if (this.options.api) {
          return this.getApiUrl(id);
        }

        return this.options.url;

      }

      request(config, afterCallback) {

        const self = this;
        const defer = $q.defer();

        $http(config)
          .then( response => {

            // handle the async response if applicable
            const _promise = $q.when(avPollingService.response(response));

            // notify the promise listener of the original response
            defer.notify(response);

            // handle the polling service promise
            _promise.then( (_successResponse) => {

              let successResponse = _successResponse;

              if (afterCallback) {
                successResponse = afterCallback.call(self, successResponse, config.data);
              }
              defer.resolve(successResponse);
            },
              (errorResponse) => defer.reject(errorResponse),
              (notifyResponse) => defer.notify(notifyResponse)
            );

          }).catch( response => {
            defer.reject(response);
          });

        const promise = defer.promise;

        // recreate the success callback ala $http
        promise.success = function(fn) {
          promise.then( (response) => {
            fn(response.data, response.status, response.headers, response.config);
          });
          return promise;
        };

        // recreate the error callback ala $http
        promise.error = function(fn) {

          promise.then(null, response => {
            fn(response.data, response.status, response.headers, config);
          });

          return promise;

        };

        promise.always = promise.finally;

        return promise;
      }

      normalize(url) {
        return url
        .replace(/[\/]+/g, '/')
        .replace(/\/$/, '');
      }

      join() {
        const joined = [].slice.call(arguments, 0).join('/');
        return this.normalize(joined);
      }

      getApiUrl(_id) {

        const id = _id ? `/${_id}` : '';

        let uri;

        const {path, version, name, url} = this.options;

        if (name) {
          uri = this.join('/', path, version, name, id);
        } else {
          uri = this.join(url, id);
        }

        return uri;
      }

      create(_data, _config) {

        let data = _data;
        let config = _config;

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

      get(id, _config) {

        let config = _config;

        if (!id) {
          throw new Error('called method without [id]');
        }

        config = this.config(config);
        config = this.cacheParams(config);

        config.method = 'GET';
        config.url = this.getUrl(id);


        return this.request(config, this.afterGet);

      }

      query(_config) {

        let config = _config;

        config = this.config(config);
        config = this.cacheParams(config);

        config.method = 'GET';
        config.url = this.getUrl();

        return this.request(config, this.afterQuery);

      }

      update(id, _data, _config) {

        let config = _config;
        let data = _data;

        let url;

        if (angular.isString(id) || angular.isNumber(id)) {
          url = this.getUrl(id);
        } else {
          url = this.getUrl();

          // At this point the function signature becomes:
          //
          // update(data, config) {} a.k.a function(id, data)
          //
          config = data;  // config is really the 2nd param
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

      remove(id, _config) {

        let config = _config;

        let url;
        let data;

        if (angular.isString(id) || angular.isNumber(id)) {
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

      beforeCreate(data) {
        return data;
      }

      afterCreate(response) {
        return response;
      }

      afterQuery(response) {
        return response;
      }

      afterGet(response) {
        return response;
      }

      beforeUpdate(data) {
        return data;
      }

      afterUpdate(response) {
        return response;
      }

      afterRemove(response) {
        return response;
      }

    }

    return AvApiResource;

  }

}

ngModule.provider('AvApiResource', ApiResourceProvider);

export default ngModule;
