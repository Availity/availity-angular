'use strict';

import angular from 'angular';
import _ from 'lodash';

import availity from '../module';

availity.core.factory('avCodesResource', function(AvApiResource) {
  return new AvApiResource({version: '/v1', url: '/codes'});
});

const AvCodesResourceFactory = function(AvApiResource) {

  const AvCodesResource = function() {
    AvApiResource.call(this, 'codes');
  };

  angular.extend(AvCodesResource.prototype, AvApiResource.prototype, {

    getCodes: function(data) {

      // config for the api resource query
      const config = {
        params: {}
      };

      if (data.page) {
        config.params.offset = 50 * (data.page - 1);
      }
      if (data.offset) {
        config.params.offset = data.offset;
      }
      if (data.list) {
        config.params.list = data.list;
      }
      if (data.q) {
        config.params.q = data.q;
      }

      return this.query(config).then(function(response) {

        // Format the response into something select2 can read
        const results = response.data.codes;
        if (results && !_.has(results[0], 'id')) {
          _.each(results, function(code) {
            code.id = code.code;
          });
        }

        // calculate if we want to continue searching
        const moreVal = response.data.offset < response.data.totalCount - response.data.limit;
        return {
          more: moreVal,
          results: results
        };

      });
    }

  });

  return new AvCodesResource();

};

availity.core.factory('avCodesResource', AvCodesResourceFactory);


