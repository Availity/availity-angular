import demo from 'demo';

import tpl from './templates/modal-template.html';
import largeTpl from './templates/modal-lg-template.html';
import smallTpl from './templates/modal-sm-template.html';
import routeTpl from './templates/modal-route-template.html';

demo.factory('demoModalService', (AvModal, $log, $state, avModalManager, $rootScope) => {

  class AvDemoService {

    constructor() {
      this.listeners();
    }

    init($scope) {
      this.$scope = $scope;
    }

    listeners() {

      $rootScope.$on('$stateChangeSuccess', (event, toState) => {

        debugger;

        if (toState.name === 'three') {
          avModalManager.closeAll();
        }

      });

    }

    navigate(){

      let state = 'two';
      if ($state.includes('two')) {
        state = 'three';
      }

      $state.go(state);

    }

    modalOpen() {

      AvModal.create({
        show: true,
        scope: this.$scope,
        template: tpl
      });

    }

    modalOpenLarge() {

      AvModal.create({
        show: true,
        scope: this.$scope,
        template: largeTpl
      });

    }

    modalOpenSmall(){

      const modalSmall = new AvModal({
        scope: this.$scope,
        template: smallTpl
      });

      modalSmall.show().then(() => {
        $log.info('modal shown');
      });

    }

    routeChange(){

      AvModal.create({
        show: true,
        scope: this.$scope,
        template: routeTpl
      });

    }
  }

  return new AvDemoService();

});
