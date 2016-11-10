## Organizations

`avOrganizationsResource` is a service that allows you to get a user's active organizations.  

### Methods

> The configuration object is simply Angular [$http configuration](https://docs.angularjs.org/api/ng/service/$http#usage) 

#### getOrganizations

Returns the user's organizations.  This is a helper method that automatically sends the currently logged in user's ID when fetching from the endpoint.  

```javascript
avOrganizationsResource.getOrganizations(config);
```


