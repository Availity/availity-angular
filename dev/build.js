'use strict';

const bundle = require('./bundle');
const Logger = require('availity-workflow-logger');

function build() {

  return bundle({optimize: true, production: true})
    .then( () => {
      return bundle({optimize: false, production: true});
    })
    .catch( (err) => {
      Logger.log(err);
    });

}

module.exports = build;
