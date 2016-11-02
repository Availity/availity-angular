'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function hasDateInput() {
  var i = document.createElement('input');
  i.setAttribute('type', 'date');
  return i.type !== 'text';
}

var hasDateInputSupport = hasDateInput();

// Inspiration https://github.com/mgcrea/angular-strap/blob/v0.7.8/src/directives/datepicker.js

var AvDatepickerController = function (_Base) {
  _inherits(AvDatepickerController, _Base);

  function AvDatepickerController() {
    _classCallCheck(this, AvDatepickerController);

    for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var _this = _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));

    _this.hasDateInputSupport = hasDateInputSupport;
    return _this;
  }

  AvDatepickerController.prototype.setValue = function setValue() {

    var viewValue = this.ngModel.$viewValue;
    var plugin = this.plugin();

    if (!viewValue || !plugin) {
      return;
    }

    plugin.setDate(viewValue);
  };

  AvDatepickerController.prototype.setNgModel = function setNgModel(ngModel) {
    this.ngModel = ngModel;
  };

  AvDatepickerController.prototype.findModel = function findModel() {

    var ngModel = null;

    var $input = this.av.$element.find('input:first').andSelf();
    if ($input.length) {
      ngModel = $input.data(this.av.AV_DATEPICKER.CONTROLLER);
      this.setNgModel(ngModel);
    }

    return ngModel;
  };

  AvDatepickerController.prototype.modelToView = function modelToView(modelValue) {
    return (0, _moment2.default)(modelValue).format(this.options.format);
  };

  AvDatepickerController.prototype.viewToModel = function viewToModel(viewValue) {

    var plugin = this.plugin();

    if (!plugin || !viewValue || viewValue === '') {
      return null;
    }

    var parsed = (0, _moment2.default)(viewValue, this.options.format, true);

    // options.format must be supported by moment.js.  Moment parses format and then
    // we convert to bootstrap datepicker UTC format
    if (parsed.isValid()) {
      return plugin._utc_to_local(parsed.utc().toDate());
    }
  };

  AvDatepickerController.prototype.init = function init() {
    var _this2 = this;

    this.options = _angular2.default.copy(this.av.avDatepickerConfig);

    Object.keys(this.av.$attrs).forEach(function (key) {
      var value = _this2.av.$attrs[key];
      var _key = key.replace('data-', '');
      if (_this2.av.AV_DATEPICKER.OPTIONS.includes(_key)) {
        _this2.options[_key] = _this2.av.$scope.$eval(value);
      }
    });
  };

  AvDatepickerController.prototype.plugin = function plugin() {
    return this.av.$element.data('datepicker');
  };

  AvDatepickerController.prototype.destroy = function destroy() {
    var plugin = this.plugin();
    if (plugin) {
      plugin.remove();
      this.av.$element.data('datepicker', null);
    }
  };

  AvDatepickerController.prototype.hide = function hide() {
    var plugin = this.plugin();
    if (plugin) {
      plugin.hide();
    }
  };

  return AvDatepickerController;
}(_base2.default);

AvDatepickerController.$inject = ['$element', '$attrs', 'AV_DATEPICKER', '$scope', 'avDatepickerConfig'];


_module2.default.controller('AvDatepickerController', AvDatepickerController);