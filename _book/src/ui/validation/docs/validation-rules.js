const _ = require('lodash');

const defaultRules = {
  ssn: {
    required: {
      message: 'SSN is required.'
    },
    pattern: {
      value: /\d{3}-?\d{2}-?\d{4}/,
      message: 'SSN must be between in a format like ***-**-****.'
    }
  },
  lastName: {
    required: {
      message: 'Last name is required.'
    },
    size: {
      min: 2,
      max: 10,
      message: 'Last name must be between 2 and 10 characters.'
    }
  },
  firstName: {
    required: {
      message: 'First name is required.'
    },
    size: {
      min: 2,
      max: 20,
      message: 'First name must be between 2 and 20 characters.'
    }
  },
  date: {
    dateFormat: {
      format: 'MM/DD/YYYY',
      message: 'Format needs to be MM/DD/YYYY'
    },
    dateRange: {
      start: {
        value: '-10',
        units: 'days'
      },
      end: {
        value: '10',
        units: 'days'
      },
      format: 'MM/DD/YYYY',
      message: 'Date is not within 10 days from today'
    }
  },
  icd9: {
    pattern: {
      value: /(V\d{2}(\.\d{1,2})?|\d{3}(\.\d{1,2})?|E\d{3}(\.\d)?)/,
      message: 'ICD-9 code is invalid'
    }
  },
  npi: {
    npi: {
      message: 'NPI is invalid.'
    }
  },
  checked: {
    required: {
      message: 'You must agree to terms.'
    }
  },
  taxId: {
    pattern: {
      value: /^\d{3}-?\d{2}-?\d{4}|[0-9]{2}-[0-9]{7}|9\d{2}-[7,8]\d-\d{4}|p?-?\d{8}$/,
      message: 'Tax ID needs to be a valid SSN, EIN, ITIN, ATIN, PTIN'
    }
  },
  phone: {
    required: {
      message: 'Phone number is required'
    },
    phone: {
      message: 'Phone number is invalid'
    }
  },
  email: {
    required: {
      message: 'Email is required'
    },
    email: {
      message: 'Email is invalid'
    }
  },
  someRequiredField: {
    required: {
      message: 'This field is required, and the validation error shows even with a clean model.'
    }
  }
};

const stateRules = _.extend({}, defaultRules, {
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
  },
  'checked': {
    'required': {
      'message': 'You just agree to terms.'
    }
  },
  'date': {
    'required': {
      'message': 'Date is required.'
    },
    'dateFormat': {
      'format': 'MM/DD/YYYY',
      'message': 'Format needs to be MM/DD/YYYY'
    },
    'dateRange': {
      'start': {
        'value': '05022015'
      },
      'end': {
        'value': '05152015'
      },
      'format': 'MMDDYYYY',
      'message': 'Date Range is invalid.'
    }
  }
});

export {
  defaultRules,
  stateRules
};
