/* global beforeEach, availity, expect, module, inject, describe, it */
describe('avSpacesBreadcrumb', function() {

  'use strict';

  var $state;
  var $rootScope;

  beforeEach(function() {
    module('ui.router');
    module('availity');
    module('availity.ui');
    module('availity.ui.templates');
  });

  availity.mock.directiveSpecHelper();
  var $el;

  describe('avSpacesBreadcrumbsDirective', function() {

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

  });
});
