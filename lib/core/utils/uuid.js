(function(root) {

  'use strict';

  var availity = root.availity;

  var uid = ['0', '0', '0'];

  availity.uuid = function(prefix) {
    var index = uid.length;
    var digit;

    while (index) {
      index--;
      digit = uid[index].charCodeAt(0);
      if (digit === 57 /* '9' */) {
        uid[index] = 'A';
        return prefix ? prefix + uid.join('') : uid.join('');
      }
      if (digit === 90  /* 'Z' */) {
        uid[index] = '0';
      } else {
        uid[index] = String.fromCharCode(digit + 1);
        return prefix ? prefix + uid.join('') : uid.join('');
      }
    }
    uid.unshift('0');
    return prefix ? prefix + uid.join('') : uid.join('');
  };

})(window);
