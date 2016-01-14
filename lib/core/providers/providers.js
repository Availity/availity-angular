(function(root) {
  'use strict';
  var availity = root.availity;

  availity.core.factory('providersService', function(AvApiResource) {
    var ProvidersService = function() {
      AvApiResource.call(this, {level: '/internal', version: '/v1', url: '/providers'});
    };

    angular.extend(ProvidersService.prototype, AvApiResource.prototype, {
      afterQuery: function(response) {
        return {
          providers: response.data.providers,
          totalCount: response.data.totalCount
        };
      }
    });
    return new ProvidersService();
  });
})(window);
