import angular from 'angular';

angular.module('availity.mock', [])
  .factory('avValEmail', () => {
    return {
      name: 'dummyValidator',
      validate() {
        return true;
      }
    };
  });

