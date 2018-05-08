import angular from 'angular';
import findIndex from 'lodash.findindex';
import matches from 'lodash.matches';
import isEmpty from 'lodash.isempty';

import ngModule from '../module';
import {uuid} from '../../core/utils';
import './provider';

class AvDropdownController {

  constructor($element, $attrs, avDropdownConfig, $scope, $timeout, $parse) {

    this.av = {$element, $attrs, avDropdownConfig, $scope, $timeout, $parse};

    this.options = {};
    this.match = null;
    this.ngModel = null;
    this.locals = {};

  }

  init(context) {
    this.ngModel = context.ngModel;

    this.multiple = angular.isDefined(this.av.$attrs.multiple);

    this.options = angular.extend({}, this.av.avDropdownConfig.DEFAULTS, this.av.$scope.$eval(this.av.$attrs.options));

    if (this.isRemoteMultiple()) {
      this.options.multiple = angular.isDefined(this.av.$attrs.multiple);
    }


    if (this.options.query) {

      // Map AvSelectResource into Select2 options
      this.resource = this.options.query;

      // Function used to query results for the search term.
      this.options.query = options => {
        options.params = this.options.params;
        this.query(options);
      };
      // Function used to get the id from the choice object or a string representing the key under which the id is stored.
      this.options.id = this.resource.getId;
      this.options.initSelection = this.resource.initSelection;

    }

    // if element is type input, initSelection is required to use val
    if (!this.av.$element.is('select') && !this.options.initSelection) {
      this.options.initSelection = this.initSelection;
    }

  }

  isRemoteMultiple() {
    return angular.isDefined(this.av.$attrs.multiple) && this.av.$element.get(0).tagName.toLowerCase() === 'input';
  }

  initSelection(element, callback) {
    callback();
  }

  setRemoteViewValue(e) {

    let values = this.ngModel.$viewValue;

    if (!angular.isArray(values) || !angular.isObject(values)) {
      values = [];
    }

    if (e.added) {
      // Adding to collection
      values.push(e.added);
    } else {
      // Removing from collection
      const index = findIndex(values, value => matches(e.removed)(value));
      values.splice(index, 1);
    }

    this.ngModel.$setViewValue(values);

  }

  setViewValue(e) {
    this.ngModel.$setViewValue(e.added);
  }

  hashKey(obj, nextUidFn) {
    let key = obj && obj.$$hashKey;

    if (key) {
      if (typeof key === 'function') {
        key = obj.$$hashKey();
      }
      return key;
    }

    const objType = typeof obj;
    if (objType === 'function' || (objType === 'object' && obj !== null)) {
      key = obj.$$hashKey = objType + ':' + (nextUidFn || uuid)();
    } else {
      key = objType + ':' + obj;
    }

    return key;
  }

  getTrackByValueFn(value, locals) {

    if (this.trackBy) {
      return this.trackByFn(this.av.$scope, locals);
    }

    return this.hashKey(value);

  }

  getSelected(model) {

    const self = this;

    if (this.options.query) {
      return 0;
    }

    if (!this.collection) {
      // If we're not using ng-options, the model value is just the raw value of the option,
      // rather than an index, so return it as is.
      return model;
    }

    const optionValues = this.valuesFn(self.av.$scope) || [];
    const optionValuesKeys = this.getOptionValuesKeys(optionValues);

    const index = findIndex(this.collection, item => {
      return angular.equals(model, item) || angular.isObject(item) && this.valueName && angular.equals(model, item[this.valueName]);
    });

    const key = (optionValues === optionValuesKeys) ? index : optionValuesKeys[index];
    const value = optionValues[key];
    const locals = self.getLocals(value, key);
    const viewValue = self.viewValueFn(self.av.$scope, locals);
    const selectValue = self.getTrackByValueFn(viewValue, locals);

    return selectValue;

  }

  getMultiSelected(viewValues) {

    const self = this;

    const values = [];


    if (!viewValues) {
      return values;
    }

    if (this.av.$element.get(0).tagName.toLowerCase() !== 'input') {

      viewValues.forEach(viewValue => {

        const selected = self.getSelected(viewValue);

        values.push(selected);

      });

    }

    return values;

  }

  // Wrapper around the query function for Select2.  When the promise resolves
  // the callback
  query(options) {


    this.resource.onQuery(options).then(response => {

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
      options.callback({more: response.more, results: response.results});
    });
  }

  setValue() {
    const self = this;
    if (this.options.query) {
      const modelValue = this.ngModel.$modelValue;
      this.av.$timeout(() => self.av.$element.select2('data', modelValue));
    } else {
      const viewValue = this.ngModel.$viewValue;

      let selected = null;
      if (this.multiple) {
        selected = this.getMultiSelected(viewValue);
      } else {
        selected = this.getSelected(viewValue);
      }

      // null === '' for Select2
      selected = (selected === null || selected === 'undefined') ? '' : selected;

      this.av.$timeout(() => self.av.$element.select2('val', selected));
    }
  }

  setValues() {
    if (this.options.query) {
      const modelValue = this.ngModel.$modelValue;
      this.av.$timeout(() => self.av.$element.select2('data', modelValue));
    } else {
      let viewValue = this.ngModel.$viewValue;

      if (!angular.isArray(viewValue)) {
        viewValue = [];
      }

      if (!isEmpty(viewValue) && angular.isObject(viewValue[0])) {
        viewValue = this.getMultiSelected(viewValue);
      }

      this.av.$timeout(() => this.av.$element.select2('val', viewValue));
    }
  }

  ngOptions() {

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

    this.av.$scope.$watchCollection(this.collection, (newVal, oldVal) => {

      if (angular.equals(newVal, oldVal)) {
        return;
      }

      self.setValue();

    }, true);

  }

  getLocals(value, key) {

    const locals = {};

    if (this.keyName) {
      locals[this.keyName] = key;
      locals[this.valueName] = value;
    } else {
      locals[this.valueName] = value;
    }

    return locals;

  }

  getOptionValuesKeys(optionValues) {

    let optionValuesKeys;

    if (!this.keyName && Array.isArray(optionValues)) {
      optionValuesKeys = optionValues;
    } else {
      // if object, extract keys, in enumeration order, unsorted
      optionValuesKeys = [];
      for (const itemKey in optionValues) {
        if (optionValues.hasOwnProperty(itemKey) && itemKey.charAt(0) !== '$') {
          optionValuesKeys.push(itemKey);
        }
      }
    }
    return optionValuesKeys;
  }

}

ngModule.controller('AvDropdownController', AvDropdownController);

export default AvDropdownController;
