import angular from 'angular';
import _ from 'lodash';

import Base from '../base';

// example object
// config = {
//   animationName: {
//     elements: default self/children, if defined use .find
//     animation: String/object, function(element)
//     animationConfig: if animation not function, use as second argument
//     loop: loop count or true for infinite loop
//     useQueue: if False, will add ('finish', true) to each velocity call instead of letting them stack


//     watch: check if changed $onChanges
//     onEvent: listen element.on
//     angularEvent: listen scope.on
//     onLoad: fire animation on init, default is true if only one defined, and if no event specified

//     active: store the velocity promise here
//     activeCount: if loop is an integer, count iterations here
//   }
// }

class AvAnimationController extends Base {

  static $inject = ['$scope', '$element'];

  constructor(...args) {
    super(...args);
    this.options = {};
  }

  getElm(anim) {
    if (anim.elements) {
      return this.av.$element.find(anim.elements);
    }
    return this.av.$element.children().length > 0 ? this.av.$element.children() : this.av.$element;
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
    const elm = this.getElm(anim);

    if (angular.isFunction(anim.animation)) {
      // assume animation is a promised function
      Promise.resolve(anim.animation(elm))
      .then(() => {
        this.onComplete(anim);
      });
    } else if (angular.isString(anim.animation) || angular.isObject(anim.animation)){
      const config = this.buildConfig(anim);
      let start = elm;
      if (!anim.useQueue) {
        start = start.velocity('finish', true);
      }
      start.velocity(anim.animation, config);
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

  buildConfig(anim) {
    const config = angular.extend({}, anim.animationConfig);
    if (config.complete) {
      const self = this;
      const givenComplete = config.complete;
      config.complete = () => {
        Promise.resolve(givenComplete)
        .then(() => {
          self.onComplete(anim);
        });
      };
    } else {
      config.complete = ()=> {
        this.onComplete(anim);
      };
    }

    return config;
  }


  stopAll() {
    for (const key in this.options) {
      if (this.options.hasOwnProperty(key)) {
        this.stopAnimation(this.options[key]);
      }
    }
  }

  checkAnimate(newAnim, oldAnim) {
    if (newAnim && !oldAnim && newAnim.onLoad) {
      this.startAnimation(newAnim);
    }
  }

  refreshListeners(newAnim, oldAnim) {
    let createEvents = false;
    let removeEvents = false;
    let createAngEvents = false;
    let removeAngEvents = false;
    let createAngWatcher = false;
    let removeAngWatcher = false;

    if (newAnim && oldAnim) {
      // compare
      const changedEvent = newAnim.onEvent !== oldAnim.onEvent;
      const changedAng = newAnim.angularEvent !== oldAnim.angularEvent;
      const changedWatch = newAnim.watch !== oldAnim.watch;

      createEvents = changedEvent && !angular.isUndefined(newAnim.onEvent);
      removeEvents = changedEvent && !angular.isUndefined(oldAnim.onEvent);
      createAngEvents = changedAng && !angular.isUndefined(newAnim.angularEvent);
      removeAngEvents = changedAng && !angular.isUndefined(oldAnim.angularEvent);
      createAngWatcher = changedWatch && !angular.isUndefined(newAnim.watch);
      removeAngWatcher = changedWatch && !angular.isUndefined(oldAnim.watch);

    } else if (oldAnim) {
      // if only oldAnim passed in (newAnim would be undefined/false/etc) remove listeners
      removeEvents = !angular.isUndefined(oldAnim.onEvent);
      removeAngEvents = !angular.isUndefined(oldAnim.angularEvent);
      removeAngWatcher = !angular.isUndefined(oldAnim.watch);
    } else if (newAnim) {
      // if only new anim passed in, just create listeners
      createEvents = !angular.isUndefined(newAnim.onEvent);
      createAngEvents = !angular.isUndefined(newAnim.angularEvent);
      createAngWatcher = !angular.isUndefined(newAnim.watch);
    }

    if (removeEvents) {
      this.removeEventListener(oldAnim);
    }
    if (removeAngEvents) {
      this.removeAngularListener(oldAnim);
    }
    if (removeAngWatcher) {
      this.removeAngularWatcher(oldAnim);
    }
    if (createEvents) {
      this.addEventListener(newAnim);
    }
    if (createAngEvents) {
      this.addAngularListener(newAnim);
    }
    if (createAngWatcher) {
      this.addAngularWatcher(newAnim);
    }
  }

  addEventListener(anim) {
    (this.getElm(anim)).on(anim.onEvent, () => {
      this.startAnimation(anim);
    });
  }

  removeEventListener(anim) {
    (this.getElm(anim)).on(anim.onEvent, () => {
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
    anim.angularWatcher = this.av.$scope.$watch(anim.watch, () => {
      this.startAnimation(anim);
    });
  }
  removeAngularWatcher(anim) {
    anim.angularWatcher();
  }

  refreshConfig(newConfig) {
    const newOptions = {};
    const newKeys = Object.keys(newConfig);
    const oldKeys = Object.keys(this.options);

    const defaultAnim = {
      animation: 'transition.bounceIn',
      useQueue: false
    };
    defaultAnim.onLoad = newKeys.length === 1;

    const allKeys = _.union(newKeys, oldKeys);

    // refresh all listeners
    allKeys.forEach((key) => {
      const newAnim = newConfig[key] ? angular.extend({}, defaultAnim, newConfig[key]) : false;
      const oldAnim = this.options[key] ? angular.extend({}, defaultAnim, this.options[key]) : false;
      this.refreshListeners(newAnim, oldAnim);
      this.checkAnimate(newAnim, oldAnim);
      if (newAnim) {
        newOptions[key] = newAnim;
      }
    });
    this.options = newOptions;
  }

  $onChanges(changesObj) {
    // check for changes and re-create listeners or trigger animation
    if (changesObj && changesObj.animationConfig && changesObj.animationConfig.currentValue) {
      this.refreshConfig(changesObj.animationConfig.currentValue);
    }
  }

  $destroy() {
    this.stopAll();
  }
}

export default AvAnimationController;
