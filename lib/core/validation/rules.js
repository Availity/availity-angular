(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.factory('avConstraints', function() {

    return {

      'ssn': {
        'pattern': {
          'value': /\d{3}-?\d{2}-?\d{4}/,
          'message': 'SSN must be between in a format like ***-**-****.'
        },
        'required': {
          'message': 'SSN is required.'
        }
      },

      'taxID': {
        'ssnPattern': {
          'value': /\d{3}-?\d{2}-?\d{4}/,
          'message': 'You need a valid SSN, EIN, ITIN, or PTIN'
        },
        'einPattern': {
          'value': /[0-9]{2}-[0-9]{7}/,
          'message': 'You need a valid SSN, EIN, ITIN, or PTIN'
        },
        'itinPattern': {
          'value': /9\d{2}-[7,8]\d-\d{4}/,
          'message': 'You need a valid SSN, EIN, ITIN, or PTIN'
        },
        'ptinPattern': {
          'value': /p?-?\d{8}/,
          'message': 'You need a valid SSN, EIN, ITIN, or PTIN'
        }
      },

      'icd9': {
        'pattern': {
          'value': /(V\d{2}(\.\d{1,2})?|\d{3}(\.\d{1,2})?|E\d{3}(\.\d)?)/,
          'message': 'Must be a valid ICD-9 code.'
        }
      }
    };

  });
})(window);
