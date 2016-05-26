import moment from 'moment';

import ngModule from '../../module';
import '../constants';
import './utils';

ngModule.factory('avValDate', (AV_VAL, avValUtils) => {

  const validator = {
    name: 'dateFormat',
    validate(value, rules) {
      const format = rules && rules.format ? rules.format : AV_VAL.DATE_FORMAT.SIMPLE;
      return avValUtils.isEmpty(value) || moment(value, format, true).isValid();
    }
  };

  return validator;

});

