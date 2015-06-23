(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.factory('avValInvalid', function() {

    var validator =  {
      name: 'invalid',
      validate: function() {
        return false;
      }
    };

    return validator;

  });
})(window);
