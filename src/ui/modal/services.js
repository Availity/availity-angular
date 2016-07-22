import angular from 'angular';
import ngModule from '../module';
import '../templates';
import './constants';
import './directive';
import { uuid } from 'core/utils/';

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

const ModalFactory = ($rootScope, $timeout, $compile, $controller, $log, AV_MODAL, avTemplateCache, $q, avModalManager) => {

  class Modal {

    constructor(options) {

      const self = this;

      this.templateDefer = $q.defer();
      this.templatePromise = this.templateDefer.promise;

      this.options = this.buildOptions(options);

      avTemplateCache.get(options).then( _template => {
        self.options.template = _template;
        self.build();
      });

    }

    static create(options) {
      return new Modal(options);
    }

    buildOptions(userOptions) {
      const options = angular.extend({}, AV_MODAL.OPTIONS, userOptions);

      options.scope = options.scope || $rootScope.$new();

      if (options.controller) {
        const locals = angular.extend({ $scope: options.scope }, options.locals);

        const controller = $controller(options.controller, locals);

        if (options.controllerAs) {
          if (options.scope[options.controllerAs]) {
            $log.warn('Overwriting ' + options.controllerAs + 'on scope with AvModal controllerAs, consider passing in no scope, or specifying a different controllerAs than the existing controller');
          }
          options.scope[options.controllerAs] = controller;
        }
      }
      return options;
    }

    build() {

      const scope = this.options.scope;
      this.$element = angular.element(this.options.template);

      this.createId();

      this.scope();

      $compile(this.$element)(scope);

      $timeout( () => {
        this.init();
      }, 0, true);

      // Append to container or <body>
      this.options.container ? this.$element.appendTo(this.options.container) : this.$element.appendTo('body');

    }

    init() {

      this.$element.data('AvModal', this);

      this.templateDefer.resolve(true);

      this.listeners();

      // Initialize Bootstrap jQuery plugin
      this.$element.modal({
        'backdrop': this.options.backdrop,
        'keyboard': this.options.keyboard,
        'show': this.options.show,
        'remote': this.options.remote
      });
    }

      // Add helpers to scope so clients can call internal methods
    scope() {

      const self = this;
      const scope = this.options.scope;

      scope.modalShow = function() {
        return self.show();
      };

      scope.modalToggle = function() {
        return self.toggle();
      };

      scope.modalHide = function() {
        return self.hide();
      };

    }

    listeners() {

      const self = this;
      const scope = this.options.scope;
      const $element = this.$element;

      this.animationShowDefer = $q.defer();
      this.animationHideDefer = $q.defer();

      $element.on(AV_MODAL.BS_EVENTS.SHOW, function(event) {
        scope.$emit(AV_MODAL.EVENTS.SHOW, event, self);
      });

      $element.on(AV_MODAL.BS_EVENTS.SHOWN, function(event) {

        if (angular.isFunction(self.options.onShown)) {
          self.options.onShown();
        }

        self.animationShowDefer.resolve(true);

        scope.$emit(AV_MODAL.EVENTS.SHOWN, event, self);
      });

      $element.on(AV_MODAL.BS_EVENTS.HIDE, function(event) {
        scope.$emit(AV_MODAL.EVENTS.HIDE, event, self);
      });

      $element.on(AV_MODAL.BS_EVENTS.HIDDEN, function(event) {

        if (angular.isFunction(self.options.onHidden)) {
          self.options.onHidden.call(this);
        }

        self.animationHideDefer.resolve(true);
        scope.$emit(AV_MODAL.EVENTS.HIDDEN, event, self);

        scope.$evalAsync(function() {
          self.destroy();
        });

      });

      // Garbage collection
      scope.$on('$destroy', function() {
        avModalManager.remove(self.id);
        self.destroy();
      });

    }

    show() {

      this.animationShowDefer = $q.defer();

      this.templatePromise.then( () => {
        this.isShown() ? this.animationShowDefer.resolve(true) : this.$element.modal('show');
      });

      return this.animationShowDefer.promise;

    }

    hide() {

      this.animationHideDefer = $q.defer();

      this.templatePromise.then( () => {
        !this.isShown() ? this.animationHideDefer.resolve(true) : this.$element.modal('hide');
      });

      return this.animationHideDefer.promise;
    }

    isShown() {
      return this.$element.data(AV_MODAL.NAMESPACE.MODAL).isShown;
    }

    toggle() {
      return this.templatePromise.then( () => {
        return this.isShown() ? this.hide() : this.show();
      });
    }

    destroy() {

      return this.templatePromise.then( () => {
        this.$element.data('AvModal', null);
        this.$element.remove();
      });

    }

    createId() {
      // Create a unique id for the modal if not present or passed in via options
      let id = this.$element.attr('id');
      if (!id) {
        // Get id from options or create a unique id
        id = this.options.id ? this.options.id : uuid('av-modal-id');
        this.$element.attr('id', id);
      }

      this.id = id;

      avModalManager.add(id);
    }

  }

  return Modal;
};

ngModule.factory('AvModal', ModalFactory);
