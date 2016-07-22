import angular from 'angular';

const module = angular.module('availity.config', ['availity']);

module.run(avAnalytics => avAnalytics.init());
