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


## Demo
[http://demo.availity.com/public/apps/availity-angular](http://demo.availity.com/public/apps/availity-angular)


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

##### Asynchronous Requests  & Responses

> Not all Availity Rest services support asynchronous requests/responses.  Please check the documentation at https://developer.availity.com for support.

Angular API Rest services created from [api-factory.js](./lib/core/api/api-factory.js) have been enhanced to support Availity Rest asynchronous requests.  In essence, if [api-factory.js](./lib/core/api/api-factory.js) detects an asynchronous response, it will automatically poll Availity Rest services for the real response for about 30 seconds.  The default starting poll interval is 1 second with a decay factor of 1.2.  If a proper response isn't received with in the max interval polling time the Angular ajax promise will get rejected.  This behavior is transparent to users of Angular services that have been extended from [api-factory.js](./lib/core/api/api-factory.js).

As the contract changes between the client and server for async request/response, [api-factory.js](./lib/core/api/api-factory.js) will be updated accordingly.

##### Usage

* Create a new API Resource

>
```javascript
var restServiceResource = new AvApiResource('/some/rest/path');
```

* Server responds with asynchronous payload with `Status Code: 202 OK` with the location header set

>
```bash
access-control-allow-origin:*
cache-control:public, max-age=0
connection:keep-alive
content-encoding:gzip
content-type:application/json
date:Sat, 04 Apr 2015 14:16:13 GMT
etag:W/"b27-3834658027"
last-modified:Tue, 31 Mar 2015 17:54:52 GMT
transfer-encoding:chunked
vary:Origin, Accept-Encoding
# Aries rest response with # Header with ping URL 
Location: http://localhost:3000/some/rest/path 
```

* Use the API service with optional notification callback

>
```javascript
restServiceResource.query().then(function(successResponse) {
  // success code goes here :)
}, function(errorResponse){
  // error code goes here :(
}, function(notifyResponse) {
  // notification response contains the json data with poll information
});
```

* Override polling interval options per request

>
```javascript
restServiceResource.query({
    pollingInterval: 2000,
    pollingMaxInterval: 10,
    pollingDecay: 1.8
}).then(function(successResponse) {
  // success code goes here :)
}, function(errorResponse){
  // error code goes here :(
}, function(notifyResponse) {
  // notification response contains the json data with poll information
});
```

* Specify cache busting per request

>
```javascript
restServiceResource.query({
    cacheBust: true
}).then(function(successResponse) {
  // success code goes here :)
}, function(errorResponse){
  // error code goes here :(
}, function(notifyResponse) {
  // notification response contains the json data with poll information
});
```

#### UI Module

The module `availity.ui` is a set of Angular services and directive wrappers around jQuery plugins.  These include:

+ [Select2 3.5.2](http://select2.github.io/select2/)
+ [Bootstrap Datepicker 1.3.1](https://github.com/eternicode/bootstrap-datepicker)


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
+ [bbennett8609@gmail.com](bbennett8609@gmail.com)

**Javier Fernandez-Ivern**
+ [javier@ivern.org](javier@ivern.org)



## License
Copyright (c) 2015 Availity, LLC
