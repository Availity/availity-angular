import angular from 'angular';
import ngModule from '../module';

ngModule.factory('avModalManager', () => {

  class AvModalManager {

    constructor() {
      this.instances = [];
    }

    add(id) {
      this.instances.push(id);
    }

    remove(id) {
      this.instances = this.instances.filter(instance => instance !== id);
    }

    closeAll() {

      this.instances.forEach(id => {

        const $el = angular.element( document.getElementById(id));

        if (!$el) {
          return;
        }

        const bsModal = $el.data('bs.modal');
        if (bsModal) {
          bsModal.removeBackdrop();
          bsModal.$body.removeClass('modal-open');
          bsModal.resetAdjustments();
          bsModal.resetScrollbar();
        }

        const avModal = $el.data('AvModal');
        if (avModal) {
          avModal.destroy();
        }

      });

    }

  }

  return new AvModalManager();

});
