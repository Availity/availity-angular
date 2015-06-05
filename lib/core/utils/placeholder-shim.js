(function(root) {

  'use strict';
  var availity = root.availity;

  availity.core.directive('placeholder', function() {
    return {
      link: function(scope, elem) {
        var initPlaceholder = function() {
          $(elem).placeholder();
        };
        scope.$evalAsync(initPlaceholder);
      }
    };
  });

})(window);
