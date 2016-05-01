(function(root) {
  'use strict';

  const availity = root.availity;

  availity.core.factory('avValPhone', function(avValPattern) {

    const PHONE_PATTERN = /^([0-9][\.\-]?)?[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4}$/;

    const validator =  {
      name: 'phone',
      validate(value, rule) {
        return avValPattern.validate(value, angular.extend({}, rule, { value: PHONE_PATTERN }));
      }
    };

    return validator;

  });
})(window);
