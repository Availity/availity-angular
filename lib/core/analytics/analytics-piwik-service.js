(function(root) {
  'use strict';

  var availity = root.availity;

  var AnalyticsPiwikServiceFactory = function() {

    var PiwikAnalyticService = function() {};

    var proto = PiwikAnalyticService.prototype;

    proto.trackEvent = function(properties) {
      // PAQ requires that eventValue be an integer, see:
      // http://piwik.org/docs/event-tracking/
      if(properties.value) {
        var parsed = parseInt(properties.value, 10);
        properties.value = isNaN(parsed) ? 0 : parsed;
      }
      console.log('------------------------->_paq', root._paq);
      if (root._paq) {
        _paq.push(['trackEvent', properties.category, properties.event, properties.label, properties.value]);
      }
    };

    // proto.trackPageView  = functionl(url) {
    //   // $log.log('URL visited', url);
    // };

    return new PiwikAnalyticService();
  };

  availity.core.factory('piwikAnalyticService', AnalyticsPiwikServiceFactory);

})(window);
