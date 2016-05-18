(function(root) {
  'use strict';

  var availity = root.availity;

  availity.ui.constant('AV_ACCORDION', {
    TEMPLATES: {
      BASE: 'ui/accordion/accordion-tpl.html',
      GROUP: 'ui/accordion/accordion-group-tpl.html'
    }
  });

  function AvAccordionController(){
    // This array keeps track of the accordion groups
    this.groups = [];

    // This is called from the accordion-group directive to add itself to the accordion
    this.addGroup = function (groupScope) {
      var that = this;
      this.groups.push(groupScope);

      groupScope.$on('$destroy', function () {
        that.removeGroup(groupScope);
      });
    };

    // This is called from the accordion-group directive when to remove itself
    this.removeGroup = function (group) {
      var index = this.groups.indexOf(group);
      if (index !== -1) {
        this.groups.splice(index, 1);
      }
    };
  }

  availity.ui.controller('AvAccordionController', AvAccordionController);

  function avAccordion(AV_ACCORDION){
    return {
      restrict: 'A',
      controller: 'AvAccordionController',
      transclude: true,
      templateUrl: AV_ACCORDION.TEMPLATES.BASE
    };
  }

  avAccordion.$inject = ['AV_ACCORDION'];
  availity.ui.directive('avAccordion', avAccordion);

  // The accordion-group directive indicates a block of html that will expand and collapse in an accordion
  function avAccordionGroup(AV_ACCORDION){
    return {
      restrict: 'A',
      require: '^avAccordion',
      transclude: true,
      replace: true,
      templateUrl: AV_ACCORDION.TEMPLATES.GROUP,
      scope: {
        heading: '@',               // Interpolate the heading attribute onto this scope
        popOverContent: '@',        // Interpolate the heading attribute onto this scope
        popOverContentHeader: '@',  // Interpolate the heading attribute onto this scope
        isOpen: '=?',
        initOpen: '=?',
        isDisabled: '=?'
      },
      link: function (scope, element, attrs, accordionCtrl) {

        accordionCtrl.addGroup(scope);
        scope.openClass = attrs.openClass || 'panel-open';
        scope.panelClass = attrs.panelClass || 'panel-default';
        scope.$watch('initOpen', function (value) {
          element.toggleClass(scope.openClass, !!value);
          scope.isOpen = !!scope.initOpen;
        });

        scope.toggleOpen = function ($event) {
          if (!scope.isDisabled) {
            if (!$event || $event.which === 32) {
              scope.isOpen = !scope.isOpen;
            }
          }
        };

        var id = 'accordion-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
        scope.headingId = id + '-tab';
        scope.panelId = id + '-panel';
      }
    };
  }

  avAccordionGroup.$inject = ['AV_ACCORDION'];
  availity.ui.directive('avAccordionGroup', avAccordionGroup);

  function avCollapse($transition){

    return {
      link: function (scope, element, attrs) {

        var initialAnimSkip = true;
        var currentTransition;

        function doTransition(change) {

          var newTransition = $transition(element, change);

          function newTransitionDone() {
            // Make sure it's this transition, otherwise, leave it alone.
            if (currentTransition === newTransition) {
              currentTransition = undefined;
            }
          }

          if (currentTransition) {
            currentTransition.cancel();
          }
          currentTransition = newTransition;
          newTransition.then(newTransitionDone, newTransitionDone);
          return newTransition;


        }

        function expandDone() {
          element.removeClass('collapsing');
          element.addClass('collapse in');
          element.css({height: 'auto'});
        }

        function expand() {
          if (initialAnimSkip) {
            initialAnimSkip = false;
            expandDone();
          } else {
            element.removeClass('collapse').addClass('collapsing');
            doTransition({height: element[0].scrollHeight + 'px'}).then(expandDone);
          }
        }

        function collapseDone() {
          element.removeClass('collapsing');
          element.addClass('collapse');
        }

        function collapse() {
          if (initialAnimSkip) {
            initialAnimSkip = false;
            collapseDone();
            element.css({height: 0});
          } else {
            // CSS transitions don't work with height: auto, so we have to manually change the height to a specific value
            element.css({height: element[0].scrollHeight + 'px'});
            //trigger reflow so a browser realizes that height was updated from auto to a specific value
            //var x = element[0].offsetWidth;

            element.removeClass('collapse in').addClass('collapsing');

            doTransition({height: 0}).then(collapseDone);
          }
        }

        scope.$watch(attrs.avCollapse, function (shouldCollapse) {
          if (shouldCollapse) {
            collapse();
          } else {
            expand();
          }
        });
      }
    };
  }

  avCollapse.$inject = ['$transition'];
  availity.ui.directive('avCollapse', avCollapse);

  availity.ui.factory('$transition', [
    '$q', '$timeout', '$rootScope',
    function ($q, $timeout, $rootScope) {

      var $transition = function (element, trigger, options) {
        options = options || {};
        var deferred = $q.defer();
        var endEventName = $transition[options.animation ? 'animationEndEventName' : 'transitionEndEventName'];

        var transitionEndHandler = function () {
          $rootScope.$apply(function () {
            element.unbind(endEventName, transitionEndHandler);
            deferred.resolve(element);
          });
        };

        if (endEventName) {
          element.bind(endEventName, transitionEndHandler);
        }

        // Wrap in a timeout to allow the browser time to update the DOM before the transition is to occur
        $timeout(function () {
          if (angular.isString(trigger)) {
            element.addClass(trigger);
          } else if (angular.isFunction(trigger)) {
            trigger(element);
          } else if (angular.isObject(trigger)) {
            element.css(trigger);
          }
          //If browser does not support transitions, instantly resolve
          if (!endEventName) {
            deferred.resolve(element);
          }
        });

        // Add our custom cancel function to the promise that is returned
        // We can call this if we are about to run a new transition, which we know will prevent this transition from ending,
        // i.e. it will therefore never raise a transitionEnd event for that transition
        deferred.promise.cancel = function () {
          if (endEventName) {
            element.unbind(endEventName, transitionEndHandler);
          }
          deferred.reject('Transition cancelled');
        };

        return deferred.promise;
      };

      // Work out the name of the transitionEnd event
      var transElement = document.createElement('trans');
      var transitionEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'transition': 'transitionend'
      };
      var animationEndEventNames = {
        'WebkitTransition': 'webkitAnimationEnd',
        'MozTransition': 'animationend',
        'OTransition': 'oAnimationEnd',
        'transition': 'animationend'
      };

      function findEndEventName(endEventNames) {
        for (var name in endEventNames) {
          if (transElement.style[name] !== undefined) {
            return endEventNames[name];
          }
        }
      }

      $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
      $transition.animationEndEventName = findEndEventName(animationEndEventNames);
      return $transition;
  }]);

})(window);
