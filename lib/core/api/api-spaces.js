(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.factory('avSpacesResource', function(AvApiResource) {
    var AvSpacesResource = function() {
      AvApiResource.call(this, {
        level: '/spaces',
        version: '/v1',
        url: '/spaces'
      });
    };

    angular.extend(AvSpacesResource.prototype, AvApiResource.prototype, {

      // this should allow a array or string of ids?????
      getSpaces: function() {
        return this.query().then(function(response) {
          return response.data;
        });
      },

      // get a space by the owner id
      getSpacesByOwner: function(ownerId) {
        return this.query({
          params: {
            ownerId: ownerId
          }
        });
      },
      // get a space by the brand id
      getSpacesByBrand: function(brandId) {
        return this.query({
          params: {
            brandId: brandId
          }
        });
      }
    });
    return new AvSpacesResource();
  });

})(window);
