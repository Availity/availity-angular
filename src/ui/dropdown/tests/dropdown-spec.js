beforeEach(inject((_$httpBackend_) => {
  $httpBackend = _$httpBackend_;
}));


describe('$ngModelController', () => {

  it('should be $pristine on load', () => {

    tester.$scope.demo = {};
    tester.$scope.demo.selections = ['first', 'second', 'third'];
    tester.$scope.demo.selected = null;

    $el = tester.compileDirective(fixtures.default);
    tester.flush();

    expect($el.data('$ngModelController').$pristine).toBe(true);

    // this should update the model and control state. this test is here
    // just to demonstrate the behavior and refresh our memory
    $el.trigger('change');
    expect($el.data('$ngModelController').$pristine).toBe(false);
    expect($el.data('$ngModelController').$dirty).toBe(true);

  });
});

describe('models', () => {

  it('should update when type is array', () => {

    tester.$scope.demo = {};
    tester.$scope.demo.selections = ['first', 'second', 'third'];
    tester.$scope.demo.selected = 'first';

    $el = tester.compileDirective(fixtures.default);

    tester.flush();

    tester.$scope.demo.selected = 'second';
    tester.$scope.$apply();
    tester.flush();
    expect($el.select2('val')).toBe('1');

  });

  it('should update when types are objects', () => {

    tester.$scope.demo = {};
    tester.$scope.demo.selections = [
      {
        id: 1,
        value: 'first'
      },
      {
        id: 2,
        value: 'second'
      },
      {
        id: 3,
        value: 'third'
      }
    ];
    tester.$scope.demo.selected = tester.$scope.demo.selections[0];

    $el = tester.compileDirective(fixtures.default);

    tester.flush();

    tester.$scope.demo.selected = tester.$scope.demo.selections[1];
    tester.$scope.$apply();
    tester.flush();
    expect($el.select2('val')).toBe('1');

  });

  it('should update when types are ints for multiselect', () => {

    tester.$scope.demo = {};
    tester.$scope.demo.selections = [
      {
        id: 1,
        value: 'first'
      },
      {
        id: 2,
        value: 'second'
      },
      {
        id: 3,
        value: 'third'
      }
    ];
    tester.$scope.demo.selected = tester.$scope.demo.selections[0];

    $el = tester.compileDirective(fixtures.multiple);

    tester.flush();

    tester.$scope.demo.selected = [1, 2];
    tester.$scope.$apply();
    tester.flush();
    expect($el.select2('val')).toEqual(['1', '2']);

  });

  it('should update when types are objects for multiselect', () => {

    tester.$scope.demo = {};
    tester.$scope.demo.selections = [
      {
        id: 1,
        value: 'first'
      },
      {
        id: 2,
        value: 'second'
      },
      {
        id: 3,
        value: 'third'
      }
    ];
    tester.$scope.demo.selected = tester.$scope.demo.selections[0];

    $el = tester.compileDirective(fixtures.multiple);

    tester.flush();

    tester.$scope.demo.selected = [tester.$scope.demo.selections[1], tester.$scope.demo.selections[2]];
    tester.$scope.$apply();
    tester.flush();
    expect($el.select2('val')).toEqual(['1', '2']);

  });

  it('should support null values', () => {

    tester.$scope.demo = {};
    tester.$scope.demo.selections = [
      {
        id: 1,
        value: 'first'
      },
      {
        id: 2,
        value: 'second'
      },
      {
        id: 3,
        value: 'third'
      }
    ];
    tester.$scope.demo.selected = tester.$scope.demo.selections[0];

    $el = tester.compileDirective(fixtures.default);

    tester.flush();

    tester.$scope.demo.selected = null;
    tester.$scope.$apply();
    tester.flush();
    expect($el.select2('val')).toBe('');

  });

});

