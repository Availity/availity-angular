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

var OrganizationResourceFactory = function OrganizationResourceFactory(AvApiResource, avUsersResource) {
  var OrganizationResource = function (_AvApiResource) {
    _inherits(OrganizationResource, _AvApiResource);

    function OrganizationResource() {
      _classCallCheck(this, OrganizationResource);

      return _possibleConstructorReturn(this, _AvApiResource.call(this, {
        path: '/api/sdk/platform',
        name: 'organizations'
      }));
    }

    OrganizationResource.prototype.afterQuery = function afterQuery(response) {
      return response.data.organizations || [];
    };

    OrganizationResource.prototype.queryOrganizations = function queryOrganizations(user, config) {

      var params = {
        params: {
          userId: user.id
        }
      };

      // merge in params with user ID
      var queryConfig = _lodash2.default.merge({}, params, config);

      return this.query(queryConfig);
    };

    OrganizationResource.prototype.getOrganizations = function getOrganizations(config) {
      var _this2 = this;

      return avUsersResource.me().then(function (user) {
        return _this2.queryOrganizations.call(_this2, user, config);
      });
    };

    return OrganizationResource;
  }(AvApiResource);

  return new OrganizationResource();
};

_module2.default.factory('avOrganizationsResource', OrganizationResourceFactory);

exports.default = _module2.default;