# availity-angular

> Availity Angular SDK

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&label=license)](http://opensource.org/licenses/MIT)
[![Bower](https://img.shields.io/bower/v/availity-angular.svg)]()
[![Dependency Status](https://img.shields.io/david/dev/Availity/availity-angular.svg?style=flat-square)](https://david-dm.org/Availity/availity-angular)
[![Build](https://img.shields.io/travis/Availity/availity-angular.svg?style=flat-square&label=build)](https://travis-ci.org/Availity/availity-angular)

## Table of Contents
* [Intro](#intro)
* [Demo](#demo)
* [Supported Browsers](#supported-browsers)
* [Quickstart](#quickstart)
* [Upgrading](#upgrading)
* [Acknowledgments](#acknowledgments)
* [Authors](#authors)
* [License](#license)


## Intro

##### Directory Layout

>
```
.
├── /dist/                      # Assets ready for distribution
├── /node_modules/              # 3rd-party libraries and utilities
├── /docs/                      # SDK documentation and samples 
├── /gulp/                      # Gulp tasks and utility classes
│── gulpfile.js                 # Configuration file for automated builds
│── bower.json                  # Bower list of 3rd party libraries
└── package.json                # NPM list of 3rd party libraries and utilities


## Demo

[http://demo.availity.com/public/apps/availity-angular](http://demo.availity.com/public/apps/availity-angular)

## Supported Browsers

* Internet Explorer 9 and newer
* Google Chrome (latest version)
* Mozilla Firefox (latest version)

> Other browsers should be supported as well but you may experience some issues.

## Quickstart

Install the Availity Angular SDK with Bower.

>
```bash
$ bower install availity-angular --save
```

## Upgrading from 1.x

Tha `availity-angular` SDK has been upgraded from Angular 1.2.28 to Angular 1.4.x.  Please review the notes below:

* Angular
    * https://docs.angularjs.org/guide/migration
* Availity    
    * `avDatepicker`
        * `null` is returned on empty value when using `model-format` option.  previously was returning `undefined`
    * `avPopover`
        * `showOnLoad` changed to `show`
        * `showOnLoadDelay` changed to `showDelay`

## Acknowledgments

The Availity Angular lib was heavily inspired by multiple open source frameworks.  If for some reason a library could not be used directly (IE8 limitation), we've reused that projects code directly in this project.  Please check out the libs below for some beautifully written code.  

+ [Angular Strap](https://github.com/mgcrea/angular-strap)
+ [Angular Bootstrap](https://github.com/angular-ui/bootstrap)
+ [Valdr](https://github.com/netceteragroup/valdr)
+ [ng-idle](https://github.com/HackedByChinese/ng-idle)

## Authors

**Robert McGuinness**
+ [rob.mcguinness@availity.com](rob.mcguinness@availity.com)

**Bobby Bennett**
+ [bobby.bennett@availity.com](bobby.bennett@availity.com)

**Javier Fernandez-Ivern**
+ [javier.fernandezivern@availity.com](javier.fernandezivern@availity.com)

## License
Copyright (c) 2015 Availity, LLC
