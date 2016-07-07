/* global beforeEach, availity, jasmine, inject, expect, describe, it */
import angular from 'angular';
import '../';

describe('AvPopover Controller', function () {
  beforeEach(angular.mock.module('availity', 'availity.ui', $provide => {
    this.mockElement = {
      on: jasmine.createSpy(),
      popover: jasmine.createSpy(),
      data: jasmine.createSpy()
    };

    this.mockScope = {
      $on: jasmine.createSpy()
    };

    this.mockAV_POPOVER = {
      name: 'bs.popover'
    };

    this.mockTimeout = jasmine.createSpy();
    this.mockAvPopoverConfig = {
      showDelay: 1247
    };

    $provide.value('$element', this.mockElement);
    $provide.value('$scope', this.mockScope);
    $provide.value('AV_POPOVER', this.mockAV_POPOVER);
    $provide.value('$timeout', this.mockTimeout);
    $provide.value('avPopoverConfig', this.mockAvPopoverConfig);
  }));

  beforeEach(inject(($rootScope, $controller) => {
    this.$rootScope = $rootScope;
    this.ctrl = $controller('AvPopoverController', {$scope: this.mockScope});
  }));

  describe('class constructor', () => {
    it('should set options', () => {
      expect(this.ctrl.options).toEqual(this.mockAvPopoverConfig);
    });

    it('options should be a copy', () => {
      this.mockAvPopoverConfig.something = 'now different';
      expect(this.ctrl.options).not.toEqual(this.mockAvPopoverConfig);
    });
  });

  describe('listeners method', () => {
    beforeEach(() => {
      this.ctrl.listeners();
    });

    it('should set 4 listeners on element' , () => {
      expect(this.mockElement.on).toHaveBeenCalledTimes(4);
    });

    it('should set a listener on element for show' , () => {
      expect(this.mockElement.on.calls.argsFor(0)).toEqual(['show.bs.popover', jasmine.any(Function)]);
    });

    it('should set a listener on element for shown' , () => {
      expect(this.mockElement.on.calls.argsFor(1)).toEqual(['shown.bs.popover', jasmine.any(Function)]);
    });

    it('should set a listener on element for hide' , () => {
      expect(this.mockElement.on.calls.argsFor(2)).toEqual(['hide.bs.popover', jasmine.any(Function)]);
    });

    it('should set a listener on element for hidden' , () => {
      expect(this.mockElement.on.calls.argsFor(3)).toEqual(['hidden.bs.popover', jasmine.any(Function)]);
    });

    it('should set a listner on scope for $destroy', () => {
      expect(this.mockScope.$on).toHaveBeenCalledWith('$destroy', jasmine.any(Function));
    });
  });

  describe('plugin method', () => {
    beforeEach(() => {
      this.ctrl.plugin();
    });

    it('should set a listener on element for show' , () => {
      expect(this.mockElement.data).toHaveBeenCalledWith(this.mockAV_POPOVER.name);
    });
  });

  describe('show method', () => {
    beforeEach(() => {
      this.ctrl.show();
    });

    it('should set a listener on element for show' , () => {
      expect(this.mockElement.popover).toHaveBeenCalledWith('show');
    });
  });

  describe('hide method', () => {
    beforeEach(() => {
      this.ctrl.hide();
    });

    it('should set a listener on element for show' , () => {
      expect(this.mockElement.popover).toHaveBeenCalledWith('hide');
    });
  });

  describe('toggle method', () => {
    beforeEach(() => {
      this.ctrl.toggle();
    });

    it('should set a listener on element for show' , () => {
      expect(this.mockElement.popover).toHaveBeenCalledWith('toggle');
    });
  });

  describe('destroy method', () => {
    beforeEach(() => {
      this.ctrl.destroy();
    });

    it('should set a listener on element for show' , () => {
      expect(this.mockElement.popover).toHaveBeenCalledWith('destroy');
    });
  });

  describe('init method', () => {
    it('should call listeners' , () => {
      const spy = spyOn(this.ctrl, 'listeners');
      this.ctrl.init();
      expect(spy).toHaveBeenCalledTimes(1);
    });

    describe('when show is true in the scope', () => {
      beforeEach(() =>{
        this.mockScope.show = true;
        this.ctrl.init();
      });

      it('call $timeout twice' , () => {
        expect(this.mockTimeout).toHaveBeenCalledTimes(2);
      });

      it('call $timeout with 0' , () => {
        expect(this.mockTimeout.calls.argsFor(0)).toEqual([jasmine.any(Function), 0, false]);
      });

      describe('when delay.hide is not set in the scope', () => {
        beforeEach(() =>{
          this.ctrl.init();
        });

        it('call $timeout with the default delay' , () => {
          expect(this.mockTimeout.calls.argsFor(1)).toEqual([jasmine.any(Function), this.mockAvPopoverConfig.showDelay, false]);
        });
      });

      describe('when delay.hide is set in the scope', () => {
        beforeEach(() =>{
          this.mockScope.delay = {hide: 5231};
          this.mockTimeout.calls.reset();
          this.ctrl.init();
        });

        it('call $timeout with the delay provided' , () => {
          expect(this.mockTimeout.calls.argsFor(1)).toEqual([jasmine.any(Function), this.mockScope.delay.hide, false]);
        });
      });
    });
  });
});
