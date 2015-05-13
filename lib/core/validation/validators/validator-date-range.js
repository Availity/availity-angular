(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.factory('avValDateRange', function(AV_VAL, avValUtils) {

    var validator = {
      name: 'dateRange',
      getStratDate: function(start) {
        return validator.setMin(moment().add(start.value, start.units));
      },
      getEndDate: function(end) {
        var max = validator.setMax( moment().add(end.value, end.units) );
        return max;
      },
      setMin: function(value) {
        value.set('hours', 0);
        value.set('minutes', 0);
        value.set('seconds', 0);
        return value;
      },
      setMax: function(value) {
        value.set('hours', 23);
        value.set('minutes', 59);
        value.set('seconds', 59);
        return value;
      },
      validation: function(value, rules) {
        var selectedDate;
        var startDate;
        var endDate;

        selectedDate = moment(value, rules.format || AV_VAL.DATE_FORMAT.SIMPLE);
        selectedDate.set('hours', 0);
        selectedDate.set('minutes', 1);
        selectedDate.set('seconds', 0);

        if(!avValUtils.isEmpty(rules.start.units) && !avValUtils.isEmpty(rules.end.units)) {
          startDate = validator.getStratDate(rules.start);
          endDate = validator.getEndDate(rules.end);
        } else {
          startDate = moment(rules.start.value, rules.format);
          endDate = validator.setMax(moment(rules.end.value, rules.format));
        }
        return selectedDate.isBetween(startDate,endDate);
      },
      validate: function(value, rule) {
        return avValUtils.isEmpty(value) || validator.validation(value, rule);
      }
    };

    return validator;
  });
})(window);
