'use strict';

import availity from '../module';

availity.REGEX_API_URL = /^.*?api.availity.com(.*)$/;

availity.getRelativeUrl = function(url) {
  var result = url.match(availity.REGEX_API_URL);
  if (result && result[1]) {
    return '/api' + result[1];
  }

  return url;
};

