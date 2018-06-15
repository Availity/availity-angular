/* global jasmine, describe, beforeEach, it, spyOn, inject, expect */

import $ from 'jquery';
import angular from 'angular';
import Tester from 'tester';

import template from './template.html';
import '../';

describe('AvModal', () => {

  const tester = new Tester();
  let modal;
  let AvModal;

  beforeEach(() => {
    angular.mock.module('availity', 'availity.ui');
  });

  tester.directive();

  beforeEach(inject(_AvModal_ => {

    $.support.transition = false;
    AvModal = _AvModal_;

    modal = new AvModal({
      template,
      scope: tester.$scope,
      container: '#sandbox'
    });

    tester.flush();

  }));

  it('should call $.fn.modal when modal.show()', () => {

    const old = $.fn.modal;
    const spy = angular.extend(spyOn($.fn, 'modal'), old).and.callThrough();

    modal.show();

    tester.flush();
    tester.$scope.$digest();

    expect(spy).toHaveBeenCalledWith('show');

  });

  it('should destroy modal when scope is destroyed', () => {

    const spy = spyOn(modal, 'destroy').and.callThrough();
    tester.$scope.$destroy();
    expect(spy).toHaveBeenCalled();

  });

  it('should cleanup modal dom fragments when calling modal.destroy()', () => {

    expect(tester.sandboxEl.children('.modal').length).toBe(1);
    modal.destroy();
    tester.flush();
    expect(tester.sandboxEl.children('.modal').length).toBe(0);

  });

  it('should emit an event on show', () => {

    tester.$scope.$on('show.av.modal', tester.spy);
    modal.$element.modal('show');
    expect(tester.spy).toHaveBeenCalled();

  });

  it('should resolve promise on show', () => {

    modal.show();
    tester.flush();

    modal.show().then(tester.spy);
    tester.flush();

    expect(tester.spy).toHaveBeenCalled();

  });

  it('should resolve promise on toggle', () => {

    modal.show();
    tester.flush();

    modal.toggle().then(tester.spy);
    tester.flush();

    expect(tester.spy).toHaveBeenCalled();

  });

  it('should emit an event on shown and call `options.onShown` callback', done => {

    const spyOnShown = jasmine.createSpy('onShown');

    modal = new AvModal({
      template,
      scope: tester.$scope,
      container: '#sandbox',
      onShown: spyOnShown
    });

    tester.flush();

    tester.$scope.$on('shown.av.modal', () => {

      expect('shown triggered').toBeDefined();
      expect(spyOnShown).toHaveBeenCalled();
      done();
    });

    modal.$element.modal('show');

  });

  it('should emit event `hide.av.modal` on hide', () => {

    tester.$scope.$on('hide.av.modal', tester.spy);
    modal.$element.modal('hide');

    expect(tester.spy).toHaveBeenCalled();

  });

  it('should resolve promise on hide', () => {

    modal.show();
    tester.flush();

    modal.hide().then(tester.spy);
    tester.flush();

    expect(tester.spy).toHaveBeenCalled();

  });

  it('should resolve promise on hide when modal is NOT shown', () => {

    // Don't call modal.show() and promise should still resolve

    modal.hide().then(tester.spy);
    tester.flush();

    expect(tester.spy).toHaveBeenCalled();

  });

  it('should emit an event on hidden and call `options.onHidden` callback', done => {

    const spyOnHidden = jasmine.createSpy('onHidden');

    modal = new AvModal({
      template,
      scope: tester.$scope,
      show: true,
      onHidden: spyOnHidden
    });
    tester.flush();

    tester.$scope.$on('hidden.av.modal', () => {
      expect('hidden event').toBeDefined();
      expect(spyOnHidden).toHaveBeenCalled();
      done();
    });

    modal.$element.modal('hide');

  });

  it('should instantiate a controller if specified', () =>{

    modal = new AvModal({
      template,
      scope: tester.$scope,
      controller: tester.spy
    });

    expect(tester.spy).toHaveBeenCalled();

  });

  it('should attach controller to scope if controllerAs is specified', () => {

    const controllerInstance = {};
    tester.spy.and.returnValue(controllerInstance);

    modal = new AvModal({
      template,
      scope: tester.$scope,
      controller: tester.spy,
      controllerAs: 'vm'
    });

    expect(tester.$scope.vm).toBe(controllerInstance);
  });

  it('should make locals available to be injected into the controller', () => {

    let controllerCalled = false;
    const expectedInjectedLocal = {};

    function MyController(localInjectedValue) {

      expect(localInjectedValue).toBe(expectedInjectedLocal);
      controllerCalled = true;
    }

    modal = new AvModal({
      template,
      scope: tester.$scope,
      controller: MyController,
      locals: {
        localInjectedValue: expectedInjectedLocal
      }
    });

    // Ensure the expect statement inside MyController was hit
    expect(controllerCalled).toBe(true);

  });

});
