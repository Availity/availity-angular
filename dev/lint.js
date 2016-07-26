'use strict';

const eslint = require('eslint');
const globby = require('globby');

const Logger = require('./logger');

function lint() {

  const engine = new eslint.CLIEngine({
    useEslintrc: true
  });

  return new Promise((resolve, reject) => {

    globby([
      '**/**.js',
      '!node_modules/**',
      '!bower_components/**',
      '!coverage/**',
      '!_book/**',
      '!build/**',
      '!dist/**',
      '!lib/**',
      '!less/**'
    ]).then( paths => {

      const report = engine.executeOnFiles(paths);
      const formatter = engine.getFormatter();

      if (report.errorCount || report.warningCount) {
        Logger.info(`${formatter(report.results)}`);
        reject('eslint failed');
      } else {
        Logger.ok('eslint');
        resolve();
      }


    });

  });

}

module.exports = lint;
