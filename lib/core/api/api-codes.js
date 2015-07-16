(function(root) {

  'use strict';


  var availity = root.availity;

  var AvCodesResourceFactory = function(AvApiResource) {

    var AvCodesResource = function () {
      AvApiResource.call(this, 'codes');
    };

    angular.extend(AvCodesResource.prototype, AvApiResource.prototype, {

      getCodes: function (data) {

        // config for the api resource query
        var config = {};
        config.params = {};
        config.params.offset = 50 * (data.page - 1);

        return this.query(config).then(function (response) {
          //format the response into something select2 can read
          var myResults = response.data.codes;
          if(_.isEmpty(myResults[0].id)) {
            _.each(myResults, function (code) {
              code.id = code.code;
            });
          }

          // calculate if we want to continue searching
          var moreVal = (( (response.data.offset / response.data.limit) - 1) * 50) < response.data.totalCount;
          return {
            more: moreVal,
            results: myResults
          };

        });
      }

    });

    return new AvCodesResource();

  };

  availity.core.factory('avCodesResource', AvCodesResourceFactory);

})(window);
