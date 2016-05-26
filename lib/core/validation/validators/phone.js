import angular from 'angular';

import ngModule from '../../module';
import './pattern';

ngModule.factory('avValPhone', avValPattern => {

  const PHONE_PATTERN = /^([0-9][\.\-]?)?[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4}$/;

  const validator = {
    name: 'phone',
    validate(value, rule) {
      return avValPattern.validate(value, angular.extend({}, rule, { value: PHONE_PATTERN }));
    }
  };

  return validator;

});

