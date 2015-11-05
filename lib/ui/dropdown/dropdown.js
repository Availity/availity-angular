(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.provider('avDropdownConfig', function() {

    var config = {
      closeOnResize: true,
      dropdownAutoWidth: true,
      minimumResultsForSearch: 5,
      theme: 'bootstrap'
    };

    this.set = function(options) {
      angular.extend(config, options);
    };

    this.$get = function() {
      return angular.copy(config);
    };

  });

  availity.ui.constant('AV_DROPDOWN', {
    OPTIONS: [
      'width',
      'minimumInputLength',
      'maximumInputLength',
      'minimumResultsForSearch',
      'maximumSelectionSize',
      'separator',
      'allowClear',
      'multiple',
      'closeOnSelect',
      'openOnEnter',
      'id',
      'matcher',
      'sorter',
      'templateSelection',
      'templateResult',
      'formatResultCssClass',
      'formatNoMatches',
      'formatSearching',
      'formatAjaxError',
      'formatInputTooShort',
      'formatInputTooLong',
      'formatSelectionTooBig',
      'formatLoadMore',
      'createTag',
      'createSearchChoicePosition',
      'initSelection',
      'tokenizer',
      'tokenSeparators',
      'query',
      'ajax',
      'data',
      'tags',
      'containerCss',
      'containerCssClass',
      'dropdownCss',
      'dropdownCssClass',
      'dropdownAutoWidth',
      'adaptContainerCssClass',
      'adaptDropdownCssClass',
      'escapeMarkup',
      'selectOnClose',
      'loadMorePadding',
      'nextSearchTerm'
    ]
  });


  availity.ui.controller('AvDropdownController', function($element, $attrs, AV_UI, AV_DROPDOWN, avDropdownConfig, $log, $scope) {

    var self = this;
    this.options = {};
    this.match = null;
    this.ngModel = null;

    this.init = function() {

      self.options = angular.extend({}, avDropdownConfig);

      _.forEach($attrs, function(value, key) {
        if (_.contains(AV_DROPDOWN.OPTIONS, key.replace('data-', ''))) {
          self.options[key] = $scope.$eval(value);
        }
      });

      self.multiple = angular.isDefined($attrs.multiple);

    };


  });

  availity.ui.directive('avDropdown', function($timeout, $log, $window) {

    return {
      restrict: 'AE',
      require: ['ngModel', 'avDropdown'],
      controller: 'AvDropdownController',
      link: function(scope, element, attrs, controllers) {

        var avDropdown = controllers[1];
        avDropdown.init();

        var win = angular.element($window);

        win.bind('resize', function() {
          element.select2('close');
        });

        scope.$watch(attrs.ngModel, function(newVal, oldVal) {

          if (newVal === oldVal) {
            return;
          }

          $timeout(function() {
            element.trigger('change.select2');
          });

        });

        scope.$on('destroy', function() {
          element.select2('destroy');
        });

        scope.$evalAsync(function() {
          element.select2(avDropdown.options);
        });
      }
    };
  });

})(window);
