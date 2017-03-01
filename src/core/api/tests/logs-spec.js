/* global inject, describe, beforeEach, it, expect, module */

import angular from 'angular';

describe('avLogMessagesResource', () => {

  let avLogMessagesResource;

  beforeEach(() => {

    angular.mock.module('availity');

    inject(_avLogMessagesResource_ => {
      avLogMessagesResource = _avLogMessagesResource_;
    });

  });

  it('should exist', () => {
    expect(avLogMessagesResource).toBeDefined();
  });
});

