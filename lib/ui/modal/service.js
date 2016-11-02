'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

require('../templates');

require('./constants');

require('./directive');

require('./manager');

var _utils = require('../../core/utils/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModalFactory = function ModalFactory($rootScope, $timeout, $compile, $controller, $log, AV_MODAL, avTemplateCache, $q, avModalManager) {
  var Modal = function () {
    function Modal(options) {
      _classCallCheck(this, Modal);

      var self = this;

      this.templateDefer = $q.defer();
      this.templatePromise = this.templateDefer.promise;

      this.options = this.buildOptions(options);

      avTemplateCache.get(options).then(function (_template) {
        self.options.template = _template;
        self.build();
      });
    }

    Modal.create = function create(options) {
      return new Modal(options);
    };

    Modal.prototype.buildOptions = function buildOptions(userOptions) {

      var options = _angular2.default.extend({}, AV_MODAL.OPTIONS, userOptions);

      options.scope = options.scope || $rootScope.$new();

      if (options.controller) {

        var locals = _angular2.default.extend({ $scope: options.scope }, options.locals);
        var controller = $controller(options.controller, locals);

        if (options.controllerAs) {
          if (options.scope[options.controllerAs]) {
            $log.warn('Overwriting ' + options.controllerAs + 'on scope with AvModal controllerAs, consider passing in no scope, or specifying a different controllerAs than the existing controller');
          }
          options.scope[options.controllerAs] = controller;
        }
      }
      return options;
    };

    Modal.prototype.build = function build() {
      var _this = this;

      var scope = this.options.scope;
      this.$element = _angular2.default.element(this.options.template);

      this.createId();

      this.scope();

      $compile(this.$element)(scope);

      $timeout(function () {
        _this.init();
      }, 0, true);

      // Append to container or <body>
      this.options.container ? this.$element.appendTo(this.options.container) : this.$element.appendTo('body');
    };

    Modal.prototype.init = function init() {

      this.$element.data('AvModal', this);

      this.templateDefer.resolve(true);

      this.listeners();

      // Initialize Bootstrap jQuery plugin
      this.$element.modal({
        'backdrop': this.options.backdrop,
        'keyboard': this.options.keyboard,
        'show': false,
        'remote': this.options.remote
      });

      if (_lodash2.default.isUndefined(this.options.show) || this.options.show) {
        this.$element.modal('show');
      }
    };

    // Add helpers to scope so clients can call internal methods


    Modal.prototype.scope = function scope() {

      var self = this;
      var scope = this.options.scope;

      scope.modalShow = function () {
        return self.show();
      };

      scope.modalToggle = function () {
        return self.toggle();
      };

      scope.modalHide = function () {
        return self.hide();
      };
    };

    Modal.prototype.listeners = function listeners() {

      var self = this;
      var scope = this.options.scope;
      var $element = this.$element;

      this.animationShowDefer = $q.defer();
      this.animationHideDefer = $q.defer();

      $element.on(AV_MODAL.BS_EVENTS.SHOW, function (event) {
        scope.$emit(AV_MODAL.EVENTS.SHOW, event, self);
      });

      $element.on(AV_MODAL.BS_EVENTS.SHOWN, function (event) {

        if (_angular2.default.isFunction(self.options.onShown)) {
          self.options.onShown();
        }

        self.animationShowDefer.resolve(true);

        scope.$emit(AV_MODAL.EVENTS.SHOWN, event, self);
      });

      $element.on(AV_MODAL.BS_EVENTS.HIDE, function (event) {
        scope.$emit(AV_MODAL.EVENTS.HIDE, event, self);
      });

      $element.on(AV_MODAL.BS_EVENTS.HIDDEN, function (event) {

        if (_angular2.default.isFunction(self.options.onHidden)) {
          self.options.onHidden.call(this);
        }

        self.animationHideDefer.resolve(true);
        scope.$emit(AV_MODAL.EVENTS.HIDDEN, event, self);

        scope.$evalAsync(function () {
          self.destroy();
        });
      });

      // Garbage collection
      scope.$on('$destroy', function () {
        avModalManager.remove(self.id);
        self.destroy();
      });
    };

    Modal.prototype.show = function show() {
      var _this2 = this;

      this.animationShowDefer = $q.defer();

      this.templatePromise.then(function () {
        _this2.isShown() ? _this2.animationShowDefer.resolve(true) : _this2.$element.modal('show');
      });

      return this.animationShowDefer.promise;
    };

    Modal.prototype.hide = function hide() {
      var _this3 = this;

      this.animationHideDefer = $q.defer();

      this.templatePromise.then(function () {
        !_this3.isShown() ? _this3.animationHideDefer.resolve(true) : _this3.$element.modal('hide');
      });

      return this.animationHideDefer.promise;
    };

    Modal.prototype.isShown = function isShown() {
      return this.$element.data(AV_MODAL.NAMESPACE.MODAL).isShown;
    };

    Modal.prototype.toggle = function toggle() {
      var _this4 = this;

      return this.templatePromise.then(function () {
        return _this4.isShown() ? _this4.hide() : _this4.show();
      });
    };

    Modal.prototype.destroy = function destroy() {
      var _this5 = this;

      return this.templatePromise.then(function () {
        _this5.$element.data('AvModal', null);
        _this5.$element.remove();
      });
    };

    Modal.prototype.createId = function createId() {
      // Create a unique id for the modal if not present or passed in via options
      var id = this.$element.attr('id');
      if (!id) {
        // Get id from options or create a unique id
        id = this.options.id ? this.options.id : (0, _utils.uuid)('av-modal-id');
        this.$element.attr('id', id);
      }

      this.id = id;

      avModalManager.add(id);
    };

    return Modal;
  }();

  return Modal;
};

_module2.default.factory('AvModal', ModalFactory);