(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.factory('avRules', function() {

    return {

      'ssn': {
        'pattern': {
          'value': /\d{3}-?\d{2}-?\d{4}/,
          'message': 'SSN must be between in a valid format ***-**-****.'
        },
        'required': {
          'message': 'SSN is required.'
        }
      },

      'taxID': {
        'pattern': {
          // ssn
          // etin
          // itin
          // ptin
          'value': [
            /\d{3}-?\d{2}-?\d{4}/,
            /[0-9]{2}-[0-9]{7}/,
            /9\d{2}-[7,8]\d-\d{4}/,
            /p?-?\d{8}/
          ],
          'message': 'Enter a valid SSN, EIN, ITIN, or PTIN'
        }
      },

      'icd9': {
        'pattern': {
          'value': /(V\d{2}(\.\d{1,2})?|\d{3}(\.\d{1,2})?|E\d{3}(\.\d)?)/,
          'message': 'Enter a valid ICD-9 code.'
        }
      }
    };

  });
})(window);
