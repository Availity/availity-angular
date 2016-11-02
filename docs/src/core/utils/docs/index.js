import demo from 'demo';
import { print } from '../';

demo.controller('DemoUtilsController', $scope => {

  $scope.vm = {
    print() {
      print();
    }
  };

});
