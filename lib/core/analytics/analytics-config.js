(function(root) {

  'use strict';

  var availity = root.availity || {};

  availity.analytics = angular.module('availity.config', ['ng', 'availity']);

  availity.analytics.run(function(avAnalytics) {

    avAnalytics.init();

  });

})(window);

