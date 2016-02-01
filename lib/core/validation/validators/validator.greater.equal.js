'use strict';

var moment = require('moment');

(function(root) {

  var availity = root.availity;

  availity.core.factory('avValGreaterEqual', function() {

    var validator =  {
      name: 'greaterEqual',
      dateRegex: /^[0-9]{2,2}\/[0-9]{2,2}\/[0-9]{4,4}$/,
      validate: function(value, rule) {
        if (this.dateRegex.exec(value) !== null) {
          // Match on dates.
          var greaterEqual = false;
          greaterEqual = moment(value, 'MM/DD/YYYY').isAfter(rule.greaterEqualValue);
          if (greaterEqual === false) {
            greaterEqual = (moment(value, 'MM/DD/YYYY').diff(rule.greaterEqualValue) === 0);
          }
          return greaterEqual;
        }
        return parseInt(value, 10) >= parseInt(rule.greaterEqualValue, 10);
      }
    };

    return validator;

  });
})(window);
