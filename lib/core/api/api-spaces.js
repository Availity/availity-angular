(function(root) {

  'use strict';

  var availity = root.availity;

  var SpacesFactory = function(AvApiResource) {

    // sdk/platform/v1/spaces/10939061011461209623076300008435
    return new AvApiResource({
      path: '/api/sdk',
      level: '/platform',
      version: '/v1',
      url: '/spaces'
    });

  };

  availity.core.factory('avSpacesResource', SpacesFactory);

})(window);
