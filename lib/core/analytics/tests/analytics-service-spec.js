/*global inject, module*/

describe('avAnalyticsResource', function() {

  'use strict';

  var avAnalyticsResource;

  beforeEach(function() {

    module('availity');

  });

  it("Creates an empty attribute map with ALL_EVENTS defined", inject(function (avAnalyticsResource) {
    expect(avAnalyticsResource.attributeMap).not.toBeUndefined();
    expect(avAnalyticsResource.attributeMap.ALL_EVENTS).not.toBeUndefined();
  }));

  it("Sets attribute value to ALL_EVENTS if no event is specified", inject(function (avAnalyticsResource) {
    avAnalyticsResource.setAttributeValue("key", "value");
    expect(avAnalyticsResource.attributeMap.ALL_EVENTS.key).toBe("value");
  }));

  it("Sets attribute to single event", inject(function (avAnalyticsResource) {
    avAnalyticsResource.setAttributeValue("key", "value", "myEvent");
    expect(avAnalyticsResource.attributeMap.ALL_EVENTS.key).toBeUndefined();
    expect(avAnalyticsResource.attributeMap.myEvent.key).toBe("value");
  }));

  it("Sets attribute to multiple events", inject(function (avAnalyticsResource) {
    avAnalyticsResource.setAttributeValue("key", "value", ["myEvent", "myEvent2"]);
    expect(avAnalyticsResource.attributeMap.ALL_EVENTS.key).toBeUndefined();
    expect(avAnalyticsResource.attributeMap.myEvent.key).toBe("value");
    expect(avAnalyticsResource.attributeMap.myEvent2.key).toBe("value");
  }));

  it("Merges attributes passed in as a map", inject(function (avAnalyticsResource) {
    avAnalyticsResource.mergeAttributes({key1: "value1", key2: "value2"});
    expect(avAnalyticsResource.attributeMap.ALL_EVENTS.key1).toBe("value1");
    expect(avAnalyticsResource.attributeMap.ALL_EVENTS.key2).toBe("value2");
    avAnalyticsResource.mergeAttributes({key1: "value3", key3: "value4"});
    expect(avAnalyticsResource.attributeMap.ALL_EVENTS.key1).toBe("value3");
    expect(avAnalyticsResource.attributeMap.ALL_EVENTS.key2).toBe("value2");
    expect(avAnalyticsResource.attributeMap.ALL_EVENTS.key3).toBe("value4");
  }));

  it("Maps events when an event map is specified", inject(function (avAnalyticsResource) {
    avAnalyticsResource.createEventsMap({
      "my:event:key": "My Event",
      "my:other:event:key": "My Other Event"
    });
    expect(avAnalyticsResource.attributeMap["my:event:key"]).not.toBeUndefined();
    expect(avAnalyticsResource.attributeMap["my:other:event:key"]).not.toBeUndefined();
    expect(avAnalyticsResource.attributeMap["my:event:key"].event).toBe("My Event");
    expect(avAnalyticsResource.attributeMap["my:other:event:key"].event).toBe("My Other Event");
  }));

  it("Removes attribute from ALL_EVENTS if no event is specified", inject(function (avAnalyticsResource) {
    avAnalyticsResource.attributeMap.ALL_EVENTS.key1 = "Some Value";
    avAnalyticsResource.clearAttribute("key1");
    expect(avAnalyticsResource.attributeMap.ALL_EVENTS.key1).toBeUndefined();
  }));

  it("Removes attribute from specific event", inject(function (avAnalyticsResource) {
    avAnalyticsResource.attributeMap.myEvent = {key1: "Some Value"};
    avAnalyticsResource.clearAttribute("key1", "myEvent");
    expect(avAnalyticsResource.attributeMap.myEvent.key1).toBeUndefined();
  }));

  it("Removes attribute from multiple events", inject(function (avAnalyticsResource) {
    avAnalyticsResource.attributeMap.myEvent1 = {key1: "Some Value"};
    avAnalyticsResource.attributeMap.myEvent2 = {key1: "Some Value"};
    avAnalyticsResource.clearAttribute("key1", ["myEvent1", "myEvent2"]);
    expect(avAnalyticsResource.attributeMap.myEvent1.key1).toBeUndefined();
    expect(avAnalyticsResource.attributeMap.myEvent2.key1).toBeUndefined();
  }));

  it("Clears all attributes for event", inject(function (avAnalyticsResource) {
    avAnalyticsResource.attributeMap.myEvent = {key1: "Some Value", key2: "Some Other Value"};
    avAnalyticsResource.submitEvent = function() {};
    avAnalyticsResource.submitEventAndClearEventAttributes("myEvent");
    expect(avAnalyticsResource.attributeMap.myEvent.key1).toBeUndefined();
    expect(avAnalyticsResource.attributeMap.myEvent.key2).toBeUndefined();
  }));

  it("Does not clear event attribute", inject(function (avAnalyticsResource) {
    avAnalyticsResource.attributeMap.myEvent = {key1: "Some Value", event: "My Event"};
    avAnalyticsResource.submitEvent = function() {};
    avAnalyticsResource.submitEventAndClearEventAttributes("myEvent");
    expect(avAnalyticsResource.attributeMap.myEvent.key1).toBeUndefined();
    expect(avAnalyticsResource.attributeMap.myEvent.event).toBe("My Event");
  }));

});