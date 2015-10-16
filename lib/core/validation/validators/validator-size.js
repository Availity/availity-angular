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

        switch (type) {
          case 'number':
            if(!_.isNumber(value) && /^\d+$/.test(value)) {
              value = parseInt(value, 10);
            }

            return avValUtils.isEmpty(value) || isInRange(value, min, max);
          case 'array':
            return  angular.isArray(value) && isInRange(value.length, min, max);
          default:
            value = value + '';
            return  avValUtils.isEmpty(value) || isInRange(value.length, min, max);
        }
      }
    };

    return validator;

  });

  function isInRange(value, min, max) {
    return value >= min && (max === undefined || value <= max);
  }

})(window);
