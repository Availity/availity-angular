(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.factory('avValSize', function(avValUtils) {

    var validator =  {
      name: 'size',
      validate: function(value, rule) {
        var result = false;
        var min = rule.min || 0;
        var max = rule.max;

        if(_.isNull(value) || _.isUndefined(value)) {
          value = '';
        }

        if(_.isString(value)) {
          result = avValUtils.isEmpty(value) || value.length >= min && (max === undefined || value.length <= max);
        } else if(_.isNumber(value)) {
          result = avValUtils.isEmpty(value) || value >= min && (max === undefined || value <= max);
        }

        return result;
      }
    };

    return validator;

  });
})(window);
