(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.factory('avValDateRange', function(AV_VAL, avValUtils) {

    var validator = {

      name: 'dateRange',

      getStartDate: function(start) {
        return validator.setMin(moment().add(start.value, start.units));
      },

      getEndDate: function(end) {
        return validator.setMax(moment().add(end.value, end.units) );
      },

      setMin: function(value) {

        // [fix]: if time is provided this may cause issues.
        value.set('hours', 0);
        value.set('minutes', 0);
        value.set('seconds', 0);

        return value;
      },

      setMax: function(value) {

        // [fix]: if time is provided this may cause issues.
        value.set('hours', 23);
        value.set('minutes', 59);
        value.set('seconds', 59);

        return value;
      },

      validation: function(value, rules) {

        var date;
        var startDate;
        var endDate;

        date = moment(value, rules.format || AV_VAL.DATE_FORMAT.SIMPLE);
        date.set('hours', 0);
        date.set('minutes', 0);
        date.set('seconds', 0);

        if(!avValUtils.isEmpty(rules.start.units) && !avValUtils.isEmpty(rules.end.units)) {
          startDate = validator.getStartDate(rules.start);
          endDate = validator.getEndDate(rules.end);
        } else {
          startDate = moment(rules.start.value, rules.format);
          endDate = validator.setMax(moment(rules.end.value, rules.format));
        }
        return date.isValid() && date.isBetween(startDate, endDate, 'day') || date.isSame(startDate, 'day') || date.isSame(endDate, 'day');
      },

      validate: function(value, rule) {
        return avValUtils.isEmpty(value) || validator.validation(value, rule);
      }

    };

    return validator;
  });
})(window);
