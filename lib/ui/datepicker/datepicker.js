/**
 * Inspiration https://github.com/mgcrea/angular-strap/blob/v0.7.8/src/directives/datepicker.js
 */
(function(root) {

  'use strict';

  var availity = root.availity;

  // Options: http://bootstrap-datepicker.readthedocs.org/en/latest/options.html
  availity.ui.constant('AV_DATEPICKER', {
    CONTROLLER: '$ngModelController',
    ADD_ON_SELECTOR: '[data-toggle="datepicker"]',
    OPTIONS: [
      'autoclose',
      'beforeShowDay',
      'beforeShowMonth',
      'calendarWeeks',
      'clearBtn',
      'toggleActive',
      'container',
      'daysOfWeekDisabled',
      'datesDisabled',
      'defaultViewDate',
      'endDate',
      'forceParse',
      'format',
      'inputs',
      'keyboardNavigation',
      'language',
      'minViewMode',
      'multidate',
      'multidateSeparator',
      'orientation',
      'startDate',
      'startView',
      'todayBtn',
      'todayHighlight',
      'weekStart',
      'showOnFocus',
      'disableTouchKeyboard',
      'enableOnReadonly',
      'modelFormat'
    ],
    DEFAULTS: {
      FORMAT: 'mm/dd/yyyy',
      CLOSE: true,
      TODAY: true,
      FORCEPARSE: false,
      MODELFORMAT: 'YYYY-MM-DD'
    }
  });

  availity.ui.controller('AvDatepickerController', function($element, $attrs, AV_DATEPICKER, $scope) {

    var self = this;
    this.options = {};

    this.setValue = function() {

      var viewValue = self.ngModel.$modelValue;
      var plugin = this.plugin();

      if(!viewValue || !plugin) {
        return;
      }

      plugin.setDate(viewValue);
    };

    this.setNgModel = function(ngModel) {
      this.ngModel = ngModel;
    };

    this.findModel = function() {

      var ngModel = null;

      var $input = $element.find('input:first').andSelf();
      if($input.length) {
        ngModel = $input.data(AV_DATEPICKER.CONTROLLER);
        this.setNgModel(ngModel);
      }

      return ngModel;
    };

    this.modelToView = function() {
      var viewValue = $.fn.datepicker.DPGlobal.formatDate(self.ngModel.$modelValue, self.options.format, 'en');
      return viewValue;
    };

    this.wrapIsoDate = function() {
      var date = self.ngModel.$modelValue;

      if(date !== undefined && date !== null && !moment.isDate(date)) {
        var m = moment(date);
        self.ngModel.$modelValue = m.isValid() ? m.toDate() : null;
      }

      return self.ngModel.$modelValue;
    };

    this.viewToModel = function() {
      var format = $.fn.datepicker.DPGlobal.parseFormat(self.options.format);
      var utcDate = $.fn.datepicker.DPGlobal.parseDate(self.ngModel.$viewValue, format, 'en');

      var plugin = self.plugin();

      if(!plugin) {
        return;
      }

      // jscs: disable
      var localDate = plugin._utc_to_local(utcDate);
      // jscs: enable

      if(self.options.modelFormat && localDate) {
        localDate = moment(localDate).format(self.options.modelFormat);
      }

      return localDate;
    };

    this.init = function() {

      _.forEach($attrs, function(value, key) {
        if(_.contains(AV_DATEPICKER.OPTIONS, key.replace('data-', ''))) {
          self.options[key] = $scope.$eval(value);
        }
      });

      // self.options = _.extend{}, optionsDefault, userOptions);

      self.options.autoclose = self.options.autoclose ? self.options.autoclose : AV_DATEPICKER.DEFAULTS.CLOSE;
      self.options.todayHighlight = self.options.todayHighlight ? self.options.todayHighlight : AV_DATEPICKER.DEFAULTS.TODAY;
      self.options.format = self.options.format ? self.options.format : AV_DATEPICKER.DEFAULTS.FORMAT;
      self.options.forceParse = self.options.forceParse ? self.options.forceParse : AV_DATEPICKER.DEFAULTS.FORCEPARSE;

      if(self.options.modelFormat && self.options.modelFormat.toLowerCase() === 'default') {
        self.options.modelFormat = AV_DATEPICKER.DEFAULTS.MODELFORMAT;
      }
    };

    this.plugin = function() {
      return $element.data('datepicker');
    };

    this.destroy = function() {
      var plugin = this.plugin();
      if(plugin) {
        plugin.remove();
        $element.data('datepicker', null);
      }
    };

    this.hide = function() {
      var plugin = this.plugin();
      if(plugin) {
        plugin.hide();
      }
    };
  });

  availity.ui.directive('avDatepicker', function($window, $log, AV_DATEPICKER) {
    return {
      restrict: 'A',
      require: ['ngModel', 'avDatepicker'],
      controller: 'AvDatepickerController',
      link: function(scope, element, attrs, controllers) {

        var ngModel = controllers[0];
        var avDatepicker = controllers[1];

        if(!ngModel) {
          ngModel = avDatepicker.findModel();
          if(!ngModel) {
            $log.error('avDatepicker requires ngModel');
            return;
          }
        }

        avDatepicker.init();
        avDatepicker.setNgModel(ngModel);

        element.on('changeDate', function(e) {
          $log.info('avDatepicker changeDate {0}', [e]);
        });

        // (view to model)
        ngModel.$parsers.push(avDatepicker.viewToModel);

        // (model to view) - added to end of formatters array
        // because they are processed in reverse order.
        // if the model is in Date format and send to the validation framework
        // prior to getting converted to the expected $viewValue format,
        // the validation will fail.
        ngModel.$formatters.push(avDatepicker.modelToView);
        ngModel.$formatters.push(avDatepicker.wrapIsoDate);

        var _$render = ngModel.$render;
        ngModel.$render = function() {
          _$render();
          avDatepicker.setValue();
        };

        var win = angular.element($window);

        win.bind('scroll', function() {
          avDatepicker.hide();
        });

        var target = element.siblings(AV_DATEPICKER.ADD_ON_SELECTOR);
        if(target.length) {
          target.on('click.datepicker', function() {
            if(!element.prop('disabled')) { // Hack check for IE 8
              element.focus();
            }
          });
        }

        scope.$on('destroy', function() {
          avDatepicker.destroy();
          if(target.length) {
            target.off('click.datepicker');
          }
        });

        scope.$evalAsync(function() {
          element.datepicker(avDatepicker.options);
        });
      }
    };
  });
})(window);
