import _ from 'lodash';
import angular from 'angular';

import Base from '../base';
import ngModule from '../module';

class AvDropdownController extends Base {

  static $inject = ['$element', '$attrs', 'AV_UI', 'avDropdownConfig', '$scope', '$timeout', '$parse'];

  constructor(...args) {

    super(args);

    this.options = {};
    this.match = null;
    this.ngModel = null;

  }

  init() {

    this.options = angular.extend({}, this.av.avDropdownConfig.DEFAULTS);

    _.forEach(this.av.$attrs, (value, key) => {
      if (_.contains(this.av.avDropdownConfig.OPTIONS, key.replace('data-', ''))) {
        this.options[key] = this.av.$scope.$eval(value);
      }
    });

    if (this.isRemoteMultiple()) {
      this.options.multiple = angular.isDefined(this.av.$attrs.multiple);
    }

    this.multiple = angular.isDefined(this.av.$attrs.multiple);

    if (this.options.query) {

      this.queryFn = this.options.query;
      // Function used to query results for the search term.
      this.options.query = this.query;
      // Function used to get the id from the choice object or a string representing the key under which the id is stored.
      this.options.id = this.getId;
    }

  }

  isRemoteMultiple() {
    if (angular.isDefined(this.av.$attrs.multiple) && this.av.$element.get(0).tagName.toLowerCase() === 'input') {
      return true;
    }
    return false;
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
      const index = _.findIndex(values, value => _.matches(e.removed)(value));
      values.splice(index, 1);
    }

    this.ngModel.$setViewValue(values);

  }

  setViewValue(e) {
    this.ngModel.$setViewValue(e.added);
  }

  setNgModel(ngModel) {
    this.ngModel = ngModel;
  }

  getSelected(model) {

    if (this.options.query) {
      return 0;
    }

    if (!this.collection) {
      // If we're not using ng-options, the model value is just the raw value of the option, rather than an index, so return it as is.
      return model;
    }

    const items = this.collection(this.av.$scope);

    const index = _.findIndex(items, item => {

      if (!self.valueFn) {
        return angular.equals(item, model);
      }

      const locals = {};
      locals[self.valueName] = item;
      const value = self.valueFn(this.av.$scope, locals);
      return angular.equals(value, model);

    });

    return index;

  }

  // Result:
  //
  // {
  //   "code": "252Y00000X",
  //   "value": "AGENCIES,EARLY INTERVENTION PROVIDER AGENCY,NOT APPLICABLE|Agency",
  //   "id": "252Y00000X"
  // }
  getId(result) {
    return result.id;
  }

  // Wrapper around the query function for Select2.  When the promise resolves
  // the callback
  query(options) {

    this.queryFn(options).then(response => {

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

    const viewValue = self.ngModel.$viewValue;
    let selected = null;
    if (viewValue !== null && viewValue !== undefined) {
      selected = this.getSelected(viewValue);
    }

    // var apply = scope.$evalAsync || $timeout;
    this.av.$timeout(() => {
      this.av.$element
        .select2('val', (selected === null || selected === 'undefined') ? '' : selected); // null === '' for Select2
    });
  }

  getMultiSelected(viewValue) {

    const indices = [];

    if (this.av.$element.get(0).tagName.toLowerCase() !== 'input') {
      const options = this.collection(this.av.$scope);

      _.each(viewValue, savedObject => {
        const index = _.findIndex(options, value => {
          const temp = angular.copy(savedObject); // remove hashkeys for comparison
          return _.matches(temp)(value);
        });
        indices.push(index);
      });

    } else {

      const inputViewValues = this.ngModel.$modelValue;

      _.each(inputViewValues, savedObject => {

        if (_.isUndefined(savedObject.id) ) {

          if (savedObject.id || savedObject[self.options.correlationId]) {

            savedObject.id = savedObject[self.options.correlationId];

          } else {

            throw new Error('dropdown list must have a id or a alternative value to use as a id');
          }

        }

      });
    }

    if (indices.length > 0) {
      viewValue = indices;
    }

    return viewValue;

  }

  setValues() {

    let viewValue = self.ngModel.$viewValue;

    if (!angular.isArray(viewValue)) {
      viewValue = [];
    }

    if (!_.isEmpty(viewValue) && _.isObject(viewValue[0])) {
      viewValue = this.getMultiSelected(viewValue);
    }

    this.av.$timeout(() => this.av.$element .select2('val', viewValue) );

  }

  ngOptions() {

    this.match = this.av.$attrs.ngOptions.match(this.av.AV_UI.NG_OPTIONS);
    if (!this.match) {
      throw new Error('Invalid ngOptions for avDropdown');
    }
    // AV_UI.NG_OPTIONS regex will parse into arrays like below:
    //
    // 0: "state.name for state in states"
    // 1: "state.name"
    // 2: undefined
    // 3: undefined
    // 4: "state"
    // 5: undefined
    // 6: undefined
    // 7: "states"
    // 8: undefined
    //
    // 0: "state.id as state.name for state in states"
    // 1: "state.id"
    // 2: "state.name"
    // 3: undefined
    // 4: "state"
    // 5: undefined
    // 6: undefined
    // 7: "states"
    // 8: undefined
    //
    // 0: "state.name for state in states track by state.id"
    // 1: "state.name"
    // 2: undefined
    // 3: undefined
    // 4: "state"
    // 5: undefined
    // 6: undefined
    // 7: "states"
    // 8: "state.id"
    //
    // 0: "person.fullName as (person.lastName + ', ' + person.firstName) for person in feeScheduleModel.persons"
    // 1: "person.fullName"
    // 2: "(person.lastName + ', ' + person.firstName)"
    // 3: undefined
    // 4: "person"
    // 5: undefined
    // 6: undefined
    // 7: "feeScheduleModel.persons"
    // 8: undefined
    //
    this.displayFn = this.av.$parse(this.match[2] || this.match[1]); // this is the function to retrieve the text to show as
    this.collection = this.av.$parse(this.match[7]);
    this.valueName = this.match[4] || this.match[6];
    this.valueFn = this.av.$parse(this.match[2] ? this.match[1] : this.valueName);
    this.keyName = this.match[5];

    this.av.$scope.$watchCollection(this.collection, (newVal, oldVal) => {
      if (angular.equals(newVal, oldVal)) {
        return;
      }

      self.setValue();

    }, true);

  }

}

ngModule.controller('AvDropdownController', AvDropdownController);
