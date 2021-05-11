# availity-angular

> Availity Angular SDK

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&label=license)](http://opensource.org/licenses/MIT)
[![NPM](http://img.shields.io/npm/v/availity-angular.svg?style=flat-square&label=npm)](https://npmjs.org/package/availity-angular)
[![Build](https://img.shields.io/travis/Availity/availity-angular.svg?style=flat-square&label=build)](https://travis-ci.org/Availity/availity-angular)

## Table of Contents

* [Intro](#intro)
* [Demo](#demo)
* [Supported Browsers](#supported-browsers)
* [Quickstart](#quickstart)
* [Upgrading](#upgrading)
* [Angular](#angular)
* [Acknowledgments](#acknowledgments)
* [Authors](#authors)
* [License](#license)

## Intro

## Demo

[availity.github.io/availity-angular](http://availity.github.io/availity-angular/)

## Supported Browsers

* Internet Explorer 9 and newer
* Google Chrome
* Mozilla Firefox

> Other browsers should be supported as well but you may experience some issues.


## <a name="angularjs18"></a> Migrating to angularjs 1.7.x to 1.8.2

Version 4.2.0 of availity-angular is migration from 1.7.x angular to 1.8.2. In addition, jquery is updated to 3.6.0, to
satisfy security requirements. The primary change of what is fixed with security update can be explained with jquery
upgrade guide located here https://jquery.com/upgrade-guide/3.5/.  
Note: 1.7.x to 1.8.2 is really just an update underlying jquery component embeded in angularjs, and since
availity-angular overrides this by including the full jquery. The real upgrade is just the jquery upgrade.

Here is list of known issues with upgrade.

* Self-closing tags, like "\<div/> \<span/> \<p/>". As referenced in upgrade-guide, jquery no changes these tags. The
  result of which is if you have some template like following in your page it will not display and actually cause page
  to stop rendering due to unmatching tags.
   ```html 
   <div class="broken">
        <p>This would display before tag.</p>
        <div data-my-directive/> 
        <p>But directive and items after might not display.</p>
    </div>

    <div class="fixed">
        <p>Fix is to change to remove self closing empty html tag</p>
        <div data-my-directive></div> 
        <p>Now this should display.</p>
    </div>

   <div class="nochange">
        <p>Tags that html supports as self closing tags do not need to change since they are not effected.</p> 
         <span>Example: All the following are valid</span>
         <input data-my-directive />
         <input data-my-directive >
         <img data-my-directive />
         <img data-my-directive >
   </div>
   ```

  Unfortunately not good solution to this fix besides just fixing tags. Luckily this regex from here seems to be pretty code at replacing.
  https://www.reddit.com/r/regex/comments/6mpc7b/replace_invalid_selfclosing_nonvoid_html_tags/
  In editor that supports reg expression replace use following:
  ```text
  find: <(?!area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)([a-z|A-Z|_|\-|:|0-9]+)([^>]*)\/>
  replace: <$1$2></$1>
   ```

* bootstrap-datapicker issue. One issue noticed on upgrading is that some projects where getting issue where
  AvDatepicker was no longer working. This seemed to be dependency resolution where bootstrap-datepicker was pulling in
  one version of jquery and application was using 3.6 version. The fix was to force resolution to same version using
  resolution block.
  ```
    "resolutions": {
      "jquery": "3.6.0"
    }
  ```

* uglify-js 3.11.x issue. Although not related angularjs upgrade an issue was noticed with dependencies. After some
  effort it was found with uglify-js 3.11.x or greater, the signature of some constructors where changed. In particular
  the av-block directive's BlockController was effected causing console error "regExp --> regExpProvider not found".
  Error would only show up on production builds of project. The fix for this is locking in ugligfy-js to 3.10.4.
  ```
   "resolutions": {
     "jquery": "3.6.0",
     "uglify-js": "3.10.4",
     "uglifyjs-webpack-plugin": "2.2.0"
   },
   ```

## Quickstart

Install the Availity Angular SDK with npm.

```bash
$ npm install availity-angular --save
```

## Acknowledgments

The Availity Angular lib was heavily inspired by multiple open source frameworks. If for some reason a library could not
be used directly (IE9 limitation), we've reused that projects code directly in this project. Please check out the libs
below for some beautifully written code.

+ [Angular Strap](https://github.com/mgcrea/angular-strap)
+ [Angular Bootstrap](https://github.com/angular-ui/bootstrap)
+ [Valdr](https://github.com/netceteragroup/valdr)

## Contributing

[![Dependency Status](https://img.shields.io/david/dev/Availity/availity-angular.svg?style=flat-square)](https://david-dm.org/Availity/availity-angular)

1. Ensure release is occurring on `master` branch: `git checkout master`
1. Run `npm install` to ensure dependencies are up to date.
1. Run `npm test` and ensure all test are passing
1. Run `npm run release`

## License

Copyright (c) 2017-present Availity, LLC. Code released under the [the MIT license](LICENSE)
