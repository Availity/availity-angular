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

        switch(type) {
          case 'number':
            return this.validateNumber(value, min, max);
          case 'collection':
            return this.validateArray(value, min, max);
          default: {
            return this.validateString(value, min, max);
          }
        }
      },

      validateString: function(value, min, max) {
        value = value + '';
        return  avValUtils.isEmpty(value) || this.isInRange(value.length, min, max);
      },

      isInRange: function(value, min, max) {
        return value >= min && (max === undefined || value <= max);
      },

      validateArray: function(value, min, max) {
        return  angular.isArray(value) && this.isInRange(value.length, min, max);
      },

      validateNumber: function(value, min, max) {

        if(!_.isNumber(value) && /^\d+$/.test(value)) {
          value = parseInt(value, 10);
        }

        return avValUtils.isEmpty(value) || this.isInRange(value, min, max);

      }
    };

    return validator;

  });



})(window);
