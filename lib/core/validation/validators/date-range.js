import moment from 'moment';

import ngModule from '../../module';
import '../constants';
import './utils';

ngModule.factory('avValDateRange', (AV_VAL, avValUtils) => {

  const validator = {

    name: 'dateRange',

    getStartDate(start) {
      return validator.setMin(moment().add(start.value, start.units));
    },

    getEndDate(end) {
      return validator.setMax(moment().add(end.value, end.units) );
    },

    setMin(value) {

      value.set('hours', 0);
      value.set('minutes', 0);
      value.set('seconds', 0);

      return value;
    },

    setMax(value) {

      value.set('hours', 23);
      value.set('minutes', 59);
      value.set('seconds', 59);

      return value;
    },

    validation(value, rules) {

      let startDate;
      let endDate;

      const date = moment(value, rules.format || AV_VAL.DATE_FORMAT.SIMPLE);
      date.set('hours', 0);
      date.set('minutes', 0);
      date.set('seconds', 0);

      if (!avValUtils.isEmpty(rules.start.units) && !avValUtils.isEmpty(rules.end.units)) {
        startDate = validator.getStartDate(rules.start);
        endDate = validator.getEndDate(rules.end);
      } else {
        startDate = moment(rules.start.value, rules.format);
        endDate = validator.setMax(moment(rules.end.value, rules.format));
      }
      return date.isValid() && date.isBetween(startDate, endDate, 'day') || date.isSame(startDate, 'day') || date.isSame(endDate, 'day');
    },

    validate(value, rule) {
      return avValUtils.isEmpty(value) || validator.validation(value, rule);
    }

  };

  return validator;
});

