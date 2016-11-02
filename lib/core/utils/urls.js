"use strict";

exports.__esModule = true;
var REGEX_API_URL = /^.*?api.availity.com(.*)$/;

function getRelativeUrl(url) {
  var result = url.match(REGEX_API_URL);
  if (result && result[1]) {
    return "/api" + result[1];
  }

  return url;
}

exports.REGEX_API_URL = REGEX_API_URL;
exports.getRelativeUrl = getRelativeUrl;