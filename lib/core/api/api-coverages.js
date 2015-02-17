(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.factory('avCoveragesResource', function(AvApiResource) {
    return new AvApiResource({version: '/v1', url: '/configurations', cache: false});
  });

})(window);
