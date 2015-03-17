(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.factory('avCodesResource', function(AvApiResource) {
    return new AvApiResource({version: '/v1', url: '/codes'});
  });

})(window);
