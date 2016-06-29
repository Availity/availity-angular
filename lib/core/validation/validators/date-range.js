import moment from 'moment';

import ngModule from '../../module';
import Validator from './validator';
import '../constants';
import './utils';

ngModule.factory('avValDateRange', (AV_VAL, avValUtils) => {

  class DateRangeValidator extends Validator {

    constructor() {
      super('dateRange');
    }

    getStartDate(start) {
      return this.setMin(moment().add(start.value, start.units));
    }

    getEndDate(end) {
      return this.setMax(moment().add(end.value, end.units) );
    }

    setMin(value) {

      value.set('hours', 0);
      value.set('minutes', 0);
      value.set('seconds', 0);

      return value;
    }

    setMax(value) {

      value.set('hours', 23);
      value.set('minutes', 59);
      value.set('seconds', 59);

      return value;
    }

    validation(context) {

      const {value, constraint} = context;

      let startDate;
      let endDate;

      const date = moment(value, constraint.format || AV_VAL.DATE_FORMAT.SIMPLE);
      date.set('hours', 0);
      date.set('minutes', 0);
      date.set('seconds', 0);

      if (!avValUtils.isEmpty(constraint.start.units) && !avValUtils.isEmpty(constraint.end.units)) {
        startDate = this.getStartDate(constraint.start);
        endDate = this.getEndDate(constraint.end);
      } else {
        startDate = moment(constraint.start.value, constraint.format);
        endDate = this.setMax(moment(constraint.end.value, constraint.format));
      }
      return date.isValid() && date.isBetween(startDate, endDate, 'day') || date.isSame(startDate, 'day') || date.isSame(endDate, 'day');
    }

    validate(context) {
      return avValUtils.isEmpty(context.value) || this.validation(context);
    }

  }

  return new DateRangeValidator();
});

