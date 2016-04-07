(function(root) {

  'use strict';

  var availity = root.availity;
  var avErrorPageController = 'avErrorPageController';

  var startTemplate = '<div class="container"><div>';
  var endTemplate = '<button type="button" class="btn btn-primary" data-ng-click="goBack()"><i class="icon icon-left-small"></i> Go Back</button></div></div>';

  var notFoundTemplate = startTemplate + '<h1>Sorry.</h1><p><strong>We can’t seem to find the page you’re looking for.</strong><br/></p>' + endTemplate;
  var unauthorizedTemplate = startTemplate + '<h1>Oops.</h1><p><strong>Looks like we might have asked you to do something you don’t have access to do.</strong><br/>If this task is integral your job, please contact your Primary Access Administrator (PAA).</p>' + endTemplate;


  availity.ui.constant('AV_ERROR', {
    PAGES: {
      NOT_FOUND: 'av-error-not-found',
      UNAUTHORIZED: 'av-error-unauthorized'
    },
    OPTIONS: {
      sendOtherwiseToNotFound: false,
      routes: {
        'av-error-not-found': {
          url: '/av-error-not-found',
          template: notFoundTemplate,
          controller: avErrorPageController
        },
        'av-error-unauthorized': {
          url: '/av-error-unauthorized',
          template: unauthorizedTemplate,
          controller: avErrorPageController
        }
      }
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


    /**
     * Configures state provider with given routes
     * @param overrideOptions - will override any options.
     */
    this.configure = function(overrideOptions) {
      var options = _.merge({}, AV_ERROR.OPTIONS, overrideOptions);
      var $stateProvider = $injector.get('$stateProvider');
      angular.forEach(options.routes, function(route, name) {
        $stateProvider.state(name, route);
      });
      if (options.sendOtherwiseToNotFound) {
        var $urlRouterProvider = $injector.get('$urlRouterProvider');
        var route = options.routes[AV_ERROR.PAGES.NOT_FOUND];
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
