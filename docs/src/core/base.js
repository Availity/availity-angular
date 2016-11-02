// Inspiration: https://github.com/seeden/angular-es6

function storeInjections(injected = [], instance, args, name = 'av') {

  const instanceInject = instance[name] = instance[name] || {};

  injected.forEach((injectName, index) => {
    instanceInject[injectName] = args[index];
  });

}

export default class Base {

  static $inject = [];

  constructor(...args) {
    storeInjections(this.constructor.$inject, this, args);
  }

}
