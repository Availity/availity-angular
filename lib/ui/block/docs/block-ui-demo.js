(function(root) {

  'use strict';

  const availity = root.availity;

  availity.demo.controller('BlockController', function($scope, blockUI) {

    const avBlock = blockUI.instances.get('avBlock');

    $scope.toggleBlock = function() {
      if(avBlock.state().blocking) {
        avBlock.stop();
      }else {
        avBlock.start();
      }
    };
  });

})(window);
