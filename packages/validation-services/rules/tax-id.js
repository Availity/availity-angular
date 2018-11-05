export default {
  taxID: {
    pattern: {
      // ssn
      // etin
      // itin
      // ptin
      value: [
        /\d{3}-?\d{2}-?\d{4}/,
        /[0-9]{2}-[0-9]{7}/,
        /9\d{2}-[7,8]\d-\d{4}/,
        /p?-?\d{8}/
      ],
      message: 'Enter a valid SSN, EIN, ITIN, or PTIN'
    }
  }
};
