import ngModule from '../../module';
import Validator from './validator';
import './utils';

ngModule.factory('avValRequired', avValUtils => {

  class RequiredValidator extends Validator {

    constructor() {
      super('required');
    }

    validate(context) {

      const { value, element } = context;

      // Using ngModelController.$isEmpty for required checks.  A form component being empty is dependent on the
      // type of field:
      //
      //    - radio
      //    - checkbox
      //    - text
      //    - lists
      //
      // You can override $isEmpty for input directives whose concept of being empty is different to the
      // default. Radio and checkboxes directive do this because in its case a value of `false`
      // implies empty.
      //
      const ctrl = element && element.data('$ngModelController');
      if (ctrl) {
        return !ctrl.$isEmpty(value);
      }

      return !avValUtils.isEmpty(value);

    }
  }

  return new RequiredValidator();

});

