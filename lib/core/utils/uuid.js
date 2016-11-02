'use strict';

exports.__esModule = true;
exports.default = uuid;
var uid = ['0', '0', '0'];

function uuid(prefix) {

  var index = uid.length;
  var digit = void 0;

  while (index) {
    index--;
    digit = uid[index].charCodeAt(0);
    if (digit === 57 /* '9' */) {
        uid[index] = 'A';
        return prefix ? prefix + uid.join('') : uid.join('');
      }
    if (digit === 90 /* 'Z' */) {
        uid[index] = '0';
      } else {
      uid[index] = String.fromCharCode(digit + 1);
      return prefix ? prefix + uid.join('') : uid.join('');
    }
  }
  uid.unshift('0');

  return prefix ? prefix + uid.join('') : uid.join('');
}