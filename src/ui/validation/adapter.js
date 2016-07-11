import ngModule from '../module';
import './constants';
import './adapter-bootstrap';

ngModule.provider('avValAdapter', function() {

  const that = this;

  this.setAdapter = function(adapter) {
    this.adapter = adapter;
  };

  this.$get = (AV_VAL_ADAPTER, $injector) => {

    class Adapter {

      constructor() {
        const adapterName = that.adapter || AV_VAL_ADAPTER.DEFAULT;
        this.adapter = $injector.get(adapterName);
      }

      element(context) {
        this.adapter.element(context);
      }

      reset(element) {
        this.adapter.reset(element);
      }

      message(context) {
        this.adapter.message(context);
      }

      scroll(form) {
        this.adapter.scroll(form);
      }

    }

    return new Adapter();
  };
});
