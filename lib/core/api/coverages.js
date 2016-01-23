'use strict';

import availity from '../module';

availity.core.factory('avCoveragesResource', function(AvApiResource) {
  return new AvApiResource({version: '/v1', url: '/configurations', cache: false});
});


