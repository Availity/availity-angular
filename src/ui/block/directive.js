import angular from 'angular';

import ngModule from '../module';
import { buildRegExp} from './utils';
import Base from '../base';

// Inspiration from https://github.com/McNull/angular-block-ui.
//
//  - Need npm compatible library
//  - Re-factor with better life-cyle hooks for starting and stopping animations

class BlockController extends Base {

  static $inject = ['$element', 'avBlockManager', 'avBlockConfig', '$attrs', '$scope', '$compile'];

  constructor(...args) {

    super(...args);


    // Expose the blockMessageClass attribute value on the scope
    this.av.$attrs.$observe('blockMessageClass', value => {
      this.av.$scope.$_blockMessageClass = value;
    });

    // Create the block instance
    // Prefix underscore to prevent integers:
    // https://github.com/McNull/angular-block-ui/pull/8

    this.instanceId = this.av.$attrs.avBlock || `_${this.av.$scope.$id}`;
    this.serviceInstance = this.av.avBlockManager.get(this.instanceId);

    if (this.instanceId === 'main') {
      this.blockNavigation();
    } else {
      // Locate the parent block instance
      const parentInstance = this.av.$element.inheritedData('av-block');

      if (parentInstance) {
        this.serviceInstance._parent = parentInstance;
      }
    }

    // Increase the reference count
    this.serviceInstance.addRef();

    // Expose the state on the scope

    this.av.$scope.$_blockState = this.serviceInstance.state();

    this.av.$scope.$watch('$_blockState.blocking', value => {
      // Set the aria-busy attribute if needed
      this.av.$element.attr('aria-busy', !!value);
      this.av.$element.toggleClass('av-block-visible', !!value);
    });

    this.av.$scope.$watch('$_blockState.blockCount > 0', value => {
      this.av.$element.toggleClass('av-block-active', !!value);
    });

    // If a pattern is provided assign it to the state

    const pattern = this.av.$attrs.blockPattern;

    if (pattern) {
      const regExp = buildRegExp(pattern);
      this.serviceInstance.pattern(regExp);
    }

    // Store a reference to the service instance on the element

    this.av.$element.data('av-block', this.serviceInstance);

  }

  moduleLoaded(name) {

    try {
      angular.module(name);
    } catch (ex) {
      return false;
    }

    return true;

  }

  registerLocationChange() {

    this.av.$scope.$on('$locationChangeStart', function(event) {

      if (this.serviceInstance.$_blockLocationChange && this.serviceInstance.state().blockCount > 0) {
        event.preventDefault();
      }

    });

    this.av.$scope.$on('$locationChangeSuccess', function() {
      this.serviceInstance.$_blockLocationChange = this.serviceInstance.blockBrowserNavigation;
    });
  }

  blockNavigation() {

    if (this.av.avBlockConfig.blockBrowserNavigation) {

      if (this.moduleLoaded('ngRoute')) {

        // After the initial content has been loaded we'll spy on any location
        // changes and discard them when needed.

        const fn = this.av.$scope.$on('$viewContentLoaded', () => {

          // Unhook the view loaded and hook a function that will prevent
          // location changes while the block is active.

          fn();
          this.registerLocationChange();

        });

      } else {
        this.registerLocationChange();
      }

    }
  }

  // Ensure the instance is released when the scope is destroyed
  $destroy() {
    this.serviceInstance.release();
    this.av.$element.data('av-block', null);
  }

  $postLink() {

    const $el = this.av.$compile('<av-block-container class="av-block-container"></av-block-container >')(this.av.$scope);
    this.av.$element.append($el);

    // If the element does not have the class 'av-block' set, we set the
    // default css classes from the config.

    if (!this.av.$element.hasClass('av-block')) {
      this.av.$element.addClass(this.av.avBlockConfig.cssClass);
    }
  }

}

class BlockDirective {

  constructor() {
    this.scope = {};
    this.restrict = 'AE';
  }

  controller($element, avBlockManager, avBlockConfig, $attrs, $scope, $compile) {
    return new BlockController($element, avBlockManager, avBlockConfig, $attrs, $scope, $compile);
  }

}

ngModule.directive('avBlock', () => new BlockDirective());

