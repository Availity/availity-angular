import moment from 'moment';
import _ from 'lodash';
import ngModule from './constants';
import Base from '../base';

class AvLocalStorageService extends Base {

  static $inject = ['$window'];

  constructor(...args) {
    super(...args);
    this.hasSupport;
  }
  supportsLocalStorage() {
    if (_.isUndefined(this.hasSupport)) {
      let hasSupport = false;
      try {
        const localStorage = this.av.$window.localStorage;
        if (!_.isUndefined(localStorage)) {
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
    return _.isUndefined(rawVal) ? rawVal : JSON.parse(rawVal);
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
      const regexString = _.isRegExp(searchKey) ? searchKey : new RegExp(searchKey);
      if (regexString) {
        const removeKeys = [];
        for (let i = 0, len = this.av.$window.localStorage.length; i < len; i++) {
          const thisKey = this.av.$window.localStorage.key(i);
          if (regexString.test(thisKey)) {
            removeKeys.push(thisKey);
          }
        }
        _.forEach(removeKeys, (key) => {
          this.removeVal(key);
        });
      }
    }
  }
}

ngModule.service('avLocalStorageService', AvLocalStorageService);

export default ngModule;
