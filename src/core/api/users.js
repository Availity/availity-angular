import ngModule from '../module';

const UserServiceFactory = function(AvApiResource) {

  class AvUsersResource extends AvApiResource {

    constructor() {
      super({name: 'users'});
    }

    afterGet(response) {
      const user = response.data.user ? response.data.user : response.data;
      return user;
    }

    me(config) {
      return this.get('me', config);
    }

  }

  return new AvUsersResource();

};

ngModule.factory('avUsersResource', UserServiceFactory);

export default ngModule;


