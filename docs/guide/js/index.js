/*global availity:true, window:false, angular*/
var availity = window.availity || {};

(function() {
  'use strict';

  availity.demo = angular.module('availity.demo', [
    'availity',
    'availity.ui',
    'availity.ui.templates',
    'ui.mask'
  ]);

  availity.demo.controller('PageController', function() {

  });

  availity.demo.config(function(avIdleProvider) {
    avIdleProvider.enable(false);
  });

})();
