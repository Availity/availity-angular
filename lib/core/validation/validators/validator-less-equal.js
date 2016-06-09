'use strict';

var moment = require('moment');
(function(root) {

  var availity = root.availity;

  availity.core.factory('avValLessEqual', function() {

    var validator =  {
      name: 'lessEqual',
      dateRegex: /^[0-9]{2,2}\/[0-9]{2,2}\/[0-9]{4,4}$/,
      validate: function(value, rule) {
        if (this.dateRegex.exec(value) !== null) {
          // Match on dates.
          var lessEqual = false;
          lessEqual = moment(value, 'MM/DD/YYYY').isBefore(rule.lessEqualValue);
          if (lessEqual === false) {
            lessEqual = (moment(value, 'MM/DD/YYYY').diff(rule.lessEqualValue) === 0);
          }
          return lessEqual;
        }
        return parseInt(value, 10) <= parseInt(rule.lessEqualValue, 10);
      }
    };

    return validator;

  });
})(window);
