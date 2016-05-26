import angular from 'angular';

import ngModule from '../../module';
import './pattern';

ngModule.factory('avValEmail', avValPattern => {

  const EMAIL_PATTERN = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const validator = {
    name: 'email',
    validate(value, rule) {
      return avValPattern.validate(value, angular.extend({}, rule, { value: EMAIL_PATTERN }));
    }
  };

  return validator;

});

