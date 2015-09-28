(function(root) {

  'use strict';

  var availity = root.availity;

  availity.core.factory('avValRequired', function(avValUtils) {

    var validator =  {
      name: 'required',
      validate: function(value, rule, element) {

        // Using ngModelController.$isEmpty for required checks.  A form component being empty is dependent on the
        // type of field:
        //
        //    - radio
        //    - checkbox
        //    - text
        //    - lists
        //
        // You can override $isEmpty for input directives whose concept of being empty is different to the
        // default. Radio and checkboxes directive do this because in its case a value of `false`
        // implies empty.
        //
        var ctrl = element && element.data('$ngModelController');
        if(ctrl) {
          return !ctrl.$isEmpty(value);
        }

        return !avValUtils.isEmpty(value);

      }
    };

    return validator;

  });
})(window);
