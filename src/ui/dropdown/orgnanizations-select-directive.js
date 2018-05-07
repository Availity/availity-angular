import ngModule from '../module';
import templateUrl from './organizations-select.html';
import './organizations-select-resource';

ngModule.directive('avSelectOrganizations', () =>{
  return {
    restrict: 'AE',
    replace: true,
    require: ['ngModel'],
    templateUrl,
    controller($scope, avSelectOrganizationsResource) {
      $scope.avSelectOrganizationsResource = avSelectOrganizationsResource;
    }
  };
});

export default ngModule;
