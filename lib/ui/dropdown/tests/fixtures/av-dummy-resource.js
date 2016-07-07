import angular from 'angular';

angular.module('avMock').factory('avMockResource', AvApiResource => {

  class AvDummyResource extends AvApiResource {

    remote(data) {

    }

  }

  return new AvDummyResource();

});
