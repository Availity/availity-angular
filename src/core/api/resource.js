import angular from 'angular';
import * as _ from 'lodash';

import ngModule from '../module';
import './constants';
import '../polling';

class ApiResourceProvider {

  constructor(AV_API) {
    this.defaultOptions = _.merge({}, AV_API.OPTIONS);
  }

  setOptions(options) {
    _.merge(this.defaultOptions, options);
  }

  getOptions = function() {
    return angular.copy(this.defaultOptions);
  }

  $get($http, $q, avPollingService) {

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
        this.options = angular.extend({}, that.defaultOptions, (this.options || {}));

      }

      config(config) {
        return angular.extend({}, this.options, (config || {}));
      }

      cacheBust(config) {

        config.cacheBust = null;
        config.params = config.params || {};
        config.params.cacheBust = new Date().getTime();

        return config;

      }

      getUrl(id) {

        if (this.options.api) {
          return this.getApiUrl(id);
        }

        return this.options.url;

      }

      createResponse(data, status, headers, config) {
        return {
          data,
          status,
          headers,
          config
        };
      }

      request(config, afterCallback) {

        const self = this;
        const defer = $q.defer();

        $http(config)
          .success( (data, status, headers, _config) => {

            const _response = {
              data,
              status,
              headers,
              config: _config
            };

            // handle the async response if applicable
            const _promise = $q.when(avPollingService.response(_response));
            // notify the promise listener of the original response
            defer.notify(_response);

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

          }).error( (data, status, headers, _config) => {
            const response = self.createResponse(data, status, headers, _config);
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
        if (config.cacheBust) {
          config = this.cacheBust(config);
        }
        config.method = 'GET';
        config.url = this.getUrl(id);


        return this.request(config, this.afterGet);

      }

      query(_config) {

        let config = _config;

        config = this.config(config);
        if (config.cacheBust) {
          config = this.cacheBust(config);
        }
        config.method = 'GET';
        config.url = this.getUrl();

        return this.request(config, this.afterQuery);

      }

      update(id, _data, _config) {

        let config = _config;
        let data = _data;

        let url;

        if (_.isString(id) || _.isNumber(id)) {
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

        if (_.isString(id) || _.isNumber(id)) {
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

      static create() {
        return new AvApiResource();
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
