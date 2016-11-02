'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Inspiration: https://github.com/seeden/angular-es6

function storeInjections() {
  var injected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var instance = arguments[1];
  var args = arguments[2];
  var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'av';


  var instanceInject = instance[name] = instance[name] || {};

  injected.forEach(function (injectName, index) {
    instanceInject[injectName] = args[index];
  });
}

var Base = function Base() {
  _classCallCheck(this, Base);

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  storeInjections(this.constructor.$inject, this, args);
};

Base.$inject = [];
exports.default = Base;