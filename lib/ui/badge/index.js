'use strict';

import template from './badge.html';
import availity from '../module';

availity.ui.constant('AV_BADGE', {
  COLOR: null,
  DEFAULT_CLASS: 'badge',
  SHOW_WHEN_ZERO: false
});

function badgeDirective(AV_BADGE) {

  return {
    scope: {
      color: '@',
      count: '=avBadge',
      showWhenZero: '@'
    },
    template,
    link(scope, element) {

      scope.color = scope.color || AV_BADGE.COLOR;
      scope.showWhenZero = scope.showWhenZero || AV_BADGE.SHOW_WHEN_ZERO;

      const classes = [];
      classes.push(AV_BADGE.DEFAULT_CLASS);
      if (scope.color) {
        classes.push(scope.color);
      }

      element.addClass(classes.join(' '));
    }
  };
}

badgeDirective.$inject = ['AV_BADGE'];
availity.ui.directive('avBadge', badgeDirective);


