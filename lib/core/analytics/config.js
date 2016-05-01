import angular from 'angular';

import availity from '../module';

availity.analytics = angular.module('availity.config', ['ng', 'availity']);

availity.analytics.run(function(avAnalytics) {
  avAnalytics.init();
});
