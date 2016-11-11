import ngModule from '../module';

import './resource';

class LogMessagesProvider {

  $get(AvApiResource) {

    class AvLogMessagesResource extends AvApiResource {

      constructor() {
        super({
          version: '/v1',
          name: '/log-messages'
        });
      }

      requestPayload(level, entries) {

        const payload = {};

        if (entries.level) {
          delete entries.level;
        }

        payload.level = level;
        payload.entries = entries;

        return payload;

      }

      debug(entries) {
        return this.create(this.requestPayload('debug', entries));
      }

      info(entries) {
        return this.create(this.requestPayload('info', entries));
      }

      warn(entries) {
        return this.create(this.requestPayload('warn', entries));
      }

      error(entries) {
        return this.create(this.requestPayload('error', entries));
      }

    }

    return new AvLogMessagesResource();

  }

}

ngModule.provider('avLogMessagesResource', LogMessagesProvider);

export default ngModule;
