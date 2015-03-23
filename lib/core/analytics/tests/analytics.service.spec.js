/*global inject, expect*/
define(function (require) {
  "use strict";
  require('angularMock');
  require('foundation/js/av-core/utils/analytics/analytics.service');

  describe('Analytics Service', function () {
    var logMessagesResourceMock, logInfo;

    beforeEach(module('avCore'));

    beforeEach(function() {
      logMessagesResourceMock = {
        debug: function(object) { logInfo = {level: "debug", data: object}; },
        info: function(object) { logInfo = {level: "info", data: object}; },
        warn: function(object) { logInfo = {level: "warn", data: object}; },
        error: function(object) { logInfo = {level: "error", data: object}; }
      };
      module(function($provide) {
        $provide.value("logMessagesResource", logMessagesResourceMock);
      });
    });

    it("Creates an empty attribute map with ALL_EVENTS defined", inject(function (analyticsService) {
      expect(analyticsService.attributeMap).not.toBeUndefined();
      expect(analyticsService.attributeMap.ALL_EVENTS).not.toBeUndefined();
    }));

    it("Sets attribute value to ALL_EVENTS if no event is specified", inject(function (analyticsService) {
      analyticsService.setAttributeValue("key", "value");
      expect(analyticsService.attributeMap.ALL_EVENTS.key).toBe("value");
    }));

    it("Sets attribute to single event", inject(function (analyticsService) {
      analyticsService.setAttributeValue("key", "value", "myEvent");
      expect(analyticsService.attributeMap.ALL_EVENTS.key).toBeUndefined();
      expect(analyticsService.attributeMap.myEvent.key).toBe("value");
    }));

    it("Sets attribute to multiple events", inject(function (analyticsService) {
      analyticsService.setAttributeValue("key", "value", ["myEvent", "myEvent2"]);
      expect(analyticsService.attributeMap.ALL_EVENTS.key).toBeUndefined();
      expect(analyticsService.attributeMap.myEvent.key).toBe("value");
      expect(analyticsService.attributeMap.myEvent2.key).toBe("value");
    }));

    it("Merges attributes passed in as a map", inject(function (analyticsService) {
      analyticsService.mergeAttributes({key1: "value1", key2: "value2"});
      expect(analyticsService.attributeMap.ALL_EVENTS.key1).toBe("value1");
      expect(analyticsService.attributeMap.ALL_EVENTS.key2).toBe("value2");
      analyticsService.mergeAttributes({key1: "value3", key3: "value4"});
      expect(analyticsService.attributeMap.ALL_EVENTS.key1).toBe("value3");
      expect(analyticsService.attributeMap.ALL_EVENTS.key2).toBe("value2");
      expect(analyticsService.attributeMap.ALL_EVENTS.key3).toBe("value4");
    }));

    it("Maps events when an event map is specified", inject(function (analyticsService) {
      analyticsService.createEventsMap({
        "my:event:key": "My Event",
        "my:other:event:key": "My Other Event"
      });
      expect(analyticsService.attributeMap["my:event:key"]).not.toBeUndefined();
      expect(analyticsService.attributeMap["my:other:event:key"]).not.toBeUndefined();
      expect(analyticsService.attributeMap["my:event:key"].event).toBe("My Event");
      expect(analyticsService.attributeMap["my:other:event:key"].event).toBe("My Other Event");
    }));

    it("Removes attribute from ALL_EVENTS if no event is specified", inject(function (analyticsService) {
      analyticsService.attributeMap.ALL_EVENTS.key1 = "Some Value";
      analyticsService.clearAttribute("key1");
      expect(analyticsService.attributeMap.ALL_EVENTS.key1).toBeUndefined();
    }));

    it("Removes attribute from specific event", inject(function (analyticsService) {
      analyticsService.attributeMap.myEvent = {key1: "Some Value"};
      analyticsService.clearAttribute("key1", "myEvent");
      expect(analyticsService.attributeMap.myEvent.key1).toBeUndefined();
    }));

    it("Removes attribute from multiple events", inject(function (analyticsService) {
      analyticsService.attributeMap.myEvent1 = {key1: "Some Value"};
      analyticsService.attributeMap.myEvent2 = {key1: "Some Value"};
      analyticsService.clearAttribute("key1", ["myEvent1", "myEvent2"]);
      expect(analyticsService.attributeMap.myEvent1.key1).toBeUndefined();
      expect(analyticsService.attributeMap.myEvent2.key1).toBeUndefined();
    }));

    it("Clears all attributes for event", inject(function (analyticsService) {
      analyticsService.attributeMap.myEvent = {key1: "Some Value", key2: "Some Other Value"};
      analyticsService.submitEvent = function() {};
      analyticsService.submitEventAndClearEventAttributes("myEvent");
      expect(analyticsService.attributeMap.myEvent.key1).toBeUndefined();
      expect(analyticsService.attributeMap.myEvent.key2).toBeUndefined();
    }));

    it("Does not clear event attribute", inject(function (analyticsService) {
      analyticsService.attributeMap.myEvent = {key1: "Some Value", event: "My Event"};
      analyticsService.submitEvent = function() {};
      analyticsService.submitEventAndClearEventAttributes("myEvent");
      expect(analyticsService.attributeMap.myEvent.key1).toBeUndefined();
      expect(analyticsService.attributeMap.myEvent.event).toBe("My Event");
    }));

    it("Uses info level if one isn't specified", inject(function (analyticsService) {
      analyticsService.submitEvent("myEvent");
      expect(logInfo.level).toBe("info");
    }));

    it("Uses info level if specified level is invalid", inject(function (analyticsService) {
      analyticsService.submitEvent("myEvent", "garbage");
      expect(logInfo.level).toBe("info");
    }));

    it("Sends all ALL_EVENTS attributes and event-specific attributes", inject(function (analyticsService) {
      analyticsService.setAttributeValue("key1", "value1", "myEvent1");
      analyticsService.setAttributeValue("key2", "value2", "myEvent2");
      analyticsService.setAttributeValue("key3", "value3", "myEvent3");
      analyticsService.setAttributeValue("key4", "value4");
      analyticsService.submitEvent("myEvent1", "debug");
      expect(logInfo.level).toBe("debug");
      expect(logInfo.data.key1).toBe('value1');
      expect(logInfo.data.key2).toBeUndefined();
      expect(logInfo.data.key3).toBeUndefined();
      expect(logInfo.data.key4).toBe('value4');
    }));

  });
});
