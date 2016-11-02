'use strict';

exports.__esModule = true;

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectResourceFactory = function SelectResourceFactory(AvApiResource) {
  var AvSelectResource = function (_AvApiResource) {
    _inherits(AvSelectResource, _AvApiResource);

    function AvSelectResource(options) {
      _classCallCheck(this, AvSelectResource);

      return _possibleConstructorReturn(this, _AvApiResource.call(this, options));
    }

    AvSelectResource.prototype.onQuery = function onQuery(data) {
      var _this2 = this;

      var config = this.getConfig(data);

      return this.query(config).then(function (response) {

        var results = _this2.getResults(response.data);
        results = _this2.mapResults(results);

        return _this2.getResponse(response, results);
      });
    };

    AvSelectResource.prototype.getConfig = function getConfig(data) {

      // config for the api resource query
      var config = {
        params: {}
      };

      config.params.offset = this.getOffset(data);

      if (data.term) {
        config.params[this.getQueryParam()] = data.term;
      }

      return config;
    };

    AvSelectResource.prototype.getOffset = function getOffset(data) {
      var offset = void 0;
      if (data.page) {
        offset = this.getPageSize() * (data.page - 1);
      }
      if (data.offset) {
        offset = data.offset;
      }
      return offset;
    };

    AvSelectResource.prototype.getQueryParam = function getQueryParam() {
      return 'q';
    };

    AvSelectResource.prototype.getResponse = function getResponse(response, results) {

      // Calculate if we want to continue searching.
      // True if more results are available for the current search term
      var more = response.data.offset < response.data.totalCount - response.data.limit;

      return {
        more: more,
        results: results
      };
    };

    AvSelectResource.prototype.getResult = function getResult() /* item */{
      // return  item.code;
      throw new Error('getResult() must be implemented when extending from AvSelectResource');
    };

    // Format the collection items for Select2:
    //
    //    http://select2.github.io/select2/#documentation
    //
    //    The default renderers expect objects with `id` and `text` keys.
    //    The id property is required, even if custom renderers are used.
    //    The object may also contain a children key if hierarchical data is displayed.
    //    The object may also contain a disabled boolean property indicating whether this result can be selected.
    //


    AvSelectResource.prototype.mapResults = function mapResults(results) {
      var _this3 = this;

      if (results && (!results[0].id || !results[0].text)) {

        results = results.map(function (item) {
          var _mapResult = _this3.mapResult(item),
              id = _mapResult.id,
              text = _mapResult.text;

          item.id = id;
          item.text = text;
          return item;
        });
      }

      return results;
    };

    // Result:
    //
    // {
    //   "code": "252Y00000X",
    //   "value": "AGENCIES,EARLY INTERVENTION PROVIDER AGENCY,NOT APPLICABLE|Agency",
    //   "id": "252Y00000X"
    // }


    AvSelectResource.prototype.getId = function getId(result) {
      return result.id;
    };

    AvSelectResource.prototype.initSelection = function initSelection(element, callback) {
      callback(null);
    };

    AvSelectResource.prototype.getResults = function getResults() /* response */{
      // EX:
      //  return response.data.codes
      throw new Error('getResults() must be implemented when extending from AvSelectResource');
    };

    AvSelectResource.prototype.getPageSize = function getPageSize() {
      return 50;
    };

    return AvSelectResource;
  }(AvApiResource);

  return AvSelectResource;
};

_module2.default.factory('AvSelectResource', SelectResourceFactory);

exports.default = _module2.default;