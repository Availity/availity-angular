import angular from 'angular';
import 'angular-animate';
import '@uirouter/angularjs';

export default angular.module('availity.demo', [
  'availity',
  'availity.ui',
  'availity.config',
  'ngAnimate',
  'ui.mask',
  'ngSanitize',
  'ui.router',
  'ngMockE2E'
]);
