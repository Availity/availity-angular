## Authorizations

`avUserAuthorizations` is a service that allows you to get user and 
permission information.

### Configuration

Initialize the `availity` module in your application.

```javascript
angular.module('app', ['availity']);
```

### Usage

`avUserAuthorizations` is accessed in the standard way.

```javascript
angular.module('app', ['availity'])
    .factory('authenticationService', avUserAuthorizations => {
        
        class AuthenticationService {

            constructor() {

                this.permissionId = '7100';
                this.isAuthorized = false;

                avUserAuthorized.isAuthorized(res.permissionId).then(isAuthorized => {
                    this.isAuthorized = isAuthorized;
                });

            }
        }

        return new AuthenticationService();

    });
```

### Methods

`avUserAuthorizations` contains the following methods.

#### isAuthorized

Returns `true` if the current user is authorized for the specified permission.

```javascript
avUserAuthorizations.isAuthorized(permissionId);
```

#### isAnyAuthorized

Returns `true` if the current user is authorized for at least one of the specified permissions.

```javascript
avUserAuthorizations.isAnyAuthorized([permissionId1, permissionId2]);
```
#### getPermission

Returns the permission having the specified permissionId.

```javascript
avUserAuthorizations.getPermission(permissionId);
```

#### getPermissions

Returns the permissions having the specified permissionIds.

```javascript
avUserAuthorizations.getPermissions([permissionId1, permissionId2]);
```

#### getOrganizations

Returns the user's organizations that have access to the specified permissionId.

```javascript
avUserAuthorizations.getOrganizations(permissionId);
```

#### getPayers

Returns the payers the user has access to for the specified permissionId and organizationId.

```javascript
avUserAuthorization.getPayers(permissionId, organizationId);
```
