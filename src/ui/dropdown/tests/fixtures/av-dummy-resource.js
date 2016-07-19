import angular from 'angular';

angular.module('avMock').factory('avMockResource', AvApiResource => {

  class AvDummyResource extends AvApiResource {

    remote(data) {
      return data; // added this line to fix linter, this doesn't seem to be used now, but might be important when re-writing tests
    }

  }

  return new AvDummyResource();

});
