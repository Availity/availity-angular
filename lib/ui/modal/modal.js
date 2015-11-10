(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.constant('AV_MODAL', {

    OPTIONS: {
      scope: null,
      templateUrl: null,
      template: null,
      id: null,
      container: null,

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

    BS_EVENTS:  {
      SHOW: 'show.bs.modal',
      SHOWN: 'shown.bs.modal',
      HIDE: 'hide.bs.modal',
      HIDDEN: 'hidden.bs.modal'
    },

    TEMPLATES: {
      MODAL: 'ui/modal/modal-tpl.html'
    }
  });

  availity.ui.factory('avModalManager', function() {

    var AvModalManager = function() {
      this.instances = [];
    };

    var proto = AvModalManager.prototype;

    proto.add = function(id) {
      this.instances.push(id);
    };

    proto.remove = function(id) {
      this.instances = _.without(this.instances, id);
    };

    proto.closeAll = function() {

      _.forEach(this.instances, function(id) {

        var $el = $('#' + id);

        if(!$el) {
          return;
        }

        var bsModal = $el.data('bs.modal');
        if(bsModal) {
          bsModal.removeBackdrop();
          bsModal.$body.removeClass('modal-open');
          bsModal.resetAdjustments();
          bsModal.resetScrollbar();
        }

        var avModal = $el.data('AvModal');
        if(avModal) {
          avModal.destroy();
        }

      });
    };

    return new AvModalManager();

  });

  var ModalFactory = function($rootScope, $timeout, $compile, AV_MODAL, avTemplateCache, $q, avModalManager) {

    var Modal = function(options) {

      var self = this;

      this.templateDefer = $q.defer();
      this.templatePromise = this.templateDefer.promise;

      this.options = angular.extend({}, AV_MODAL.OPTIONS, {scope: $rootScope.$new()}, options);

      avTemplateCache.get(options).then(function(template) {
        self.options.template = template;
        self._build();
      });

    };

    Modal.create = function(options) {
      return new Modal(options);
    };

    var proto = Modal.prototype;

    proto._build = function() {

      var self = this;

      var scope = this.options.scope;
      this.$element = angular.element(this.options.template);

      this._createId();

      this._scope();

      $compile(this.$element)(scope);

      $timeout(function() {
        self._init();
      }, 0, true);

      // Append to container or <body>
      this.options.container ? this.$element.appendTo(this.options.container) : this.$element.appendTo('body');

    };

    proto._init = function() {

      this.$element.data('AvModal', this);

      this.templateDefer.resolve(true);

      // Initialize Bootstrap jQuery plugin
      this.$element.modal({
        'backdrop': this.options.backdrop,
        'keyboard': this.options.keyboard,
        'show': this.options.show,
        'remote': this.options.remote
      });

      this._listeners();
    };

    // Add helpers to scope so clients can call internal methods
    proto._scope = function() {

      var self = this;
      var scope = this.options.scope;

      scope.modalShow = function() {
        self.show();
      };

      scope.modalToggle = function() {
        self.toggle();
      };

      scope.modalHide = function() {
        self.hide();
      };

    };

    proto._listeners = function() {

      var self = this;
      var scope = this.options.scope;
      var $element = this.$element;

      this.animationShowDefer = $q.defer();
      this.animationHideDefer = $q.defer();

      $element.on(AV_MODAL.BS_EVENTS.SHOW, function(event) {
        scope.$emit(AV_MODAL.EVENTS.SHOW, event, self);
      });

      $element.on(AV_MODAL.BS_EVENTS.SHOWN, function(event) {

        if(angular.isFunction(self.options.onShown)) {
          self.options.onShown();
        }

        self.animationShowDefer.resolve(true);

        scope.$emit(AV_MODAL.EVENTS.SHOWN, event, self);
      });

      $element.on(AV_MODAL.BS_EVENTS.HIDE, function(event) {
        scope.$emit(AV_MODAL.EVENTS.HIDE, event, self);
      });

      $element.on(AV_MODAL.BS_EVENTS.HIDDEN, function(event) {

        if(angular.isFunction(self.options.onHidden)) {
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
        avModalManager.remove(self._id);
        self.destroy();
      });

    };

    proto.show = function() {

      var self = this;
      this.animationShowDefer = $q.defer();

      this.templatePromise.then(function() {
        self.isShown() ? self.animationShowDefer.resolve(true) : self.$element.modal('show');
      });

      return this.animationShowDefer.promise;

    };

    proto.hide = function() {

      var self = this;
      this.animationHideDefer = $q.defer();

      this.templatePromise.then(function() {
        !self.isShown() ? self.animationHideDefer.resolve(true) : self.$element.modal('hide');
      });

      return this.animationHideDefer.promise;
    };

    proto.isShown = function() {
      return this.$element.data(AV_MODAL.NAMESPACE.MODAL).isShown;
    },

    proto.toggle = function() {

      var self = this;

      return this.templatePromise.then(function() {
        return self.isShown() ? self.hide() : self.show();
      });

    };

    proto.destroy = function() {

      var self = this;

      return this.templatePromise.then(function() {
        self.$element.data('AvModal', null);
        self.$element.remove();
      });

    };

    proto._createId = function() {
      // Create a unique id for the modal if not present or passed in via options
      var id = this.$element.attr('id');
      if(!id) {
        // Get id from options or create a unique id
        id = this.options.id ? this.options.id : availity.uuid('av-modal-id');
        this.$element.attr('id', id);
      }

      this._id = id;

      avModalManager.add(id);
    };

    return Modal;
  };

  availity.ui.factory('AvModal', ModalFactory);

  availity.ui.directive('avModal', function(AV_MODAL) {
    return {
      restrict: 'A',
      replace: true,
      transclude: true,
      scope: {
        size: '@'
      },
      templateUrl: AV_MODAL.TEMPLATES.MODAL
    };
  });

})(window);
