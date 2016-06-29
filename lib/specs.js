/* eslint no-var: 0 */
require('angular');
require('angular-mocks');

var context = require.context('./', true, /spec-2\.js$/);

// Get all files, for each file, call the context function
// that will require the file and load it here. Context will
// loop and require those spec files here.
context.keys().forEach(context);
