(function(root) {

  'use strict';

  var availity = root.availity;

  availity.ui.constant('AV_BLOCK', {
    TEMPLATES: {
      BLOCK: 'ui/block/block-tpl.html'
    }
  });

  var getLoaderController = function(blockId) {
    var el = $('[data-block-ui="' + blockId + '"]') || $('[block-ui="' + blockId + '"]');
    if(el) {
      return el.find('[data-av-loader]').controller('avLoader');
    }
  };

  var triggerLoaderController = function(id, instance, fn) {

    var controller = instance.loaderController;
    if(!controller) {
      controller = getLoaderController(id);
      instance.loaderController = controller;
    }
    if(controller && _.isFunction(controller[fn])) {
      controller[fn]();
    }

  };

  var triggerInstance = function(id, instance, origFn, loaderFn) {
    triggerLoaderController(id, instance, loaderFn);
    origFn.apply(instance);
  };

  var modifyBlockInstances = function(id, instance) {

    var origStartFn = instance.start;
    var origStopFn = instance.stop;

    instance.start = function() {
      triggerInstance(id, instance, origStartFn, 'start');
    };

    instance.stop = function() {
      triggerInstance(id, instance, origStopFn, 'stop');
    };

    instance.startLoader = function() {
      triggerLoaderController(id, instance, 'start');
    };

    instance.avModifications = true;
  };

  availity.ui.run(function($injector, $log, AV_BLOCK) {

    try {

      var blockUIConfig = $injector.get('blockUIConfig');
      var blockUI = $injector.get('blockUI');
      blockUIConfig.autoBlock = false;
      blockUIConfig.delay = 0;
      blockUIConfig.templateUrl = AV_BLOCK.TEMPLATES.BLOCK;

      var origGetFn = blockUI.instances.get;
      blockUI.instances.get = function(id) {
        var instance = origGetFn(id);
        if(!instance.avModifications) {
          modifyBlockInstances(id, instance);
        }
        return instance;
      };

    } catch(e) {
      $log.warn('blockUI is required to use av block.');
    }
  });

})(window);
