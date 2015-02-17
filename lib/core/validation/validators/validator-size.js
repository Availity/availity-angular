(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.factory('avValSize', function() {

    var validator =  {
      name: 'size',
      validate: function(value, rule) {
        var minLength = rule.min || 0;
        var maxLength = rule.max;

        value = value || '';
        return value.length >= minLength && (maxLength === undefined || value.length <= maxLength);
      }
    };

    return validator;

  });
})(window);
