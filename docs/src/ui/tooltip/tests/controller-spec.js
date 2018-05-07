/* global beforeEach, jasmine, spyOn, inject, expect, describe, it */
import angular from 'angular';
import '../';

describe('AvTooltip Controller', function() {
  beforeEach(angular.mock.module('availity', 'availity.ui', $provide => {
    this.mockElement = {
      on: jasmine.createSpy(),
      tooltip: jasmine.createSpy(),
      data: jasmine.createSpy()
    };

    this.mockScope = {
      $on: jasmine.createSpy()
    };

    this.mockAV_TOOLTIP = {
      name: 'bs.tooltip'
    };

    this.mockTimeout = jasmine.createSpy();
    this.mockAvTooltipConfig = {
      showDelay: 1247
    };

    $provide.value('$element', this.mockElement);
    $provide.value('$scope', this.mockScope);
    $provide.value('AV_TOOLTIP', this.mockAV_TOOLTIP);
    $provide.value('$timeout', this.mockTimeout);
    $provide.value('avTooltipConfig', this.mockAvTooltipConfig);
  }));

  beforeEach(inject(($rootScope, $controller) => {
    this.$rootScope = $rootScope;
    this.ctrl = $controller('AvTooltipController', {$scope: this.mockScope});
  }));

  describe('class constructor', () => {
    it('should set options', () => {
      expect(this.ctrl.options).toEqual(this.mockAvTooltipConfig);
    });

    it('options should be a copy', () => {
      this.mockAvTooltipConfig.something = 'now different';
      expect(this.ctrl.options).not.toEqual(this.mockAvTooltipConfig);
    });
  });

  describe('listeners method', () => {
    beforeEach(() => {
      this.ctrl.listeners();
    });

    it('should set 4 listeners on element', () => {
      expect(this.mockElement.on).toHaveBeenCalledTimes(4);
    });

    it('should set a listener on element for show', () => {
      expect(this.mockElement.on.calls.argsFor(0)).toEqual(['show.bs.tooltip', jasmine.any(Function)]);
    });

    it('should set a listener on element for shown', () => {
      expect(this.mockElement.on.calls.argsFor(1)).toEqual(['shown.bs.tooltip', jasmine.any(Function)]);
    });

    it('should set a listener on element for hide', () => {
      expect(this.mockElement.on.calls.argsFor(2)).toEqual(['hide.bs.tooltip', jasmine.any(Function)]);
    });

    it('should set a listener on element for hidden', () => {
      expect(this.mockElement.on.calls.argsFor(3)).toEqual(['hidden.bs.tooltip', jasmine.any(Function)]);
    });

  });

  describe('plugin method', () => {
    beforeEach(() => {
      this.ctrl.plugin();
    });

    it('should set a listener on element for show', () => {
      expect(this.mockElement.data).toHaveBeenCalledWith(this.mockAV_TOOLTIP.name);
    });
  });

  describe('show method', () => {
    beforeEach(() => {
      this.ctrl.show();
    });

    it('should set a listener on element for show', () => {
      expect(this.mockElement.tooltip).toHaveBeenCalledWith('show');
    });
  });

  describe('hide method', () => {
    beforeEach(() => {
      this.ctrl.hide();
    });

    it('should set a listener on element for show', () => {
      expect(this.mockElement.tooltip).toHaveBeenCalledWith('hide');
    });
  });

  describe('toggle method', () => {
    beforeEach(() => {
      this.ctrl.toggle();
    });

    it('should set a listener on element for show', () => {
      expect(this.mockElement.tooltip).toHaveBeenCalledWith('toggle');
    });
  });

  describe('destroy method', () => {

    beforeEach(() => {
      this.ctrl.$destroy();
    });

    it('should set a listener on element for show', () => {
      expect(this.mockElement.tooltip).toHaveBeenCalledWith('destroy');
    });
  });

  describe('init method', () => {
    it('should call listeners', () => {
      const spy = spyOn(this.ctrl, 'listeners');
      this.ctrl.init();
      expect(spy).toHaveBeenCalledTimes(1);
    });

    describe('when show is true in the scope', () => {
      beforeEach(() =>{
        this.mockScope.show = true;
        this.ctrl.init();
      });

      it('call $timeout twice', () => {
        expect(this.mockTimeout).toHaveBeenCalledTimes(2);
      });

      it('call $timeout with 0', () => {
        expect(this.mockTimeout.calls.argsFor(0)).toEqual([jasmine.any(Function), 0, false]);
      });

      describe('when delay.hide is not set in the scope', () => {
        beforeEach(() =>{
          this.ctrl.init();
        });

        it('call $timeout with the default delay', () => {
          expect(this.mockTimeout.calls.argsFor(1)).toEqual([jasmine.any(Function), this.mockAvTooltipConfig.showDelay, false]);
        });
      });

      describe('when delay.hide is set in the scope', () => {
        beforeEach(() =>{
          this.mockScope.delay = {hide: 5231};
          this.mockTimeout.calls.reset();
          this.ctrl.init();
        });

        it('call $timeout with the delay provided', () => {
          expect(this.mockTimeout.calls.argsFor(1)).toEqual([jasmine.any(Function), this.mockScope.delay.hide, false]);
        });
      });
    });
  });
});
