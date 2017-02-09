import moment from 'moment';
import isRegExp from 'lodash.isregexp';

import ngModule from './constants';

class AvLocalStorageService {

  constructor($window) {
    this.av = { $window };
    this.hasSupport;
  }
  supportsLocalStorage() {

    if (!this.hasSupport) {

      let hasSupport = false;
      try {

        const localStorage = this.av.$window.localStorage;
        if (!localStorage) {
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
      return this.av.$window.localStorage.getItem(key);
    }
  }

  getObjVal(key) {
    const rawVal = this.getVal(key);
    return rawVal ? rawVal : JSON.parse(rawVal);
  }

  setVal(key, value) {
    if (this.supportsLocalStorage()) {
      this.av.$window.localStorage.setItem(key, value);
    }
  }

  removeVal(key) {
    if (this.supportsLocalStorage()) {
      this.av.$window.localStorage.removeItem(key);
    }
  }

  removeKeys(searchKey) {

    if (this.supportsLocalStorage()) {

      const regexString = isRegExp(searchKey) ? searchKey : new RegExp(searchKey);
      if (regexString) {

        const removeKeys = [];
        for (let i = 0, len = this.av.$window.localStorage.length; i < len; i++) {
          const thisKey = this.av.$window.localStorage.key(i);
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
