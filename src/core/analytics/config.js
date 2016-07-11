import angular from 'angular';

const module = angular.module('availity.config', ['ng', 'availity']);

module.run(avAnalytics => avAnalytics.init());
