// Issue: https://github.com/angular/angular.js/issues/11165
// Polyfill: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
//
// This polyfill is needed because Angular calls toISOString()
// when an request parameter is of type Date.  If this polyfill isn't present
// the ajax call fails.
//
(function() {

  'use strict';

  var pad = function(number) {
    if(number < 10) {
      return '0' + number;
    }
    return number;
  };

  if(!Date.prototype.toISOString) {

    Date.prototype.toISOString = function() {

      return this.getUTCFullYear() +
        '-' + pad(this.getUTCMonth() + 1) +
        '-' + pad(this.getUTCDate()) +
        'T' + pad(this.getUTCHours()) +
        ':' + pad(this.getUTCMinutes()) +
        ':' + pad(this.getUTCSeconds()) +
        '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
        'Z';
    };
  }

})(window);
