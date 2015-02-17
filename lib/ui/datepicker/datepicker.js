(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.constant('AV_DATEPICKER', {
    CONTROLLER: '$ngModelController',
    OPTIONS: [
      'language',
      'useCurrent',
      'dayViewHeaderFormat',
      'extraFormats',
      'stepping',
      'minDate',
      'maxDate',
      'useCurrent',
      'collapse',
      'locale',
      'defaultDate',
      'disabledDates',
      'enabledDates',
      'useStrict',
      'sideBySide',
      'daysOfWeekDisabled',
      'icons',
      'calendarWeeks',
      'viewMode',
      'toolbarPlacement',
      'showTodayButton',
      'showClear',
      'widgetPositioning',
      'widgetParent',
      'keepOpen'
    ],
    DEFUALTS: {
      FORMAT: 'MM/DD/YYYY ',
      FORMAT_LONG: 'dddd, MMMM Do YYYY, h:mm:ss a',
      ICONS: {
        time: 'icon icon-clock',
        date: 'icon icon-calendar',
        up: 'icon icon-up-dir',
        down: 'icon icon-down-dir',
        previous: 'icon icon-left-dir',
        next: 'icon icon-right-dir',
        today: 'icon icon-screenshot',
        clear: 'icon icon-trash'
      }
    }

  });

  availity.ui.controller('AvDatepickerController', function($element, $attrs, AV_DATEPICKER, $scope) {

    var self = this;
    this.options = [];

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

      self.options.format = self.options.format ? self.options.format : AV_DATEPICKER.DEFUALTS.FORMAT;
      self.options.icons = self.options.icons ? self.options.icons : AV_DATEPICKER.DEFUALTS.ICONS;

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
          element.datetimepicker(avDatepicker.options);
        });
      }
    };
  });

})(window);
