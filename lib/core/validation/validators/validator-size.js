(function(root) {

  'use strict';

  const availity = root.availity;

  availity.core.factory('avValSize', function(avValUtils) {

    const validator =  {

      name: 'size',

      validate: function(_value, rule) {

        let value = _value;

        const min = rule.min || 0;
        const max = rule.max;
        const type = rule.type ? rule.type.toLowerCase() : 'text';

        if (_.isNull(value) || _.isUndefined(value)) {
          value = '';
        }

        if (type === 'text') {
          value = value + '';
          return  avValUtils.isEmpty(value) || value.length >= min && (max === undefined || value.length <= max);
        }

        // ... must be a Number
        if (!_.isNumber(value) && /^\d+$/.test(value)) {
          value = parseInt(value, 10);
        }

        return avValUtils.isEmpty(value) || value >= min && (max === undefined || value <= max);

      }
    };

    return validator;

  });
})(window);
