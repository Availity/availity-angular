/* global inject, jasmine, module, spyOn, beforeEach, afterEach*/

import 'angular';
import $ from 'jquery';

import jasmineMatchers from './matchers';

class Tester {

  directive() {

    const self = this;

    beforeEach(inject( (_$rootScope_, _$compile_, _$anchorScroll_, _$window_, _$controller_, _$location_, _$q_, _$timeout_, _$httpBackend_, _$http_) => {

      self.$scope = _$rootScope_.$new();
      self.sandboxEl = $('<div>').attr('id', 'sandbox').appendTo($('body'));
      self.$compile = _$compile_;
      self.$controller = _$controller_;
      self.$location = _$location_;
      self.$window = _$window_;
      self.$anchorScroll = _$anchorScroll_;
      self.$q = _$q_;
      self.$timeout = _$timeout_;
      self.$http = _$http_;
      self.$httpBackend = _$httpBackend_;
      self.spyBroadast = spyOn(_$rootScope_, '$broadcast').and.callThrough();
      self.spy = jasmine.createSpy('event');

    }));

    afterEach( () => {

      this.$scope.$destroy();
      this.sandboxEl.remove();
      this.$httpBackend.verifyNoOutstandingExpectation();
      this.$httpBackend.verifyNoOutstandingRequest();

    });
  }

  service() {
    this.directive();
  }

  init() {
    this.directive();
  }

  provider() {

    beforeEach(function() {
      this.sandboxEl = $('<div>').attr('id', 'sandbox').appendTo($('body'));
    });

    afterEach(function() {
      this.sandboxEl.remove();
    });
  }

  compileDirective(template, $elScope, appendEl) {

    const el = appendEl || this.sandboxEl;
    let element = $(template).appendTo(el);
    element = this.$compile(element)($elScope || this.$scope);
    this.$scope.$digest();
    return $(element[0]);

  }

  flush(ms) {

    try {
      this.$timeout.flush(ms);
    } catch (e) {
      // no op
    }
  }

  /**
   * Angular adds a function to the response that lazy loads the response header info.  This is a helper
   * function that simulates the same behavior.
   *
   * Usage:
   *
   * response = _.extend({}, responseAsyncConfig, {
   *   headers: avTest.headers({
   *     "location": "/v1/dummy/123456789"
   *   })
   * });
   *
   * response.headers('location')
   *
   * More info:
   *
   * https://github.com/angular/angular.js/blob/14ff529fbbff46413c0cb451a2f0abbd16b05d5e/src/ng/http.js#L59
   */
  static headers(headers) {

    return function(name) {
      if (name) {
        return headers[name.toLowerCase()] || null;
      }

      return headers;
    };

  }

  static matchers() {
    return jasmineMatchers();
  }

}

export default Tester;
