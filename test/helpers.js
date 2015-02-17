/*global inject, jasmine, spyOn, beforeEach, afterEach*/
(function() {

  'use strict';

  availity.mock = {

    /**
     * Jasmine spec helper for Angular directives.
     *
     * Usage
     * =====
     *
     * 1. Initialize the helper within a `describe` function block of your Jasmine spec
     *
     *     avTest.directiveSpecHelper();
     *
     * 2. Compile directives as needed.  Each directive is attached to a `avTest.sandBoxEl` in the DOM
     * which is automatically cleaned up after every spec run
     *
     *     var $el = avTest.compileDirective(templateDisabled);
     *
     * @return {Object} Global variable with Angular services and scope as attributes
     */
    directiveSpecHelper: function() {

      beforeEach(inject(function(_$rootScope_, _$compile_, _$anchorScroll_, _$window_, _$controller_, _$location_, _$q_, _$timeout_) {
        availity.mock.$scope = _$rootScope_.$new();
        availity.mock.sandboxEl = $('<div>').attr('id', 'sandbox').appendTo($('body'));
        availity.mock.$compile = _$compile_;
        availity.mock.$controller = _$controller_;
        availity.mock.$location = _$location_;
        availity.mock.$window = _$window_;
        availity.mock.$anchorScroll = _$anchorScroll_;
        availity.mock.$q = _$q_;
        availity.mock.$timeout = _$timeout_;
        availity.mock.spy = jasmine.createSpy('event');
      }));

      afterEach(function() {
        availity.mock.$scope.$destroy();
        availity.mock.sandboxEl.remove();
      });

      availity.mock.compileDirective = function(template, $elScope, appendEl) {
        var el = appendEl || this.sandboxEl;
        var element = $(template).appendTo(el);
        element = availity.mock.$compile(element)($elScope || availity.mock.$scope);
        availity.mock.$scope.$digest();
        return jQuery(element[0]);
      };
    },

    serviceSpecHelper: function() {

      beforeEach(inject(function(_$q_, _$timeout_, _$rootScope_, _$http_, _$httpBackend_) {
        availity.mock.$q = _$q_;
        availity.mock.$scope = _$rootScope_.$new();
        availity.mock.$timeout = _$timeout_;
        availity.mock.spy = jasmine.createSpy('event');
        availity.mock.spyBroadast = spyOn(_$rootScope_, '$broadcast').and.callThrough();
        availity.mock.$http = _$http_;
        availity.mock.$httpBackend = _$httpBackend_;
      }));

      afterEach(function() {
        availity.mock.$httpBackend.verifyNoOutstandingExpectation();
        availity.mock.$httpBackend.verifyNoOutstandingRequest();
      });

    },

    flush: function() {

      try {
        availity.mock.$timeout.flush();
      }
      catch(e) {}
    },

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
    headers: function(headers) {

      return function(name) {
        if(name) {
          return headers[name.toLowerCase()] || null;
        }

        return headers;
      };

    }
  };

  if(window._phantom) {

    // Patch since PhantomJS does not implement click() on HTMLElement. In some
    // cases we need to execute the native click on an element. However, jQuery's
    // $.fn.click() does not dispatch to the native function on <a> elements, so we
    // can't use it in our implementations: $el[0].click() to correctly dispatch.
    if(!HTMLElement.prototype.click) {
      HTMLElement.prototype.click = function() {
        var ev = document.createEvent('MouseEvent');
        ev.initMouseEvent(
          'click',
          true, /*bubble*/
          true, /*cancelable*/
          window, null,
          0, 0, 0, 0, /*coordinates*/
          false, false, false, false, /*modifier keys*/
          0, /*button=left*/
          null
        );
        this.dispatchEvent(ev);
      };
    }
  }

})();
