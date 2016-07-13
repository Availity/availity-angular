'use strict';

const Metalsmith = require('metalsmith');
const layouts = require('metalsmith-layouts');
const prism = require('metalsmith-prism');
const marked = require('marked');
const markdown = require('metalsmith-markdown');
const inPlace = require('metalsmith-in-place');
const mock = require('metalsmith-mock');
const permalinks = require('metalsmith-permalinks');
const nunjucks = require('nunjucks');
const nunjucksDate = require('nunjucks-date');
const globby = require('globby');
const path = require('path');
const collections = require('metalsmith-collections');
const relative = require('metalsmith-rootpath');
const _ = require('lodash');

const dataMarkdown = require('./plugins/metalsmith-data-markdown');
const slug = require('./plugins/nunjucks-slug');
const readFile = require('./plugins/metalsmith-read-file');
const tocify = require('./plugins/metalsmith-tocify');
const Logger = require('./logger');

const pkg = require('../package.json');

const markedOptions = {
  langPrefix: 'language-',
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true
};

nunjucksDate
  .setDefaultFormat('YYYY');

const env = nunjucks.configure('docs/layouts', {
  watch: false,
  noCache: true,
  tags: {
    variableStart: '{{{',
    variableEnd: '}}}'
  }
});
env.addFilter('year', nunjucksDate);
env.addFilter('slug', slug.slugify);

function build() {

  Logger.info('Started metalsmith');

  return new Promise((resolve, reject) => {

    const metalsmith = new Metalsmith(path.join(process.cwd(), 'docs'));

    metalsmith
      .metadata({
        site: {
          title: 'Availity Angular'
        },
        today: new Date(),
        pkg
      })
      .ignore(['!**/*.html', 'node_modules', '_book', 'dev', 'dist', 'less', 'reports'])
      .source(path.join(process.cwd(), 'docs', 'content'))
      .use( (files, metal, done) => {

        globby(['lib/**/docs/*.html']).then( filePaths => {

          const fileConfigs = _.map(filePaths, filePath => {
            return readFile(metal, filePath);
          });

          const metalFiles = {};

          _.forEach(fileConfigs, fileConfig => {
            const dir = path.join(process.cwd(), 'lib');
            const fileName = path.relative(dir, fileConfig.path);
            metalFiles[fileName] = fileConfig;
          });

          _.merge(files, metalFiles);

          done();

        });

      })
      .use(markdown(markedOptions))
      .use(dataMarkdown({
        selector: '[data-markdown]'
      }))
      .use(prism({
        decode: true
      }))
      .use(mock())
      .use(collections({
        pages: {
          pattern: 'pages/*.html',
          reverse: false
        },
        ui: {
          pattern: '**/ui/**/docs/*.html',
          sortBy: 'title',
          reverse: false,
          refer: false
        },
        core: {
          pattern: '**/core/**/docs/*.html',
          sortBy: 'title',
          reverse: false,
          refer: false
        }
      }))
      .use(permalinks({
        relative: false
      }))
      .use(relative())
      .use(inPlace({
        engine: 'nunjucks',
        partials: 'layouts/partials'
      }))
      .use(tocify({selector: '.docs-section-header, .docs-subsection-title'}))
      .use(layouts({
        engine: 'nunjucks',
        directory: 'layouts'
      }))
      .destination(path.join(process.cwd(), 'build'));

    metalsmith.build( (err) => {

      if (err) {
        reject(err);
      } else {
        Logger.ok('Finished metalsmith');
        resolve();
      }

    });

  });

}

module.exports = build;
