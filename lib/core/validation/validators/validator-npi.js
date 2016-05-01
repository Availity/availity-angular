(function(root) {

  'use strict';

  const availity = root.availity;

  availity.core.factory('avValNpi', function(avValUtils) {


    const validator =  {

      name: 'npi',

      INTEGER_REGEX: /^\d*$/,

      validate(value) {

        let npi = value || '';

        if(avValUtils.isEmpty(npi)) {
          return true;
        }

        if (!validator.INTEGER_REGEX.test(npi) || npi.length !== 10) {
          return false;
        }

        const firstDigit = npi.charAt(0);
        if (!(firstDigit === '1' || firstDigit === '2' || firstDigit === '3' || firstDigit === '4')) {
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

        if (calculatedCheck !== digit) {
          return false;
        }

        return true;
      }

    };

    return validator;

  });

})(window);
