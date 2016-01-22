import angular from 'angular';

const availity = {
  MODULE: {
    CORE: 'availity',
    UI: 'availity.ui'
  },
  VERSION: process.env.VERSION
};

availity.core = angular.module(availity.MODULE.CORE, ['ng']);
