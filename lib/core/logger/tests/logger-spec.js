/*global it, inject, module, spyOn, beforeEach, expect, describe */
describe('avLogger', function () {
  'use strict';

  var AvLogger;
  var logger;
  var formattedTimestamp = '';
  var logMock = {
    foo: 'bar',
    log: function () {},
    error: function () {}
  };

  beforeEach(module('availity', function (_AvLoggerProvider_) {
    _AvLoggerProvider_.enabled(true);
  }));
  beforeEach(inject(function (_AvLogger_) {
    AvLogger = _AvLogger_;
    logger = new AvLogger('', logMock);

    spyOn(AvLogger, 'getFormattedTimestamp').and.callFake(function () {
      return formattedTimestamp;
    });
  }));

  describe('logging', function () {
    it('calls the delegate\'s log method', function () {
      spyOn(logMock, 'log');
      formattedTimestamp = '111';

      logger.log('foo');

      expect(logMock.log).toHaveBeenCalledWith('111 - foo');
    });

    it('calls the delegate\'s error method', function () {
      spyOn(logMock, 'error');
      formattedTimestamp = '111';

      logger.error('foo');

      expect(logMock.error).toHaveBeenCalledWith('111 - foo');
    });

    it('logs angular errors with a stack', function () {
      spyOn(logMock, 'error');
      formattedTimestamp = '111';
      var err = new Error('Foo');
      err.stack = 'bar';

      logger.error(err, undefined); // Angular passes along a 'cause' param that is usually undefined

      expect(logMock.error).toHaveBeenCalledWith('111 - Error: Foo\nbar');
    });

    it('handles logging angular errors with {} in them.', function () {
      spyOn(logMock, 'error');
      formattedTimestamp = '111';
      var err = new Error('Foo {}');
      err.stack = 'bar';

      logger.error(err, undefined); // Angular passes along a 'cause' param that is usually undefined

      expect(logMock.error).toHaveBeenCalledWith('111 - Error: Foo {}\nbar');
    });

    // TODO: More tests around scenarios where 'cause' is not undefined, as I think that might potentially break the logic in _log
  });

  describe('supplant', function () {
    it('should replace interpolated values with the appropriate array element', function () {
      var actual = AvLogger.supplant('my {0} message {1}', ['interpolated', 'works']);

      expect(actual).toBe('my interpolated message works');
    });

    it('should return the raw string when no supplant data is passed in', function () {
      var actual = AvLogger.supplant('no supplant data', undefined);

      expect(actual).toBe('no supplant data');
    });
  });

});
