import angular from 'angular';
import ngModule from '../module';

const config = {
  autoclose: true,
  todayHighlight: true,
  format: 'MM/DD/YYYY',
  forceParse: false
};

class AvDatepickerConfig {
  set(options) {
    Object.assign(config, options);
  }

  $get() {
    return angular.copy(config);
  }
}

ngModule.provider('avDatepickerConfig', AvDatepickerConfig);
