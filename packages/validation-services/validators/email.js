import ngModule from '../../module';
import Validator from './validator';
import './pattern';

ngModule.factory('avValEmail', avValPattern => {

  const EMAIL_PATTERN = /[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;

  class EmailValidator extends Validator {

    constructor() {
      super('email');
    }

    validate(context) {

      context.constraint = context.constraint || {};
      context.constraint.value = EMAIL_PATTERN;

      return avValPattern.validate(context);

    }

  }

  return new EmailValidator();

});