describe('query', () => {

  beforeEach(inject(() => {

    tester.$scope.demo = {};
    tester.$scope.demo.selected = null;
    tester.$scope.demo.myQuery = () => {};
    tester.$scope.demo.myFormatResult = () => {};

    spyOn(tester.$scope.demo, 'myQuery').and.callFake(() => avCodesResource.getCodes(fixtures.params));
    spyOn(tester.$scope.demo, 'myFormatResult').and.callFake(code => code.value);

  }));

  it('should correctly setup up the DOM using hidden input', () => {

    $el = tester.compileDirective(fixtures.remote);
    tester.flush();
    expect($el.siblings().is('div.select2-container')).toBeDefined();

  });

  it('should correctly setup up the DOM using hidden input for multiple', () => {

    $el = tester.compileDirective(fixtures.remoteMultiple);
    tester.flush();
    expect($el.siblings().is('div.select2-container')).toBeDefined();

  });

  it('should NOT have results', () => {

    $el = tester.compileDirective(fixtures.remote);
    tester.flush();
    expect($('.select2-result').length).toEqual(0);

  });

  it('should NOT have results for multiple', () => {

    $el = tester.compileDirective(fixtures.remoteMultiple);
    tester.flush();
    expect($('.select2-result').length).toEqual(0);

  });

  it('should query results', () => {

    $el = tester.compileDirective(fixtures.ajax);
    tester.flush();
    $el.select2('open');
    $el.select2('search', 'charizard');
    $httpBackend.expect('GET', '/api/v1/codes?list=someList&offset=0&q=charizard').respond(200, fixtures.remoteResponse);
    $httpBackend.flush();
    expect(tester.$scope.demo.myQuery).toHaveBeenCalled();

  });

  it('should query results for multiple', () => {

    $el = tester.compileDirective(fixtures.ajaxMultiple);
    tester.flush();
    $el.select2('open');
    $el.select2('search', 'charizard');
    $httpBackend.expect('GET', '/api/v1/codes?list=someList&offset=0&q=charizard').respond(200, fixtures.remoteResponse);
    $httpBackend.flush();
    expect(tester.$scope.demo.myQuery).toHaveBeenCalled();

  });

  it('should format results', () => {

    $el = tester.compileDirective(fixtures.ajax);
    tester.flush();

    $el.select2('open');
    $el.select2('data', fixtures.remoteResponse.codes[0]);
    $httpBackend.expect('GET', '/api/v1/codes?list=someList&offset=0&q=charizard').respond(200, fixtures.remoteResponse);
    $httpBackend.flush();
    expect(tester.$scope.demo.myFormatResult).toHaveBeenCalled();

  });

  it('should format results for multiple', () => {

    $el = tester.compileDirective(fixtures.ajaxMultiple);
    tester.flush();

    $el.select2('open');
    $el.select2('data', fixtures.remoteResponse.codes[0]);
    $httpBackend.expect('GET', '/api/v1/codes?list=someList&offset=0&q=charizard').respond(200, fixtures.remoteResponse);
    $httpBackend.flush();
    expect(tester.$scope.demo.myFormatResult).toHaveBeenCalled();

  });

  it('should update model', () => {

    $el = tester.compileDirective(fixtures.ajax);
    tester.flush();

    const validValue = fixtures.remoteResponse.codes[0];
    validValue.id = '1';

    const event = new $.Event('change');
    event.added = validValue;
    $el.trigger(event);
    tester.flush();

    expect(tester.$scope.demo.selected).toBe(validValue);

  });

  it('should update model for multiple', () => {

    $el = tester.compileDirective(fixtures.ajaxMultiple);
    tester.flush();

    const validValue = fixtures.remoteResponse.codes[0];
    validValue.id = '1';

    /* eslint new-cap: 0 */
    const event = $.Event('change');
    event.added = validValue;
    $el.trigger(event);
    tester.flush();
    const expectedValue = {code: '1', value: 'Test 1', id: '1'};
    expect(tester.$scope.demo.selected[0]).toBeEqual(expectedValue);

  });

});

describe('multiple', () => {

  it('should have multiple set on the html object', () => {

    $el = tester.compileDirective(fixtures.ajaxMultiple);

    tester.flush();

    expect($el.attr('multiple')).toBeDefined();
  });

});
