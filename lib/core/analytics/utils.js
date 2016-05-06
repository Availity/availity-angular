import _ from 'lodash';
import module from '../module';
import utils from '../utils';

module.factory('avAnalyticsUtils', (AV_ANALYTICS, $log) => {

  class AnalyticsUtils {

    getProperties(attributes) {

      const self = this;
      const props = {};

      _.forEach(attributes, function(value, key) {
        if (self.isValidAttribute(key) && self.isNotIgnored(key)) {
          const result = self.getAttribute(key, value);
          props[result.key] = result.value;
        }
      });

      return props;
    }

    // Function detects external links in order to allow the analytics framework to run
    // before the browser follows a link.
    //
    //    - target="_self" - This opens an anchor in the same frame
    //    - target="_parent" - Opens the in the next level up of a frame if they were nested to inside one another
    //    - target="_top" - Opens the link as top document in the browser window
    //    - target="_blank" - Opens link in new tab new tab
    //
    isExternalLink(attrs) {
      return attrs.href && !attrs.ngClick;
    }

    isNotIgnored(key) {
      const ignored = _.includes(AV_ANALYTICS.IGNORE, key);
      return !ignored;
    }

    isValidAttribute(key) {
      return AV_ANALYTICS.PRE_FIX.test(key);
    }

    lowercase(str) {
      return str.substr(0, 1).toLowerCase() + str.substr(1);
    }

    getAttribute(key, value) {

      const simpleKey = key.match(AV_ANALYTICS.PRE_FIX);

      if (simpleKey && simpleKey[1]) {
        return {
          key: this.lowercase(simpleKey[1]),
          value
        };
      }
    }

    toNum(value) {
      const parsed = parseInt(value, 10);
      return isNaN(parsed) ? 0 : parsed;
    }

    isValid(trackingValues) {

      let valid = true;

      if (trackingValues.value || trackingValues.value === 0) {
        delete trackingValues.value;
      }

      _.forEach(trackingValues, (key, value) => {
        if (utils.isBlank(value) || _.isUndefined(value)) {
          $log.warn(`The analytic tracking value for ${key.toUpperCase()} is not defined.`);
          valid = false;
        }
      });

      return valid;
    }

  }

  return new AnalyticsUtils();

});

