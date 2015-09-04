(function(root) {

  'use strict';

  var availity = root.availity;

  var blockTemplate =
    '<div ng-show="state.blockCount > 0" class="block-ui-overlay" ng-class="{ \'block-ui-visible\': state.blocking }"></div>'+
    '<div ng-show="state.blocking" class="block-ui-message-container">'+
    '  <div class="block-ui-message">'+
    '    <div data-av-loader data-delay="true" class="loading-indicator"></div>'+
    '  </div>'+
    '</div>';

  availity.ui.constant('AV_BLOCK', {
    TEMPLATES: {
      BLOCK: 'ui/modal/modal-tpl.html'
    }
  });

  var getLoaderController = function(blockId) {
    var el = $('[data-block-ui="'+blockId+'"]') || $('[block-ui="'+blockId+'"]');
    if (el) {
      return el.find('[data-av-loader]').controller('avLoader');
    }
  };

  var triggerLoaderController = function(id, instance, fn) {
    var controller = instance.loaderController;
    if (!controller) {
      controller = getLoaderController(id);
      instance.loaderController = controller;
    }
    if (controller && _.isFunction(controller[fn])) {
      controller[fn]();
    }
  };

  var startInstance = function(id, instance, origStartFn) {
    triggerLoaderController(id, instance, "start");
    origStartFn.apply(instance);
  };

  var stopInstance = function(id, instance, origStopFn) {
    triggerLoaderController(id, instance, "stop");
    origStopFn.apply(instance);
  };

  var modifyBlockInstances = function(id, instance) {
    var origStartFn = instance.start;
    var origStopFn = instance.stop;
    instance.start = function() {
      startInstance(id, instance, origStartFn);
    };
    instance.stop = function() {
      stopInstance(id, instance, origStopFn);
    };
    instance.avModifications = true;
  };

  availity.ui.run(function($injector, $log) {
    try {

      var blockUIConfig = $injector.get('blockUIConfig');
      var blockUI = $injector.get('blockUI');
      blockUIConfig.autoBlock = false;
      blockUIConfig.delay = 0;
      blockUIConfig.template = blockTemplate;

      var origGetFn = blockUI.instances.get;
      blockUI.instances.get = function(id) {
        var instance = origGetFn(id);
        if (!instance.avModifications) {
          modifyBlockInstances(id, instance);
        }
        return instance;
      };

    } catch (e) {
      $log.error("blockUI is required to use av block.");
    }
  });

})(window);
