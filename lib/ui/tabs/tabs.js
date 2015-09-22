/*
* Inspired by https://github.com/angular-ui/bootstrap/blob/master/src/tabs/tabs.js
*/
(function(root) {
  'use strict';

  var availity = root.availity;

  availity.ui.constant('AV_TABS', {
    TEMPLATES: {
      TABS: 'ui/tabs/tabs-tpl.html',
      TAB: 'ui/tabs/tab-tpl.html'
    }
  });

  function TabsController($scope) {
    var self = this;

    $scope.tabs = [];
    self.tabs = $scope.tabs;

    this.addTab = function(tab) {
      self.tabs.push(tab);

      if(self.tabs.length === 1) {
        tab.active = true;
      } else if(tab.active) {
        self.selectTab(tab);
      } else {
        tab.active = false;
      }
    };

    this.removeTab = function(tab) {
      var index = self.tabs.indexOf(tab);

      if(tab.active && self.tabs.length > 1) {
        //If this is the last tab, select the previous tab. else, the next tab.
        var newActiveIndex = index === self.tabs.length - 1 ? index - 1 : index + 1;
        self.selectTab(self.tabs[newActiveIndex]);
      }

      self.tabs.splice(index, 1);
    };

    this.selectTab = function(selectedTab) {
      angular.forEach(self.tabs, function (tab) {
        if(tab.active && tab !== selectedTab) {
          tab.active = false;
        }
      });

      selectedTab.active = true;
    };
  }

  TabsController.$inject = ['$scope'];
  availity.ui.controller('AvTabsController', TabsController);

  function TabsDirective(AV_TABS) {
    return {
      restrict: 'AE',
      templateUrl: AV_TABS.TEMPLATES.TABS,
      transclude: true,
      replace: true,
      controller: 'AvTabsController',
      scope: {
        justified: '@',
        padContent: '=?',
        tabType: '@',
        vertical: '@'
      },
      link: function(scope) {
        if(angular.isUndefined(scope.padContent)) {
          scope.padContent = true;
        }
      }
    };
  }

  TabsDirective.$inject = ['AV_TABS'];
  availity.ui.directive('avTabs', TabsDirective);

  function TabDirective(AV_TABS) {
    return {
      restrict: 'AE',
      templateUrl: AV_TABS.TEMPLATES.TAB,
      replace: true,
      require: '^avTabs',
      scope: {
        heading: '@',
        template: '@',
        templateUrl: '@'
      },
      link: function(scope, element, attrs, tabsController) {
        scope.active = false;
        scope.disabled = false;

        tabsController.addTab(scope);

        scope.$on('destroy', function() {
          tabsController.removeTab(scope);
        });

        scope.select = function() {
          if(!scope.disabled) {
            tabsController.selectTab(scope);
          }
        };

        scope.$watch('active', function(active) {
          if(active) {
            tabsController.selectTab(scope);
          }
        });

        if(angular.isDefined(attrs.active)) {
          scope.active = attrs.active;

          scope.$parent.$watch(attrs.active, function(active) {
            if(active) {
              tabsController.selectTab(scope);
            }
          });
        }

        if(angular.isDefined(attrs.disabled)) {
          scope.disabled = attrs.disabled;

          scope.$parent.$watch(attrs.disabled, function(disabled) {
            scope.disabled = !!disabled;
          });
        }
      }
    };
  }

  TabDirective.$inject = ['AV_TABS'];
  availity.ui.directive('avTab', TabDirective);

  function TabPaneDirective(avTemplateCache) {
    return {
      restrict: 'AE',
      require: '^avTabs',
      scope: {
        tab: '=avTabPane'
      },
      link: function(scope, element) {
        element.addClass('tab-pane');

        avTemplateCache.get(scope.tab).then(function(template) {
          element.append(template);
        });
      }
    };
  }

  TabPaneDirective.$inject = ['avTemplateCache'];
  availity.ui.directive('avTabPane', TabPaneDirective);

})(window);
