/* global availity, jasmine, describe, beforeEach, it, module, spyOn, inject, expect */
describe('AvModal', function() {

  'use strict';



  var template;
  var modal;
  var AvModal;
  var $q;

  beforeEach(function() {
    module('availity', 'availity.ui', 'availity.ui.templates');
  });

  availity.mock.directiveSpecHelper();

  beforeEach(inject(function (_AvModal_, $templateCache, _$q_) {

    $.support.transition = false;

    $q = _$q_;

    template  = $templateCache.get('ui/modal/tests/modal-fixture.html');

    AvModal = _AvModal_;

    modal = new AvModal({
      template: template,
      scope: availity.mock.$scope,
      container: '#sandbox'
    });

    availity.mock.flush();
    availity.mock.$scope.$digest();

  }));

  it('should call $.fn.modal when modal.show()', function() {

    var old = $.fn.modal;
    var spy = angular.extend(spyOn($.fn, 'modal'), old).and.callThrough();

    modal.show();
    availity.mock.flush();
    expect(spy).toHaveBeenCalledWith('show');

  });

  it('should destroy modal when scope is destroyed', function() {

    var spy = spyOn(modal, 'destroy').and.callThrough();
    availity.mock.$scope.$destroy();
    expect(spy).toHaveBeenCalled();

  });

  it('should cleanup modal dom fragments when calling modal.destroy()', function() {

    expect(availity.mock.sandboxEl.children('.modal').length).toBe(1);
    modal.destroy();
    availity.mock.flush();
    expect(availity.mock.sandboxEl.children('.modal').length).toBe(0);

  });

  it('should emit an event on show', function () {

    availity.mock.$scope.$on('show.av.modal', availity.mock.spy);
    modal.$element.modal('show');
    expect(availity.mock.spy).toHaveBeenCalled();

  });

  it('should resolve promise on show', function() {

    modal.show();
    availity.mock.flush();

    modal.hide().then(availity.mock.spy);
    availity.mock.$scope.$digest();

    expect(availity.mock.spy).toHaveBeenCalled();

  });

  it('should resolve promise on toggle', function() {

    modal.show();
    availity.mock.flush();

    modal.toggle().then(availity.mock.spy);
    availity.mock.$scope.$digest();

    expect(availity.mock.spy).toHaveBeenCalled();

  }),

  it('should emit an event on shown and call `options.onShown` callback', function (done) {

    var spyOnShown = jasmine.createSpy('onShown');

    modal = new AvModal({
      template: template,
      scope: availity.mock.$scope,
      container: '#sandbox',
      onShown: spyOnShown
    });

    availity.mock.flush();
    availity.mock.$scope.$digest();

    availity.mock.$scope.$on('shown.av.modal', function() {

      expect('shown triggered').toBeDefined();
      expect(spyOnShown).toHaveBeenCalled();
      done();
    });

    modal.$element.modal('show');

  });

  it('should emit event `hide.av.modal` on hide', function () {

    availity.mock.$scope.$on('hide.av.modal', availity.mock.spy);
    modal.$element.modal('hide');

    expect(availity.mock.spy).toHaveBeenCalled();

  });

  it('should resolve promise on hide', function() {

    modal.show();
    availity.mock.flush();

    modal.hide().then(availity.mock.spy);
    availity.mock.$scope.$digest();

    expect(availity.mock.spy).toHaveBeenCalled();

  });

  it('should resolve promise on hide when modal is NOT shown', function() {


    // Don't call modal.show() and promise should still resolve

    modal.hide().then(availity.mock.spy);
    availity.mock.$scope.$digest();

    expect(availity.mock.spy).toHaveBeenCalled();

  });

  it('should emit an event on hidden and call `options.onHidden` callback', function (done) {

    var spyOnHidden = jasmine.createSpy('onHidden');

    modal = new AvModal({
      template: template,
      scope: availity.mock.$scope,
      show: true,
      onHidden: spyOnHidden
    });
    availity.mock.flush();
    availity.mock.$scope.$digest();

    availity.mock.$scope.$on('hidden.av.modal', function() {
      expect('hidden event').toBeDefined();
      expect(spyOnHidden).toHaveBeenCalled();
      done();
    });

    modal.$element.modal('hide');

  });

});
