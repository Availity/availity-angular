(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.provider('avDropdownConfig2', function() {

    var config = {
      closeOnResize: true,
      dropdownAutoWidth: true,
      minimumResultsForSearch: 5
    };

    this.set = function(options) {
      angular.extend(config, options);
    };

    this.$get = function() {
      return angular.copy(config);
    };

  });

  availity.ui.constant('AV_DROPDOWN_2', {
    OPTIONS: [
      'allowClear',
      'closeOnSelect',
      'createTokenItem',
      'data',
      'dropdown',
      'dropdownCssClass',
      'initSelection',
      'inputType',
      'items',
      'matcher',
      'multiple',
      'positionDropdown',
      'query',
      'readOnly',
      'removeOnly',
      'showDropdown',
      'showSearchInput',
      'suppressMouse',
      'templates',
      'tokenizer',
      'tokenSeparators',
      'value'
    ]
  });


  availity.ui.controller('AvDropdownController2', function($element, $attrs, AV_UI, AV_DROPDOWN_2, avDropdownConfig2, $log, $scope) {

    var self = this;
    this.options = {};

    this.init = function() {

      self.options = angular.extend({}, avDropdownConfig2);

      _.forEach($attrs, function(value, key) {
        if (_.contains(AV_DROPDOWN_2.OPTIONS, key.replace('data-', ''))) {
          self.options[key] = $scope.$eval(value);
        }
      });

      self.multiple = angular.isDefined($attrs.multiple);

      if (self.multiple) {
        self.options.name = self.options.name || availity.uuid();
      }

    };

  });

  availity.ui.directive('avDropdown2', function($timeout) {

    return {
      restrict: 'AE',
      require: ['ngModel', 'avDropdown2'],
      controller: 'AvDropdownController2',
      link: function(scope, element, attrs, controllers) {

        var ngModel = controllers[0];
        var avDropdown = controllers[1];

        avDropdown.init();

        scope.$watch(ngModel, function(newVal, oldVal) {

          if (newVal === oldVal) {
            return;
          }

          $timeout(function() {
            element.trigger('change');
          });

        });

        scope.$on('destroy', function() {
          element.selectivity('destroy');
        });

        scope.$evalAsync(function() {
          element.selectivity(avDropdown.options);
        });

      }
    };
  });

})(window);
