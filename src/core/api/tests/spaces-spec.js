/* global inject, describe, beforeEach, it, expect, module */

import angular from 'angular';
import module from '../spaces.js';

describe('avSpacesResource', () => {

  let avSpacesResource;

  beforeEach(() => {

    angular.mock.module(module.name);

    inject(_avSpacesResource_ => {
      avSpacesResource = _avSpacesResource_;
    });

  });

  it('should exist', () => {
    expect(avSpacesResource).toBeDefined();
  });


  it('should build url with resource name and path', () => {
    expect(avSpacesResource.getUrl()).toBe('/api/sdk/platform/v1/spaces');
  });
});

