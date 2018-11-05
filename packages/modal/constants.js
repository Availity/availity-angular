import ngModule from '../module';

ngModule.constant('AV_MODAL', {

  OPTIONS: {
    scope: null,
    templateUrl: null,
    template: null,
    id: null,
    container: null,
    controller: null,
    controllerAs: null,
    locals: null,

    // Bootstrap defaults
    keyboard: true,
    backdrop: true,
    show: false,
    remote: false
  },

  EVENTS: {
    SHOW: 'show.av.modal',
    SHOWN: 'shown.av.modal',
    HIDE: 'hide.av.modal',
    HIDDEN: 'hidden.av.modal'
  },

  NAMESPACE: {
    MODAL: 'bs.modal'
  },

  BS_EVENTS: {
    SHOW: 'show.bs.modal',
    SHOWN: 'shown.bs.modal',
    HIDE: 'hide.bs.modal',
    HIDDEN: 'hidden.bs.modal'
  }

});
