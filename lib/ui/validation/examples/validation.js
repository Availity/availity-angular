import demo from 'demo';
import './validation-service';
import {defaultRules, stateRules} from './validation-rules';

demo.controller('ValidationController', ($scope, demoValidationService) => {
  $scope.vm = demoValidationService;
});

demo.config(avValProvider => {

  avValProvider.addRules({
    defaultRules,
    stateRules
  });

});

