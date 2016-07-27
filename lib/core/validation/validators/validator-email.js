(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.factory('avValEmail', function(avValPattern) {

    var EMAIL_PATTERN = /[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;

    var validator =  {
      name: 'email',
      validate: function(value, rule) {
        return avValPattern.validate(value, angular.extend({}, rule, { value: EMAIL_PATTERN }));
      }
    };

    return validator;

  });
})(window);
