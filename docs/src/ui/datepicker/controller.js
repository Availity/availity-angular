import angular from 'angular';
import $ from 'jquery';
import moment from 'moment';

import ngModule from '../module';

function hasDateInput() {
  const i = document.createElement('input');
  i.setAttribute('type', 'date');
  return i.type !== 'text';
}

const hasDateInputSupport = hasDateInput();

// Inspiration https://github.com/mgcrea/angular-strap/blob/v0.7.8/src/directives/datepicker.js
class AvDatepickerController {

  hasDateInputSupport = hasDateInputSupport;

  constructor($element, $attrs, AV_DATEPICKER, $scope, avDatepickerConfig) {
    this.av = { $element, $attrs, AV_DATEPICKER, $scope, avDatepickerConfig };
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
    const viewValue = $.fn.datepicker.DPGlobal.formatDate(modelValue, this.options.format, 'en');
    return viewValue;
  }

  viewToModel(viewValue) {

    const plugin = this.plugin();

    if (!plugin || !viewValue || viewValue === '') {
      return null;
    }

    const isValid = moment(viewValue, this.options._format, true).isValid();
    if (!isValid) {
      return undefined;
    }

    const format = $.fn.datepicker.DPGlobal.parseFormat(this.options.format);
    const utcDate = $.fn.datepicker.DPGlobal.parseDate(this.ngModel.$viewValue, format, 'en');

    const localDate = plugin._utc_to_local(utcDate);

    return localDate;
  }

  init() {

    const self = this;

    this.options = angular.copy(this.av.avDatepickerConfig);

    Object.keys(this.av.$attrs).forEach((key) => {
      const value = self.av.$attrs[key];
      const _key = key.replace('data-', '');
      if (this.av.AV_DATEPICKER.OPTIONS.indexOf(_key) >= 0) {
        self.options[_key] = self.av.$scope.$eval(value);
      }
    });

    this.convertFormat();

  }

  // Developers are used to working with moment.js and availity-angular
  // validators also use moment.js so this function converts from moment.js
  // to bootstrap-datepicker.js format.
  //
  // bootstrap-datepicker date format supports a combination of d, dd, D, DD, m, mm, M, MM, yy, yyyy.
  // Below is the conversion table from moment.js format options to bootstrap-datepicker.
  //
  // Moment formatting options:
  //
  //  - DD => 01 02 ... 30 31
  //  - D => 1 2 ... 30 31
  //  - M => 1 2 ... 11 12
  //  - MM => 01 02 ... 11 12
  //  - MMM => Jan Feb ... Nov Dec
  //  - MMMM => January February ... November December
  //  - YY => 70 71 ... 29 30
  //  - YYYY => 1970 1971 ... 2029 2030
  //
  //  Table reads moment.js format => bootstrap-datepicker format
  //
  //  - D, DD => d, dd: Numeric date, no leading zero and leading zero, respectively. Eg, 5, 05.
  //  - ddd, dddd => D, DD: Abbreviated and full weekday names, respectively. Eg, Mon, Monday.
  //  - M, MM => m, mm: Numeric month, no leading zero and leading zero, respectively. Eg, 7, 07.
  //  - MMM, MMMM => M, MM: Abbreviated and full month names, respectively. Eg, Jan, January
  //  - YY, YYYY => yy, yyyy: 2- and 4-digit years, respectively. Eg, 12, 2012.
  //
  convertFormat() {

    let format = this.options.format;
    this.options._format = this.options.format; // store orginal Moment format

    if (format) {

      // lower case everything
      format = format.toLowerCase();

      // Since we lowercased everything convert the map is slightly different than above
      const map = {'mmm': 'M', 'mmmm': 'MM', 'ddd': 'D', 'dddd': 'DD'};
      const re = new RegExp(Object.keys(map).join('|'), 'gi');
      format = format.replace(re, matched => {
        return map[matched];
      });

    }

    // this is moment format converted to bootstrap-datepicker.js format.
    this.options.format = format;

  }

  plugin() {
    return this.av.$element.data('datepicker');
  }

  destroy() {
    const plugin = this.plugin();
    if (plugin) {
      plugin.destroy();
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
