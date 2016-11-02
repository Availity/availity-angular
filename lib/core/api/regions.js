'use strict';

exports.__esModule = true;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvRegionsFactory = function AvRegionsFactory(AvApiResource, avUsersResource) {
  var AvRegionsResource = function (_AvApiResource) {
    _inherits(AvRegionsResource, _AvApiResource);

    function AvRegionsResource() {
      _classCallCheck(this, AvRegionsResource);

      return _possibleConstructorReturn(this, _AvApiResource.call(this, {
        path: '/api/sdk/platform',
        name: '/regions'
      }));
    }

    AvRegionsResource.prototype.afterGet = function afterGet(response) {
      return response.data.regions || [];
    };

    AvRegionsResource.prototype.queryRegions = function queryRegions(user, config) {

      var params = {
        params: {
          userId: user.id
        }
      };

      var conf = _lodash2.default.merge({}, params, config);

      return this.query(conf);
    };

    AvRegionsResource.prototype.getCurrentRegion = function getCurrentRegion() {
      return this.getRegions().then(function (regions) {
        return _lodash2.default.find(regions, function (region) {
          return region.currentlySelected;
        });
      });
    };

    AvRegionsResource.prototype.getRegions = function getRegions(config) {
      var _this2 = this;

      return avUsersResource.me().then(function (user) {
        return _this2.queryRegions.call(_this2, user, config);
      });
    };

    return AvRegionsResource;
  }(AvApiResource);

  return new AvRegionsResource();
};

_module2.default.factory('avRegionsResource', AvRegionsFactory);

exports.default = _module2.default;