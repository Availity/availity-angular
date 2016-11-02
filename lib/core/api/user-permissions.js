'use strict';

exports.__esModule = true;

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvUserPermissionsResourceFactory = function AvUserPermissionsResourceFactory(AvApiResource) {
  var AvUserPermissionsResource = function (_AvApiResource) {
    _inherits(AvUserPermissionsResource, _AvApiResource);

    function AvUserPermissionsResource() {
      _classCallCheck(this, AvUserPermissionsResource);

      return _possibleConstructorReturn(this, _AvApiResource.call(this, {
        path: '/api/internal',
        version: '/v1',
        name: '/axi-user-permissions'
      }));
    }

    AvUserPermissionsResource.prototype.afterQuery = function afterQuery(response) {
      return response.data.axiUserPermissions ? response.data.axiUserPermissions : [];
    };

    AvUserPermissionsResource.prototype.getPermissions = function getPermissions(permissionIds, region) {

      return this.query({
        sessionBust: true,
        params: {
          permissionId: permissionIds,
          region: region
        }
      });
    };

    return AvUserPermissionsResource;
  }(AvApiResource);

  return new AvUserPermissionsResource();
};

_module2.default.factory('avUserPermissionsResource', AvUserPermissionsResourceFactory);

exports.default = _module2.default;