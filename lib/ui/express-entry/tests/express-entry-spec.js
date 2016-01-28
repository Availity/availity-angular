/* global inject, describe, availity, it, expect, beforeEach, module */

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

  it('should initialize properly and fetch providers', function() {
    $httpBackend.expectGET('ui/express-entry/express-entry-tpl.html').respond(200, 'something');
    $httpBackend.expectGET('/api/internal/v1/providers?limit=50&offset=0').respond(200, RESPONSE);
    element = availity.mock.compileDirective(MARKUP);
    $httpBackend.flush();
    expect(element.isolateScope().providerList.length).toBe(2);
  });

  it('should generate the correct provider name', function() {
    $httpBackend.expectGET('ui/express-entry/express-entry-tpl.html').respond(200, 'something');
    $httpBackend.expectGET('/api/internal/v1/providers?limit=50&offset=0').respond(200, RESPONSE);
    element = availity.mock.compileDirective(MARKUP);
    $httpBackend.flush();
    expect(element.isolateScope().providerList[0].providerName).toBe("Last, First");
  });

  it('should generate the correct provider business name', function() {
    var BUSINESS_NAME = {
    "totalCount": 1,
    "count": 50,
    "offset": 0,
    "limit": 50,
    "providers": [
      {
        "businessName": "Provider Business Name"
      }
    ]
  };
    $httpBackend.expectGET('ui/express-entry/express-entry-tpl.html').respond(200, 'something');
    $httpBackend.expectGET('/api/internal/v1/providers?limit=50&offset=0').respond(200, BUSINESS_NAME);
    element = availity.mock.compileDirective(MARKUP);
    $httpBackend.flush();
    expect(element.isolateScope().providerList[0].providerName).toBe("Provider Business Name");
  });

  it('should fetch the correct provider on click', function() {
    $httpBackend.expectGET('ui/express-entry/express-entry-tpl.html').respond(200, 'something');
    $httpBackend.expectGET('/api/internal/v1/providers?limit=50&offset=0').respond(200, RESPONSE);
    element = availity.mock.compileDirective(MARKUP);
    $httpBackend.flush();
    var provider = {
      "lastName": "Unit",
      "firstName": "Test"
    };
    var $event = {
      target: {
        localName: 'tr'
      }
    };
    element.isolateScope().onProviderClick(provider, $event);
    expect(element.isolateScope().providerModel).toEqual(provider);
  });

  it('should fetch more providers on scroll', function() {
    $httpBackend.expectGET('ui/express-entry/express-entry-tpl.html').respond(200, 'something');
    $httpBackend.expectGET('/api/internal/v1/providers?limit=50&offset=0').respond(200, RESPONSE);
    element = availity.mock.compileDirective(MARKUP);
    $httpBackend.flush();
    $httpBackend.expectGET('/api/internal/v1/providers?limit=50&offset=50').respond(200, RESPONSE);
    element.isolateScope().onProviderScroll();
    $httpBackend.flush();
    expect(element.isolateScope().providerList.length).toBe(3);
  });

  it('should uncollapse the dropdown', function() {
    $httpBackend.expectGET('ui/express-entry/express-entry-tpl.html').respond(200, 'something');
    $httpBackend.expectGET('/api/internal/v1/providers?limit=50&offset=0').respond(200, RESPONSE);
    element = availity.mock.compileDirective(MARKUP);
    $httpBackend.flush();
    element.isolateScope().toggleCollapsed();
    expect(element.isolateScope().collapsed).toBe(false);
  });

});
