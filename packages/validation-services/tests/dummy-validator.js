import angular from 'angular';

angular.module('availity.mock', [])
  .factory('avValEmail', () => ({
      name: 'dummyValidator',
      validate() {
        return true;
      }
    }));

