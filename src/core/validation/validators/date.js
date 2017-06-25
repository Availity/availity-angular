import angular from 'angular';
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

    validate({value, constraint}) {

      const _format = constraint && constraint.format ? constraint.format : AV_VAL.DATE_FORMAT.SIMPLE;
      return avValUtils.isEmpty(value) || angular.isDate(value) || moment(value, _format, true).isValid();
    }

  }

  return new DateValidator();

});
