(function(root) {
  const availity = root.availity;

  availity.core.factory('avValUtils', function() {

    return {

      isDefined(value) {
        return angular.isDefined(value) && value !== '' && value !== null;
      },

      isEmpty(value) {
        return !this.isDefined(value) || $.trim(value) === '';
      }
    };

  });
})(window);

