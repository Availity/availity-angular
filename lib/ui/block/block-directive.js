(function(root) {

  'use strict';

  var availity = root.availity;

  // Helper directive that hooks into block-ui's start-up lifecycle and starts the loader
  availity.ui.directive('avBlockUi', function(blockUI, $timeout) {

    return {
      restrict: 'A',
      scope: {
        avBlockUi: '=',
        blockCount: '='
      },
      link: function($scope) {
        $timeout(function() {
          var blockId = $scope.avBlockUi;
          var blockCount = $scope.blockCount;
          var instance = blockUI.instances.get(blockId);
          if(blockCount > 0) {
            instance.startLoader();
          }
        }, false);
      }
    };

  });

})(window);
