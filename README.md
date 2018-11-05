# availity-angular

> Availity Angular Components 

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&label=license)](http://opensource.org/licenses/MIT)
[![NPM](http://img.shields.io/npm/v/availity-angular.svg?style=flat-square&label=npm)](https://npmjs.org/package/availity-angular)
[![Dependency Status](https://img.shields.io/david/dev/Availity/availity-angular.svg?style=flat-square)](https://david-dm.org/Availity/availity-angular)
[![Build](https://img.shields.io/travis/Availity/availity-angular.svg?style=flat-square&label=build)](https://travis-ci.org/Availity/availity-angular)

## Table of Contents

* [Intro](#intro)
* [Demo](#demo)
* [API](/src/core/api/README.md)
    * [Organizations](/src/core/api/docs/organizations.md)
    * [Permissions](/src/core/api/docs/permisions.md)
    * [Regions](/src/core/api/docs/regions.md)
    * [Spaces](/src/core/api/docs/spaces.md)
    * [Permissions (legacy)](/src/core/api/docs/user-permissions.md)
    * [Users](/src/core/api/docs/uers.md)
* [Analytics](/src/core/analytics/README.md)
* [Animation](/src/ui/animation/README.md)
    * [avAnimate](/src/ui/animation/animate.md)
    * [avLoader](/src/ui/animation/loader/README.md)
* [Authorizations](/src/core/authorizations/README.md)
* [Dimmer](/src/ui/dimmer/README.md)
* [Modal](/src/ui/modal/README.md)
* [Dropdowns](/src/ui/dropdown/README.md)
* [Utils](//src/core/utils/README.md)
* [Supported Browsers](#supported-browsers)
* [Quickstart](#quickstart)
* [Upgrading](#upgrading)
* [Angular](#angular)
* [Acknowledgments](#acknowledgments)
* [Authors](#authors)
* [License](#license)

## Demo

[availity.github.io/availity-angular](http://availity.github.io/availity-angular/)

## Supported Browsers

* Internet Explorer 9 and newer
* Google Chrome
* Mozilla Firefox

> Other browsers should be supported as well but you may experience some issues.

## Quickstart

Install the Availity Angular SDK with npm.

```bash
$ npm install availity-angular --save
```

## Acknowledgments

The Availity Angular lib was heavily inspired by multiple open source frameworks.  If for some reason a library could not be used directly (IE9 limitation), we've reused that projects code directly in this project.  Please check out the libs below for some beautifully written code.

+ [Angular Strap](https://github.com/mgcrea/angular-strap)
+ [Angular Bootstrap](https://github.com/angular-ui/bootstrap)
+ [Valdr](https://github.com/netceteragroup/valdr)

## Contributing

1. Ensure release is occurring on `master` branch: `git checkout master`
2. Run `npm install` to ensure dependencies are up to date.
3. Run `npm test` and ensure all test are passing
4. Run `npm run build`
5. Run `npm version ${version}` where version is the appropriate semantic release number. 
6. Run `npm login` to login into registry.
7. Run `npm publish`. You must be listed as a collaborator https://www.npmjs.com/package/availity-angular for this step to work.
  
## License

Copyright (c) 2017 Availity, LLC. Code released under the [the MIT license](LICENSE)
