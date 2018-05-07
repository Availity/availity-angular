export default {
  ssn: {
    pattern: {
      value: /\d{3}-?\d{2}-?\d{4}/,
      message: 'SSN must be between in a valid format ***-**-****'
    },
    required: {
      message: 'SSN is required.'
    }
  }
};
