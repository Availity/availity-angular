(function(root) {
  'use strict';

  var availity = root.availity;


  var AnalyticsResourceFactory = function(avLogMessagesResource) {

    var AnalyticsResource = function() {
      this.Logger = avLogMessagesResource;
      this.attributeMap = {
        ALL_EVENTS: {}
      };
    };

    var proto = AnalyticsResource.prototype;

    proto.mergeAttributes = function(map, events) {
      var self = this;
      _.each(_.keys(map), function(attribute) {
        self.setAttributeValue(attribute, map[attribute], events);
      });
    };

    proto.setAttributeValue = function(attribute, value, events) {
      if(!events) {
        events = ['ALL_EVENTS'];
      }else if(!_.isArray(events)) {
        events = [events];
      }
      var self = this;
      _.each(events, function(event) {
        if(!self.attributeMap[event]) {
          self.attributeMap[event] = {};
        }
        self.attributeMap[event][attribute] = value;
      });
    };

    proto.createEventsMap = function(events) {
      var self = this;
      _.each(_.keys(events), function(eventKey) {
        self.setAttributeValue('event', events[eventKey], eventKey);
      });
    };

    proto.clearAttribute = function(attribute, events) {
      if(!events) {
        events = ['ALL_EVENTS'];
      }else if(!_.isArray(events)) {
        events = [events];
      }
      var self = this;
      _.each(events, function(event) {
        if(self.attributeMap[event] && self.attributeMap[event][attribute] !== undefined) {
          delete self.attributeMap[event][attribute];
        }
      });
    };

    proto.submitEvent = function(event, level) {
      if(!level || !this.Logger[level]) {
        level = 'info';
      }
      var attributes = {};
      _.extend(attributes, this.attributeMap.ALL_EVENTS, this.attributeMap[event]);
      this.Logger[level](attributes);
    };

    proto.submitEventAndClearEventAttributes = function(event, level) {
      this.submitEvent(event, level);
      var self = this;
      _.each(_.keys(this.attributeMap[event]), function(attribute) {
        if(attribute !== 'event') {
          delete self.attributeMap[event][attribute];
        }
      });
    };

    return new AnalyticsResource();
  };

  availity.core.factory('avAnalyticsResource', AnalyticsResourceFactory);

})(window);
