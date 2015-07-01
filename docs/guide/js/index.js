/*global availity:true, angular*/

(function() {
  'use strict';

  availity.demo = angular.module('availity.demo', [
    'availity',
    'availity.ui',
    'availity.ui.templates'
  ]);

  availity.demo.controller('PageController', function() {

  });

  availity.demo.config(function(avIdleProvider) {
    avIdleProvider.enable(false);
  });

})();

(function($) {

  $("#nav").tocify({
    selectors: ".guide-section-header, .guide-subsection-title",
    theme: 'bootstrap',
    scrollTo: 100,
    context: '.col-md-9'
  });

})(jQuery);
