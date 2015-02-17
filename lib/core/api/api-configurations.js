(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.factory('avConfigurationsResource', function(AvApiResource) {
    return new AvApiResource({version: '/v1', url: '/configurations'});
  });

})(window);
