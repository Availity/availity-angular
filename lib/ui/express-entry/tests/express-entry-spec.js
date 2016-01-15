/* global inject, describe, availity, it, expect, beforeEach, afterEach, module */

describe('express-entry', function() {
  'use strict';

  var $httpBackend;
  var providersService;
  var element;

  beforeEach(function() {
    module('availity', 'availity.ui');
  });

  availity.mock.directiveSpecHelper();

  var MARKUP = '<div data-express-entry provider-model="provider"></div>';
  var RESPONSE = {
    "totalCount": 1,
    "count": 50,
    "offset": 0,
    "limit": 50,
    "providers": [
      {
        "lastName": "Last",
        "firstName": "First"
      }
    ]
  };

  beforeEach(inject(function(_$httpBackend_, _providersService_) {
    $httpBackend = _$httpBackend_;
    providersService = _providersService_;
  }));

  it('should fetch providers', function() {
    $httpBackend.expectGET('ui/express-entry/express-entry-tpl.html').respond(200, 'something');
    $httpBackend.expectGET('/api/internal/v1/providers?limit=50&offset=0').respond(200, RESPONSE);
    element = availity.mock.compileDirective(MARKUP);
    $httpBackend.flush();
    expect(element.isolateScope().providerList.length).toBe(2);
  });

});
