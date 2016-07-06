import angular from 'angular';
import 'angular-animate';
import 'angular-ui-router';

export default angular.module('availity.demo', [
  'availity',
  'availity.ui',
  'availity.config',
  'ngAnimate',
  'ngSanitize',
  'ui.router',
  'ngMockE2E'
]);
