import ngModule from '../module';

const SelectResourceFactory = AvApiResource => {

  class AvSelectResource extends AvApiResource {

    constructor(options) {
      super(options);
    }

    onQuery(data) {

      const config = this.getConfig(data);

      return this.defaultQuery(config).then( response => {

        let results = this.getResults(response.data);
        results = this.mapResults(results);

        return this.getResponse(response, results);

      });

    }

    defaultQuery(config) {
      return this.query(config);
    }

    getConfig(data) {

      // config for the api resource query
      const config = {
        params: {}
      };

      config.params.offset = this.getOffset(data);

      if (data.term) {
        config.params[this.getQueryParam()] = data.term;
      }

      return config;
    }

    getOffset(data) {
      let offset;
      if (data.page) {
        offset = this.getPageSize() * (data.page - 1);
      }
      if (data.offset) {
        offset = data.offset;
      }
      return offset;
    }

    getQueryParam() {
      return 'q';
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
    mapResults(results) {

      if (results && results.length > 0 && (!results[0].id || !results[0].text)) {

        results = results.map(item => {
          const {id, text} = this.mapResult(item);
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
    getId(result) {
      return result.id;
    }

    initSelection(element, callback) {
      callback(null);
    }

    getResults(/* response */) {
      // EX:
      //  return response.data.codes
      throw new Error('getResults() must be implemented when extending from AvSelectResource');
    }

    getPageSize() {
      return 50;
    }

  }

  return AvSelectResource;

};

ngModule.factory('AvSelectResource', SelectResourceFactory);

export default ngModule;
