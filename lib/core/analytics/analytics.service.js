define(function(require) {
  "use strict";

  var module = require("foundation/js/av-core/core");
  var _ = require('underscore');
  require('foundation/js/av-core/api/api.log.messages');

  function AnalyticsService(logMessagesResource) {
    this.Logger = logMessagesResource;
    this.attributeMap = {
      ALL_EVENTS: {}
    };
  }

  var proto = AnalyticsService.prototype;

  proto.mergeAttributes = function(map, events) {
    var self = this;
    _.each(_.keys(map), function(attribute) {
      self.setAttributeValue(attribute, map[attribute], events);
    });
  };

  proto.setAttributeValue = function(attribute, value, events) {
    if (!events) {
      events = ["ALL_EVENTS"];
    } else if (!_.isArray(events)) {
      events = [events];
    }
    var self = this;
    _.each(events, function(event) {
      if (!self.attributeMap[event]) {
        self.attributeMap[event] = {};
      }
      self.attributeMap[event][attribute] = value;
    });
  };

  proto.createEventsMap = function(events) {
    var self = this;
    _.each(_.keys(events), function(eventKey) {
      self.setAttributeValue("event", events[eventKey], eventKey);
    });
  };

  proto.clearAttribute = function(attribute, events) {
    if (!events) {
      events = ["ALL_EVENTS"];
    } else if (!_.isArray(events)) {
      events = [events];
    }
    var self = this;
    _.each(events, function(event) {
      if (self.attributeMap[event] && self.attributeMap[event][attribute] !== undefined) {
        delete self.attributeMap[event][attribute];
      }
    });
  };

  proto.submitEvent = function(event, level) {
    if (!level || !this.Logger[level]) {
      level = "info";
    }
    var attributes = {};
    _.extend(attributes, this.attributeMap.ALL_EVENTS, this.attributeMap[event]);
    this.Logger[level](attributes);
  };

  proto.submitEventAndClearEventAttributes = function(event, level) {
    this.submitEvent(event, level);
    var self = this;
    _.each(_.keys(this.attributeMap[event]), function(attribute) {
      if (attribute !== 'event') {
        delete self.attributeMap[event][attribute];
      }
    });
  };

  module.service('analyticsService', AnalyticsService);
  return module;
});
