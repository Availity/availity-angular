import angular from 'angular';
import moment from 'moment';

import Base from '../base';
import ngModule from '../module';

function hasDateInput() {
  const i = document.createElement('input');
  i.setAttribute('type', 'date');
  return i.type !== 'text';
}

const hasDateInputSupport = hasDateInput();

// Inspiration https://github.com/mgcrea/angular-strap/blob/v0.7.8/src/directives/datepicker.js
class AvDatepickerController extends Base {
  static $inject = ['$element', '$attrs', 'AV_DATEPICKER', '$scope', 'avDatepickerConfig'];

  hasDateInputSupport = hasDateInputSupport;

  constructor(...args) {
    super(...args);
  }

  setValue() {

    const viewValue = this.ngModel.$viewValue;
    const plugin = this.plugin();

    if (!viewValue || !plugin) {
      return;
    }

    plugin.setDate(viewValue);
  }

  setNgModel(ngModel) {
    this.ngModel = ngModel;
  }

  findModel() {

    let ngModel = null;

    const $input = this.av.$element.find('input:first').andSelf();
    if ($input.length) {
      ngModel = $input.data(this.av.AV_DATEPICKER.CONTROLLER);
      this.setNgModel(ngModel);
    }

    return ngModel;
  }

  modelToView(modelValue) {
    return moment(modelValue).format(this.options.format);
  }

  viewToModel(viewValue) {

    const plugin = this.plugin();

    if (!plugin || !viewValue) {
      return null;
    }

    const parsed = moment(viewValue, this.options.format, true);

    if (parsed.isValid()) {
      // jscs: disable
      return plugin._utc_to_local(parsed.utc().toDate());
      // jscs: enable
    }
  }

  init() {

    this.options = angular.copy(this.av.avDatepickerConfig);

    Object.keys(this.av.$attrs).forEach((key) => {
      const value = this.av.$attrs[key];
      const _key = key.replace('data-', '');
      if (this.av.AV_DATEPICKER.OPTIONS.includes(_key)) {
        this.options[_key] = this.av.$scope.$eval(value);
      }
    });

    if (!this.options.modelFormat || (this.options.modelFormat && this.options.modelFormat.toLowerCase() === 'default')) {
      this.options.modelFormat = this.av.AV_DATEPICKER.DEFAULTS.MODELFORMAT;
    }

    if (this.av.$attrs.type === 'date' && this.hasDateInputSupport) {
      this.options.format = this.av.AV_DATEPICKER.DEFAULTS.MODELFORMAT;
    }
  }

  plugin() {
    return this.av.$element.data('datepicker');
  }

  destroy() {
    const plugin = this.plugin();
    if (plugin) {
      plugin.remove();
      this.av.$element.data('datepicker', null);
    }
  }

  hide() {
    const plugin = this.plugin();
    if (plugin) {
      plugin.hide();
    }
  }
}

ngModule.controller('AvDatepickerController', AvDatepickerController);
