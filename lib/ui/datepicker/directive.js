'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

require('bootstrap-datepicker');

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.directive('avDatepicker', function ($window, $log, AV_DATEPICKER) {
  return {
    restrict: 'A',
    require: ['ngModel', 'avDatepicker'],
    priority: 1,
    controller: 'AvDatepickerController',
    link: function link(scope, element, attrs, controllers) {

      var ngModel = controllers[0];
      var avDatepicker = controllers[1];

      if (!ngModel) {
        ngModel = avDatepicker.findModel();
        if (!ngModel) {
          $log.error('avDatepicker requires ngModel');
          return;
        }
      }

      avDatepicker.init();
      avDatepicker.setNgModel(ngModel);

      // Datepicker plugin triggers a change event on load that will read in
      // the input value and update the Angular model shortly after.  In order
      // to preserve model values on load, we read the model in from scope and
      // set the input value with jQuery
      var value = scope.$eval(attrs.ngModel);
      if (value) {
        var viewValue = avDatepicker.modelToView(value);
        element.val(viewValue);
      }

      ngModel.$parsers.push(avDatepicker.viewToModel.bind(avDatepicker));
      ngModel.$formatters.push(avDatepicker.modelToView.bind(avDatepicker));

      var _$render = ngModel.$render;
      ngModel.$render = function () {
        _$render();
        avDatepicker.setValue();
      };

      var win = _angular2.default.element($window);

      win.bind('scroll', function () {
        avDatepicker.hide();
      });

      var target = element.siblings(AV_DATEPICKER.ADD_ON_SELECTOR);
      target = target.length ? target : element.siblings(AV_DATEPICKER.ADD_ON_SELECTOR.replace('data-', ''));
      if (target.length) {
        target.on('click.datepicker', function () {
          if (!element.prop('disabled')) {
            // Hack check for IE 8
            element.focus();
          }
        });
      }

      scope.$on('destroy', function () {
        avDatepicker.destroy();
        if (target.length) {
          target.off('click.datepicker');
        }
      });

      scope.$evalAsync(function () {
        // why are their so many different ways to format the same date... MM/DD/YYYY -> mm/dd/yyyy makes a difference. between moment and the datepicker plugin.
        var options = _extends({}, avDatepicker.options);
        options.format = _angular2.default.lowercase(options.format);
        element.datepicker(options);
      });
    }
  };
});

exports.default = _module2.default;