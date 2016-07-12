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

      buildRequest(level, entries) {

        const requestPayload = {};

        if (entries.level) {
          delete entries.level;
        }

        requestPayload.level = level;
        requestPayload.entries = entries;

        return requestPayload;

      }

      debug(entries) {
        return this.create(this.buildRequest('debug', entries));
      }

      info(entries) {
        return this.create(this.buildRequest('info', entries));
      }

      warn(entries) {
        return this.create(this.buildRequest('warn', entries));
      }

      error(entries) {
        return this.create(this.buildRequest('error', entries));
      }

    }

    return new AvLogMessagesResource();

  }

}

ngModule.provider('avLogMessagesResource', LogMessagesProvider);

export default ngModule;

