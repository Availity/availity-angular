import angular from 'angular';
import $ from 'jquery';

import ngModule from '../../module';

ngModule.factory('avValUtils', () => {

  return {

    isDefined(value) {
      return angular.isDefined(value) && value !== '' && value !== null;
    },

    isEmpty(value) {
      return !this.isDefined(value) || $.trim(value) === '';
    }
  };

});


