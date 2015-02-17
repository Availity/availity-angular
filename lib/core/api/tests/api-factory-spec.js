/*global inject, sinon, jasmine, module*/

describe('AvApiResource', function() {

  'use strict';

  var sandbox;
  var $httpBackend;
  var $q;
  var AvApiResource;
  var callback;

  var responseData = [{a: 1, b: 2},{a: 1, b: 2}];

  beforeEach(function() {

    sandbox = sinon.sandbox.create();
    callback = jasmine.createSpy('done');
    module('availity');

    module(function ($provide) {
      var pollingService =  {
        response: function(response) {
          return response || $q.when(response);
        }
      };
      $provide.value('pollingService', pollingService);
    });

    inject(function(_$httpBackend_, _$q_, _AvApiResource_) {
      $httpBackend = _$httpBackend_;
      $q = _$q_;
      AvApiResource = _AvApiResource_;
    });

  });

  afterEach(function() {
    sandbox.restore();
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should not allow options to be null', function() {
    expect(function(){ new AvApiResource(); }).toThrow(new Error("[options] cannot be null or undefined"));
  });

  describe("urls", function() {

    it('should build resources url with resources name', function() {

      var users = new AvApiResource('users');

      expect(users).toBeObject();
      expect(users._getUrl()).toBe("/api/v1/users");

    });

    it('should build resources url with resources url', function() {

      var users = new AvApiResource('/users');

      expect(users._getUrl()).toBe("/api/v1/users");

    });

    it('should build resources url using options.url', function() {

      var users = new AvApiResource({
        url: "/users"
      });

      expect(users._getUrl()).toBe("/api/v1/users");
    });

    it("should build resources url with options.prefix", function() {

      var users = new AvApiResource({
        prefix: "/public",
        url: "/users"
      });

      expect(users._getUrl()).toBe("/public/api/v1/users");

    });

    it("should build resources url with options.level a.k.a. /internal", function() {

      var users = new AvApiResource({
        level: "/internal",
        url: "/users"
      });

      expect(users._getUrl()).toBe("/api/internal/v1/users");

    });

    it("should build resources url with suffix", function() {

      var users = new AvApiResource({
        url: "/users",
        suffix: ".json"
      });

      expect(users._getUrl()).toBe("/api/v1/users.json");

    });

    it("should build resources with `public` and `internal` and version 2", function() {

      var users = new AvApiResource({
        prefix: "/public",
        url: "/users",
        version: "/v2",
        level: "/internal"
      });

      expect(users._getUrl()).toBe("/public/api/internal/v2/users");

    });

    it("should build resources url using relative path that is not API url", function() {
      var users = new AvApiResource({
        url: "/availity/JwsServlet",
        api: false
      });

      expect(users._getUrl()).toBe("/availity/JwsServlet");

    });
  });

  describe("rest methods", function() {

    var users;

    beforeEach(function() {
      users = new AvApiResource('users');
    });

    describe("all", function() {

      it("should get list of resources", function() {

        // expectGET to make sure this is called once.
        $httpBackend.expectGET('/api/v1/users').respond(200, responseData);

        users.all().success(function(data) {
          expect(data).toBeEqual(responseData);
        });

        $httpBackend.flush();
      });

      it("should get list of resources with params", function() {

        // expectGET to make sure this is called once.
        $httpBackend.expectGET('/api/v1/users?a=1&b=2').respond(200, responseData);

        users.all({params: {a:1, b:2}}).success(function(data){
          expect(data).toBeEqual(responseData);
          callback();
        });

        $httpBackend.flush();
        expect(callback).toHaveBeenCalled();

      });
    });

    describe("get", function() {

      it("should get a single resource by id", function() {
        $httpBackend.expectGET('/api/v1/users/1').respond(200, responseData);

        users.get(1).success(function(data){
          expect(data).toBeEqual(responseData);
          callback();
        });

        $httpBackend.flush();
        expect(callback).toHaveBeenCalled();
      });
    });
  });

describe("callbacks", function() {
  var Users, users;

  var getCallback = jasmine.createSpy('getCallback');
  var allCallback = jasmine.createSpy('allCallback');
  var createCallback = jasmine.createSpy('createCallback');
  var updateCallback = jasmine.createSpy('updateCallback');
  var removeCallback = jasmine.createSpy('removeCallback');

  beforeEach(function() {

    Users = function() {
      AvApiResource.call(this,{
        url: "/users"
      });
    };

    angular.extend(Users.prototype, AvApiResource.prototype, {
      afterGet: getCallback,
      afterAll: allCallback,
      beforeCreate: createCallback,
      afterCreate: createCallback,
      beforeUpdate: updateCallback,
      afterUpdate: updateCallback,
      afterRemove: removeCallback
    });


    users = new Users();
  });

  it("should call `afterGet` when the promise returns from `resource.get`", function() {


    $httpBackend.expectGET('/api/v1/users/1').respond(200, responseData);

    expect(getCallback.calls.count()).toEqual(0);

    users.get(1);
    $httpBackend.flush();

    expect(getCallback).toHaveBeenCalled();
    expect(getCallback.calls.count()).toEqual(1);
  });

  it("should call `afterAll` when the promise returns from `resource.all`", function() {

    $httpBackend.expectGET('/api/v1/users').respond(200, responseData);

    expect(allCallback.calls.count()).toEqual(0);

    users.all();
    $httpBackend.flush();

    expect(allCallback).toHaveBeenCalled();
    expect(allCallback.calls.count()).toEqual(1);
  });

  it("should call `beforeCreate` and `afterCreate` during `resource.create`", function() {

    $httpBackend.expectPOST('/api/v1/users').respond(200, responseData);

    expect(createCallback.calls.count()).toEqual(0);

    users.create({
      "firstName": "Rob",
      "lastName": "McGuinness"
    });
    $httpBackend.flush();

    expect(createCallback).toHaveBeenCalled();
    expect(createCallback.calls.count()).toEqual(2);
  });

  it("should call `afterRemove` during `resource.remove`", function() {

    $httpBackend.expectDELETE('/api/v1/users/1').respond(200, responseData);

    expect(removeCallback.calls.count()).toEqual(0);

    users.remove(1);
    $httpBackend.flush();

    expect(removeCallback).toHaveBeenCalled();
    expect(removeCallback.calls.count()).toEqual(1);
  });

  it("should allow callback to transform data and honor the success promise contract", function() {

    Users.prototype.afterGet = function(response){
      response.data[0].a = 1;
      return response;
    };

    $httpBackend.expectGET('/api/v1/users/1').respond(200, responseData);

    var transformedResponse = [{a: 1, b: 2 },{a: 1, b: 2 }];

    users.get(1).success(function(data) {
      expect(data).toBeEqual(transformedResponse);
    });
    $httpBackend.flush();

  });
});

});
