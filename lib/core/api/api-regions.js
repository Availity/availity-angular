(function (root) {

  'use strict';

  var availity = root.availity;

  var AvRegionsResourceFactory = function (AvApiResource) {

    var AvRegionsResource = function () {
      AvApiResource.call(this, {
        path: '/api/sdk/platform',
        version: '/v1',
        url: '/regions'
      });
    };

    angular.extend(AvRegionsResource.prototype, AvApiResource.prototype, {

      changeRegion: function (region) {
        return this.update(region, {}, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
      }

    });

    return new AvRegionsResource();

  };

  availity.core.factory('avRegionsResource', AvRegionsResourceFactory);

})(window);
