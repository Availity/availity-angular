(function(root) {

  'use strict';

  var availity = root.availity;
  var avErrorPageController = 'avErrorPageController';
  var errorPageTemplateUrl = 'ui/error-pages/error-page-tpl.html';

  availity.ui.constant('AV_ERROR', {
    PAGES: {
      NOT_FOUND: 'av-error-not-found',
      UNAUTHORIZED: 'av-error-unauthorized'
    },
    ROUTES: {
      'av-error-not-found': {
        url: '/av-error-not-found',
        templateUrl: errorPageTemplateUrl,
        controller: avErrorPageController,
        data: {
          title: 'Sorry.',
          strong: 'We can’t seem to find the page you’re looking for.',
          message: ''
        }
      },
      'av-error-unauthorized': {
        url: '/av-error-unauthorized',
        templateUrl: errorPageTemplateUrl,
        controller: avErrorPageController,
        data: {
          title: 'Oops.',
          strong: 'Looks like we might have asked you to do something you don’t have access to do.',
          message: 'If this task is integral your job, please contact your Primary Access Administrator (PAA).'
        }
      }
    },
    TEMPLATES: {
      BASE: errorPageTemplateUrl
    }
  });

  availity.ui.controller(avErrorPageController, function($scope, $state, $window) {
    $scope.data = $state.current.data;
    $scope.goBack = function() {
      $window.history.back();
    };
  });

  // Factory that creates ApiResourcess
  var AvErrorPageProvider = function(AV_ERROR, $injector) {

    // Provider default options that can be overridden at config time
    var _routes = _.merge({}, AV_ERROR.ROUTES);

    // Allow overrides in config phase
    this.setRoutes = function(routes) {
      _.merge(_routes, routes);
    };

    this.getRoutes = function() {
      return angular.copy(_routes);
    };

    /**
     * Configures state provider with given routes
     * @param configureOtherwise - will configure otherwise of urlRouter
     * to go to not found page.
     */
    this.configureRoutes = function(configureOtherwise) {
      var $stateProvider = $injector.get('$stateProvider');
      angular.forEach(_routes, function(route, name) {
        $stateProvider.state(name, route);
      });
      if (configureOtherwise) {
        var $urlRouterProvider = $injector.get('$urlRouterProvider');
        var route = _routes[AV_ERROR.PAGES.NOT_FOUND];
        $urlRouterProvider.otherwise(route.url);
      }
    };

    /**
     * Return the service
     * @param $location
     * @returns {{show: avErrorPageService.show, notFound: avErrorPageService.notFound, unauthorized: avErrorPageService.unauthorized}}
     */
    this.$get = function($state) {
      var avErrorPageService = {
        /**
         * Main show page service
         * @param name
         */
        show: function(name) {
          $state.go(name);
        },
        notFound: function() {
          return this.show(AV_ERROR.PAGES.NOT_FOUND);
        },
        unauthorized: function() {
          return this.show(AV_ERROR.PAGES.UNAUTHORIZED);
        }
      };
      return avErrorPageService;
    };
  };

  availity.ui.provider('avErrorPage', AvErrorPageProvider);

})
(window);
