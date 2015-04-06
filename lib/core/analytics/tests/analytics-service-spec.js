/*global availity, beforeEach, expect, module, describe, it */
describe('analyticsServices', function() {
  'use strict';

  var foo;

  beforeEach(function() {
    module('availity', function(analyticsServicesProvider) {
       analyticsServicesProvider.registerPlugins(['piwikAnalyticService', 'splunkAnalyticService']);
       foo = analyticsServicesProvider.config;
       // bar = analyticsServicesProvider.trackEvent(properties);
    });
  });

  availity.mock.directiveSpecHelper();

  it('should register the defined plugin with angular', function(){
    expect(foo.plugins[0]).toEqual('piwikAnalyticService');
    expect(foo.plugins[1]).toEqual('splunkAnalyticService');
    expect(foo.plugins.length).toEqual(2);
  });

  // it('should add a track event to the array', function(){
  //   var bar = 
  //   expect(bar.length).toEqual(1);
  // });

});