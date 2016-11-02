'use strict';

exports.__esModule = true;

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spaces = function Spaces(AvApiResource) {
  var SpacesResource = function (_AvApiResource) {
    _inherits(SpacesResource, _AvApiResource);

    function SpacesResource() {
      _classCallCheck(this, SpacesResource);

      return _possibleConstructorReturn(this, _AvApiResource.call(this, {
        path: '/api/sdk/platform',
        name: '/spaces'
      }));
    }

    return SpacesResource;
  }(AvApiResource);

  return new SpacesResource();
};

_module2.default.factory('avSpacesResource', Spaces);

exports.default = _module2.default;