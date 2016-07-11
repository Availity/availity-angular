import * as _ from 'lodash';

import ngModule from '../module';

const SelectResourceFactory = function(AvApiResource) {

  class SelectResource extends AvApiResource {

    constructor(options) {
      super(options);
    }

    remote(data) {

      const config = this.getConfig(data);

      return this.query(config).then( response => {

        let results = this.getResults(response.data);
        results = this.mapResults(results);

        return this.getResponse(response, results);

      });

    }

    getConfig(data) {

      // config for the api resource query
      const config = {
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

    }

    getResponse(response, results) {

      // Calculate if we want to continue searching.
      // True if more results are available for the current search term
      const more = response.data.offset < response.data.totalCount - response.data.limit;

      return {
        more,
        results
      };

    }

    getResult(/* item */) {
      // return  item.code;
      throw new Error('getResult() must be implemented when extending from SelectResource');
    }

    // Format the collection items for Select2:
    //
    //    http://select2.github.io/select2/#documentation
    //
    //    The default renderers expect objects with id and text keys.
    //    The id property is required, even if custom renderers are used.
    //    The object may also contain a children key if hierarchical data is displayed.
    //    The object may also contain a disabled boolean property indicating whether this result can be selected.
    //
    mapResults(results) {

      if (results && !_.has(results[0], 'id')) {

        results = _.map(results, item => {
          item.id = this.getResult(item);
          return item;
        });

      }

    }

    getResults(/* response */) {
      // EX:
      //  return response.data.codes
      throw new Error('getResults() must be implemented when extending from SelectResource');
    }

    getPageSize() {
      return 50;
    }

  }

  return new SelectResource();
};

ngModule.factory('avSelectResource', SelectResourceFactory);

export default ngModule;

