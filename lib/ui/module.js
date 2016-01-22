import angular from 'angular';

const availity = {
  MODULE_UI: 'availity.ui',
  VERSION: process.env.VERSION,
  ui: angular.module(availity.MODULE_UI, ['ng', 'ngSanitize'])
};

availity.ui.constant('AV_UI', {
  NG_OPTIONS: /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/
});

export default availity;
