/* global describe, spyOn, inject, beforeEach, afterEach, it, xit, expect, jasmine, module */

import angular from 'angular';
import ngModule from '../resource';
import Tester from 'tester';

describe('AvApiResource', () => {

  let $httpBackend;
  let $q;
  let AvApiResource;
  let callback;

  const responseData = [{a: 1, b: 2}, {a: 1, b: 2}];

  Tester.matchers();

  beforeEach( () => {

    callback = jasmine.createSpy('done');

    angular.mock.module(ngModule.name);

    angular.mock.module( $provide => {

      const pollingService = {
        response(response) {
          return response || $q.when(response);
        }
      };

      $provide.value('avPollingService', pollingService);

    });

    inject( (_$httpBackend_, _$q_, _AvApiResource_) => {
      $httpBackend = _$httpBackend_;
      $q = _$q_;
      AvApiResource = _AvApiResource_;
    });

  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should not allow options to be null', () => {
    expect( () => { AvApiResource._create() }).toThrow(new Error('[options] cannot be null or undefined'));
  });

  describe('urls', () => {

    it('should build url with resource name', () => {

      const users = new AvApiResource({name: 'users'});

      expect(users).toBeObject();
      expect(users._getUrl()).toBe('/api/v1/users');

    });

    it('should build url with resource name and forward slash', () => {

      const users = new AvApiResource({name: '/users'});

      expect(users._getUrl()).toBe('/api/v1/users');

    });

    it('should build url with resource name and path', () => {

      const users = new AvApiResource({
        path: '/internal/api',
        name: '/users'
      });

      expect(users._getUrl()).toBe('/internal/api/v1/users');

    });


    it('should build url with with resource name, version and path', () => {

      const users = new AvApiResource({
        version: '/v2',
        name: '/bar',
        path: '/api/foo'
      });

      expect(users._getUrl()).toBe('/api/foo/v2/bar');

    });

    it('should build url with missing slash "/" character', () => {

      const api = new AvApiResource({
        version: 'v1',
        name: 'bar',
        path: 'api/foo'
      });

      expect(api._getUrl()).toBe('/api/foo/v1/bar');

    });

    it('should build url', () => {

      const users = new AvApiResource({
        url: '/availity/JwsServlet',
        api: false
      });

      expect(users._getUrl()).toBe('/availity/JwsServlet');

    });
  });

  describe('rest', () => {

    let users;

    beforeEach(function() {
      users = new AvApiResource({name: 'users'});
    });

    describe('query()', () => {

      it('should get list of resources', () => {

        // expectGET to make sure this is called once.
        $httpBackend.expectGET('/api/v1/users').respond(200, responseData);

        users.query().success(function(data) {
          expect(data).toBeEqual(responseData);
        });

        $httpBackend.flush();
      });

      it('should get list of resources with params', () => {

        // expectGET to make sure this is called once.
        $httpBackend.expectGET('/api/v1/users?a=1&b=2').respond(200, responseData);

        users.query({params: {a: 1, b: 2}}).success(function(data) {
          expect(data).toBeEqual(responseData);
          callback();
        });

        $httpBackend.flush();
        expect(callback).toHaveBeenCalled();

      });

      it('should have a cacheBust parameter when cacheBust is true', () => {

        $httpBackend.expectGET(/\/api\/v1\/users\?cacheBust=\d+/).respond(200, responseData);

        users.query({cacheBust: true}).success(function(data) {
          expect(data).toBeEqual(responseData);
          callback();
        });

        $httpBackend.flush();
        expect(callback).toHaveBeenCalled();
      });

      it('should have a cacheBust parameter with other parameters', () => {

        $httpBackend.expectGET(/\/api\/v1\/users\?a=1&b=2&cacheBust=\d+/).respond(200, responseData);

        users.query({params: {a: 1, b: 2}, cacheBust: true}).success(function(data) {
          expect(data).toBeEqual(responseData);
          callback();
        });

        $httpBackend.flush();
        expect(callback).toHaveBeenCalled();

      });

    });

    describe('get()', () => {

      it('should get a single resource by id', () => {

        $httpBackend.expectGET('/api/v1/users/1').respond(200, responseData);

        users.get(1).success(function(data) {
          expect(data).toBeEqual(responseData);
          callback();
        });

        $httpBackend.flush();
        expect(callback).toHaveBeenCalled();

      });

      it('should have a cacheBust parameter when cacheBust is true', () => {

        $httpBackend.expectGET(/\/api\/v1\/users\/1\?cacheBust=\d+/).respond(200, responseData);

        users.get(1, {cacheBust: true}).success(function(data) {
          expect(data).toBeEqual(responseData);
          callback();
        });

        $httpBackend.flush();
        expect(callback).toHaveBeenCalled();

      });
    });

    describe('update()', function() {

      const updateResponseData = {id: 1, foo: 'bar'};

      it('should update a single resource by id', function() {

        $httpBackend.expectPUT('/api/v1/users/1').respond(200, updateResponseData);

        users.update(1, {}).success( data => {
          expect(data).toBeEqual(updateResponseData);
          callback();
        });

        $httpBackend.flush();
        expect(callback).toHaveBeenCalled();

      });

      it('should update a single resource WITHOUT an id', function() {

        $httpBackend.expectPUT('/api/v1/users').respond(200, updateResponseData);

        const _request = spyOn(users, '_request').and.callThrough();

        const data = { id: 1 };
        let config = { headers: { 'MyHeader': 'MyValue' } };
        users.update(data, config).success( result => {
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
        expect(_request).toHaveBeenCalledWith(config, undefined);

      });

      describe('remove()', () => {

        it('should remove resource WITHOUT an id', () => {

          $httpBackend.expectDELETE('/api/v1/users').respond({});

          const _request = spyOn(users, '_request').and.callThrough();

          const data = { id: 1 };
          let config = { headers: { 'MyHeader': 'MyValue' } };
          users.remove(data, config);

          $httpBackend.flush();

          config = users._config(config);
          config.method = 'DELETE';
          config.url = users._getUrl();
          config.data = data;

          expect(_request).toHaveBeenCalled();
          expect(_request).toHaveBeenCalledWith(config, undefined);

        });
      });

    });

  });

  describe('callbacks', () => {

    let Users;
    let users;

    const queryCallback = jasmine.createSpy('queryCallback');
    const beforeCreateCallback = jasmine.createSpy('beforeCreateCallback');
    const afterCreateCallback = jasmine.createSpy('afterCreateCallback');
    const updateCallback = jasmine.createSpy('updateCallback');
    const removeCallback = jasmine.createSpy('removeCallback');

    beforeEach(function() {

      class UsersResource extends AvApiResource {

        constructor() {
          super({name: '/users'});
        }

        afterQuery(){
          queryCallback();
        }

        beforeCreate(){
          beforeCreateCallback();
        }

        afterCreate(){
          afterCreateCallback();
        }

        beforeUpdate(){
          updateCallback();
        }

        afterUpdate(){
          updateCallback();
        }

        afterRemove(){
          removeCallback();
        }
      }

      Users = UsersResource;
      users = new Users();

    });

    it('should call afterGet() following get()', () => {

      Users.prototype.afterGet = function(response) {
        response.data[0].a = 2;
        return response;
      };

      spyOn(users, 'afterGet').and.callThrough();

      $httpBackend.expectGET('/api/v1/users/1').respond(200, responseData);

      const transformedResponse = [{a: 2, b: 2 }, {a: 1, b: 2 }];

      users.get(1).success( data => expect(data).toBeEqual(transformedResponse));
      $httpBackend.flush();

      expect(users.afterGet).toHaveBeenCalled();
      expect(users.afterGet.calls.count()).toEqual(1);

      Users.prototype.afterGet = null;

    });

    it('should call afterQuery() following query()', () => {

      $httpBackend.expectGET('/api/v1/users').respond(200, responseData);

      expect(queryCallback.calls.count()).toEqual(0);

      users.query();
      $httpBackend.flush();

      expect(queryCallback).toHaveBeenCalled();
      expect(queryCallback.calls.count()).toEqual(1);
    });

    xit('should call beforeCreate() and afterCreate() on create()', () => {

      $httpBackend.expectPOST('/api/v1/users').respond(200, responseData);

      expect(beforeCreateCallback.calls.count()).toEqual(0);
      expect(afterCreateCallback.calls.count()).toEqual(0);

      const data = {
        'firstName': 'Rob',
        'lastName': 'McGuinness'
      };

      Users.prototype.beforeCreate = beforeCreateCallback.and.returnValue(data);

      users.create(data);
      $httpBackend.flush();

      expect(beforeCreateCallback).toHaveBeenCalled();
      expect(beforeCreateCallback).toHaveBeenCalledWith(data);
      expect(beforeCreateCallback.calls.count()).toEqual(1);

      expect(afterCreateCallback).toHaveBeenCalled();
      expect(afterCreateCallback.calls.argsFor(0).length).toEqual(2); //
      expect(afterCreateCallback.calls.argsFor(0)[1]).toEqual(data); //
      expect(afterCreateCallback.calls.count()).toEqual(1);

    });

    it('should call afterRemove() following remove()', () => {

      $httpBackend.expectDELETE('/api/v1/users/1').respond(200, responseData);

      expect(removeCallback.calls.count()).toEqual(0);

      users.remove(1);
      $httpBackend.flush();

      expect(removeCallback).toHaveBeenCalled();
      expect(removeCallback.calls.count()).toEqual(1);
    });

    it('should call beforeUpdate() and afterUpdate() on update()', () => {

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
