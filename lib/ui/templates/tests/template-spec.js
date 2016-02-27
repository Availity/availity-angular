/* global availity, describe, inject, it, beforeEach, expect, module*/

describe('avTemplateCache', function() {

  let $httpBackend;
  let avTemplateCache;

  beforeEach(function() {
    module('availity');
    module('availity.ui');
  });

  beforeEach(inject(function(_$httpBackend_, _avTemplateCache_) {
    $httpBackend = _$httpBackend_;
    avTemplateCache = _avTemplateCache_;
  }));

  availity.mock.serviceSpecHelper();


  const fixtures = {
    'default': '<div>hi</div>'
  };

  it('should respond with markup with option `template`', function() {

    const options = {template: fixtures.default};

    avTemplateCache.get(options).then(function(template) {
      expect(template).toBe(fixtures.default);
    });

    availity.mock.$scope.$apply();

  });

  it('should respond with markup with option `tempalteUrl`', function() {

    $httpBackend.expectGET('demo/tpl.html').respond(fixtures.default);

    const options = {templateUrl: 'demo/tpl.html'};

    avTemplateCache.get(options).then(function(template) {
      expect(template).toBe(fixtures.default);
    });

    $httpBackend.flush();
    availity.mock.$scope.$apply();

  });

});
