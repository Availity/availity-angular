(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.factory('avValRequired', function(avValUtils) {

    var validator =  {
      name: 'required',
      validate: function(value) {
        return !avValUtils.isEmpty(value);
      }
    };

    return validator;

  });
})(window);
