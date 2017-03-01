import angular from 'angular';

import ngModule from '../module';
import template from './block.html';

ngModule.constant('avBlockConfig', {
  templateUrl: template,
  delay: 250,
  message: 'Loading ...',
  autoBlock: false,
  resetOnException: true,
  requestFilter: angular.noop,
  autoInjectBodyBlock: false,
  cssClass: 'av-block av-block-anim-fade',
  blockBrowserNavigation: false
});
