

'use strict';

import angular from 'angular';
import _ from 'lodash';

import availity from '../module';

availity.ui.provider('avDropdownConfig', function() {

  let config = {
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

availity.ui.controller('AvDropdownController', function($element, $attrs, AV_UI, AV_DROPDOWN, avDropdownConfig, $log, $scope) {

  let self = this;

  this.options = {};

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

      let avDropdown = controllers[1];

      if (avDropdown.options.closeOnResize) {

        let win = angular.element($window);
        win.bind('resize', function() {
          element.select2('close');
        });

      }

      scope.$watch(attrs.ngModel, function(newVal, oldVal) {

        if (newVal === oldVal) {
          return;
        }

        $timeout(function() {
          element.trigger('change.select2');
        });

      });

      scope.$on('$destroy', function() {
        element.off();
        element.select2('destroy');
      });

      scope.$evalAsync(function() {
        element.select2(avDropdown.options);
      });

      // If event listeners are specified in the options, set them up here
      if (_.get(avDropdown, 'options.eventListeners')) {
        _.each(avDropdown.options.eventListeners, function(listener, eventId) {
          if (_.isFunction(listener)) {
            element.on(eventId, listener);
          }
        });
      }
    }
  };
});
