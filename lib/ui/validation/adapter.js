'use strict';

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

require('./constants');

require('./adapter-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_module2.default.provider('avValAdapter', function () {

  var that = this;

  this.setAdapter = function (adapter) {
    this.adapter = adapter;
  };

  this.$get = function (AV_VAL_ADAPTER, $injector) {
    var Adapter = function () {
      function Adapter() {
        _classCallCheck(this, Adapter);

        var adapterName = that.adapter || AV_VAL_ADAPTER.DEFAULT;
        this.adapter = $injector.get(adapterName);
      }

      Adapter.prototype.element = function element(context) {
        this.adapter.element(context);
      };

      Adapter.prototype.reset = function reset(element) {
        this.adapter.reset(element);
      };

      Adapter.prototype.message = function message(context) {
        this.adapter.message(context);
      };

      Adapter.prototype.scroll = function scroll(form) {
        this.adapter.scroll(form);
      };

      return Adapter;
    }();

    return new Adapter();
  };
});