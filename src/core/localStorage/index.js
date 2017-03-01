import moment from 'moment';
import isRegExp from 'lodash.isregexp';

import ngModule from './constants';

class AvLocalStorageService {
  static $inject = ['$window'];
  constructor($window) {
    this.$window = $window;
    this.hasSupport;
  }
  supportsLocalStorage() {

    if (!this.hasSupport) {

      let hasSupport = false;
      try {

        const localStorage = this.$window.localStorage;
        if (localStorage) {
          const uid = moment().unix();

          localStorage.setItem(uid, uid);
          const testVal = localStorage.getItem(uid);
          hasSupport = testVal === uid.toString();

          localStorage.removeItem(uid);
        }
      } catch (e) {
        hasSupport = false;
      }

      this.hasSupport = hasSupport;
    }
    return this.hasSupport;
  }

  getVal(key) {
    if (this.supportsLocalStorage()) {
      return this.$window.localStorage.getItem(key);
    }
  }

  getObjVal(key) {
    const rawVal = this.getVal(key);
    return rawVal ? rawVal : JSON.parse(rawVal);
  }

  setVal(key, value) {
    if (this.supportsLocalStorage()) {
      this.$window.localStorage.setItem(key, value);
    }
  }

  removeVal(key) {
    if (this.supportsLocalStorage()) {
      this.$window.localStorage.removeItem(key);
    }
  }

  removeKeys(searchKey) {

    if (this.supportsLocalStorage()) {

      const regexString = isRegExp(searchKey) ? searchKey : new RegExp(searchKey);
      if (regexString) {

        const removeKeys = [];
        const length = this.$window.localStorage.length;
        for (let i = 0; i < length; i++) {
          const thisKey = this.$window.localStorage.key(i);
          if (regexString.test(thisKey)) {
            removeKeys.push(thisKey);
          }
        }

        removeKeys.forEach(key => {
          this.removeVal(key);
        });

      }

    }

  }

}

ngModule.service('avLocalStorageService', AvLocalStorageService);

export default ngModule;
