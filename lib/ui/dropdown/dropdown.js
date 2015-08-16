(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.constant('AV_DROPDOWN', {
    OPTIONS: [
      'width',
      'minimumInputLength',
      'maximumInputLength',
      'minimumResultsForSearch',
      'maximumSelectionSize',
      'placeholderOption',
      'separator',
      'allowClear',
      'multiple',
      'closeOnSelect',
      'openOnEnter',
      'id',
      'matcher',
      'sortResults',
      'formatSelection',
      'formatResult',
      'formatResultCssClass',
      'formatNoMatches',
      'formatSearching',
      'formatAjaxError',
      'formatInputTooShort',
      'formatInputTooLong',
      'formatSelectionTooBig',
      'formatLoadMore',
      'createSearchChoice',
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
      'selectOnBlur',
      'loadMorePadding',
      'nextSearchTerm'
    ]
  });


  availity.ui.controller('AvDropdownController', function($element, $attrs, AV_UI, AV_DROPDOWN, $log, $scope, $timeout, $parse) {

    var self = this;
    this.options = [];
    this.match = null;
    this.ngModel = null;

    this.init = function() {
      _.forEach($attrs, function(value, key) {
        if(_.contains(AV_DROPDOWN.OPTIONS, key.replace('data-', ''))) {
          self.options[key] = $scope.$eval(value);
        }
      });

      self.multiple = angular.isDefined($attrs.multiple);

      self.options.closeOnResize = self.options.closeOnResize  || true;

      if(self.options.query) {

        self.queryFn = self.options.query;
        // Function used to query results for the search term.
        self.options.query = self.query;
        // Function used to get the id from the choice object or a string representing the key under which the id is stored.
        self.options.id = self.getId;
      }

    };

    this.setNgModel = function(ngModel) {
      this.ngModel = ngModel;
    };

    this.getSelected = function(model) {

      if(self.options.query) {
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

    // Wrapper around the query function for Select2.  When the promise resolves
    // the callback
    this.query = function(options) {

      self.queryFn(options).then(function(response) {

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
    };

    this.setValue = function() {
      var viewValue = self.ngModel.$viewValue;
      var selected = null;
      if(viewValue) {
        selected = this.getSelected(viewValue);
      }

      // var apply = scope.$evalAsync || $timeout;
      $timeout(function() {
        $element
          .select2('val',  (selected === null || selected === 'undefined') ? '' : selected); // null === '' for Select2
      });
    };

    this.getMultiSelected = function(viewValue) {
      var options = this.collection($scope);
      var indices = [];

      _.each(viewValue, function(savedObject) {
        var index = _.findIndex(options, function(value) {
          var temp = angular.copy(savedObject); // remove hashkeys for comparison
          return _.matches(temp)(value);
        });
        indices.push(index);
      });

      if(indices.length > 0) {
        viewValue = indices;
      }

      return viewValue;

    };

    this.setValues = function() {
      var viewValue = self.ngModel.$viewValue;

      if(!angular.isArray(viewValue)) {
        viewValue = [];
      }

      if(!_.isEmpty(viewValue) && _.isObject(viewValue[0])) {
        viewValue = this.getMultiSelected(viewValue);
      }

      $timeout(function() {
        $element
          .select2('val', viewValue);
      });
    };

    this.ngOptions = function() {
      this.match = $attrs.ngOptions.match(AV_UI.NG_OPTIONS);
      if(!this.match) {
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
        if(angular.equals(newVal, oldVal)) {
          return;
        }

        self.setValue();

      }, true);

    };
  });

  availity.ui.directive('avDropdown', function($timeout, $log, $window) {
    return {
      restrict: 'A',
      require: ['ngModel', 'avDropdown'],
      controller: 'AvDropdownController',
      link: function(scope, element, attrs, controllers) {
        var ngModel = controllers[0];
        var avDropdown = controllers[1];

        avDropdown.setNgModel(ngModel);
        avDropdown.init();

        if(attrs.ngOptions) {
          avDropdown.ngOptions();
        }

        ngModel.$parsers.push(function(value) {
          var parent = element.prev();
          parent
            .toggleClass('ng-invalid', !ngModel.$valid)
            .toggleClass('ng-valid', ngModel.$valid)
            .toggleClass('ng-invalid-required', !ngModel.$valid)
            .toggleClass('ng-valid-required', ngModel.$valid)
            .toggleClass('ng-dirty', ngModel.$dirty)
            .toggleClass('ng-pristine', ngModel.$pristine);
          return value;
        });

        element.on('change', function(e) {

          // special case since the ajax handling doesn't bind to the model correctly
          // this has to do with select2 (v3.5.2) using a hidden field instead of a select for ajax
          if(avDropdown.options.query) {
            $timeout(function() {
              ngModel.$setViewValue(e.added);
            });
          }

          $log.info(e);

        });

        // fires ng-focus when select2-focus fires.
        element.on('select2-focus', function() {
          if(attrs.ngFocus) {
            scope.$eval(scope.$eval(attrs.ngFocus));
          }
        });

        // fires ng-blur when select2-blur occurs.
        element.on('select2-blur', function() {
          if(attrs.ngBlur) {
            scope.$eval(scope.$eval(attrs.ngBlur));
          }
        });

        // https://github.com/t0m/select2-bootstrap-css/issues/37#issuecomment-42714589
        element.on('select2-open', function () {
          // look for .has-success, .has-warning, .has-error
          // (really look for .has-* … which is good enough for the demo page, but obviously might interfere with other CSS-classes starting with "has-")
          if(element.parents('[class*="has-"]').length) {

            // get all CSS-classes from the element where we found "has-*" and collect them in an array
            var classNames = $(this).parents('[class*="has-"]')[0].className.split(/\s+/);

            // go through the class names, find "has-"
            for(var i = 0; i < classNames.length; ++i) {
              if(classNames[i].match('has-')) {
                $('#select2-drop').addClass(classNames[i]);
              }
            }
          }
        });


        var _$render = ngModel.$render;
        ngModel.$render = function() {
          _$render();

          if(avDropdown.multiple) {
            avDropdown.setValues();
          }else {
            avDropdown.setValue();
          }

        };

        var win = angular.element($window);

        win.bind('resize', function() {
          element.select2('close');
        });

        attrs.$observe('disabled', function (value) {
          element.select2('enable', !value);
        });

        attrs.$observe('readonly', function (value) {
          element.select2('readonly', !!value);
        });

        scope.$on('destroy', function() {
          element.select2('destroy');
        });

        $timeout(function() {
          element.select2(avDropdown.options);
        });
      }
    };
  });

})(window);
