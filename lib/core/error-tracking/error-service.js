(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.constant('AV_ERRORS', {
    ERRORTRACKING: true,
    SERVICES: {
      JQUERY: 'avJqueryErrorService',
      WINDOW: 'avWindowErrorService',
      ANGULAR: 'avAngularErrorService'
    }
  });

  availity.core.provider('avErrorServices', function() {
    var enabled;
    var that = this;
    this.appName;

    this.enabled = function() {

    };

    this.$get = function(avLogMessagesResource, $location) {
      var AvErrorServices = function() {

      };

      var proto = AvErrorServices.prototype;

      proto.init = function() {

      };

      proto.appName = function(){
        return that.appName;
      };

      proto.enabled = function() {
        enabled = !!enabled;
      };

      proto.send = function(exception, userAgentString) {
        var errorDetails = {
          location: $location.$$absUrl || "Could not get current location.",
          appName: this.appName() || "",
          userAgent: userAgentString,
          type: "Angular Error",
          name: exception.name,
          message: exception.message,
          stack: exception.stack
        };
        avLogMessagesResource['error'](errorDetails);
      };

      return new AvErrorServices();
    };

  }); 

  availity.core.config(function($provide) {
    $provide.decorator("$exceptionHandler", function($delegate, $injector) {
      return function(exception, cause) {
        $delegate(exception, cause);
        var errorTacking = $injector.get('avErrorServices');
        errorTacking.send(exception, root.navigator.userAgent);
      };
    });
  });
})(window);
