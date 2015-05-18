(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.controller('AnimationController', function($scope) {
    var animate = {
      message: "Show",
      visible: false,
      onClick: function() {
        animate.visible = !animate.visible;
        animate.message = animate.visible ? 'Hide' : 'Show';
      }
    };

    $scope.animate = animate;
  });

})(window);
