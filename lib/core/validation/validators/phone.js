import ngModule from '../../module';
import Validator from './validator';
import './pattern';

ngModule.factory('avValPhone', avValPattern => {

  const PHONE_PATTERN = /^([0-9][\.\-]?)?[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4}$/;

  class PhoneValidator extends Validator {

    constructor(){
      super('phone');
    }

    validate(context) {
      context.constraint = context.contraint || {};
      context.constraint.value = PHONE_PATTERN;
      return avValPattern.validate(context);
    }
  }

  return new PhoneValidator();

});

