'use strict';

(function(root) {

  var _ = require('lodash');
  var availity = root.availity;

  availity.core.factory('avValEnumeration', function() {

    var validator =  {
      name: 'enumeration',
      validate: function(value, rule) {
        return _.contains(rule.enumerations, value);
      }
    };

    return validator;

  });
})(window);
