'use strict';

(function(root) {

  var availity = root.availity;

  availity.core.factory('avValEqualTo', function() {

    var validator =  {
      name: 'equalTo',
      validate: function(value, rule) {
        return value.toString() === rule.equalToValue.toString();
      }
    };

    return validator;

  });
})(window);
