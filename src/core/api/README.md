## API

`AvApiResource` is a lightweight class that wraps Angular's `$http` service and provides some sensible defaults when connecting to Availity's REST API.

* Automatic polling of restful endpoints with timeouts
* Simple URI builder for API resources
* Life-cycle hooks into HTTP calls for GET, PUT, POST and DELETE

A service can be created by invoking the constructor:

```javascript

// http://local.dev/api/v1/providers
angular.module('app', ['availity'])
    .factory('healthplanProvidersResource', AvApiResource => {        
        return new AvApiResource({name: 'providers'});
    });
```

A service can also be created by extending the `AvApiResource` class.  Use classes allows developers to easily add helper methods for resource types

```javascript

class HealthplanProvidersResource extends AvApiResource {

    constructor() {
      super({
        path: '/proxy/healthplan',
        name: '/providers'
      });
    }

    getProviders(config) {
      return this.query(config).then(response => {
        return response.data.providers ? response.data.providers : response.data;
      });
    }

  }

  return new HealthPlanProvidersResource();

};

const module = module.service('app', ['availity'])
    .service('healthplanProvidersResource', HealthplanProvidersResource);
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

* **path** - default base segment for REST urls. **default**: `/api`
* **name** - name of rest api resource. _Ex_: `users`
* **version** - rest API version. **default**: `v1`
* **url** - full URI to resource path.  If `url` is passed into constructor the options `path`, `name` and `version` are ignored.
* **cache** - caches all rest responses.  **default**: `true`
* **api** - instructs to turn on Availity specific functionality like automatic polling for asynchronous responses.  **default**: `true`
* **pollingInterval** -  time in `ms` before a request is retried for asynchronous rest services.  **default**: `1000`
* **pollingDecay** - the polling decay factor that slows down the polling interval on subsequent retries. **default**: `1.2`
* **pollingMaxInterval** - maximum time in `ms` polling is allowed before rejecting the request. **default**: `30000`
* **cacheBust** - when `true` every request url will include a `cacheBust` timestamp in order to break browser cache
* **sessionBust** - when `true` a `cacheBust` parameter is appended to the url but the timestamp is consistent on every call.  The timestamp is created when the application first loads and reused for all API call with `cacheBust` set to true.

## Resources

The SDK includes some pre-configured Angular services Availity RESt services.

### avOrganizationsResource

Retrieves the currently logged in users organizations

### Usage

```javascript
angular.module('app', ['availity'])
    .config( avOrganizationsResource => {    

    avOrganizationsResource.query().then(payload => {
        // do something with payload
    });

    

// http://local.dev/api/v2/users
angular.module('app', ['availity'])
    .factory('usersResource', AvApiResource => {        
    return new AvApiResource({name: 'users'});
});
```




- **avUsers**: Get information about the logged in user
- **avPermissions**: Retrieves a list of permissions for a user
- **avUserPermissions**: Retrieves permissions along with a user's organizations and the set of resources a user is allowed to control
- **avLogMessagesResource**: Use by services to stream events into Availity's analytics platform








