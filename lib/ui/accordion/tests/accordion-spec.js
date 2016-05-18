/* global beforeEach, availity, expect, module, inject, describe, it */
describe('avAccordion', function () {
  'use strict';

  var $rootScope;

  beforeEach(function() {
    module('availity');
    module('availity.ui');
    module('availity.ui.templates');
  });

  availity.mock.directiveSpecHelper();

  beforeEach(inject(function(_$rootScope_) {
    $rootScope = _$rootScope_;
  }));

  describe('AvAccordionController', function () {

    var ctrl;
    beforeEach(inject(function($controller) {
      ctrl = $controller('AvAccordionController', { $rootScope: $rootScope });
    }));

    describe('addGroup', function() {
      it('adds a the specified panel to the collection', function() {
        var group1, group2;
        ctrl.addGroup(group1 = $rootScope.$new());
        ctrl.addGroup(group2 = $rootScope.$new());
        expect(ctrl.groups.length).toBe(2);
        expect(ctrl.groups[0]).toBe(group1);
        expect(ctrl.groups[1]).toBe(group2);
      });
    });

    describe('removeGroup', function() {
      it('should remove the specified panel', function () {
        var group1, group2, group3;
        ctrl.addGroup(group1 = $rootScope.$new());
        ctrl.addGroup(group2 = $rootScope.$new());
        ctrl.addGroup(group3 = $rootScope.$new());
        ctrl.removeGroup(group2);
        expect(ctrl.groups.length).toBe(2);
        expect(ctrl.groups[0]).toBe(group1);
        expect(ctrl.groups[1]).toBe(group3);
      });
      it('should ignore remove of non-existing panel', function () {
        var group1, group2;
        ctrl.addGroup(group1 = $rootScope.$new());
        ctrl.addGroup(group2 = $rootScope.$new());
        expect(ctrl.groups.length).toBe(2);
        ctrl.removeGroup({});
        expect(ctrl.groups.length).toBe(2);
      });
    });
  });

 describe('accordion-group', function () {

    var scope, $compile;
    var element, groups;
    var findGroupLink = function (index) {
      return groups.eq(index).find('a').eq(0);
    };
    var findGroupBody = function (index) {
      return groups.eq(index).find('.panel-collapse').eq(0);
    };


    beforeEach(inject(function(_$rootScope_, _$compile_) {
      scope = _$rootScope_;
      $compile = _$compile_;
    }));

    afterEach(function () {
      element = groups = scope = $compile = undefined;
    });

    describe('with static panels', function () {
      beforeEach(function () {
        var tpl =
          '<div av-accordion>' +
          '<div av-accordion-group heading="title 1">Content 1</div>' +
          '<div av-accordion-group heading="title 2">Content 2</div>' +
          '</div>';
        element = angular.element(tpl);
        $compile(element)(scope);
        scope.$digest();
        groups = element.find('.panel');
      });
      afterEach(function() {
        element.remove();
      });

      it('should create accordion panels with content', function () {
        expect(groups.length).toEqual(2);
        expect(findGroupLink(0).text().trim()).toEqual('title 1');
        expect(findGroupBody(0).text().trim()).toEqual('Content 1');
        expect(findGroupLink(1).text().trim()).toEqual('title 2');
        expect(findGroupBody(1).text().trim()).toEqual('Content 2');
      });

      it('should change selected element on click', function () {
        findGroupLink(0).click();
        scope.$digest();
        expect(findGroupBody(0).scope().isOpen).toBe(true);

        findGroupLink(1).click();
        scope.$digest();
        expect(findGroupBody(1).scope().isOpen).toBe(true);
      });

      it('should toggle element on click', function() {
        findGroupLink(0).click();
        scope.$digest();
        expect(findGroupBody(0).scope().isOpen).toBe(true);
        findGroupLink(0).click();
        scope.$digest();
        expect(findGroupBody(0).scope().isOpen).toBe(false);
      });
    });

   describe('with dynamic panels', function () {
      var model;
      beforeEach(function () {
        var tpl =
          '<div av-accordion>' +
          '<div av-accordion-group ng-repeat="group in groups" heading="{{group.name}}">{{group.content}}</div>' +
          '</div>';
        element = angular.element(tpl);
        model = [
          {name: 'title 1', content: 'Content 1'},
          {name: 'title 2', content: 'Content 2'}
        ];

        $compile(element)(scope);
        scope.$digest();
      });

      it('should have no panels initially', function () {
        groups = element.find('.panel');
        expect(groups.length).toEqual(0);
      });

      it('should have a panel for each model item', function() {
        scope.groups = model;
        scope.$digest();
        groups = element.find('.panel');
        expect(groups.length).toEqual(2);
        expect(findGroupLink(0).text().trim()).toEqual('title 1');
        expect(findGroupBody(0).text().trim()).toEqual('Content 1');
        expect(findGroupLink(1).text().trim()).toEqual('title 2');
        expect(findGroupBody(1).text().trim()).toEqual('Content 2');
      });

      it('should react properly on removing items from the model', function () {
        scope.groups = model;
        scope.$digest();
        groups = element.find('.panel');
        expect(groups.length).toEqual(2);

        scope.groups.splice(0,1);
        scope.$digest();
        groups = element.find('.panel');
        expect(groups.length).toEqual(1);
      });
    });
  });
});
