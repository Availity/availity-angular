## API

`AvApiResource` is a lightweight class that wraps Angular's `$http` service and provides some sensible defaults when connecting to Availity's REST API.

* Automatic polling of restful endpoints with timeouts
* Simple URI builder for API resources
* Lifecycle hooks into HTTP calls for GET, PUT, POST and DELETE

### Usage

```javascript

// http://local.dev/api/v1/users
angular.module('app', ['availity'])
    .factory('usersResource', (AvApiResource) => {        
    return new AvApiResource({name: 'users'});
});
```

### Configuration

`AvApiResource` can be configured by passing options into it's constructor or globally by overriding the defaults using `AvApiResourceProvider`.

```javascript
angular.module('app', ['availity'])
    .config( (AvApiResourceProvider) => {    
    AvApiResourceProvider.setOptions({
        version: 'v2' 
    });

// http://local.dev/api/v2/users
angular.module('app', ['availity'])
    .factory('usersResource', AvApiResource => {        
    return new AvApiResource({name: 'users'});
});
```

### Options

* **path** - default base segment for rest urls. **default**: `/api`
* **name** - name of rest api resource. _Ex_: `users`
* **version** - rest API version. **default**: `v1`
* **url** - full URI to resource path.  If `url` is passed into constructor the options `path`, `name` and `version` are ignored.
* **cache** - caches all rest responses.  **default**: `true`
* **api** - instructs to turn on Availity specific functionality like automatic polling for asynchronous responses.  **default**: `true`
* **pollingInterval** -  time in `ms` before a request is retried for asynchronous rest services.  **default**: `1000`
* **pollingDecay** - the polling decay factor that slows down the polling interval on subsequent retries. **default**: `1.2`
* **pollingMaxInterval** - maximum time in `ms` polling is allowed before rejecting the request. **default**: `30000`


