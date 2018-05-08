import angular from 'angular';
import ngModule from '../module';
import templateUrl from './organizations-select.html';
import './organizations-select-resource';

ngModule.directive('avSelectOrganizations', () => {
  return {
    restrict: 'AE',
    replace: true,
    require: ['ngModel'],
    templateUrl,
    controller($scope, $parse, $attrs, avSelectOrganizationsResource) {
      const optionsFn = $parse($attrs.selectOptions);
      let options = optionsFn($scope);

      options = options || {};

      if (!options.params && !options.params.permissionIds && !options.dangerouslyIgnorePermissions) {
        throw new Error('Permissions IDs are required for av-select-organizations directive. To bypass the permissions constraint, set options.dangerouslyIgnorePermissions to true');
      }

      function defaults() {
        const defaultOptions = {

          allowClear: true,
          placeholder: 'Select an Organization',
          minimumInputLength: 0
        };
        return defaultOptions;
      }

      $scope.dropdownOptions = angular.merge(defaults(), options);
      $scope.dropdownOptions.query = avSelectOrganizationsResource;
    }
  };
});

export default ngModule;
