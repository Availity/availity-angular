(function(root) {
  const availity = root.availity;

  availity.demo.controller('UtilsController', function($scope) {

    $scope.utils = {
      print() {
        availity.print();
      }
    };

  });
})(window);


