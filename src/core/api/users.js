import ngModule from '../module';

const UserServiceFactory = function(AvApiResource) {

  class AvUsersResource extends AvApiResource {

    constructor() {
      super({
        path: '/api/sdk/platform',
        name: '/users'
      });
    }

    afterGet(response) {
      return (response && response.data && response.data.user) ||
        (response && response.data) ||
        {};
    }

    me(config) {
      return this.get('me', config);
    }

  }

  return new AvUsersResource();

};

ngModule.factory('avUsersResource', UserServiceFactory);

export default ngModule;
