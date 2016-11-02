'use strict';

exports.__esModule = true;

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProxyResourceFactory = function ProxyResourceFactory(AvApiResource) {
  var ProxyResource = function (_AvApiResource) {
    _inherits(ProxyResource, _AvApiResource);

    function ProxyResource(options) {
      _classCallCheck(this, ProxyResource);

      if (!options && !options.tenant) {
        throw Error('Must specify tenant name for ProxyResource');
      }

      // /v1/proxy/{tenant}/{name}
      return _possibleConstructorReturn(this, _AvApiResource.call(this, {
        path: 'v1/proxy/' + options.tenant,
        version: '',
        name: options.name
      }));
    }

    return ProxyResource;
  }(AvApiResource);

  return ProxyResource;
};

_module2.default.service('AvProxyResource', ProxyResourceFactory);

exports.default = _module2.default;