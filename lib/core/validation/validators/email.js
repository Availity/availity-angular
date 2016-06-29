import ngModule from '../../module';
import Validator from './validator';
import './pattern';

ngModule.factory('avValEmail', avValPattern => {

  const EMAIL_PATTERN = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  class EmailValidator extends Validator {

    constructor() {
      super('email');
    }

    validate(context) {

      context.constraint.value = EMAIL_PATTERN;

      return avValPattern.validate(context);

    }

  }

  return new EmailValidator();

});

