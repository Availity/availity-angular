'use strict';

import availity from '../module';

availity.core.factory('avConfigurationsResource', function(AvApiResource) {
  return new AvApiResource({version: '/v1', url: '/configurations'});
});


