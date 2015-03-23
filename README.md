# availity-angular

> Availity Angular SDK

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square&label=windows)](http://opensource.org/licenses/MIT)
[![Bower](https://img.shields.io/bower/v/availity-angular.svg)]()
[![Dependency Status](https://img.shields.io/david/dev/Availity/availity-angular.svg?style=flat-square)](https://david-dm.org/Availity/availity-angular)
[![Build](https://img.shields.io/travis/Availity/availity-angular.svg?style=flat-square&label=build)](https://travis-ci.org/Availity/availity-angular)

## Table of Contents
* [Intro](#intro)
* [Supported Browsers](#supported-browsers)
* [Quickstart](#quickstart)
* [Angular](#angular)
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


## Supported Browsers

* Internet Explorer 8 and newer
* Google Chrome (latest version)
* Mozilla Firefox (latest version)

> Other browsers should be supported as well but you may experience some issues.


## Quickstart
Install the Availity Angular SDK with Bower.

>
```bash
$ bower install availity-angular --save
```


## Angular
#### Core Module

The module `availity` are Angular services and utilities for building web applications.  These include:

+ [Factories](./lib/core/api) for creating REST service calls for the Availity API.
+ User [session management](./lib/core/session) services
+ [Validation framework](./lib/core/validation)


#### UI Module

The module `availity.ui` is a set of Angular services and directive wrappers around jQuery plugins.  These include:

+ [Select2 3.5.2](http://select2.github.io/select2/)
+ [Bootstrap Datepicker 1.3.1](https://github.com/eternicode/bootstrap-datepicker)


## Acknowledgments
The Availity Angular lib was heavily inspired by multiple open source frameworks.  If for some reason a library could not be used directly (IE8 limitation), we've reused that projects code directly in this project.  Please check out the libs below for some beautifully written code.  

+ [Angular Strap](https://github.com/mgcrea/angular-strap)
+ [Angular Bootstrap](https://github.com/angular-ui/bootstrap)
+ [Valdr](https://github.com/netceteragroup/valdr)


## Authors

**Robert McGuinness**
+ [rob.mcguinness@availity.com](rob.mcguinness@availity.com)



## License
Copyright (c) 2015 Availity, LLC