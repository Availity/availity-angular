import $ from 'jquery';
import _ from 'lodash';

import './block.htm';
import './block2.htm';
import availity from '../module';

availity.ui.constant('AV_BLOCK', {
  TEMPLATES: {
    BLOCK: 'ui/block/block.htm'
  }
});

const getLoaderController = function(blockId) {
  const el = $(`[data-block-ui="${blockId}"]`) || $(`[block-ui="${blockId}"]`);
  if (el) {
    return el.find('[data-av-loader]').controller('avLoader');
  }
};

const triggerLoaderController = function(id, instance, fn) {

  const controller = instance.loaderController;
  if (!controller) {
    controller = getLoaderController(id);
    instance.loaderController = controller;
  }
  if (controller && _.isFunction(controller[fn])) {
    controller[fn]();
  }

};

const triggerInstance = function(id, instance, origFn, loaderFn) {
  triggerLoaderController(id, instance, loaderFn);
  origFn.apply(instance);
};

const modifyBlockInstances = function(id, instance) {

  const origStartFn = instance.start;
  const origStopFn = instance.stop;

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

    const blockUIConfig = $injector.get('blockUIConfig');
    const blockUI = $injector.get('blockUI');
    blockUIConfig.autoBlock = false;
    blockUIConfig.delay = 0;
    blockUIConfig.templateUrl = AV_BLOCK.TEMPLATES.BLOCK;

    const origGetFn = blockUI.instances.get;
    blockUI.instances.get = function(id) {
      const instance = origGetFn(id);
      if (!instance.avModifications) {
        modifyBlockInstances(id, instance);
      }
      return instance;
    };

  } catch (e) {
    $log.warn('blockUI is required to use av block.');
  }
});


