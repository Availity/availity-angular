import moment from 'moment';

import ngModule from '../../module';
import Validator from './validator';
import '../constants';
import './utils';

ngModule.factory('avValDate', (AV_VAL, avValUtils) => {

  class DateValidator extends Validator {

    constructor() {
      super('dateFormat');
    }

    validate(context) {

      const {value, constraint, format} = context;

      const _format = constraint && format ? format : AV_VAL.DATE_FORMAT.SIMPLE;
      return avValUtils.isEmpty(value) || moment(value, _format, true).isValid();
    }

  }

  return new DateValidator();

});
