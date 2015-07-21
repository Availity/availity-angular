var gulp = require('gulp');
var frontMatter = require('gulp-front-matter');
var _ = require('lodash');
var fs = require('fs');
var gulpsmith = require('gulpsmith');
var templates = require('metalsmith-templates');
var collections = require('metalsmith-collections');
var metalsmithPrism = require('metalsmith-prism');
var define = require('metalsmith-define');
var metalsmithMock = require('metalsmith-mock');
var metalsmithPaths = require('metalsmith-path');
var filter = require('gulp-filter');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var using = require('gulp-using');
var header = require('gulp-header');
var footer = require('gulp-footer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var config = require('../config');
var handlebarsPaths = require('../utils/handlebars.paths');
var handlebarsPartials = require('../utils/handlebars.partials');
var metalsmithMarkdown = require('../utils/metalsmith.data.markdown');

var Handlebars = require('handlebars');

gulp.task('build', ['build:handlebars:partials', 'build:docs', 'build:templates']);

gulp.task('build:handlebars:partials', function() {

  Handlebars.registerHelper('base', handlebarsPaths);
  var partials = handlebarsPartials(config.docs.partials.src);

  _.each(partials, function(path, name) {
    Handlebars.registerPartial(name, fs.readFileSync(path, 'utf8'));
  });

  Handlebars.registerHelper('is', function(a, b, opts) {
    if(a === b) {
      return opts.fn(this);
    } else {
      return opts.inverse(this);
    }
  });

  // http://funkjedi.com/technology/412-every-nth-item-in-handlebars/
  Handlebars.registerHelper('grouped_each', function(every, context, options) {
    var out = '';
    var subcontext = [];
    var i;
    if(context && context.length > 0) {
      for(i = 0; i < context.length; i++) {
        if(i > 0 && i % every === 0) {
          out += options.fn(subcontext);
          subcontext = [];
        }
        subcontext.push(context[i]);
      }
      out += options.fn(subcontext);
    }
    return out;
  });
});

gulp.task('build:docs', function() {

  return gulp.src(config.docs.all.src)
    .pipe(gulpif(config.args.verbose, using({prefix:'`build:docs` [dest] using'})))
    .pipe(frontMatter()).on('data', function(file) {
      _.assign(file, file.frontMatter);
      delete file.frontMatter;
    })
    .pipe(gulpsmith()
      .use(define({
        pkg: require('../../package.json')
      }))
      .use(collections({
        pages: {
          sortBy: 'menu',
          reverse: false
        },
        core: {
          pattern: '**/*-core-demo.html'
        },
        ui: {
          pattern: '**/*-ui-demo.html'
        },
        examples: {} // empty pattern because the pages are tagged with collection attribute in YAML front matter
      }))
      .use(metalsmithPaths())
      .use(metalsmithPrism())
      .use(metalsmithMock())
      .use(metalsmithMarkdown())
      .use(templates({
        engine: 'handlebars',
        directory: config.docs.templates.src
      }))
      .on('error', console.log.bind(console))
    )
    // only include full pages and ignore page snippets in dest build folder
    .pipe(filter(['*', '!**/*-demo.html']))
    .pipe(gulpif(config.args.verbose, using({prefix:'`build:docs` [dest] using'})))
    .pipe(rename(function(file) {
      if(!/\.hbs/.test(file.extname)) {
        return;
      }
      file.extname = '.html';
    }))
    .pipe(gulp.dest(config.docs.dest))
    .pipe(reload({stream:true}));

});

gulp.task('build:templates', function() {
  var templateCache = require('gulp-angular-templatecache');
  var htmlify = require('gulp-angular-htmlify');
  var htmlmin = require('gulp-htmlmin');

  return gulp.src(config.templates.src)
    .pipe(htmlmin({removeComments: true, collapseWhitespace: true}))
    .pipe(htmlify())
    .pipe(templateCache(config.templates.name, {
      standalone: true,
      module: 'availity.ui.templates'
    }))
    .pipe(header('(function() {\n\'use strict\';\n'))
    .pipe(footer("\nvar availity = window.availity || {}; if(typeof module !== 'undefined' && module.exports) {module.exports = availity; } })();\n"))
    .pipe(gulp.dest(config.templates.dest))
    .pipe(reload({stream:true}));
});
