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

### Resources

A service can be created by invoking the constructor.

```javascript

angular.module('app', ['availity'])
    .factory('healthplanProvidersResource', AvApiResource => {        
        return new AvApiResource({name: 'providers'});
    });
```

A service can also be created by extending the `AvApiResource` class.  Using classes allows developers to easily add helper methods for resource types.

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

Every resource created has the methods `get`, `create`, `update` and `remove`.

### Methods

> The configuration object is simply Angular [$http configuration](https://docs.angularjs.org/api/ng/service/$http#usage) 

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









