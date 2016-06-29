import _ from 'lodash';

import Validator from './validator';
import ngModule from '../../module';

ngModule.factory('avValSize', avValUtils => {

  class SizeValidator extends Validator {

    constructor() {
      super('size');
    }

    validate(context) {

      const { value, constraint } = context;
      let _value = value;

      const min = constraint.min || 0;
      const max = constraint.max;
      const type = constraint.type ? constraint.type.toLowerCase() : 'text';

      if (_.isNull(_value) || _.isUndefined(_value)) {
        _value = '';
      }

      if (type === 'text') {
        _value = `${_value}`;
        return avValUtils.isEmpty(_value) || _value.length >= min && (max === undefined || _value.length <= max);
      }

      // ... must be a Number
      if (!_.isNumber(_value) && /^\d+$/.test(_value)) {
        _value = parseInt(_value, 10);
      }

      return avValUtils.isEmpty(_value) || _value >= min && (max === undefined || _value <= max);

    }
  }

  return new SizeValidator();

});
