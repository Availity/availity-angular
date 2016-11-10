## Authorizations

`avUserAuthorizations` is a service that allows you to get user and 
permission information.

### Configuration

Initialize the `availity` module in your application.

```javascript
angular.module('app', ['availity']);
```

### Usage

```javascript
angular.module('app', ['availity'])
    .factory('authenticationService', avUserAuthorizations => {
    
        class AuthenticationService {

            constructor() {                
                avUserAuthorized.isAuthorized('7100').then(isAuthorized => {
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
