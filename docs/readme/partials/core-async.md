#### Asynchronous Requests  & Responses

> Not all Availity Rest services support asynchronous requests/responses.  Please check the documentation at https://developer.availity.com for support.

Angular API Rest services created from [api-factory.js](./lib/core/api/api-factory.js) have been enhanced to support Availity Rest asynchronous requests.  In essence, if [api-factory.js](./lib/core/api/api-factory.js) detects an asynchronous response, it will automatically poll Availity Rest services for the real response for about 30 seconds.  The default starting poll interval is 1 second with a decay factor of 1.2.  If a proper response isn't received with in the max interval polling time the Angular ajax promise will get rejected.  This behavior is transparent to users of Angular services that have been extended from [api-factory.js](./lib/core/api/api-factory.js).

As the contract changes between the client and server for async request/response, [api-factory.js](./lib/core/api/api-factory.js) will be updated accordingly.

#### Usage

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



