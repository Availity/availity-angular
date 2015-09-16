/*global inject, spyOn, describe, beforeEach, it, expect, module*/

describe('avUsersResource', function() {

  'use strict';

  var avUsersResource;
  var $q;

  beforeEach(function() {

    module('availity');

    inject(function( _avUsersResource_, _$q_) {
      avUsersResource = _avUsersResource_;
      $q = _$q_;
    });

  });

  it('should exist', function() {
    expect(avUsersResource).toBeDefined();
    expect(avUsersResource.me).toBeDefined();
  });

  it('should allow config object for avUsersResource.me()', function() {

    var spyMe = spyOn(avUsersResource, 'me').and.callFake(function() {
      return $q.when({name: 'Ariana'});
    });

    var config = {cacheBust: true};
    avUsersResource.me(config);

    expect(spyMe).toHaveBeenCalledWith(config);

  });

});
