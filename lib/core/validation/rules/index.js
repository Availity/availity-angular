'use strict';

exports.__esModule = true;

var _icd = require('./icd-9');

var _icd2 = _interopRequireDefault(_icd);

var _ssn = require('./ssn');

var _ssn2 = _interopRequireDefault(_ssn);

var _taxId = require('./tax-id');

var _taxId2 = _interopRequireDefault(_taxId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  icd9: _icd2.default,
  ssn: _ssn2.default,
  taxId: _taxId2.default
};