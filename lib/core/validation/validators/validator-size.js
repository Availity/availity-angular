(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.factory('avValSize', function(avValUtils) {

    var validator =  {

      name: 'size',

      validate: function(value, rule) {

        var min = rule.min || 0;
        var max = rule.max;
        var type = rule.type ? rule.type.toLowerCase() : 'text';

        if(_.isNull(value) || _.isUndefined(value)) {
          value = '';
        }

        if(type === 'text') {
          value = value + '';
          return  avValUtils.isEmpty(value) || value.length >= min && (max === undefined || value.length <= max);
        }

        // ... must be a Number
        if(!_.isNumber(value) && /^\d+$/.test(value)) {
          value = parseInt(value, 10);
        }

        return avValUtils.isEmpty(value) || value >= min && (max === undefined || value <= max);

      }
    };

    return validator;

  });
})(window);
