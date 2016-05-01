(function(root) {

  'use strict';

  const availity = root.availity;

  availity.core.factory('avValUtils', function() {

    return {

      isDefined: function(value) {
        return angular.isDefined(value) && value !== '' && value !== null;
      },

      isEmpty: function(value) {
        return !this.isDefined(value) || $.trim(value) === '';
      }
    };

  });
})(window);

