import angular from 'angular';
import avModule from '../module';

import { isElementInBlockScope } from './utils';

avModule.factory('AvBlock', (avBlockConfig, $timeout, $document) => {

  const $body = $document.find('body');

  // These properties are not allowed to be specified in the start method.
  const reservedStateProperties = ['id', 'blockCount', 'blocking'];

  class AvBlock {

    constructor(id) {

      this.startPromise;
      this.doneCallbacks = [];
      this._id = id;
      this._refs = 0;

      this._state = {
        id,
        blockCount: 0,
        message: avBlockConfig.message,
        blocking: false
      };

    }

    block() {
      this.startPromise = null;
      this._state.blocking = true;
    }

    start(messageOrOptions) {

      messageOrOptions = messageOrOptions || {};

      if (angular.isString(messageOrOptions)) {
        messageOrOptions = {
          message: messageOrOptions
        };
      } else {

        angular.forEach(reservedStateProperties, x => {
          if (messageOrOptions[x]) {
            throw new Error(`The property ${x} is reserved for the block state.`);
          }
        });

      }

      angular.extend(this._state, messageOrOptions);

      if (this._state.blockCount > 0) {
        this._state.message = messageOrOptions.message || this._state.message || avBlockConfig.message;
      } else {
        this._state.message = messageOrOptions.message || avBlockConfig.message;
      }

      this._state.blockCount++;

      // Check if the focused element is part of the block scope
      const $ae = angular.element($document[0].activeElement);

      if ($ae.length && isElementInBlockScope($ae, self)) {

        // Let the active element lose focus and store a reference
        // to restore focus when we're done (reset)

        self._restoreFocus = $ae[0];

        // https://github.com/McNull/angular-block-ui/issues/13
        // http://stackoverflow.com/questions/22698058/apply-already-in-progress-error-when-using-typeahead-plugin-found-to-be-relate
        // Queue the blur after any ng-blur expression.

        $timeout(() => {
          // Ensure we still need to blur
          // Don't restore if active element is body, since this causes IE to switch windows (see http://tjvantoll.com/2013/08/30/bugs-with-document-activeelement-in-internet-explorer/)
          if (self._restoreFocus && self._restoreFocus !== $body[0]) {
            self._restoreFocus.blur();
          }
        });
      }

      if (!this.startPromise && avBlockConfig.delay !== 0) {
        this.startPromise = $timeout(() => this.block(), avBlockConfig.delay);
      } else if (avBlockConfig.delay === 0) {
        this.block();
      }
    }

    stop() {
      this._state.blockCount = Math.max(0, --this._state.blockCount);

      if (this._state.blockCount === 0) {
        this.reset(true);
      }
    }

    _cancelStartTimeout() {
      if (this.startPromise) {
        $timeout.cancel(this.startPromise);
        this.startPromise = null;
      }
    }

    isBlocking() {
      return this._state.blocking;
    }

    message(value) {
      this._state.message = value;
    }

    pattern(regexp) {
      if (regexp !== undefined) {
        this._pattern = regexp;
      }

      return this._pattern;
    }

    reset(executeCallbacks) {

      this._cancelStartTimeout();
      this._state.blockCount = 0;
      this._state.blocking = false;

      // Restore the focus to the element that was active
      // before the block start, but not if the user has
      // focused something else while the block was active.

      if (this._restoreFocus &&
         (!$document[0].activeElement || $document[0].activeElement === $body[0])) {

        // IE8 will throw if element for setting focus is invisible
        try {
          this._restoreFocus.focus();
        } catch (e1) {

          const elementToFocus = this._restoreFocus;
          $timeout(() => {
            if (elementToFocus) {
              try {
                elementToFocus.focus();
              } catch (e2) { /* no op */ }
            }
          }, 100);
        }

        this._restoreFocus = null;
      }

      try {
        if (executeCallbacks) {
          angular.forEach(this.doneCallbacks, cb => {
            cb();
          });
        }
      } finally {
        this.doneCallbacks.length = 0;
      }
    }

    done(fn) {
      this.doneCallbacks.push(fn);
    }

    state() {
      return this._state;
    }

    addRef() {
      this._refs += 1;
    }

    release() {
      if (--this._refs <= 0) {
        // mainBlock.instances._destroy(self);
      }
    }


  }

  return AvBlock;

});

