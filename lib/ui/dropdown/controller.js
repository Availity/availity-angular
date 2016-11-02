'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

var _utils = require('../../core/utils');

require('./provider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvDropdownController = function (_Base) {
  _inherits(AvDropdownController, _Base);

  function AvDropdownController() {
    _classCallCheck(this, AvDropdownController);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));

    _this.options = {};
    _this.match = null;
    _this.ngModel = null;
    _this.locals = {};

    return _this;
  }

  AvDropdownController.prototype.init = function init(context) {
    var _this2 = this;

    this.ngModel = context.ngModel;

    this.multiple = _angular2.default.isDefined(this.av.$attrs.multiple);

    this.options = _angular2.default.extend({}, this.av.avDropdownConfig.DEFAULTS, this.av.$scope.$eval(this.av.$attrs.options));

    if (this.isRemoteMultiple()) {
      this.options.multiple = _angular2.default.isDefined(this.av.$attrs.multiple);
    }

    if (this.options.query) {

      // Map AvSelectResource into Select2 options
      this.resource = this.options.query;

      // Function used to query results for the search term.
      this.options.query = function (options) {
        _this2.query(options);
      };
      // Function used to get the id from the choice object or a string representing the key under which the id is stored.
      this.options.id = this.resource.getId;
      this.options.initSelection = this.resource.initSelection;
    }
  };

  AvDropdownController.prototype.isRemoteMultiple = function isRemoteMultiple() {
    return _angular2.default.isDefined(this.av.$attrs.multiple) && this.av.$element.get(0).tagName.toLowerCase() === 'input';
  };

  AvDropdownController.prototype.initSelection = function initSelection() {};

  AvDropdownController.prototype.setRemoteViewValue = function setRemoteViewValue(e) {

    var values = this.ngModel.$viewValue;

    if (!_angular2.default.isArray(values) || !_angular2.default.isObject(values)) {
      values = [];
    }

    if (e.added) {
      // Adding to collection
      values.push(e.added);
    } else {
      // Removing from collection
      var index = values.findIndex(function (value) {
        return _.matches(e.removed)(value);
      });
      values.splice(index, 1);
    }

    this.ngModel.$setViewValue(values);
  };

  AvDropdownController.prototype.setViewValue = function setViewValue(e) {
    this.ngModel.$setViewValue(e.added);
  };

  AvDropdownController.prototype.hashKey = function hashKey(obj, nextUidFn) {
    var key = obj && obj.$$hashKey;

    if (key) {
      if (typeof key === 'function') {
        key = obj.$$hashKey();
      }
      return key;
    }

    var objType = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    if (objType === 'function' || objType === 'object' && obj !== null) {
      key = obj.$$hashKey = objType + ':' + (nextUidFn || (0, _utils.uuid)())();
    } else {
      key = objType + ':' + obj;
    }

    return key;
  };

  AvDropdownController.prototype.getTrackByValueFn = function getTrackByValueFn(value, locals) {

    if (this.trackBy) {
      return this.trackByFn(this.av.$scope, locals);
    }

    return this.hashKey(value);
  };

  AvDropdownController.prototype.getSelected = function getSelected(model) {

    var self = this;

    if (this.options.query) {
      return 0;
    }

    if (!this.collection) {
      // If we're not using ng-options, the model value is just the raw value of the option,
      // rather than an index, so return it as is.
      return model;
    }

    var optionValues = this.valuesFn(self.av.$scope) || [];
    var optionValuesKeys = this.getOptionValuesKeys(optionValues);

    var index = this.collection.findIndex(function (item) {
      return _angular2.default.equals(model, item);
    });

    var key = optionValues === optionValuesKeys ? index : optionValuesKeys[index];
    var value = optionValues[key];
    var locals = self.getLocals(value, key);
    var viewValue = self.viewValueFn(self.av.$scope, locals);
    var selectValue = self.getTrackByValueFn(viewValue, locals);

    return selectValue;
  };

  AvDropdownController.prototype.getMultiSelected = function getMultiSelected(viewValues) {

    var self = this;

    var values = [];

    if (!viewValues) {
      return values;
    }

    if (this.av.$element.get(0).tagName.toLowerCase() !== 'input') {

      viewValues.forEach(function (viewValue) {

        var selected = self.getSelected(viewValue);

        values.push(selected);
      });
    }

    return values;
  };

  // Wrapper around the query function for Select2.  When the promise resolves
  // the callback


  AvDropdownController.prototype.query = function query(options) {

    this.resource.onQuery(options).then(function (response) {

      // Callback function that should be called with the result object. The result object:
      //
      // result.results (object) - Array of result objects. The default renderers
      //    expect objects with id and text keys. The id property is required,
      //    even if custom renderers are used. The object may also contain a children
      //    key if hierarchical data is displayed. The object may also contain a disabled
      //    boolean property indicating whether this result can be selected.
      //
      // result.more (boolean) - true if more results are available for the current
      //    search term.
      //
      // results.context (object) - A user-defined object that should be made available
      //    as the context parameter to the query function on subsequent queries to load
      //    more result pages for the same search term. See the description of
      //    options.context parameter.
      options.callback({ more: response.more, results: response.results });
    });
  };

  AvDropdownController.prototype.setValue = function setValue() {

    var self = this;

    var viewValue = this.ngModel.$viewValue;

    var selected = null;
    if (this.multiple) {
      selected = this.getMultiSelected(viewValue);
    } else {
      selected = this.getSelected(viewValue);
    }

    // null === '' for Select2
    selected = selected === null || selected === 'undefined' ? '' : selected;

    this.av.$timeout(function () {
      self.av.$element.select2('val', selected);
    });
  };

  AvDropdownController.prototype.setValues = function setValues() {
    var _this3 = this;

    var viewValue = this.ngModel.$viewValue;

    if (!_angular2.default.isArray(viewValue)) {
      viewValue = [];
    }

    if (!_.isEmpty(viewValue) && _angular2.default.isObject(viewValue[0])) {
      viewValue = this.getMultiSelected(viewValue);
    }

    this.av.$timeout(function () {
      return _this3.av.$element.select2('val', viewValue);
    });
  };

  AvDropdownController.prototype.ngOptions = function ngOptions() {

    this.match = this.av.$attrs.ngOptions.match(this.av.avDropdownConfig.NG_OPTIONS_REGEXP);
    if (!this.match) {
      throw new Error('Invalid ngOptions for avDropdown.  @See https://docs.angularjs.org/api/ng/directive/ngOptions');
    }

    // NG_OPTIONS_REGEXP regex will parse into arrays like below:

    // 1: value expression (valueFn)
    // 2: label expression (displayFn)
    // 3: group by expression (groupByFn)
    // 4: disable when expression (disableWhenFn)
    // 5: array item variable name
    // 6: object item key variable name
    // 7: object item value variable name
    // 8: collection expression
    // 9: track by expression

    // The variable name for the value of the item in the collection
    this.valueName = this.match[5] || this.match[7];

    // An expression that generates the viewValue for an option if there is no label expression
    this.valueFn = this.av.$parse(this.match[2] ? this.match[1] : this.valueName);

    // The variable name for the key of the item in the collection
    this.keyName = this.match[6];

    // An expression that generates the viewValue for an option if there is a label expression
    this.selectAs = / as /.test(this.match[0]) && this.match[1];

    // An expression that generates the viewValue for an option if there is a label expression
    // An expression that is used to track the id of each object in the options collection
    this.trackBy = this.match[9];
    this.selectAsFn = this.selectAs && this.av.$parse(this.selectAs);
    this.viewValueFn = this.selectAsFn || this.valueFn;
    this.trackByFn = this.trackBy && this.av.$parse(this.trackBy);

    this.displayFn = this.av.$parse(this.match[2] || this.match[1]);
    this.groupByFn = this.av.$parse(this.match[3] || '');
    this.disableWhenFn = this.av.$parse(this.match[4] || '');
    this.valuesFn = this.av.$parse(this.match[8]);
    this.collection = this.valuesFn(this.av.$scope);

    this.av.$scope.$watchCollection(this.collection, function (newVal, oldVal) {

      if (_angular2.default.equals(newVal, oldVal)) {
        return;
      }

      self.setValue();
    }, true);
  };

  AvDropdownController.prototype.getLocals = function getLocals(value, key) {

    var locals = {};

    if (this.keyName) {
      locals[this.keyName] = key;
      locals[this.valueName] = value;
    } else {
      locals[this.valueName] = value;
    }

    return locals;
  };

  AvDropdownController.prototype.getOptionValuesKeys = function getOptionValuesKeys(optionValues) {

    var optionValuesKeys = void 0;

    if (!this.keyName && _.isArray(optionValues)) {
      optionValuesKeys = optionValues;
    } else {
      // if object, extract keys, in enumeration order, unsorted
      optionValuesKeys = [];
      for (var itemKey in optionValues) {
        if (optionValues.hasOwnProperty(itemKey) && itemKey.charAt(0) !== '$') {
          optionValuesKeys.push(itemKey);
        }
      }
    }
    return optionValuesKeys;
  };

  return AvDropdownController;
}(_base2.default);

AvDropdownController.$inject = ['$element', '$attrs', 'avDropdownConfig', '$scope', '$timeout', '$parse'];


_module2.default.controller('AvDropdownController', AvDropdownController);

exports.default = AvDropdownController;