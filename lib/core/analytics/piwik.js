import _ from 'lodash';
import $ from 'jquery';

import ngModule from '../module';
import '../utils';


class AvPiwikAnalyticsProvider {

  constructor() {
    this.siteId;
    this.enabled = false;
    this.customVariables = [];
  }

  enable(_enabled) {
    this.enabled = !!_enabled;
  }

  // can not push these items to `_paq` because it is defined
  // after page has loaded
  _setCustomVariable(index, valueName, value, scope){

    if (!index || isNaN(index)) {
      throw new Error('index must be a number');
    } else if (!valueName) {
      throw new Error('valueName must be declared');
    } else {
      this.customVariables.push(['setCustomVariable', index, valueName, value, scope]);
    }
  }

  setSiteID(_siteID) {
    this.enable(true);
    this.siteId = _siteID;
  }

  // allow the user to pass a array of visit variables
  setVisitVariables(items) {

    _.forEach(items, item => {
      this._setCustomVariable(item[0], item[1], item[2], 'visit');
    });

  }

  setPageVariables(index, name, value) {
    this._setCustomVariable(index, name, value, 'page');
  }

  $get(avAnalyticsUtils, avUsersResource, AV_ANALYTICS, $injector, $log, $q, $document, $location) {

    const that = this;

    class AvPiwikAnalytics {

      constructor() {
        window._paq = window._paq || [];
      }

      trackEvent(properties) {

        if (!window._paq) {
          $log.warn('Piwik object `_paq` not found in global scope');
          return $q.when(false);
        }

        // http://piwik.org/docs/event-tracking/
        //
        // PAQ requires that eventValue be an integer.
        // Check to make sure value is a number if not convert it to 0.
        //
        if (properties.value) {
          properties.value = avAnalyticsUtils.toNum(properties.event);
        }

        // check to make sure that data being sent to piwik is a string and not null, empty or undefined
        if (!avAnalyticsUtils.isValid(properties)) {
          $log.warn('Invalid properties being passed. Tracking info will not be sent.');
          return $q.when(false);
        }

        return $q.when(window._paq.push(['trackEvent', properties.category, properties.action || properties.event, properties.label, properties.value]));
      }

      trackPageView(url) {

        if (!window._paq) {
          $log.warn('Piwik object `_paq` not found in global scope');
          return $q.when(false);
        }

        return $q.when([
          window._paq.push(['setCustomUrl', url]),
          window._paq.push(['trackPageView', url])]
        );

      }

      init() {

        avUsersResource.me().then( user => window._paq.push(['setUserId', user.id]));

        if (!_.isFinite(that.siteId)) {
          $log.warn('Invalid Piwik Site Id.  Piwik analytics has been disabled.');
          return;
        }

        let url;

        if ($location.$$host === AV_ANALYTICS.ENV.PROD.DOMAIN) {
          url = AV_ANALYTICS.ENV.PROD.URL;
        } else {
          url = AV_ANALYTICS.ENV.QA.URL;
        }

        window._paq.push(['enableLinkTracking']);
        window._paq.push(['setTrackerUrl', `${url}piwik.php`]);
        window._paq.push(['setSiteId', that.siteId]);

        _.forEach(that.customVariables, function(variable) {
          window._paq.push(variable);
        });

        $.getScript(`${url}piwik.js`, function() {

        });

      }

      isEnabled() {
        return that.enabled && that.siteId;
      }

    }

    return new AvPiwikAnalytics();
  }
}

ngModule.provider('avPiwikAnalytics', AvPiwikAnalyticsProvider);

export default ngModule;


