(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.controller('BlockController', function($scope, blockUI) {

    var avBlock = blockUI.instances.get('avBlock');

    $scope.toggleBlock = function() {
      if(avBlock.state().blocking) {
        avBlock.stop();
      }else {
        avBlock.start();
      }
    };
  });

})(window);
