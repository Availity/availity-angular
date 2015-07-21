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
        var type = rule.type ? rule.type.toLowerCase() : 'text';

        if(_.isNull(value) || _.isUndefined(value)) {
          value = '';
        }

        if(type === 'text') {
          if(!_.isString(value)) {
            value = value.toString();
          }
          result = avValUtils.isEmpty(value) || value.length >= min && (max === undefined || value.length <= max);
        } else if(type === 'number') {
          if(!_.isNumber(value) && /^\d+$/.test(value)) {
            value = parseInt(value);
          }
          if(_.isNumber(value)) {
            result = avValUtils.isEmpty(value) || value >= min && (max === undefined || value <= max);
          } else {
            result = false;
          }
        }

        return result;
      }
    };

    return validator;

  });
})(window);
