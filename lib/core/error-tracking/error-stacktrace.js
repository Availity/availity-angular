(function(root) {
  'use strict';

  var availity = root.availity;


  availity.core.factory('avStackTrace', function() {
      return({print: printStackTrace});
  });

})(window);
