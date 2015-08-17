/*global availity:true, angular*/

(function() {
  'use strict';

  availity.demo = angular.module('availity.demo', [
    'availity',
    'availity.ui',
    'availity.ui.templates',
    'ngAnimate',
    'angular-velocity',
    'blockUI',
    'ui.router' // for breadcrumbs
  ]);

  availity.demo.controller('PageController', function() {

  });

  availity.demo.config(function(avIdleProvider, blockUIConfig) {

    avIdleProvider.enable(false);
    blockUIConfig.template = '<div data-av-loader class="loading-indicator"></div>';
    blockUIConfig.autoBlock = false;

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
      });
  }]);

})();

(function($) {

  $("#nav").tocify({
    selectors: ".guide-section-header, .guide-subsection-title",
    theme: 'bootstrap',
    scrollTo: 100,
    context: '.col-md-9'
  });

  // Add View Code toggle button for each example
  $('.guide-example').each(function() {

    var btn = '' +
      '<div>' +
      '<hr class="divider-lg"/>' +
      '<div class="btn-toolbar">' +
      '<button class="btn btn-ghost btn-sm" data-toggle="code">' +
      'View Code<i class="icon icon-code"></i>' +
      '</button>' +
      '</div>' +
      '</div>';

    if ($(this).next().is('.language-markup')) {
      $(this).append($(btn));
    }
  });

  $('[data-toggle="code"]').click(function(e) {

    e.preventDefault();

    var target = $(this).parents('.guide-example').next('.language-markup');

    if(target.is(':visible')) {
      target.velocity("slideUp", { duration: 200 });
    }else {
      target.velocity("fadeIn", {
        duration: 300,
        display: 'block'
      });
    }

  });

})(jQuery);
