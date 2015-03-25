/*global inject, module*/
describe('analyticsServices', function() {
  'use strict';

  // var analyticsServices;
  var foo;
  beforeEach(function() {
    
    angular.module('testApp', function () {})
    .config(function (analyticsServicesProvider) {
      console.log('name', 'value');
      analyticsServicesProvider.registerPlugins(['piwikAnalyticService']);
    });

    foo = 1;

    module('availity', 'testApp');

  });

  it('should register the defined plugin with angular', function(){
    expect(foo).toEqual(1);
  //   // console.log('---------------------------->test', angular);
  //   var $injector = angular.injector();
  //   expect($injector.get('piwikAnalyticService')).not.toBeUndefined();
  });

});