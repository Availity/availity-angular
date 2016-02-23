/*global availity, describe, spyOn, inject, beforeEach, afterEach, it, expect, sinon, jasmine, module*/

describe('AvApiResourceProvider', function() {

  'use strict';

  var provider;
  var sandbox;
  var $httpBackend;
  var $q;
  var AvApiResource;
  var callback;
  var AV_API;

  availity.mock.providerSpecHelper();

  beforeEach(module('availity', function(_AV_API_, _AvApiResourceProvider_, $provide) {

    AV_API = _AV_API_;

    provider = _AvApiResourceProvider_;
    provider.setOptions({
      headers: {
      // Turn off content encoding for angular apis
      'X-Response-Encoding-Context': 'HTML'
      }
    });

    var pollingService =  {
      response: function(response) {
        return response || $q.when(response);
      }
    };
    $provide.value('pollingService', pollingService);

  }));

  beforeEach(inject(function(_$httpBackend_, _$q_, _AvApiResource_) {

    $httpBackend = _$httpBackend_;
    $q = _$q_;
    AvApiResource = _AvApiResource_;
    sandbox = sinon.sandbox.create();
    callback = jasmine.createSpy('done');

  }));

  afterEach(function() {
    sandbox.restore();
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });


  it('should be defined', function() {

    expect(provider.$get).toBeDefined();
    expect(provider.setOptions).toBeDefined();
    expect(provider.getOptions().headers[AV_API.HEADERS.CLIENT.RESPONSE_ENCODING]).toBe('HTML');
  });

  describe('AvApiResource', function() {

    var responseData = [{a: 1, b: 2},{a: 1, b: 2}];

    it('should not allow options to be null', function() {
      expect(function() { new AvApiResource(); }).toThrow(new Error('[options] cannot be null or undefined'));
    });

    describe('urls', function() {

      it('should build resources url with resources name', function() {

        var users = new AvApiResource('users');

        expect(users).toBeObject();
        expect(users._getUrl()).toBe('/api/v1/users');

      });

      it('should build resources url with resources url', function() {

        var users = new AvApiResource('/users');

        expect(users._getUrl()).toBe('/api/v1/users');

      });

      it('should build resources url using options.url', function() {

        var users = new AvApiResource({
          url: '/users'
        });

        expect(users._getUrl()).toBe('/api/v1/users');
      });

      it('should build resources url with options.prefix', function() {

        var users = new AvApiResource({
          prefix: '/public',
          url: '/users'
        });

        expect(users._getUrl()).toBe('/public/api/v1/users');

      });

      it('should build resources url with options.level a.k.a. /internal', function() {

        var users = new AvApiResource({
          level: '/internal',
          url: '/users'
        });

        expect(users._getUrl()).toBe('/api/internal/v1/users');

      });

      it('should build resources url with suffix', function() {

        var users = new AvApiResource({
          url: '/users',
          suffix: '.json'
        });

        expect(users._getUrl()).toBe('/api/v1/users.json');

      });

      it('should build resources with `public` and `internal` and resourceGroup `foo` and version 2', function() {

        var users = new AvApiResource({
          prefix: '/public',
          url: '/users',
          version: '/v2',
          level: '/internal',
          resourceGroup: '/foo'
        });

        expect(users._getUrl()).toBe('/public/api/internal/foo/v2/users');

      });

      it('should build resource url with path parameters missing slash "/" character', function() {

        var api1 = new AvApiResource({
          version: '/v1',
          level: 'utils',
          url: 'users'
        });

        var api2 = new AvApiResource({
          version: 'v1',
          level: 'utils',
          url: 'users'
        });

        expect(api1._getUrl()).toBe('/api/utils/v1/users');
        expect(api2._getUrl()).toBe('/api/utils/v1/users');

      });

      it('should build resources url using relative path that is not API url', function() {
        var users = new AvApiResource({
          url: '/availity/JwsServlet',
          api: false
        });

        expect(users._getUrl()).toBe('/availity/JwsServlet');

      });
    });

    describe('rest', function() {

      var users;

      beforeEach(function() {
        users = new AvApiResource('users');
      });

      describe('query()', function() {

        it('should get list of resources', function() {

          // expectGET to make sure this is called once.
          $httpBackend.expectGET('/api/v1/users').respond(200, responseData);

          users.query().success(function(data) {
            expect(data).toBeEqual(responseData);
          });

          $httpBackend.flush();
        });

        it('should get list of resources with params', function() {

          // expectGET to make sure this is called once.
          $httpBackend.expectGET('/api/v1/users?a=1&b=2').respond(200, responseData);

          users.query({params: {a:1, b:2}}).success(function(data) {
            expect(data).toBeEqual(responseData);
            callback();
          });

          $httpBackend.flush();
          expect(callback).toHaveBeenCalled();

        });

        it('should have a cacheBust parameter when cacheBust is true', function() {
          $httpBackend.expectGET(/\/api\/v1\/users\?cacheBust=\d+/).respond(200, responseData);

          users.query({cacheBust:true}).success(function(data) {
            expect(data).toBeEqual(responseData);
            callback();
          });

          $httpBackend.flush();
          expect(callback).toHaveBeenCalled();
        });

        it('should have a cacheBust parameter with other parameters', function() {
          $httpBackend.expectGET(/\/api\/v1\/users\?a=1&b=2&cacheBust=\d+/).respond(200, responseData);

          users.query({params: {a:1, b:2}, cacheBust:true}).success(function(data) {
            expect(data).toBeEqual(responseData);
            callback();
          });

          $httpBackend.flush();
          expect(callback).toHaveBeenCalled();
        });

      });

      describe('get()', function() {

        it('should get a single resource by id', function() {
          $httpBackend.expectGET('/api/v1/users/1').respond(200, responseData);

          users.get(1).success(function(data) {
            expect(data).toBeEqual(responseData);
            callback();
          });

          $httpBackend.flush();
          expect(callback).toHaveBeenCalled();
        });

        it('should have a cacheBust parameter when cacheBust is true', function() {
          $httpBackend.expectGET(/\/api\/v1\/users\/1\?cacheBust=\d+/).respond(200, responseData);

          users.get(1, {cacheBust: true}).success(function(data) {
            expect(data).toBeEqual(responseData);
            callback();
          });

          $httpBackend.flush();
          expect(callback).toHaveBeenCalled();
        });
      });

      describe('update()', function () {

        var updateResponseData = {id: 1, foo: 'bar'};

        it('should update a single resource by id', function () {

          $httpBackend.expectPUT('/api/v1/users/1').respond(200, updateResponseData);

          users.update(1, {}).success(function (data) {
            expect(data).toBeEqual(updateResponseData);
            callback();
          });

          $httpBackend.flush();
          expect(callback).toHaveBeenCalled();
        });

        it('should update a single entity WITHOUT an id', function () {

          $httpBackend.expectPUT('/api/v1/users').respond(200, updateResponseData);

          var _request = spyOn(users, '_request').and.callThrough();

          var data = { id: 1 };
          var config = { headers: { 'MyHeader': 'MyValue' } };
          users.update(data, config).success(function(result) {
            expect(result).toBeEqual(updateResponseData);
            callback();
          });

          $httpBackend.flush();
          expect(callback).toHaveBeenCalled();

          config = users._config(config);
          config.method = 'PUT';
          config.url = users._getUrl();
          config.data = data;

          expect(_request).toHaveBeenCalled();
          expect(_request).toHaveBeenCalledWith(config, null);
        });

        describe('remove()', function() {

          it('should remove entities WITHOUT an id', function () {

            $httpBackend.expectDELETE('/api/v1/users').respond({});

            var _request = spyOn(users, '_request').and.callThrough();

            var data = { id: 1 };
            var config = { headers: { 'MyHeader': 'MyValue' } };
            users.remove(data, config);

            $httpBackend.flush();

            config = users._config(config);
            config.method = 'DELETE';
            config.url = users._getUrl();
            config.data = data;

            expect(_request).toHaveBeenCalled();
            expect(_request).toHaveBeenCalledWith(config, null);
          });
        });

      });

    });

    describe('callbacks', function() {

      var Users;
      var users;

      var queryCallback = jasmine.createSpy('queryCallback');
      var beforeCreateCallback = jasmine.createSpy('beforeCreateCallback');
      var afterCreateCallback = jasmine.createSpy('afterCreateCallback');
      var updateCallback = jasmine.createSpy('updateCallback');
      var removeCallback = jasmine.createSpy('removeCallback');

      beforeEach(function() {

        Users = function() {
          AvApiResource.call(this,{
            url: '/users'
          });
        };

        angular.extend(Users.prototype, AvApiResource.prototype, {
          afterQuery: queryCallback,
          beforeCreate: beforeCreateCallback,
          afterCreate: afterCreateCallback,
          beforeUpdate: updateCallback,
          afterUpdate: updateCallback,
          afterRemove: removeCallback
        });


        users = new Users();
      });

      it('should call afterGet() after promise returns from resource.get()', function() {

        Users.prototype.afterGet = function(response) {
          response.data[0].a = 2;
          return response;
        };

        spyOn(users, 'afterGet').and.callThrough();

        $httpBackend.expectGET('/api/v1/users/1').respond(200, responseData);

        var transformedResponse = [{a: 2, b: 2 },{a: 1, b: 2 }];

        users.get(1).success(function(data) {
          expect(data).toBeEqual(transformedResponse);
        });
        $httpBackend.flush();

        expect(users.afterGet).toHaveBeenCalled();
        expect(users.afterGet.calls.count()).toEqual(1);

        Users.prototype.afterGet = null;
      });

      it('should call afterQuery() after promise returns from resource.query()', function() {

        $httpBackend.expectGET('/api/v1/users').respond(200, responseData);

        expect(queryCallback.calls.count()).toEqual(0);

        users.query();
        $httpBackend.flush();

        expect(queryCallback).toHaveBeenCalled();
        expect(queryCallback.calls.count()).toEqual(1);
      });

      it('should call beforeCreate() and afterCreate() on resource.create()', function() {

        $httpBackend.expectPOST('/api/v1/users').respond(200, responseData);

        expect(beforeCreateCallback.calls.count()).toEqual(0);
        expect(afterCreateCallback.calls.count()).toEqual(0);

        var data = {
          'firstName': 'Rob',
          'lastName': 'McGuinness'
        };

        users.beforeCreate = beforeCreateCallback.and.returnValue(data);

        users.create(data);
        $httpBackend.flush();

        expect(beforeCreateCallback).toHaveBeenCalled();
        expect(beforeCreateCallback).toHaveBeenCalledWith(data);
        expect(beforeCreateCallback.calls.count()).toEqual(1);
        expect(afterCreateCallback).toHaveBeenCalled();
        expect(afterCreateCallback.calls.argsFor(0).length).toEqual(2);
        expect(afterCreateCallback.calls.argsFor(0)[1]).toEqual(data);
        expect(afterCreateCallback.calls.count()).toEqual(1);
      });

      it('should call afterRemove() on resource.remove()', function() {

        $httpBackend.expectDELETE('/api/v1/users/1').respond(200, responseData);

        expect(removeCallback.calls.count()).toEqual(0);

        users.remove(1);
        $httpBackend.flush();

        expect(removeCallback).toHaveBeenCalled();
        expect(removeCallback.calls.count()).toEqual(1);
      });

      it('should call beforeUpdate() and afterUpdate() during resource.update()', function() {

        $httpBackend.whenPUT('/api/v1/users/1').respond(200, responseData);

        expect(updateCallback.calls.count()).toEqual(0);

        users.update(1, {
          'firstName': 'Rob',
          'lastName': 'McGuinness'
        });

        $httpBackend.flush();

        expect(updateCallback).toHaveBeenCalled();
        expect(updateCallback.calls.count()).toEqual(2);
      });

    });

  });





});
