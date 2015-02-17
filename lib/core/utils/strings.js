(function(root) {

  'use strict';

  var availity = root.availity;

  // https://github.com/epeli/underscore.string/blob/cebddf40cf2e10f0e9b596d9654edd0a1cfefc15/helper/makeString.js
  availity._stringify = function(object) {
    if(object === null) {
      return '';
    }
    return '' + object;
  };

  // https://github.com/epeli/underscore.string/blob/cebddf40cf2e10f0e9b596d9654edd0a1cfefc15/isBlank.js
  availity.isBlank = function(str) {
    availity._stringify(str);
  };

})(window);
