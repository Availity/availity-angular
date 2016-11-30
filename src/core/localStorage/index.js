import moment from 'moment';
import _ from 'lodash';
import ngModule from './constants';
import Base from '../base';

class AvLocalStorageService extends Base {

  static $inject = ['$window'];

  constructor(...args) {
    super(...args);
  }
  supportsLocalStorage() {
    let hasSupport;
    return () => {
      if (_.isUndefined(hasSupport)) {
        try {
          hasSupport = false;
          if ( !_.isUndefined(this.av.$window.localStorage)) {
            const uid = moment().unix();
            this.av.$window.localStorage.setItem(uid, uid);
            hasSupport = this.av.$window.localStorage.getItem(uid) === uid.toString();
            this.av.$window.localStorage.removeItem(uid);
          }
        } catch (e) {
          hasSupport = false;
        }
      }
      return hasSupport;
    };
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
        const removeKeys = _.filter(_.keys(window.localStorage), (key) => {
          return regexString.test(key);
        });
        _.forEach(removeKeys, (key) => {
          this.removeVal(key);
        });
      }
    }
  }
}

ngModule.service('avLocalStorageService', AvLocalStorageService);

export default ngModule;
