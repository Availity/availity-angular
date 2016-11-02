'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_module2.default.factory('avModalManager', function () {
  var AvModalManager = function () {
    function AvModalManager() {
      _classCallCheck(this, AvModalManager);

      this.instances = [];
    }

    AvModalManager.prototype.add = function add(id) {
      this.instances.push(id);
    };

    AvModalManager.prototype.remove = function remove(id) {
      this.instances = this.instances.filter(function (instance) {
        return instance !== id;
      });
    };

    AvModalManager.prototype.closeAll = function closeAll() {

      this.instances.forEach(function (id) {

        var $el = _angular2.default.element(document.getElementById(id));

        if (!$el) {
          return;
        }

        var bsModal = $el.data('bs.modal');
        if (bsModal) {
          bsModal.removeBackdrop();
          bsModal.$body.removeClass('modal-open');
          bsModal.resetAdjustments();
          bsModal.resetScrollbar();
        }

        var avModal = $el.data('AvModal');
        if (avModal) {
          avModal.destroy();
        }
      });
    };

    return AvModalManager;
  }();

  return new AvModalManager();
});