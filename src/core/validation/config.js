import ngModule from '../module';

ngModule.value('avValConfig', {
  classes: {
    valid: 'ng-valid',
    invalid: 'ng-invalid',
    dirty: 'ng-dirty',
    pristine: 'ng-pristine',
    touched: 'ng-touched',
    untouched: 'ng-untouched',
    submitted: 'ng-submitted'
  },
  validators: [
    'avValPattern',
    'avValSize',
    'avValRequired',
    'avValDateRange',
    'avValDate',
    'avValPhone',
    'avValEmail',
    'avValNpi'
  ]
});

export default ngModule;
