(function(root) {
  'use strict';

  var availity = root.availity;

  availity.ui.constant('AV_BADGE', {
    COLOR: null,
    DEFAULT_CLASS: 'badge',
    SHOW_WHEN_ZERO: false,
    TEMPLATE: 'ui/badge/badge-tpl.html'
  });

  function badgeDirective(AV_BADGE) {

    return {
      scope: {
        color: '@',
        count: '=avBadge',
        showWhenZero: '@'
      },
      templateUrl: AV_BADGE.TEMPLATE,
      link: function(scope, element) {
        scope.color = scope.color || AV_BADGE.COLOR;
        scope.showWhenZero = scope.showWhenZero || AV_BADGE.SHOW_WHEN_ZERO;

        var classes = [];
        classes.push(AV_BADGE.DEFAULT_CLASS);
        if(scope.color) {
          classes.push(scope.color);
        }

        element.addClass(classes.join(' '));
      }
    };
  }

  badgeDirective.$inject = ['AV_BADGE'];
  availity.ui.directive('avBadge', badgeDirective);

})(window);
