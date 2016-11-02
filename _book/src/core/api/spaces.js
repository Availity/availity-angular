import ngModule from '../module';

const Spaces = function(AvApiResource) {

  class SpacesResource extends AvApiResource {

    constructor() {
      super({
        path: '/api/sdk/platform',
        name: '/spaces'
      });
    }
  }

  return new SpacesResource();

};

ngModule.factory('avSpacesResource', Spaces);

export default ngModule;
