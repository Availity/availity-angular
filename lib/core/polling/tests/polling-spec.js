/*global inject, describe, it, availity, beforeEach, expect, module, angular, spyOn*/
describe('avPollingService', function() {

  'use strict';

  var avPollingService;
  var AvApiResource;
  var AV_POLLING;
  var asyncResponse;

  // jscs: disable
  var responseAsync = {"data": {}, "status": 202, "config": {"method": "GET", "transformRequest": [null ], "transformResponse": [null ], "prefix": "", "path": "/api", "url": "/api/internal/v1/credentials", "version": "/v1", "level": "/internal", "suffix": "", "cache": true, "api": true, "pollingRetryCount": 0, "pollingInterval": 1000, "pollingDecay": 1.2, "pollingMaxInterval": 30000, "params": {"npi": "1780898304", "payerId": "HUMANA"}, "headers": {"Accept": "application/json, text/plain, */*", "RemoteUser": "rmcguinness"} } };
  var responseResolved = {"totalCount": 1, "count": 1, "offset": 0, "limit": 50, "links": {"self": {"href": ""} }, "credentials": [{"id": "HUMANA.1851377980", "providerName": "Murphy, Douglas R MD", "npi": "1851377980", "payerName": "HUMANA", "payerId": "HUMANA", "statusCode": "CM", "statusDescription": "CREDENTIALED PROVIDER"} ] };
  // jscs: enable

  beforeEach(module('availity'));

  availity.mock.serviceSpecHelper();

  beforeEach(inject(function(_avPollingService_, _AvApiResource_, _AV_POLLING_) {

    avPollingService = _avPollingService_;
    AvApiResource = _AvApiResource_;
    AV_POLLING = _AV_POLLING_;

    // Add a fake headers function that simulates real Angular function
    asyncResponse = angular.extend({}, responseAsync, {
      headers: availity.mock.headers({
        'location': '/api/v1/dummy/123456789'
      })
    });

  }));

  it('should calculate polling interval', function() {
    var config = {
      pollingInterval: 1000,
      pollingDecay: 1.2
    };

    var timeout = avPollingService.getPollingTimeout(config);
    expect(timeout).toBe(1200);
  });

  it('should override polling defaults', function() {

    var config = avPollingService.setDefaults({
      pollingInterval: 2,
      pollingDecay: 1,
      pollingMaxInterval: 4000
    });

    // ...ensure the overrides are honored...
    expect(config.pollingInterval).toBe(2);
    expect(config.pollingDecay).toBe(1);
    expect(config.pollingMaxInterval).toBe(4000);

    // ...and just for giggles
    expect(config.pollingRetryCount).toBe(0);
  });

  it('should ignore non-api request', function() {

    var spyAsyncResponse = spyOn(avPollingService, 'onAsyncReponse');

    availity.mock.$httpBackend.expectGET('/ok').respond(200);

    availity.mock.$http.get('/ok').then(function(response) {
      avPollingService.response(response);
      expect(spyAsyncResponse).not.toHaveBeenCalled();
    });
    availity.mock.$httpBackend.flush();

  });

  it('isAsyncResponse() should respond TRUE for async response', function() {

    expect(avPollingService.isAsyncResponse(asyncResponse)).toBeTruthy();

    // try and blow up the function with bad values
    expect(avPollingService.isAsyncResponse({})).toBeFalsy();
    expect(avPollingService.isAsyncResponse(null)).toBeFalsy();
    expect(avPollingService.isAsyncResponse({data: null})).toBeFalsy();
    expect(avPollingService.isAsyncResponse('Hello World')).toBeFalsy();


  });

  it('asynchronous api response should return a promise and emit original response in the deferred object', function() {

    // Setup our callbacks
    spyOn(avPollingService, 'queueRequest');

    var promise = avPollingService.response(asyncResponse);
    promise.then(null, null, function(notification) {
      expect(notification).toEqual(asyncResponse);
    });
    availity.mock.$timeout.flush();
    availity.mock.$scope.$digest();

    expect(avPollingService.queueRequest).toHaveBeenCalled();

  });

  it('should convert async response to a request and put into queue', function() {

    spyOn(avPollingService, 'pushRequest').and.callThrough();
    var deferred = availity.mock.$q.defer();

    avPollingService.queueRequest(deferred, asyncResponse);

    expect(avPollingService.pushRequest).toHaveBeenCalled();
    expect(avPollingService.pendingRequests.length).toBe(1);

    var request = avPollingService.pendingRequests[0];

    // ensure the queued request has the necessary attributes
    expect(request.id).toBeDefined();
    expect(request.config).toBeDefined();
    expect(request.config.headers).toBeDefined();
    expect(request.config.api).toBeTruthy();
    expect(request.deferred).toBeDefined();
    expect(request.timer).toBeDefined();

    // just for giggles test clearing all requests and the timers
    avPollingService.clearRequests();
    expect(avPollingService.pendingRequests.length).toBe(0);

  });

  it('should retry aysnc request until non-async response', function() {

    spyOn(avPollingService, 'retryRequest').and.callThrough();

    var promise = avPollingService.onAsyncReponse(asyncResponse);
    promise.then(function(successfulResponse) {
      expect(successfulResponse.data).toEqual(responseResolved);
      // at this point we retried the original request twice and simulated
      // two server responses...one of them being async response and the other
      // the real response so the call count should be 2
      expect(avPollingService.retryRequest.calls.count()).toBe(2);
    });

    availity.mock.$httpBackend.expectGET('/api/v1/dummy/123456789').respond(202, asyncResponse, {'location': '/api/v1/dummy/123456789'});
    // flush will retry the original queued request
    // and backend will response with async response that the polling service should requeue
    // and retry
    availity.mock.flush();
    availity.mock.$scope.$digest();
    availity.mock.$httpBackend.flush();

    // reset ajax expectation but this time return a good response that will resolve successfully
    availity.mock.$httpBackend.expectGET('/api/v1/dummy/123456789').respond(200, responseResolved);
    // this will cause the request that is queued on a timer to fire the ajax request
    availity.mock.flush();
    availity.mock.$scope.$digest();
    availity.mock.$httpBackend.flush();

  });

  it('should timeout after default number of attempts', function() {

    var promise = avPollingService.onAsyncReponse(asyncResponse);
    promise.then(null, function(errorResponse) {
      expect(errorResponse.config.pollingRetryCount).toBe(AV_POLLING.MAX_RETRY);
    });

    availity.mock.$httpBackend.expectGET('/api/v1/dummy/123456789').respond(202, responseAsync, {'location': '/api/v1/dummy/123456789'});

    // flush will retry the original queued request
    // and backend will response with async response that the polling service should requeue
    // and retry
    availity.mock.flush();
    availity.mock.$scope.$digest();
    availity.mock.$httpBackend.flush();

    var pendingRequest = avPollingService.pendingRequests[0];
    expect(pendingRequest.config.pollingRetryCount).toBe(1);

    pendingRequest.config.pollingRetryCount = AV_POLLING.MAX_RETRY;

    // reset ajax expectation but and return another async response to test the max retry
    //availity.mock.$httpBackend.expectGET('/api/v1/dummy/123456789').respond(200, responseAsync);
    // this will cause the request that is queued on a timer to fire the ajax request
    availity.mock.flush();
    availity.mock.$scope.$digest();
    // availity.mock.$httpBackend.flush();

  });

  it('should resolve successful asynchronous response', function() {

    spyOn(avPollingService, 'retryRequest').and.callThrough();

    availity.mock.$httpBackend.expectGET('/api/v1/dummy/123456789').respond(200, responseResolved);

    var promise = avPollingService.onAsyncReponse(asyncResponse);
    promise.then(function(response) {
      expect(avPollingService.retryRequest).toHaveBeenCalled();
      expect(response.data).toEqual(responseResolved);
    });

    availity.mock.flush();
    availity.mock.$scope.$digest();
    availity.mock.$httpBackend.flush();

    avPollingService.clearRequests();
  });

  it('should return relative url from API aysnc response href attribute', function() {

    var url = avPollingService.getUrl('https://aaa.api.availity.com/v1/dummy');
    expect(url).toBe('/api/v1/dummy');

    url = avPollingService.getUrl('/api/v1/dummy');
    expect(url).toBe('/api/v1/dummy');
  });

});
