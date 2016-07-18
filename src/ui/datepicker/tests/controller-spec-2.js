/* global beforeEach, jasmine, spyOn, inject, expect, describe, it */
import angular from 'angular';
import moment from 'moment';
import '../controller';

describe('AvDatepicker Controller', function() {
  beforeEach(angular.mock.module('availity', 'availity.ui', $provide => {
    this.mockNgModelController = {};
    this.andSelfDataSpy = jasmine.createSpy().and.returnValue(this.mockNgModelController);
    this.mockAndSelf = () => ({
      length: this.findLength,
      data: this.andSelfDataSpy
    });

    this.removeSpy = jasmine.createSpy();
    this.mockElement = {
      find: () => ({ andSelf: this.mockAndSelf }),
      data: () => ({ remove: this.removeSpy })
    };

    this.mockScope = {
      $eval: jasmine.createSpy().and.callFake(a => a)
    };

    this.mockAV_DATEPICKER = {
      CONTROLLER: '$ngModelController',
      ADD_ON_SELECTOR: '[data-toggle="datepicker"]',
      OPTIONS: [
        'someUsedOption',
        'someOtherUsedOption',
        'anOptionNotUsed'
      ],
      DEFAULTS: {
        MODELFORMAT: 'YYYY-MM-DD'
      }
    };

    this.mockAvDatepickerConfig = {
      autoclose: true,
      todayHighlight: true,
      format: 'MM/DD/YYYY',
      forceParse: false
    };

    this.mockAttrs = {
      'someUsedOption': 'someValue',
      'data-someOtherUsedOption': 'someOtherValue',
      'anotherAttr': 'notUsed'
    };

    this.elementFindSpy = spyOn(this.mockElement, 'find').and.callThrough();
    this.andSelfSpy = spyOn(this, 'mockAndSelf').and.callThrough();
    this.elementDataSpy = spyOn(this.mockElement, 'data').and.callThrough();

    $provide.value('$element', this.mockElement);
    $provide.value('$scope', this.mockScope);
    $provide.value('AV_DATEPICKER', this.mockAV_DATEPICKER);
    $provide.value('avDatepickerConfig', this.mockAvDatepickerConfig);
    $provide.value('$attrs', this.mockAttrs);
  }));

  beforeEach(inject(($rootScope, $controller) => {
    this.$rootScope = $rootScope;
    this.ctrl = $controller('AvDatepickerController', {$scope: this.mockScope});
  }));

  describe('setValue method', () => {
    beforeEach(() => {
      this.setDateSpy = jasmine.createSpy().and.returnValue({});
      this.ctrl.plugin = () => ({ setDate: this.setDateSpy });
    });

    describe('with a view value', () => {
      beforeEach(() => {
        this.ctrl.ngModel = {$viewValue: '12/12/2012'};
      });

      describe('with a plugin', () => {
        it('should call setDate with the viewValue', () => {
          this.ctrl.setValue();
          expect(this.setDateSpy).toHaveBeenCalledWith(this.ctrl.ngModel.$viewValue);
        });
      });

      describe('without a plugin', () => {
        it('should not call setDate', () => {
          this.ctrl.plugin = () => undefined;
          this.ctrl.setValue();
          expect(this.setDateSpy).not.toHaveBeenCalled();
        });
      });
    });

    describe('without a view value', () => {
      beforeEach(() => {
        this.ctrl.ngModel = {$viewValue: ''};
      });

      describe('with a plugin', () => {
        it('should not call setDate', () => {
          this.ctrl.setValue();
          expect(this.setDateSpy).not.toHaveBeenCalled();
        });
      });

      describe('without a plugin', () => {
        it('should not call setDate', () => {
          this.ctrl.plugin = () => undefined;
          this.ctrl.setValue();
          expect(this.setDateSpy).not.toHaveBeenCalled();
        });
      });
    });
  });

  describe('setNgModel method', () => {
    beforeEach(() => {
      this.modelValue = 'something';
      this.ctrl.setNgModel(this.modelValue);
    });

    it('should set ngModel to the passed value', () => {
      expect(this.ctrl.ngModel).toEqual(this.modelValue);
    });
  });

  describe('findModel method', () => {
    it('should search for "input:first"', () => {
      this.ctrl.findModel();
      expect(this.elementFindSpy).toHaveBeenCalledWith('input:first');
    });

    it('should include itself in the results', () => {
      this.ctrl.findModel();
      expect(this.andSelfSpy).toHaveBeenCalled();
    });

    describe('finding a matching input', () => {
      beforeEach(() => {
        this.findLength = 1;
        this.findModelResult = this.ctrl.findModel();
      });

      it('should get the ngModel controller from the data on the input', () => {
        expect(this.andSelfDataSpy).toHaveBeenCalledWith(this.mockAV_DATEPICKER.CONTROLLER);
      });

      it('should return the controller it found', () => {
        expect(this.findModelResult).toEqual(this.mockNgModelController);
      });
    });

    describe('without finding a matching input', () => {
      it('should return null', () => {
        this.findLength = 0;
        expect(this.ctrl.findModel()).toBe(null);
      });
    });
  });

  describe('modelToView method', () => {
    it('should return a string', () => {
      this.ctrl.options = { format: 'MM/DD/YYYY' };
      expect(this.ctrl.modelToView(new Date())).toEqual(jasmine.any(String));
    });

    it('should return a date string matching the format', () => {
      const now = new Date();
      const format = 'MM/DD/YYYY';
      this.ctrl.options = { format };
      expect(this.ctrl.modelToView(now)).toEqual(moment(now).format(format));
    });
  });

  describe('viewToModel method', () => {
    beforeEach(()=> {
      this.plugin_utc_to_localSpy = jasmine.createSpy().and.callFake(a => a);
      this.ctrl.plugin = () => ({
        _utc_to_local: this.plugin_utc_to_localSpy
      });
    });

    describe('when plugin does not exist', () => {
      beforeEach(() => {
        this.ctrl.plugin = () => undefined;
      });

      it('should return null', () => {
        this.ctrl.options = { format: 'MM/DD/YYYY' };
        expect(this.ctrl.viewToModel('12/12/2012')).toBe(null);
      });
    });

    it('should return a Date when the viewValue matches the format', () => {
      this.ctrl.options = { format: 'MM/DD/YYYY' };
      expect(this.ctrl.viewToModel('12/12/2012')).toEqual(jasmine.any(Date));
    });

    it('should return undefined when the viewValue does not match the format', () => {
      this.ctrl.options = { format: 'MM/DD/YYYY' };
      expect(this.ctrl.viewToModel('12/12/12')).toBe(undefined);
    });

    it('should return a date based on the input the format', () => {
      const date = '14/12/2012';
      const format = 'DD/MM/YYYY';
      this.ctrl.options = { format };
      expect(this.ctrl.viewToModel(date)).toEqual(moment(date, format).toDate());
    });
  });

  describe('init method', () => {
    beforeEach(() => {
      this.ctrl.init();
    });

    it('should set options', () => {
      expect(this.ctrl.options).not.toBe(undefined);
    });

    it('should copy options', () => {
      this.mockAvDatepickerConfig.something = 'now different';
      expect(this.ctrl.options).not.toEqual(this.mockAvDatepickerConfig);
    });

    describe('setting options from attr', () => {
      it('should evaluate the attr to get the value from the scope', () => {
        expect(this.mockScope.$eval).toHaveBeenCalled();
      });

      it('should parse the non data-* prefixed options out of the attrs', ()=> {
        expect(this.ctrl.options.someUsedOption).toEqual('someValue');
      });

      it('should parse the data-* prefixed options out of the attrs', ()=> {
        expect(this.ctrl.options.someOtherUsedOption).toEqual('someOtherValue');
      });

      it('should not parse attrs that are not options', ()=> {
        expect(this.ctrl.options.anotherAttr).toBe(undefined);
      });

      it('should not set options that are not in attrs', ()=> {
        expect(this.ctrl.options.anOptionNotUsed).toBe(undefined);
      });

      it('should not override options that are not in attrs', ()=> {
        expect(this.ctrl.options.autoclose).toBe(true);
      });
    });

    it('should set modelFormat option to default when not provided', () => {
      expect(this.ctrl.options.modelFormat).toEqual(this.mockAV_DATEPICKER.DEFAULTS.MODELFORMAT);
    });

    describe('when date input is supported', () => {
      it('should set the format the expected ISO format', () => {
        this.ctrl.av.$attrs.type = 'date';
        this.ctrl.hasDateInputSupport = true;
        this.ctrl.options.format = `something different than ${this.mockAV_DATEPICKER.DEFAULTS.MODELFORMAT}`;
        this.ctrl.init();
        expect(this.ctrl.options.format).toEqual(this.mockAV_DATEPICKER.DEFAULTS.MODELFORMAT);
      });
    });
  });

  describe('plugin method', () => {
    it('should get datepicker from the element data', () => {
      this.ctrl.plugin();
      expect(this.elementDataSpy).toHaveBeenCalledWith('datepicker');
    });
  });

  describe('destroy method', () => {
    it('should not call anything if plugin is falsey', () => {
      this.ctrl.plugin = () => undefined;
      this.ctrl.destroy();
      expect(this.removeSpy).not.toHaveBeenCalled();
      expect(this.elementDataSpy).not.toHaveBeenCalled();
    });


    it('should call remove from the plugin', () => {
      this.ctrl.destroy();
      expect(this.removeSpy).toHaveBeenCalled();
    });

    it('should set the datepicker data to null', () => {
      this.ctrl.destroy();
      expect(this.elementDataSpy).toHaveBeenCalledWith('datepicker', null);
    });
  });

  describe('hide method', () => {
    it('should call hide from the plugin', () => {
      const spy = jasmine.createSpy();
      this.ctrl.plugin = () => ({ hide: spy });
      this.ctrl.hide();
      expect(spy).toHaveBeenCalled();
    });
  });
});
