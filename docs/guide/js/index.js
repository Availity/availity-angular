/*global availity:true, angular*/

(function() {
  'use strict';

  availity.demo = angular.module('availity.demo', [
    'availity',
    'availity.ui',
    'availity.ui.templates',
    'ui.router' // for breadcrumbs
  ]);

  availity.demo.controller('PageController', function() {

  });

  availity.demo.config(function(avIdleProvider) {
    avIdleProvider.enable(false);
  });

  availity.demo.config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        data: {
          breadcrumb: {
            displayName: 'Home'
          }
        }
      })
      .state('spaces', {
        url: '/spaces',
        data: {
          breadcrumb: {
            displayName: 'Spaces',
            parent: 'home'
          }
        }
      })
      .state('my-application', {
        url: '/my-application',
        data: {
          breadcrumb: {
            displayName: 'My Application',
            parent: 'spaces'
          }
        }
      })
  }]);

})();

(function($) {

  $("#nav").tocify({
    selectors: ".guide-section-header, .guide-subsection-title",
    theme: 'bootstrap',
    scrollTo: 100,
    context: '.col-md-9'
  });

})(jQuery);
