/* global describe, spyOn, inject, beforeEach, afterEach, it, expect, jasmine, module */

import angular from 'angular';
import ngModule from '../resource';
import Tester from 'tester';

describe('AvApiResourceProvider', () => {

  Tester.matchers();

  describe('AvApiResource', () => {

    let $httpBackend;
    let $q;
    let AvApiResource;
    let callback;

    const responseData = [{a: 1, b: 2}, {a: 1, b: 2}];

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

    afterEach( () => {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should not allow options to be null', () => {
      expect( () => { AvApiResource.create() }).toThrow(new Error('[options] cannot be null or undefined'));
    });

    describe('urls', () => {

      it('should build url with resource name', () => {

        const users = new AvApiResource({name: 'users'});

        expect(users).toBeObject();
        expect(users.getUrl()).toBe('/api/v1/users');

      });

      it('should build url with resource name and forward slash', () => {

        const users = new AvApiResource({name: '/users'});

        expect(users.getUrl()).toBe('/api/v1/users');

      });

      it('should build url with resource name and path', () => {

        const users = new AvApiResource({
          path: '/internal/api',
          name: '/users'
        });

        expect(users.getUrl()).toBe('/internal/api/v1/users');

      });


      it('should build url with with resource name, version and path', () => {

        const users = new AvApiResource({
          version: '/v2',
          name: '/bar',
          path: '/api/foo'
        });

        expect(users.getUrl()).toBe('/api/foo/v2/bar');

      });

      it('should build url with missing slash "/" character', () => {

        const api = new AvApiResource({
          version: 'v1',
          name: 'bar',
          path: 'api/foo'
        });

        expect(api.getUrl()).toBe('/api/foo/v1/bar');

      });

      it('should build url', () => {

        const users = new AvApiResource({
          url: '/availity/login',
          api: false
        });

        expect(users.getUrl()).toBe('/availity/login');

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

        it('should have a sessionBust parameter when sessionBust is true', () => {

          $httpBackend.expectGET(/\/api\/v1\/users\?sessionBust=\d+/).respond(200, responseData);

          users.query({sessionBust: true}).success(function(data) {
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

          const request = spyOn(users, 'request').and.callThrough();

          const data = { id: 1 };
          let config = { headers: { 'MyHeader': 'MyValue' } };
          users.update(data, config).success( result => {
            expect(result).toBeEqual(updateResponseData);
            callback();
          });

          $httpBackend.flush();
          expect(callback).toHaveBeenCalled();

          config = users.config(config);
          config.method = 'PUT';
          config.url = users.getUrl();
          config.data = data;

          expect(request).toHaveBeenCalled();
          expect(request).toHaveBeenCalledWith(config, jasmine.any(Function));

        });

      });

      describe('remove()', () => {

        it('should remove resource WITHOUT an id', () => {

          $httpBackend.expectDELETE('/api/v1/users').respond({});

          const request = spyOn(users, 'request').and.callThrough();

          const data = { id: 1 };
          let config = { headers: { 'MyHeader': 'MyValue' } };
          users.remove(data, config);

          $httpBackend.flush();

          config = users.config(config);
          config.method = 'DELETE';
          config.url = users.getUrl();
          config.data = data;

          expect(request).toHaveBeenCalled();
          expect(request).toHaveBeenCalledWith(config, jasmine.any(Function));

        });
      });

    });

    describe('callbacks', () => {

      beforeEach(function() {

      });

      it('should call afterGet() on get()', () => {

        class Users extends AvApiResource {

          constructor() {
            super({name: '/users'});
          }

          afterGet(response) {
            response.data[0].a = 2;
            return response;
          }

        }

        const users = new Users();
        spyOn(users, 'afterGet').and.callThrough();
        $httpBackend.expectGET('/api/v1/users/1').respond(200, responseData);

        users.get(1).success( data => expect(data).toBeEqual([{a: 2, b: 2 }, {a: 1, b: 2 }]));
        $httpBackend.flush();

        expect(users.afterGet).toHaveBeenCalled();
        expect(users.afterGet.calls.count()).toEqual(1);

      });

      it('should call afterQuery() on query()', () => {

        class Users extends AvApiResource {

          constructor() {
            super({name: '/users'});
          }

          afterQuery(response) {
            return response;
          }

        }

        const users = new Users();
        const queryCallback = spyOn(users, 'afterQuery').and.callThrough();
        $httpBackend.expectGET('/api/v1/users').respond(200, responseData);

        users.query();
        $httpBackend.flush();

        expect(queryCallback).toHaveBeenCalled();
        expect(queryCallback.calls.count()).toEqual(1);

      });

      it('should call beforeCreate() and afterCreate() on create()', () => {

        $httpBackend.expectPOST('/api/v1/users').respond(200, responseData);

        class Users extends AvApiResource {

          constructor() {
            super({name: '/users'});
          }

          beforeCreate(data) {
            return data;
          }

          afterCreate(response) {
            return response;
          }

        }

        const users = new Users();
        const beforeCreateCallback = spyOn(users, 'beforeCreate').and.callThrough();
        const afterCreateCallback = spyOn(users, 'afterCreate').and.callThrough();

        const data = {
          'firstName': 'Rob',
          'lastName': 'McGuinness'
        };

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

      it('should call afterRemove() on remove()', () => {

        $httpBackend.expectDELETE('/api/v1/users/1').respond(200, responseData);

        class Users extends AvApiResource {

          constructor() {
            super({name: '/users'});
          }

          afterRemove(response) {
            return response;
          }

        }

        const users = new Users();
        const afterRemoveCallback = spyOn(users, 'afterRemove').and.callThrough();

        users.remove(1);
        $httpBackend.flush();

        expect(afterRemoveCallback).toHaveBeenCalled();
        expect(afterRemoveCallback.calls.count()).toEqual(1);
      });

      it('should call beforeUpdate() and afterUpdate() on update()', () => {

        $httpBackend.whenPUT('/api/v1/users/1').respond(200, responseData);

        class Users extends AvApiResource {

          constructor() {
            super({name: '/users'});
          }

          beforeUpdate(data) {
            return data;
          }

          afterUpdate(response) {
            return response;
          }

        }

        const users = new Users();
        const beforeUpdateCallback = spyOn(users, 'beforeUpdate').and.callThrough();
        const afterUpdateCallback = spyOn(users, 'afterUpdate').and.callThrough();

        const data = {
          'firstName': 'Rob',
          'lastName': 'McGuinness'
        };

        users.update(1, data);

        $httpBackend.flush();

        expect(beforeUpdateCallback).toHaveBeenCalled();
        expect(beforeUpdateCallback).toHaveBeenCalledWith(data);
        expect(beforeUpdateCallback.calls.count()).toEqual(1);

        expect(afterUpdateCallback).toHaveBeenCalled();
        expect(afterUpdateCallback.calls.count()).toEqual(1);
      });

    });
  });

});


