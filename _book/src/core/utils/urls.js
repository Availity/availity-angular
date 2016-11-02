const REGEX_API_URL = /^.*?api.availity.com(.*)$/;

function getRelativeUrl(url) {
  const result = url.match(REGEX_API_URL);
  if (result && result[1]) {
    return `/api${result[1]}`;
  }

  return url;
}

export {
  REGEX_API_URL,
  getRelativeUrl
};

