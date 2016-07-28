(function(root) {

  'use strict';

  var availity = root.availity;

  var SpacesFactory = function(AvApiResource) {

    // sdk/platform/v1/spaces/10939061011461209623076300008435
    return new AvApiResource({
      version: '',
      url: '/sdk/platform/v1/spaces'
    });

  };

  availity.core.factory('avSpacesResource', SpacesFactory);

})(window);
