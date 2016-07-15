import demo from 'demo';

import '../';

demo.factory('demoDropdownResource', AvSelectResource => {


});


demo.factory('demoDropdownService', ($log) => {

  class DemoDropdownService {

    constructor() {

      this.states = [
        { id: 'AL', name: 'Alabama' },
        { id: 'CA', name: 'California' },
        { id: 'NM', name: 'New Mexico' },
        { id: 'TX', name: 'Texas' },
        { id: 'WY', name: 'Wyoming' }
      ];

      this.selectedState = null;
      this.selectedStates = [{ id: 'WY', name: 'Wyoming' }, { id: 'NM', name: 'New Mexico' }];

    }

    addStates() {
      this.states.push({id: 'FL', name: 'Florida'});
    }

    setState() {
      this.selectedState = this.states[this.states.length - 1];
    }

    resetSingle() {
      this.selectedState = null;
    }

    resetMultiple = function() {
      this.selectedStates = null;
    }

    selectAction = function(selection) {
      $log.info(selection);
    }

  }

  return new DemoDropdownService();

});
