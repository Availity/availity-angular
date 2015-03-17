(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.controller('ValidationController', function($scope) {

    $scope.demo = {
      firstName: "robert",
      lastName: null,
      ssn: null,
      date: null,
      rule: 'defaultRules',
      states: [
        { id: 'AL', name: 'Alabama' },
        { id: 'CA', name: 'California' },
        { id: 'NM', name: 'New Mexico' },
        { id: 'TX', name: 'Texas' },
        { id: 'WY', name: 'Wyoming' }
      ],
      selectedSate: null,
      onChangeRules: function() {
        $scope.demo.rule = $scope.demo.rule === 'stateRules' ? 'defaultRules' : 'stateRules';
      }
    };


  });

  availity.demo.config(function(avValProvider) {

    var defaultRules = {
      'ssn': {
        'required': {
          'message': 'SSN is required.'
        },
        'pattern': {
          'value': /\d{3}-?\d{2}-?\d{4}/,
          'message': 'SSN must be between in a format like ***-**-****.'
        }
      },
      'lastName': {
         'required': {
          'message': 'Last name is required.'
        },
        'size': {
          'min': 2,
          'max': 10,
          'message': 'Last name must be between 2 and 10 characters.'
        }
      },
      'firstName': {
        'required': {
          'message': 'First name is required.'
        },
        'size': {
          'min': 2,
          'max': 20,
          'message': 'First name must be between 2 and 20 characters.'
        }
      },
      'date': {
        'required': {
          'message': 'Date is required.'
        },
        'dateFormat': {
          'format': 'MM/DD/YYYY',
          'message': 'Format needs to be MM/DD/YYYY'
        }
      },
      'icd9': {
        'pattern': {
          'value': /(V\d{2}(\.\d{1,2})?|\d{3}(\.\d{1,2})?|E\d{3}(\.\d)?)/,
          'message': 'ICD-9 code is invalid'
        }
      },
      'taxId': {
        'pattern': {
          'value': /^\d{3}-?\d{2}-?\d{4}|[0-9]{2}-[0-9]{7}|9\d{2}-[7,8]\d-\d{4}|p?-?\d{8}$/,
          'message': 'Tax ID needs to be a valid SSN, EIN, ITIN, ATIN, PTIN'
        }
      }
    };

    var stateRules = _.extend({}, defaultRules, {
      'lastName': null,
      'firstName': {
        'required': null,
        'size': {
          'min': 2,
          'max': 20,
          'message': 'First name must be between 2 and 20 characters.'
        }
      },
      'states': {
        'required': {
          'message': 'State selection is required.'
        }
      }
    });

    avValProvider.addRules({
      'defaultRules': defaultRules,
      'stateRules': stateRules
    });

  });

})(window);
