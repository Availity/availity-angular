'use strict';

const eslint = require('eslint');
const globby = require('globby');
const ora = require('ora');
const Logger = require('availity-workflow-logger');

function lint() {

  const engine = new eslint.CLIEngine({
    useEslintrc: true
  });

  return new Promise((resolve, reject) => {

    Logger.info('Started linting');
    const spinner = ora('running linter rules');
    spinner.color = 'yellow';
    spinner.start();

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

      spinner.stop();

      if (report.errorCount || report.warningCount) {

        Logger.info(`${formatter(report.results)}`);
        Logger.failed('Failed linting');
        reject();
      } else {
        Logger.success('Finished linting');
        resolve();
      }


    });

  });

}

module.exports = lint;
