import ngModule from '../../module';
import Validator from './validator';

ngModule.factory('avValNpi', avValUtils => {

  class NpiValidator extends Validator {

    constructor() {
      super('npi');
      this.INTEGER_REGEX = /^\d*$/;
    }

    validate(context) {

      const { value } = context;

      let npi = value || '';

      if (avValUtils.isEmpty(npi)) {
        return true;
      }

      if (!this.INTEGER_REGEX.test(npi) || npi.length !== 10) {
        return false;
      }

      const firstDigit = npi.charAt(0);
      if (!['1', '2', '3', '4'].includes(firstDigit)) {
        return false;
      }

      const digit = parseInt(npi.charAt(9), 10);
      npi = npi.substring(0, 9);
      npi = `80840${npi}`;

      let alternate = true;
      let total = 0;

      for (let i = npi.length; i > 0; i--) {
        let next = parseInt(npi.charAt(i - 1), 10);
        if (alternate) {
          next = next * 2;
          if (next > 9) {
            next = (next % 10) + 1;
          }
        }
        total += next;
        alternate = !alternate;
      }

      const roundUp = Math.ceil(total / 10) * 10;
      const calculatedCheck = roundUp - total;

      return calculatedCheck === digit;

    }

  }

  return new NpiValidator();

});
