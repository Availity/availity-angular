(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.factory('avValDate', function(AV_VAL, avValUtils) {

    var validator = {
      name: 'dateFormat',
      validate: function(value, rules) {
        var format = rules && rules.format ? rules.format : AV_VAL.DATE_FORMAT.SIMPLE;
        return avValUtils.isEmpty(value) || moment(value, format, true).isValid();
      }
    };

    return validator;
  });
})(window);
