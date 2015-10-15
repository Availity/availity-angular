/*global inject, describe, beforeEach, it, expect, module*/

describe('avCodesResource', function() {

  'use strict';

  var avCodesResource;
  var $httpBackend;

  var responseData = {'codes': [{'id': 1, 'value': 'hi'},{'id': 2, 'value': 'bye'}]};

  var exampleParams = {
    list: {'list': 'someList'},
    query: {'q': 'charizard'},
    offset: {'offset': 123},
    firstPage: {'page': 1},
    somePage: {'page': 5},
    everything: {'page': 5, 'list': 'someList', 'q': 'charizard'}
  };

  beforeEach(function() {

    module('availity');

    inject(function(_avCodesResource_, _$httpBackend_) {
      avCodesResource = _avCodesResource_;
      $httpBackend = _$httpBackend_;
    });

  });

  it('should exist', function() {
    expect(avCodesResource).toBeDefined();
  });

  describe('params', function() {

    it('should get list param', function() {
      $httpBackend.expect('GET','/api/v1/codes?list=someList').respond(200, responseData);
      avCodesResource.getCodes(exampleParams.list).then(function(data) {
        expect(data).toBeEqual({more: false, results: responseData.codes});
      });
      $httpBackend.flush();
    });

    it('should perform search', function() {
      $httpBackend.expect('GET','/api/v1/codes?q=charizard').respond(200, responseData);
      avCodesResource.getCodes(exampleParams.query).then(function(data) {
        expect(data).toBeEqual({more: false, results: responseData.codes});
      });
      $httpBackend.flush();
    });

    it('should get do offset param', function() {
      $httpBackend.expect('GET','/api/v1/codes?offset=123').respond(200, responseData);
      avCodesResource.getCodes(exampleParams.offset).then(function(data) {
        expect(data).toBeEqual({more: false, results: responseData.codes});
      });
      $httpBackend.flush();
    });

    it('should do page param', function() {
      $httpBackend.expect('GET','/api/v1/codes?offset=0').respond(200, responseData);
      avCodesResource.getCodes(exampleParams.firstPage).then(function(data) {
        expect(data).toBeEqual({more: false, results: responseData.codes});
      });
      $httpBackend.flush();

      $httpBackend.expect('GET','/api/v1/codes?offset=200').respond(200, responseData);
      avCodesResource.getCodes(exampleParams.somePage).then(function(data) {
        expect(data).toBeEqual({more: false, results: responseData.codes});
      });
      $httpBackend.flush();
    });

    it('should work with everything', function() {
      $httpBackend.expect('GET','/api/v1/codes?list=someList&offset=200&q=charizard').respond(200, responseData);
      avCodesResource.getCodes(exampleParams.everything).then(function(data) {
        expect(data).toBeEqual({more: false, results: responseData.codes});
      });
      $httpBackend.flush();
    });

  });

});
