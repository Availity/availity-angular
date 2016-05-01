(function(root) {

  'use strict';

  const availity = root.availity;

  availity.core.factory('avValDate', function(AV_VAL, avValUtils) {

    const validator = {
      name: 'dateFormat',
      validate(value, rules) {
        const format = rules && rules.format ? rules.format : AV_VAL.DATE_FORMAT.SIMPLE;
        return avValUtils.isEmpty(value) || moment(value, format, true).isValid();
      }
    };

    return validator;
  });
})(window);
