/* global beforeEach, availity, expect, module, inject, describe, it */
describe('avSpacesBreadcrumb', function() {

  'use strict';

  var $location;

  beforeEach(function() {
    module('ui.router');
    module('availity');
    module('availity.ui');
    module('availity.ui.templates');
  });

  beforeEach(inject(function(_$location_) {
    $location = _$location_;
 }));

  availity.mock.directiveSpecHelper();
  var $el;

  describe('avSpacesBreadcrumbs', function() {

    it('should render breadcrumbs when space ID is in scope', function() {

      availity.mock.$httpBackend.expectGET('/api/sdk/platform/v1/spaces/99999').respond(200, {
        "id": "99999",
        "name": "Acme Texas"
      });

      $el = availity.mock.compileDirective('<div av-spaces-breadcrumbs space-id="99999" page-name="La Pagina"></div>');
      availity.mock.$httpBackend.flush();

      expect($.trim($el.find('li:eq(1)').text())).toBe('Acme Texas');

    });

    it('should NOT render breadcrumbs when space ID is out of scope', function() {

      $el = availity.mock.compileDirective('<div av-spaces-breadcrumbs page-name="La Pagina"></div>');

      expect($.trim($el.find('li:eq(1)').text())).toBe('La Pagina');

    });

    it('should render breadcrumbs when space ID is in location query params', function() {

      availity.mock.$httpBackend.expectGET('/api/sdk/platform/v1/spaces/99999').respond(200, {
        "id": "99999",
        "name": "Acme Texas"
      });

      $location.search('spaceId', '99999');

      $el = availity.mock.compileDirective('<div av-spaces-breadcrumbs page-name="La Pagina"></div>');
      availity.mock.$httpBackend.flush();

      expect($.trim($el.find('li:eq(1)').text())).toBe('Acme Texas');
      expect($.trim($el.find('a:eq(1)').attr('href'))).toBe('/public/apps/spaces/#/99999');

    });

  });
});
