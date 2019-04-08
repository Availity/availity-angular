/* global inject, describe, beforeEach, it, expect, module */

import angular from 'angular';

describe('avDmaLogMessagesResource', () => {

  let avDmaLogMessagesResource;

  beforeEach(() => {

    angular.mock.module('availity');

    inject(_avDmaLogMessagesResource_ => {
      avDmaLogMessagesResource = _avDmaLogMessagesResource_;
    });

  });

  it('should exist', () => {
    expect(avDmaLogMessagesResource).toBeDefined();
  });
});

