(function(root) {

  'use strict';

  var availity = root.availity;

  // Options: http://bootstrap-datepicker.readthedocs.org/en/latest/options.html
  availity.ui.constant('AV_DATEPICKER', {
    CONTROLLER: '$ngModelController',

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
      'enableOnReadonly'
    ],
    DEFUALTS: {
      FORMAT: 'mm/dd/yyyy',
      CLOSE: true,
      TODAY: true
    }
  });

  availity.ui.controller('AvDatepickerController', function($element, $attrs, AV_DATEPICKER, $scope) {

    var self = this;
    this.options = {};

    this.setValue = function() {

      var viewValue = self.ngModel.$viewValue;

      if(!viewValue) {
        return;
      }

      var plugin = this.plugin();
      plugin.date(viewValue);
    };

    this.setNgModel = function(ngModel) {
      this.ngModel = ngModel;
    };

    this.findModel = function() {

      var ngModel = null;

      var $input = $element.find('input:first');
      if($input.length) {
        ngModel = $input.data(AV_DATEPICKER.CONTROLLER);
        this.setNgModel(ngModel);
      }

      return ngModel;
    };

    this.init = function() {

      _.forEach($attrs, function(value, key) {
        if(_.contains(AV_DATEPICKER.OPTIONS, key.replace('data-', ''))){
          self.options[key] = $scope.$eval(value);
        }
      });

      self.options.autoclose = self.options.autoclose ? self.options.autoclose : AV_DATEPICKER.DEFUALTS.CLOSE;
      self.options.todayHighlight = self.options.todayHighlight ? self.options.todayHighlight : AV_DATEPICKER.DEFUALTS.TODAY;

    };

    this.plugin = function() {
      return $element.data('DateTimePicker');
    };

    this.destroy = function() {
      var plugin = this.plugin();
      if(plugin) {
        plugin.destroy();
      }
    };

    this.hide = function() {
      var plugin = this.plugin();
      if(plugin) {
        plugin.hide();
      }
    };

  });

  availity.ui.directive('avDatepicker', function($timeout, $window, $log) {
    return {
      restrict: 'A',
      require: ['?ngModel', 'avDatepicker'],
      controller: 'AvDatepickerController',
      link: function(scope, element, attrs, controllers) {

        var ngModel = controllers[0];
        var avDatepicker = controllers[1];

        if(!ngModel) {
          ngModel = avDatepicker.findModel();
          if(!ngModel) {
            $log.info('avDatepicker requires ngModel');
            return;
          }
        }


        avDatepicker.init();
        avDatepicker.setNgModel(ngModel);

        element.on('dp.change', function(e) {
          scope.$apply(function() {
            ngModel.$setViewValue($.trim(element.val()));
          });
          $log.info(e);
        });

        var _$render = ngModel.$render;
        ngModel.$render = function() {
          _$render();
          avDatepicker.setValue();
        };

        var win = angular.element($window);

        win.bind('scroll', function() {
          avDatepicker.hide();
        });

        scope.$on('destroy', function() {
           avDatepicker.destroy();
        });

        $timeout(function() {
          element.datepicker(avDatepicker.options);
        });
      }
    };
  });

})(window);
