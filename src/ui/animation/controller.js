import angular from 'angular';
import Base from '../base';

// example
// animations: [
//   {
//     animation: String/object, function(element)
//     animationConfig: if animation not function, use as second argument
//     loop: loop count or true for infinite loop
//     useQueue: if False, will add ('finish', true) to each velocity call instead of letting them stack


//     watch: check if changed $onChanges
//     onEvent: listen element.on
//     angularEvent: listen scope.on
//     onLoad: fire animation on init, default is true if only one defined, and if no event specified
//     active: boolean if active
//     activeCount: if loop is an integer, count iterations here
//   }
// ]

class AvAnimationController extends Base {

  static $inject = ['$scope', '$element'];

  constructor(...args) {
    super(...args);
    this.options = [];
    this.elms = this.av.$element.children().length > 0 ? this.av.$element.children() : this.av.$element;
    this.hasRegisteredElms = false;
  }

  registerElm(newElement) {
    if (!this.hasRegisteredElms) {
      this.elms = newElement;
      this.hasRegisteredElms = true;
    } else {
      this.elms = this.elms.add(newElement);
    }
  }

  deregisterElm(removedElelment) {
    if (this.hasRegisteredElms) {
      this.elms = this.elms.not(removedElelment);
    }
  }

  startAnimation(anim) {
    if (!angular.isUndefined(anim.loop) && ((angular.isNumber(anim.loop) && isFinite(anim.loop)) || ( typeof anim.loop === 'boolean' && anim.loop))) {
      anim.activeCount = anim.loop;
    }
    anim.active = true;
    this.runAnimation(anim);
  }

  stopAnimation(anim) {
    anim.active = false;
  }

  runAnimation(anim) {
    if (angular.isFunction(anim.animation)) {
      // assume animation is a promised function
      Promise.resolve(anim.animation(this.elms))
      .then(() => {
        this.onComplete(anim);
      });
    } else if (angular.isString(anim.animation) || angular.isObject(anim.animation)){
      let start = this.elms;
      if (!anim.useQueue) {
        start = start.velocity('stop', true).velocity('reverse');
      }
      start.velocity(anim.animation, anim.animationConfig);
    }
  }

  onComplete(anim) {
    // if still active and activeCount is set to # or True
    if (anim.active && anim.activeCount) {
      if (angular.isNumber(anim.activeCount) && anim.activeCount >= 0) {
        anim.activeCount --;
        anim.active = anim.activeCount >= 0;
      }
    } else {
      anim.active = false;
    }
    // if active, run animation again
    if (anim.active) {
      this.runAnimation(anim);
    }
  }

  stopAll() {
    this.options.forEach((anim) => {
      this.stopAnimation(anim);
    });
  }

  addListeners(anim) {
    if (!angular.isUndefined(anim.onEvent)) {
      this.addEventListener(anim);
    }
    if (!angular.isUndefined(anim.angularEvent)) {
      this.addAngularListener(anim);
    }
    if (!angular.isUndefined(anim.watch)) {
      this.addAngularWatcher(anim);
    }
  }
  removeListeners(anim) {
    if (!angular.isUndefined(anim.onEvent)) {
      this.removeEventListener(anim);
    }
    if (!angular.isUndefined(anim.angularEvent)) {
      this.removeAngularListener(anim);
    }
    if (!angular.isUndefined(anim.watch)) {
      this.removeAngularWatcher(anim);
    }
  }

  addEventListener(anim) {
    this.elms.on(anim.onEvent, () => {
      this.startAnimation(anim);
    });
  }

  removeEventListener(anim) {
    this.elms.on(anim.onEvent, () => {
      this.startAnimation(anim);
    });
  }

  addAngularListener(anim) {
    anim.angularEventListener = this.av.$scope.$on(anim.angularEvent, () => {
      this.startAnimation(anim);
    });
  }

  removeAngularListener(anim) {
    if (anim.angularEventListener) {
      anim.angularEventListener();
    }
  }

  addAngularWatcher(anim) {
    anim.angularWatcher = this.av.$scope.$watch(anim.watch, (newVal, oldVal) => {
      if (!angular.equals(newVal, oldVal)) {
        this.startAnimation(anim);
      }
    });
  }
  removeAngularWatcher(anim) {
    anim.angularWatcher();
  }

  buildOptions(newConfig) {
    this.options.forEach((anim) => {
      this.stopAnimation(anim);
      this.removeListeners(anim);
    });
    this.options = [];

    const checkedNewConfig = angular.isArray(newConfig) ? newConfig : [];
    if (angular.isObject(newConfig)) {
      checkedNewConfig.push(newConfig);
    }
    if (angular.isString(newConfig)) {
      checkedNewConfig.push({
        animation: newConfig
      });
    }

    // if only one animation is defined, and its not triggered by any events, its default value is true
    if (checkedNewConfig.length === 1 && angular.isUndefined(checkedNewConfig[0].onLoad)) {
      checkedNewConfig[0].onLoad = angular.isUndefined(checkedNewConfig[0].onEvent) &&
      angular.isUndefined(checkedNewConfig[0].angularEvent);
    }

    checkedNewConfig.forEach((newAnim) => {
      this.buildConfig(newAnim);
      this.addListeners(newAnim);
      this.options.push(newAnim);
    });
  }

  buildConfig(anim) {
    anim.animationConfig = anim.animationConfig || {};
    // if (angular.isUndefined(anim.animationConfig.queue)) {
    //   anim.animationConfig.queue = true;
    // }
    if (anim.animationConfig.complete) {
      const self = this;
      const givenComplete = anim.animationConfig.complete;
      anim.animationConfig.complete = () => {
        Promise.resolve(givenComplete)
        .then(() => {
          self.onComplete(anim);
        });
      };
    } else {
      anim.animationConfig.complete = ()=> {
        this.onComplete(anim);
      };
    }
  }

  $postLink() {
    this.options.forEach((anim) => {
      if (anim.onLoad) {
        this.startAnimation(anim);
      }
    });
  }

  $onChanges(changesObj) {
    // check for changes and re-create listeners or trigger animation
    if (changesObj &&
      changesObj.animationConfig &&
      changesObj.animationConfig.currentValue &&
      !angular.equals(changesObj.animationConfig.currentValue, changesObj.animationConfig.previousValue)) {
      this.buildOptions(angular.copy(changesObj.animationConfig.currentValue));
    }
  }

  $destroy() {
    this.stopAll();
  }
}

export default AvAnimationController;
