(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.provider('avDropdownConfig', function() {

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


  availity.ui.controller('AvDropdownController', function($element, $attrs, AV_UI, AV_DROPDOWN, avDropdownConfig, $log, $scope, $parse) {

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

    this.setNgModel = function(ngModel) {
      this.ngModel = ngModel;
    };

    this.getSelected = function(model) {

      if (self.options.query) {
        return 0;
      }
      var items = this.collection($scope);

      var index = _.findIndex(items, function(item) {
        return angular.equals(item, model);
      });

      return index;

    };

    // Result:
    //
    // {
    //   "code": "252Y00000X",
    //   "value": "AGENCIES,EARLY INTERVENTION PROVIDER AGENCY,NOT APPLICABLE|Agency",
    //   "id": "252Y00000X"
    // }
    this.getId = function(result) {
      return result.id;
    };

    this.ngOptions = function() {

      this.match = $attrs.ngOptions.match(AV_UI.NG_OPTIONS);

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
      this.displayFn = $parse(this.match[2] || this.match[1]); // this is the function to retrieve the text to show as
      this.collection = $parse(this.match[7]);
      this.valueName = this.match[4] || this.match[6];
      this.valueFn = $parse(this.match[2] ? this.match[1] : this.valueName);
      this.keyName = this.match[5];

      $scope.$watchCollection(this.collection, function(newVal, oldVal) {
        if (angular.equals(newVal, oldVal)) {
          return;
        }

        // $element.trigger('change');

      }, true);

    };

  });

  availity.ui.directive('avDropdown', function($timeout, $log, $window) {

    return {
      restrict: 'AE',
      require: ['ngModel', 'avDropdown'],
      controller: 'AvDropdownController',
      link: function(scope, element, attrs, controllers) {

        var ngModel = controllers[0];
        var avDropdown = controllers[1];

        avDropdown.setNgModel(ngModel);
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
