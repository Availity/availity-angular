'use strict';
const clean = require('./clean');
const bundle = require('./bundle');
const Logger = require('./logger');

function build() {

  return clean()
    .then( () => {
      return bundle({optimize: true});
    })
    .then( () => {
      return bundle({optimize: false});
    })
    .catch( (err) => {
      Logger.log(err);
    });

}

module.exports = build;
