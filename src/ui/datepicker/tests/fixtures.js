const fixtures = {
  regular: '<input ng-model="selectedDate" name="date" type="text" av-datepicker>',
  format: '<input ng-model="selectedDate" name="date" type="text" av-datepicker format="\'dd-mm-yyyy\'">',
  addon: `
    <input type="text" ng-model="selectedDate" av-datepicker>
    <span class="input-group-btn" toggle="datepicker">
        <button class="btn btn-default" type="button">
          <span class="icon icon-calendar"></span>
        </button>
    </span>`,
  disabledDates: '<input ng-model="selectedDate" name="date" type="text" dates-disabled="\'06\'" av-datepicker>'
};

export default fixtures;
