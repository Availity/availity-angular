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

        if(_.isString(value) && type === 'text') {
          result = avValUtils.isEmpty(value) || value.length >= min && (max === undefined || value.length <= max);
        } else if(_.isNumber(value) && type === 'number') {
          result = avValUtils.isEmpty(value) || value >= min && (max === undefined || value <= max);
        }

        return result;
      }
    };

    return validator;

  });
})(window);
