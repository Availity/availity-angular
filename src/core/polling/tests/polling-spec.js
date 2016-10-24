/* global inject, describe, it, beforeEach, expect, module, spyOn*/

import angular from 'angular';
import Tester from 'tester';

import '../';

describe('avPollingService', () => {

  let avPollingService;
  let AV_POLLING;
  let asyncResponse;

  const tester = new Tester();

  const responseAsync = require('./response-async.json');
  const responseResolved = require('./response-resolved.json');

  beforeEach(angular.mock.module('availity'));

  tester.service();

  beforeEach(inject((_avPollingService_, _AvApiResource_, _AV_POLLING_) => {

    avPollingService = _avPollingService_;
    AV_POLLING = _AV_POLLING_;

    // Add a fake headers function that simulates real Angular function
    asyncResponse = angular.extend({}, responseAsync, {
      headers: Tester.headers({
        'location': '/api/v1/dummy/123456789'
      })
    });

  }));

  it('should calculate polling interval', () => {
    const config = {
      pollingInterval: 1000,
      pollingDecay: 1.2
    };

    const timeout = avPollingService.getPollingTimeout(config);
    expect(timeout).toBe(1200);
  });

  it('should override polling defaults', () => {

    const config = avPollingService.setDefaults({
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

  it('should ignore non-api request', () => {

    const spyAsyncResponse = spyOn(avPollingService, 'onAsyncReponse');

    tester.$httpBackend.expectGET('/ok').respond(200);

    tester.$http.get('/ok').then(response => {
      avPollingService.response(response);
      expect(spyAsyncResponse).not.toHaveBeenCalled();
    });
    tester.$httpBackend.flush();

  });

  it('isAsyncResponse() should respond TRUE for async response', () => {

    expect(avPollingService.isAsyncResponse(asyncResponse)).toBeTruthy();

    // try and blow up the function with bad values
    expect(avPollingService.isAsyncResponse({})).toBeFalsy();
    expect(avPollingService.isAsyncResponse(null)).toBeFalsy();
    expect(avPollingService.isAsyncResponse({data: null})).toBeFalsy();
    expect(avPollingService.isAsyncResponse('Hello World')).toBeFalsy();


  });

  it('asynchronous api response should return a promise and emit original response in the deferred object', () => {

    // Setup our callbacks
    spyOn(avPollingService, 'queueRequest');

    const promise = avPollingService.response(asyncResponse);
    promise.then(null, null, notification => {
      expect(notification).toEqual(asyncResponse);
    });
    tester.$timeout.flush();
    tester.$scope.$digest();

    expect(avPollingService.queueRequest).toHaveBeenCalled();

  });

  it('should convert async response to a request and put into queue', () => {

    spyOn(avPollingService, 'pushRequest').and.callThrough();
    const deferred = tester.$q.defer();

    avPollingService.queueRequest(deferred, asyncResponse);

    expect(avPollingService.pushRequest).toHaveBeenCalled();
    expect(avPollingService.pendingRequests.length).toBe(1);

    const request = avPollingService.pendingRequests[0];

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

  it('should retry aysnc request until non-async response', () => {

    spyOn(avPollingService, 'retryRequest').and.callThrough();

    const promise = avPollingService.onAsyncReponse(asyncResponse);
    promise.then(successfulResponse => {
      expect(successfulResponse.data).toEqual(responseResolved);
      // at this point we retried the original request twice and simulated
      // two server responses...one of them being async response and the other
      // the real response so the call count should be 2
      expect(avPollingService.retryRequest.calls.count()).toBe(2);
    });

    tester.$httpBackend.expectGET('/api/v1/dummy/123456789').respond(202, asyncResponse, {'location': '/api/v1/dummy/123456789'});
    // flush will retry the original queued request
    // and backend will response with async response that the polling service should requeue
    // and retry
    tester.flush();
    tester.$scope.$digest();
    tester.$httpBackend.flush();

    // reset ajax expectation but this time return a good response that will resolve successfully
    tester.$httpBackend.expectGET('/api/v1/dummy/123456789').respond(200, responseResolved);
    // this will cause the request that is queued on a timer to fire the ajax request
    tester.flush();
    tester.$scope.$digest();
    tester.$httpBackend.flush();

  });

  it('should timeout after default number of attempts', () => {

    const promise = avPollingService.onAsyncReponse(asyncResponse);
    promise.then(null, errorResponse => {
      expect(errorResponse.config.pollingRetryCount).toBe(AV_POLLING.MAX_RETRY);
    });

    tester.$httpBackend.expectGET('/api/v1/dummy/123456789').respond(202, responseAsync, {'location': '/api/v1/dummy/123456789'});

    // flush will retry the original queued request
    // and backend will response with async response that the polling service should requeue
    // and retry
    tester.flush();
    tester.$scope.$digest();
    tester.$httpBackend.flush();

    const pendingRequest = avPollingService.pendingRequests[0];
    expect(pendingRequest.config.pollingRetryCount).toBe(1);

    pendingRequest.config.pollingRetryCount = AV_POLLING.MAX_RETRY;

    // reset ajax expectation but and return another async response to test the max retry
    // tester.$httpBackend.expectGET('/api/v1/dummy/123456789').respond(200, responseAsync);
    // this will cause the request that is queued on a timer to fire the ajax request
    tester.flush();
    tester.$scope.$digest();
    // tester.$httpBackend.flush();

  });

  it('should resolve successful asynchronous response', () => {

    spyOn(avPollingService, 'retryRequest').and.callThrough();

    tester.$httpBackend.expectGET('/api/v1/dummy/123456789').respond(200, responseResolved);

    const promise = avPollingService.onAsyncReponse(asyncResponse);
    promise.then(response => {
      expect(avPollingService.retryRequest).toHaveBeenCalled();
      expect(response.data).toEqual(responseResolved);
    });

    tester.flush();
    tester.$scope.$digest();
    tester.$httpBackend.flush();

    avPollingService.clearRequests();
  });

  it('should return relative url from API aysnc response href attribute', () => {

    let url = avPollingService.getUrl('https://aaa.api.availity.com/v1/dummy');
    expect(url).toBe('/api/v1/dummy');

    url = avPollingService.getUrl('/api/v1/dummy');
    expect(url).toBe('/api/v1/dummy');
  });

});
