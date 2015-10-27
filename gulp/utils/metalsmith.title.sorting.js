var _ = require('lodash');

var Sort = module.exports = function(items) {
  this.items = items || [];
};

var proto = Sort.prototype;

proto.sort = function(_a, _b) {

  var a = _a;
  var b = _b;

  a = _.indexOf(this.items, a.title);
  b = _.indexOf(this.items, b.title);

  if (!a && !b) {
    return 0;
  }

  if (!a) {
    return -1;
  }

  if (!b) {
    return 1;
  }

  if (b > a) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;

};
