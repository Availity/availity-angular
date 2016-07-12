/* global inject, availity, beforeEach, expect, module, describe, it */

/* global inject, availity, beforeEach, expect, module, describe, it */

describe('avValBootstrapAdapter', function() {

  beforeEach(function() {
    module('availity', 'availity.ui', 'availity.ui.templates', function(avValProvider) {
      avValProvider.addRules({
        'default': {
          'lastName': {
            'size': {
              'min': 2,
              'max': 10,
              'message': 'Last name must be between 2 and 10 characters.'
            },
            'required': {
              'message': 'Last name is required.'
            }
          }
        }

      });
    });
  });

  availity.mock.directiveSpecHelper();

  let $form = null;
  let $el = null;
  let AV_BOOTSTRAP_ADAPTER = null;

  beforeEach(inject(function(_AV_BOOTSTRAP_ADAPTER_, _$templateCache_) {

    AV_BOOTSTRAP_ADAPTER = _AV_BOOTSTRAP_ADAPTER_;
    const templateCache = _$templateCache_;
    const template = templateCache.get('ui/validation/tests/adapter-bootstrap-fixture.html');

    $form = availity.mock.compileDirective(template);
    $el = $form.find('input[name="lastName"]');
  }));

  it('should NOT apply class .has-error to $pristine form', function() {
    expect($el.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).hasClass('has-error')).toBe(false);
  });

  it('should NOT apply class .has-error for valid input', function() {
    availity.mock.$scope.myForm.lastName.$setViewValue('lastName');

    availity.mock.$scope.$digest();

    expect($el.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).hasClass('has-error')).toBe(false);
    expect(availity.mock.$scope.myForm.lastName.$valid).toBe(true);
  });

  it('should apply class .has-error for invalid input', function() {
    availity.mock.$scope.myForm.lastName.$setViewValue('b');
    availity.mock.$scope.$digest();

    expect(availity.mock.$scope.myForm.lastName.$valid).toBe(false);
    expect($el.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).hasClass('has-error')).toBe(true);
    expect(availity.mock.$scope.myForm.$valid).toBe(false);
    expect($el.hasClass('ng-invalid')).toBe(true);
  });
});