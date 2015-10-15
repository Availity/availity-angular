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
          tab.onDeselect();
        }
      });

      selectedTab.active = true;
      selectedTab.onSelect();
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
      scope: true,
      link: function(scope, element, attrs) {
        scope.justified = !!attrs.justified;
        scope.tabType = attrs.tabType;
        scope.vertical = !!attrs.vertical;

        if(angular.isUndefined(attrs.padContent)) {
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
      transclude: true,
      scope: {
        heading: '@',
        template: '=',
        templateUrl: '=',
        onSelect: '&select',
        onDeselect: '&deselect'
      },
      controller: function() {
        // Allow avTabs to be required by other directives
      },
      link: function(scope, element, attrs, tabsController, transclude) {
        scope.transcludeFn = transclude;

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

        if(angular.isDefined(attrs.disable)) {
          scope.$parent.$watch(attrs.disable, function(disabled) {
            scope.disabled = !!disabled;
          });
        }
      }
    };
  }

  TabDirective.$inject = ['AV_TABS'];
  availity.ui.directive('avTab', TabDirective);

  function TabPaneDirective(avTemplateCache, $compile) {
    return {
      restrict: 'AE',
      require: '^avTabs',
      link: function(scope, element, attrs) {

        var tab = scope.$eval(attrs.avTabPane);

        if(angular.isDefined(tab.template) || angular.isDefined(tab.templateUrl)) {
          avTemplateCache.get(tab)
          .then(function(template) {
            element.append($compile(template)(scope));
          });
        } else {
          tab.transcludeFn(tab.$parent, function(contents) {
            angular.forEach(contents, function(node) {
              element.append(node);
            });
          });
        }
      }
    };
  }

  TabPaneDirective.$inject = ['avTemplateCache', '$compile'];
  availity.ui.directive('avTabPane', TabPaneDirective);

})(window);
