import ngModule from '../module';

const config = {
  showDelay: 10000
};

class AvPopoverConfig {
  set (options) {
    Object.assign(config, options);
  }

  $get () {
    return {...config};
  }
}

ngModule.provider('avPopoverConfig', AvPopoverConfig);

