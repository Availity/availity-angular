'use strict';

exports.__esModule = true;
exports.default = {
  icd9: {
    pattern: {
      value: /(V\d{2}(\.\d{1,2})?|\d{3}(\.\d{1,2})?|E\d{3}(\.\d)?)/,
      message: 'Enter a valid ICD-9 code'
    }
  }
};