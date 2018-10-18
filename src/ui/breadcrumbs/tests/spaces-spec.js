/* global beforeEach, expect, module, inject, describe, it*/

import angular from 'angular';
import $ from 'jquery';
import Tester from 'tester';
import '@uirouter/angularjs';

import '../';

describe('avSpacesBreadcrumbs', () => {

  let $location;

  const tester = new Tester();

  beforeEach(() => {
    angular.mock.module('ui.router', 'availity', 'availity.ui');
  });

  tester.directive();

  beforeEach(inject(_$location_ => {
    $location = _$location_;
  }));


  let $el;

  it('should render breadcrumbs when space ID is in scope', () => {

    tester.$httpBackend.expectGET(/\/api\/sdk\/platform\/v1\/spaces\/99999\?sessionBust=\d+/).respond(200, {
      'id': '99999',
      'name': 'Acme Texas'
    });

    $el = tester.compileDirective('<div av-spaces-breadcrumbs space-id="99999" page-name="La Pagina"></div>');
    tester.$httpBackend.flush();

    expect($.trim($el.find('li:eq(1)').text())).toBe('Acme Texas');

  });

  it('should NOT render breadcrumbs when space ID is out of scope', () => {

    $el = tester.compileDirective('<div av-spaces-breadcrumbs page-name="La Pagina"></div>');
    expect($.trim($el.find('li:eq(1)').text())).toBe('La Pagina');

  });

  it('should render breadcrumbs when space ID is in location query params', () => {

    tester.$httpBackend.expectGET(/\/api\/sdk\/platform\/v1\/spaces\/99999\?sessionBust=\d+/).respond(200, {
      'id': '99999',
      'name': 'Acme Texas'
    });

    $location.search('spaceId', '99999');

    $el = tester.compileDirective('<div av-spaces-breadcrumbs></div>');
    tester.$httpBackend.flush();

    expect($.trim($el.find('li:eq(1)').text())).toBe('Acme Texas');
    expect($.trim($el.find('a:eq(1)').attr('href'))).toBe('/public/apps/spaces/#/99999');

  });

  it('should render url from space when useSpaceUrl option set to true', () => {
    tester.$httpBackend.expectGET(/\/api\/sdk\/platform\/v1\/spaces\/99999\?sessionBust=\d+/).respond(200, {
      'id': '99999',
      'name': 'Acme Texas',
      'link': {
        'url': '/public/apps/my-application'
      }
    });

    $location.search('spaceId', '99999');

    $el = tester.compileDirective('<div av-spaces-breadcrumbs use-space-url="true"></div>');
    tester.$httpBackend.flush();

    expect($.trim($el.find('a:eq(1)').attr('href'))).toBe('/public/apps/my-application');
  });
});
