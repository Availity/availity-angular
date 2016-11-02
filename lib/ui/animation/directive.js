'use strict';

exports.__esModule = true;

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module2.default.directive('avAnimate', function () {
  return {
    restrict: 'AE',
    scope: {
      watch: '<?avAnimate',
      animation: '<?avAnimateType',
      eventType: '@?avAnimateOn',
      onLoad: '<?avAnimateOnLoad',
      veclocityOptions: '<?avAnimateOptions'
    },
    link: function link(scope, element) {

      var loaded = false;

      var hasWatch = !_angular2.default.isUndefined(scope.watch);
      var hasEvent = !_angular2.default.isUndefined(scope.eventType);

      var eventType = scope.eventType;

      var onLoad = _angular2.default.isUndefined(scope.onLoad) ? !hasEvent : scope.onLoad;

      var elmToBounce = element.children().length > 0 ? element.children() : element;

      var animate = function animate() {
        var velocityAnimation = scope.animation || 'transition.bounceIn';
        var animationOptions = _angular2.default.extend({}, {
          duration: 1000
        }, scope.veclocityOptions);

        elmToBounce.velocity(velocityAnimation, animationOptions);
      };

      if (onLoad && !hasWatch) {
        animate();
      }

      if (!_angular2.default.isUndefined(eventType)) {
        element.on(eventType, function () {
          animate();
        });
      }

      if (!_angular2.default.isUndefined(scope.watch)) {
        scope.$watch('watch', function () {
          if (loaded || onLoad) {
            animate();
          }
          loaded = true;
        });
      }
    }
  };
});

exports.default = _module2.default;