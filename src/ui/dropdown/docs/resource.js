import demo from 'demo';

demo.factory('demoDropdownResource', AvSelectResource => {

  class DemoPhotosResource extends AvSelectResource {

    constructor() {
      super({name: 'photos'});
    }

    getResults(response) {
      return response.photos;
    }

    mapResult(item) {
      return {
        id: item.id,
        text: item.title
      };
    }

  }

  return new DemoPhotosResource();

});

