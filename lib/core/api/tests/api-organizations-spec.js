/*global inject, module, describe, beforeEach, it, expect*/

describe('avOrganizationsResource', function() {

  'use strict';

  var avOrganizationsResource;
  var $httpBackend;

  var exampleParams = {params: {limit: 9001}};
  var responseData = [{a: 1, b: 2},{a: 1, b: 2}];

  beforeEach(function() {

    module('availity');

    inject(function(_$httpBackend_, _avOrganizationsResource_) {
      $httpBackend = _$httpBackend_;
      avOrganizationsResource = _avOrganizationsResource_;
    });

  });

  it('should exist', function() {
    expect(avOrganizationsResource).toBeDefined();
  });

  it('should be able to pass params', function() {
    $httpBackend.expect('GET','/api/v1/organizations?limit=9001').respond(200, responseData);
    avOrganizationsResource.getOrganizations(exampleParams).then(function(data) {
      expect(data).toBeEqual(responseData);
    });
    $httpBackend.flush();
  });

});
