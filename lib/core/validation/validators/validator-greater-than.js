'use strict';

var moment = require('moment');
(function(root) {

  var availity = root.availity;

  availity.core.factory('avValGreaterThan', function() {

    var validator =  {
      name: 'greaterThan',
      dateRegex: /^[0-9]{2,2}\/[0-9]{2,2}\/[0-9]{4,4}$/,
      validate: function(value, rule) {
        if (this.dateRegex.exec(value) !== null) {
          // Match on dates.
          return moment(value, 'MM/DD/YYYY').isAfter(rule.greaterThanValue);
        }
        return parseInt(value, 10) > parseInt(rule.greaterThanValue, 10);
      }
    };

    return validator;

  });
})(window);
