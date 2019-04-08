import ngModule from '../module';

import './resource';

class LogDmaMessagesProvider {

  $get(AvApiResource) {

    class AvDmaLogMessagesResource extends AvApiResource {

      constructor() {
        super({
          path: '/ms/api/availity/internal/dma/log-message-service/portal',
          name: 'log-messages',
          version: '/v2'
        });
      }

      send(entries) {
        return this.create(entries);
      }

    }

    return new AvDmaLogMessagesResource();

  }

}

ngModule.provider('avDmaLogMessagesResource', LogDmaMessagesProvider);

export default ngModule;
