(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.factory('avValDateRange', function(AV_VAL) {

    var validator = {
      name: 'dateRange',
      getMinDate: function(minDate) {
        var period = minDate.replace(AV_VAL.PATTERNS.ALPHA_ONLY, '');
        var val = parseInt( minDate.replace(AV_VAL.PATTERNS.NUMERIC_ONLY, ''), 10);
        var min = moment().subtract(val, period);
        return min;
      },
      getMaxDate: function(maxDate) {
        var max = moment();
        var period = maxDate.replace(AV_VAL.PATTERNS.ALPHA_ONLY, '');
        var val = parseInt( maxDate.replace(AV_VAL.PATTERNS.NUMERIC_ONLY, ''), 10);

        if(maxDate !== 'today') {
          max = moment().add(val, period);
        } else {
          max.set('hours', 23);
          max.set('minutes', 59);
          max.set('seconds', 59);
        }
        return max;
      },
      validation: function(value, rules) {
        var minDate = validator.getMinDate(rules.min);
        var maxDate = validator.getMaxDate(rules.max);
        value = moment(value, rules.format);
        return !value.isBefore(minDate) && !value.isAfter(maxDate);
      },
      validate: function(value, rule) {
        return validator.validation(value, rule);
      }
    };

    return validator;
  });
})(window);
