(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.factory('avValPhone', function(avValPattern) {

    var PHONE_PATTERN = /^([0-9][\.\-]?)?[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4}$/;

    var validator =  {
      name: 'phone',
      validate: function(value, rule) {
        return avValPattern.validate(value, angular.extend({}, rule, { value: PHONE_PATTERN }));
      }
    };

    return validator;

  });
})(window);
