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
    const mockStorageVal = 'fakeStorageVal';

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

      inject( (_$httpBackend_, _$q_, _AvApiResource_, avLocalStorageService) => {
        $httpBackend = _$httpBackend_;
        $q = _$q_;
        AvApiResource = _AvApiResource_;
        spyOn(avLocalStorageService, 'getVal').and.returnValue(mockStorageVal);
      });

    });

    afterEach( () => {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should not allow options to be null', () => {
      expect( () => { return new AvApiResource() }).toThrow(new Error('[options] cannot be null or undefined'));
    });

    describe('urls', () => {

      it('should build url with resource name', () => {

        const cats = new AvApiResource({name: 'cats'});

        expect(cats).toBeObject();
        expect(cats.getUrl()).toBe('/api/v1/cats');

      });

      it('should build url with resource name and forward slash', () => {

        const cats = new AvApiResource({name: '/cats'});
        expect(cats.getUrl()).toBe('/api/v1/cats');

      });

      it('should build url with resource name and path', () => {

        const cats = new AvApiResource({
          path: '/internal/api',
          name: '/cats'
        });

        expect(cats.getUrl()).toBe('/internal/api/v1/cats');

      });


      it('should build url with with resource name, version and path', () => {

        const cats = new AvApiResource({
          version: '/v2',
          name: '/bar',
          path: '/api/foo'
        });

        expect(cats.getUrl()).toBe('/api/foo/v2/bar');

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

        const cats = new AvApiResource({
          url: '/availity/login',
          api: false
        });

        expect(cats.getUrl()).toBe('/availity/login');

      });
    });

    describe('rest', () => {

      let cats;

      beforeEach(function() {
        cats = new AvApiResource({name: 'cats', sessionBust: false});
      });

      describe('query()', () => {

        it('should get list of resources', () => {

          // expectGET to make sure this is called once.
          $httpBackend.expectGET('/api/v1/cats').respond(200, responseData);

          cats.query().success(function(data) {
            expect(data).toBeEqual(responseData);
          });

          $httpBackend.flush();
        });

        it('should get list of resources with params', () => {

          // expectGET to make sure this is called once.
          $httpBackend.expectGET('/api/v1/cats?a=1&b=2').respond(200, responseData);

          cats.query({params: {a: 1, b: 2}}).success(function(data) {
            expect(data).toBeEqual(responseData);
            callback();
          });

          $httpBackend.flush();
          expect(callback).toHaveBeenCalled();

        });

        it('should have a cacheBust parameter when cacheBust is true', () => {

          $httpBackend.expectGET(/\/api\/v1\/cats\?cacheBust=\d+/).respond(200, responseData);

          cats.query({cacheBust: true}).success(function(data) {
            expect(data).toBeEqual(responseData);
            callback();
          });

          $httpBackend.flush();
          expect(callback).toHaveBeenCalled();
        });

        it('should have a cacheBust parameter when cacheBust is value', () => {

          $httpBackend.expectGET(/\/api\/v1\/cats\?cacheBust=hello/).respond(200, responseData);

          cats.query({cacheBust: 'hello'}).success(function(data) {
            expect(data).toBeEqual(responseData);
            callback();
          });

          $httpBackend.flush();
          expect(callback).toHaveBeenCalled();
        });

        it('should have a cacheBust parameter when cacheBust is a function', () => {

          $httpBackend.expectGET(/\/api\/v1\/cats\?cacheBust=hello/).respond(200, responseData);

          const cacheBustFn = jasmine.createSpy('cacheBustFn').and.returnValue('hello');

          cats.query({cacheBust: cacheBustFn}).success(function(data) {
            expect(data).toBeEqual(responseData);
            expect(cacheBustFn).toHaveBeenCalled();
            callback();
          });

          $httpBackend.flush();
          expect(callback).toHaveBeenCalled();
        });

        it('should have a cacheBust parameter with other parameters', () => {

          $httpBackend.expectGET(/\/api\/v1\/cats\?a=1&b=2&cacheBust=\d+/).respond(200, responseData);

          cats.query({params: {a: 1, b: 2}, cacheBust: true}).success(function(data) {
            expect(data).toBeEqual(responseData);
            callback();
          });

          $httpBackend.flush();
          expect(callback).toHaveBeenCalled();

        });

        it('should have a pageBust parameter when pageBust is true', () => {

          $httpBackend.expectGET(/\/api\/v1\/cats\?pageBust=\d+/).respond(200, responseData);

          cats.query({pageBust: true}).success(function(data) {
            expect(data).toBeEqual(responseData);
            callback();
          });

          $httpBackend.flush();
          expect(callback).toHaveBeenCalled();
        });

        it('should have a sessionBust parameter when sessionBust is true', () => {

          $httpBackend.expectGET('/api/v1/cats?sessionBust=' + mockStorageVal).respond(200, responseData);

          cats.query({sessionBust: true}).success(function(data) {
            expect(data).toBeEqual(responseData);
            callback();
          });

          $httpBackend.flush();
          expect(callback).toHaveBeenCalled();
        });

      });

      describe('get()', () => {

        it('should get a single resource by id', () => {

          $httpBackend.expectGET('/api/v1/cats/1').respond(200, responseData);

          cats.get(1).success(function(data) {
            expect(data).toBeEqual(responseData);
            callback();
          });

          $httpBackend.flush();
          expect(callback).toHaveBeenCalled();

        });

        it('should have a cacheBust parameter when cacheBust is true', () => {

          $httpBackend.expectGET(/\/api\/v1\/cats\/1\?cacheBust=\d+/).respond(200, responseData);

          cats.get(1, {cacheBust: true}).success(function(data) {
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

          $httpBackend.expectPUT('/api/v1/cats/1').respond(200, updateResponseData);

          cats.update(1, {}).success( data => {
            expect(data).toBeEqual(updateResponseData);
            callback();
          });

          $httpBackend.flush();
          expect(callback).toHaveBeenCalled();

        });

        it('should update a single resource WITHOUT an id', function() {

          $httpBackend.expectPUT('/api/v1/cats').respond(200, updateResponseData);

          const request = spyOn(cats, 'request').and.callThrough();

          const data = { id: 1 };
          let config = { headers: { 'MyHeader': 'MyValue' } };
          cats.update(data, config).success( result => {
            expect(result).toBeEqual(updateResponseData);
            callback();
          });

          $httpBackend.flush();
          expect(callback).toHaveBeenCalled();

          config = cats.config(config);
          config.method = 'PUT';
          config.url = cats.getUrl();
          config.data = data;

          expect(request).toHaveBeenCalled();
          expect(request).toHaveBeenCalledWith(config, jasmine.any(Function));

        });

      });

      describe('remove()', () => {

        it('should remove resource WITHOUT an id', () => {

          $httpBackend.expectDELETE('/api/v1/cats').respond({});

          const request = spyOn(cats, 'request').and.callThrough();

          const data = { id: 1 };
          let config = { headers: { 'MyHeader': 'MyValue' } };
          cats.remove(data, config);

          $httpBackend.flush();

          config = cats.config(config);
          config.method = 'DELETE';
          config.url = cats.getUrl();
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

        class Cats extends AvApiResource {

          constructor() {
            super({name: '/cats', sessionBust: false});
          }

          afterGet(response) {
            response.data[0].a = 2;
            return response;
          }

        }

        const cats = new Cats();
        spyOn(cats, 'afterGet').and.callThrough();
        $httpBackend.expectGET('/api/v1/cats/1').respond(200, responseData);

        cats.get(1).success( data => expect(data).toBeEqual([{a: 2, b: 2 }, {a: 1, b: 2 }]));
        $httpBackend.flush();

        expect(cats.afterGet).toHaveBeenCalled();
        expect(cats.afterGet.calls.count()).toEqual(1);

      });

      it('should call afterQuery() on query()', () => {

        class Cats extends AvApiResource {

          constructor() {
            super({name: '/cats', sessionBust: false});
          }

          afterQuery(response) {
            return response;
          }

        }

        const cats = new Cats();
        const queryCallback = spyOn(cats, 'afterQuery').and.callThrough();
        $httpBackend.expectGET('/api/v1/cats').respond(200, responseData);

        cats.query();
        $httpBackend.flush();

        expect(queryCallback).toHaveBeenCalled();
        expect(queryCallback.calls.count()).toEqual(1);

      });

      it('should call beforeCreate() and afterCreate() on create()', () => {

        $httpBackend.expectPOST('/api/v1/cats').respond(200, responseData);

        class Cats extends AvApiResource {

          constructor() {
            super({name: '/cats'});
          }

          beforeCreate(data) {
            return data;
          }

          afterCreate(response) {
            return response;
          }

        }

        const cats = new Cats();
        const beforeCreateCallback = spyOn(cats, 'beforeCreate').and.callThrough();
        const afterCreateCallback = spyOn(cats, 'afterCreate').and.callThrough();

        const data = {
          'firstName': 'Rob',
          'lastName': 'McGuinness'
        };

        cats.create(data);
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

        $httpBackend.expectDELETE('/api/v1/cats/1').respond(200, responseData);

        class Cats extends AvApiResource {

          constructor() {
            super({name: '/cats'});
          }

          afterRemove(response) {
            return response;
          }

        }

        const cats = new Cats();
        const afterRemoveCallback = spyOn(cats, 'afterRemove').and.callThrough();

        cats.remove(1);
        $httpBackend.flush();

        expect(afterRemoveCallback).toHaveBeenCalled();
        expect(afterRemoveCallback.calls.count()).toEqual(1);
      });

      it('should call beforeUpdate() and afterUpdate() on update()', () => {

        $httpBackend.whenPUT('/api/v1/cats/1').respond(200, responseData);

        class Cats extends AvApiResource {

          constructor() {
            super({name: '/cats'});
          }

          beforeUpdate(data) {
            return data;
          }

          afterUpdate(response) {
            return response;
          }

        }

        const cats = new Cats();
        const beforeUpdateCallback = spyOn(cats, 'beforeUpdate').and.callThrough();
        const afterUpdateCallback = spyOn(cats, 'afterUpdate').and.callThrough();

        const data = {
          'firstName': 'Rob',
          'lastName': 'McGuinness'
        };

        cats.update(1, data);

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
