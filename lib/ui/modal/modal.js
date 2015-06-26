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

  var ModalFactory = function($rootScope, $timeout, $compile, AV_MODAL, avTemplateCache, $q) {

    var Modal = function(options) {

      var self = this;

      this.options = angular.extend({}, AV_MODAL.OPTIONS, {scope: $rootScope.$new()}, options);

      avTemplateCache.get(options).then(function(template) {
        self.options.template = template;
        self.create();
      });

    };

    var proto = Modal.prototype;

    proto.create = function() {

      var self = this;

      var scope = this.options.scope;
      this.$element = angular.element(this.options.template);

      this.createId();
      this.scope();

      $compile(this.$element)(scope);
      $timeout(function() {
        self.init();
      }, 0, true);

      // Append to container or <body>
      this.options.container ? this.$element.appendTo(this.options.container) : this.$element.appendTo('body');

    };

    proto.scope = function() {

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

    proto.init = function() {

      // Initialize Bootstrap jQuery plugin
      this.$element.modal({
        'backdrop': this.options.backdrop,
        'keyboard': this.options.keyboard,
        'show': this.options.show,
        'remote': this.options.remote
      });

      this.listeners();
    };

    proto.listeners = function() {

      var self = this;
      var scope = this.options.scope;
      var $element = this.$element;

      $element.on(AV_MODAL.BS_EVENTS.SHOW, function(event) {
        scope.$emit(AV_MODAL.EVENTS.SHOW, event, self);
      });

      $element.on(AV_MODAL.BS_EVENTS.SHOWN, function(event) {

        if(angular.isFunction(self.options.onShown)) {
          self.options.onShown();
        }

        scope.$emit(AV_MODAL.EVENTS.SHOWN, event, self);
      });

      $element.on(AV_MODAL.BS_EVENTS.HIDE, function(event) {
        scope.$emit(AV_MODAL.EVENTS.HIDE, event, self);
      });

      $element.on(AV_MODAL.BS_EVENTS.HIDDEN, function(event) {

        if(angular.isFunction(self.options.onHidden)) {
          self.options.onHidden.call(this);
        }

        scope.$emit(AV_MODAL.EVENTS.HIDDEN, event, self);

        $timeout(function() {
          self.destroy();
        }, 0, true);

      });

      // Garbage collection
      scope.$on('$destroy', function() {
        self.destroy();
      });
    };

    proto.show = function() {
      this.$element.modal('show');
    };

    proto.hide = function() {
      var deferred = $q.defer();

      this.$element.modal('hide');
      this.$element.one('hidden.bs.modal', function() {
        deferred.resolve(true);
      });

      return deferred.promise;
    };

    proto.toggle = function() {
      this.$element.data('modal').toggle();
    };

    proto.destroy =function() {
      this.$element.remove();
    };

    proto.createId = function() {
      // Create a unique id for the modal if not present or passed in via options
      var id = this.$element.attr('id');
      if(!id) {
        // Get id from options or create a unique id
        id = this.options.id ? this.options.id : availity.uuid('av-modal-id');
        this.$element.attr('id', id);
      }
    };

    return Modal;
  };


  availity.ui.factory('AvModal', ModalFactory);

  availity.ui.directive('avModal', function(AV_MODAL) {
    return {
      restrict: 'A',
      replace: true,
      transclude: true,
      scope: {},
      templateUrl: AV_MODAL.TEMPLATES.MODAL
    };
  });

})(window);
