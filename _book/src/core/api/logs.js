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

      request(level, entries) {

        const requestPayload = {};

        if (entries.level) {
          delete entries.level;
        }

        requestPayload.level = level;
        requestPayload.entries = entries;

        return requestPayload;

      }

      debug(entries) {
        return this.create(this.request('debug', entries));
      }

      info(entries) {
        return this.create(this.request('info', entries));
      }

      warn(entries) {
        return this.create(this.request('warn', entries));
      }

      error(entries) {
        return this.create(this.request('error', entries));
      }

    }

    return new AvLogMessagesResource();

  }

}

ngModule.provider('avLogMessagesResource', LogMessagesProvider);

export default ngModule;

