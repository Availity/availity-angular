import demo from 'demo';

demo.controller('DemoBlockController', ($scope, avBlockManager) => {

  const blockDemo = avBlockManager.get('blockDemo');

  $scope.vm = {
    toggleBlock() {
      if (blockDemo.state().blocking) {
        blockDemo.stop();
      } else {
        blockDemo.start();
      }
    }
  };

});

