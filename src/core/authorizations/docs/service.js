import demo from 'demo';

import '../';

demo.factory('demoAuthenticationService', avUserAuthorizations => {

  class DemoAuthenticationService {

    constructor() {

      this.permissionId = '7100';
      this.isAuthorized = false;

      this.init();
    }

    init() {

      const self = this;

      avUserAuthorizations.isAuthorized(this.permissionId).then(isAuthorized => {
        self.isAuthorized = isAuthorized;
      });

    }

  }

  return new DemoAuthenticationService();

});
