## API

`AvApiResource` is a lightweight class that wraps Angular's `$http` service and provides some sensible defaults when connecting to Availity's REST API.

* Automatic polling of restful endpoints with timeouts
* Simple URI builder for API resources
* Life-cycle hooks into HTTP calls for GET, PUT, POST and DELETE

### Configuration

`AvApiResource` can be configured by passing options into it's constructor or globally by overriding the defaults using `AvApiResourceProvider`.

```javascript
angular.module('app', ['availity'])
    .config( AvApiResourceProvider => {
        AvApiResourceProvider.setOptions({version: 'v2'})
    });
```

> The configuration object is simply Angular [$http configuration](https://docs.angularjs.org/api/ng/service/$http#usage)

### Options

##### `api`
Default `true`.  When `true`, the requests to the server incorporate Availity api behavior for url construction and polling.

##### `url`
When `api` is true, the url attribute is ignored.  When `api` is false, the `url` value is used to request to the server.  This allows `AvApiFactory` to be used for endpoints that are not part of the Availity rest api platform.

##### `path`
Default `/api`.  When `api` is true, the url building logic is `path/version/name`.

##### `version`
Default `v1`.  When `api` is true, the url building logic is `path/version/name`.
##### `name`
The name of the resource. When `api` is true, the url building logic is `path/version/name`.
##### `cacheBust`
To force every call to get latest results. Accepts a boolean, function, or value:
- if `true`, a timestamp is generated and used
- if a function, parameter is set to its results
- if a value is passed in, use this as parameter

##### `pageBust`
Bust the service cache on page load, but keep the cache valid afterwards. Same behavior as `cacheBust`, except if true, the timestamp value is generated once and kept. Setting the `pageBust` variable is done with the function `setPageBust(value)`, if no value is passed in, a timestamp is generated. This can be used to customize the parameter or to manually break the cache.

##### `sessionBust`
Default `true`. Attempts to read a sessionBust value from local storage, generated at login. Forces the cache to bust when a new user logs in. If the value is not set, uses the pageBust value.


### Resources

A service can be created by invoking the constructor.  The example below creates a service called `healthplanProvidersResource` that can be injected into other services and factories in Angular.

```javascript

angular.module('app', ['availity'])
    .factory('healthplanProvidersResource', AvApiResource => {
        return new AvApiResource({name: 'providers'});
    });
```

A service can also be created by extending the `AvApiResource` class.  Using classes allows developers to easily add helper methods for resource types.

```javascript

function factory = function(AvApiResource) {

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

    };

    return new HealthPlanProvidersResource();

}
const module = module.service('app', ['availity'])
    .service('healthplanProvidersResource', HealthplanProvidersResource);
```

Every resource created has the methods `get`, `query`, `create`, `postGet`, `update` and `remove`.

### Methods

Each method has an after function, ( ex. get has afterGet). These are used to modify the response before it is resolved in the promise.
Each method that takes in data has a before function in order to modify the data before making the call.

#### get

Retrieves and entity by ID with optional configuration.

```
get(id, config);
```

#### query

The query function is designed to fetch collections and search the API.

```
query(config)
```

### create

Create an entity with optional configuration.

```
create(data, config)
```

### postGet

Post call with `X-HTTP-Method-Override = 'GET'`
```
postGet(data, config)
```

#### update

Update and entity with optional configuration.

This first method signature supports three parameters: `id`, `data` and `configuration`.  The `id` parameter must be the identifier for the entity in the rest API.

```js
update(id, data, config)
```

If only two parameters are passed into the `update` function, then the first parameter is assumed to be of type `data` and the second parameter is assumed to be a `configuration` object.  Using this signature, the `data` object must contain an `id` field so that the API can properly update the entity in the back-end.

```js
update(data, config)
```

#### remove

Remove an entity with optional configuration.  A string or data object can be passed in as the first parameter.

```js
remove(id, config)
```

or

```js
remove(data, config)
```


## API

The SDK includes some configured Angular services for the Availity REST API.

* [Organizations](docs/organizations.md)
* [Permissions](docs/permissions.md)
* [Permissions (legacy)](docs/permissions.md)
* [Regions](docs/regions.md)
* [Users](docs/users.md)
