(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.factory('avValNpi', function() {


    var validator =  {

      name: 'npi',

      INTEGER_REGEX: /^\d*$/,

      validate: function(value) {

        var npi = value || '';

        if (!validator.INTEGER_REGEX.test(npi) || npi.length !== 10) {
          return false;
        }

        var firstDigit = npi.charAt(0);
        if (!(firstDigit === '1' || firstDigit === '2' || firstDigit === '3' || firstDigit === '4')) {
          return false;
        }

        var digit = parseInt(npi.charAt(9), 10);
        npi = npi.substring(0, 9);
        npi = '80840' + npi;

        var alternate = true;
        var total = 0;

        for (var i = npi.length; i > 0; i--) {
          var next = parseInt(npi.charAt(i - 1), 10);
          if (alternate) {
            next = next * 2;
            if (next > 9) {
              next = (next % 10) + 1;
            }
          }
          total += next;
          alternate = !alternate;
        }

        var roundUp = Math.ceil(total / 10) * 10;
        var calculatedCheck = roundUp - total;

        if (calculatedCheck !== digit) {
          return false;
        }

        return true;
      }

    };

    return validator;

  });

})(window);
