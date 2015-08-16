/* global availity, jasmine, describe, beforeEach, it, module, spyOn, inject, expect */
describe('AvModal', function() {

  'use strict';

  var template =
    '<div data-av-modal>' +
      '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
        '<h4 class="modal-title">Modal title</h4>' +
      '</div>' +
      '<div class="modal-body">' +
        '<p>One fine body&hellip;</p>' +
      '</div>' +
      '<div class="modal-footer">' +
        '<button type="button" class="btn btn-default" ng-click="modalHide()">Close</button>' +
        '<button type="button" class="btn btn-primary" ng-lock="modalHide()">Save changes</button>' +
      '</div>' +
    '</div>';

  var modal;
  var AvModal;

  beforeEach(function() {
    module('availity');
    module('availity.ui');
  });

  availity.mock.directiveSpecHelper();

  beforeEach(inject(function (_AvModal_, $templateCache) {

    // jscs: disable
    $templateCache.put('ui/modal/modal-tpl.html', '<div class=\"modal" role=\"dialog\" tabindex=\"-1\"><div class=\"modal-dialog\"><div class=\"modal-content\" data-ng-transclude=\"\"></div></div></div>');
    // jscs: enable
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
    expect(availity.mock.sandboxEl.children('.modal').length).toBe(0);

  });

  it('should emit an event on show', function () {
    availity.mock.$scope.$on('show.av.modal', availity.mock.spy);
    modal.$element.modal('show');
    expect(availity.mock.spy).toHaveBeenCalled();
  });

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

    $.support.transition.end = false;

    availity.mock.$scope.$on('shown.av.modal', function() {

      expect('shown triggered').toBeDefined();
      expect(spyOnShown).toHaveBeenCalled();
      done();
    });

    modal.$element.modal('show');

  });

  it('should emit an event on hide', function () {
    availity.mock.$scope.$on('hide.av.modal', availity.mock.spy);
    modal.$element.modal('hide');
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

    $.support.transition.end = false;

    availity.mock.$scope.$on('hidden.av.modal', function() {
      expect('hidden event').toBeDefined();
      expect(spyOnHidden).toHaveBeenCalled();
      done();
    });

    modal.$element.modal('hide');

  });

});
