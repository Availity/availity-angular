(function(root) {

  'use strict';

  var availity = root.availity;

  // Helper directive that hooks into block-ui's start-up lifecycle and starts the loader
  availity.ui.directive('avBlockUi', function(blockUI) {

    return {
      restrict: 'A',
      link: function($scope, $element, $attrs) {

        var blockId = $attrs.avBlockUi;
        var blockCount = $attrs.blockCount;
        var instance = blockUI.instances.get(blockId);
        if(blockCount > 0) {
          instance.startLoader();
        }
      }
    };

  });

})(window);
