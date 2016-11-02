'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _module = require('../module');

var _module2 = _interopRequireDefault(_module);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_module2.default.factory('AvBlock', function (avBlockConfig, $timeout, $document) {

  var $body = $document.find('body');

  // These properties are not allowed to be specified in the start method.
  var reservedStateProperties = ['id', 'blockCount', 'blocking'];

  var AvBlock = function () {
    function AvBlock(id) {
      _classCallCheck(this, AvBlock);

      this.startPromise;
      this.doneCallbacks = [];
      this._id = id;

      this._state = {
        id: id,
        blockCount: 0,
        message: avBlockConfig.message,
        blocking: false
      };
    }

    AvBlock.prototype.block = function block() {
      this.startPromise = null;
      this._state.blocking = true;
    };

    AvBlock.prototype.start = function start(messageOrOptions) {
      var _this = this;

      messageOrOptions = messageOrOptions || {};

      if (_angular2.default.isString(messageOrOptions)) {

        messageOrOptions = {
          message: messageOrOptions
        };
      } else {

        _angular2.default.forEach(reservedStateProperties, function (x) {
          if (messageOrOptions[x]) {
            throw new Error('The property ' + x + ' is reserved for the block state.');
          }
        });
      }

      _angular2.default.extend(this._state, messageOrOptions);

      if (this._state.blockCount > 0) {
        this._state.message = messageOrOptions.message || this._state.message || avBlockConfig.message;
      } else {
        this._state.message = messageOrOptions.message || avBlockConfig.message;
      }

      this._state.blockCount++;

      // Check if the focused element is part of the block scope
      var $ae = _angular2.default.element($document[0].activeElement);

      if ($ae.length && (0, _utils.isElementInBlockScope)($ae, self)) {

        // Let the active element lose focus and store a reference
        // to restore focus when we're done (reset)
        self._restoreFocus = $ae[0];

        // https://github.com/McNull/angular-block-ui/issues/13
        // http://stackoverflow.com/questions/22698058/apply-already-in-progress-error-when-using-typeahead-plugin-found-to-be-relate
        // Queue the blur after any ng-blur expression.
        $timeout(function () {
          // Ensure we still need to blur
          // Don't restore if active element is body, since this causes IE to switch windows (see http://tjvantoll.com/2013/08/30/bugs-with-document-activeelement-in-internet-explorer/)
          if (self._restoreFocus && self._restoreFocus !== $body[0]) {
            self._restoreFocus.blur();
          }
        });
      }

      if (!this.startPromise && avBlockConfig.delay !== 0) {
        this.startPromise = $timeout(function () {
          return _this.block();
        }, avBlockConfig.delay);
      } else if (avBlockConfig.delay === 0) {
        this.block();
      }
    };

    AvBlock.prototype.stop = function stop() {

      this._state.blockCount = Math.max(0, --this._state.blockCount);

      if (this._state.blockCount === 0) {
        this.reset(true);
      }
    };

    AvBlock.prototype._cancelStartTimeout = function _cancelStartTimeout() {

      if (this.startPromise) {
        $timeout.cancel(this.startPromise);
        this.startPromise = null;
      }
    };

    AvBlock.prototype.isBlocking = function isBlocking() {
      return this._state.blocking;
    };

    AvBlock.prototype.message = function message(value) {
      this._state.message = value;
    };

    AvBlock.prototype.pattern = function pattern(regexp) {
      if (regexp !== undefined) {
        this._pattern = regexp;
      }

      return this._pattern;
    };

    AvBlock.prototype.reset = function reset(executeCallbacks) {
      var _this2 = this;

      this._cancelStartTimeout();
      this._state.blockCount = 0;
      this._state.blocking = false;

      // Restore the focus to the element that was active
      // before the block start, but not if the user has
      // focused something else while the block was active.

      if (this._restoreFocus && (!$document[0].activeElement || $document[0].activeElement === $body[0])) {

        // IE8 will throw if element for setting focus is invisible
        try {
          this._restoreFocus.focus();
        } catch (e1) {
          (function () {

            var elementToFocus = _this2._restoreFocus;
            $timeout(function () {
              if (elementToFocus) {
                try {
                  elementToFocus.focus();
                } catch (e2) {/* no op */}
              }
            }, 100);
          })();
        }

        this._restoreFocus = null;
      }

      try {

        if (executeCallbacks) {
          _angular2.default.forEach(this.doneCallbacks, function (cb) {
            cb();
          });
        }
      } finally {
        this.doneCallbacks.length = 0;
      }
    };

    AvBlock.prototype.done = function done(fn) {
      this.doneCallbacks.push(fn);
    };

    AvBlock.prototype.state = function state() {
      return this._state;
    };

    return AvBlock;
  }();

  return AvBlock;
});