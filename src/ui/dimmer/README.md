## Dimmer

`avDimmer` is a directive that displays a message or effect over an element. `avDimmer` checks for a specific child element and if its found, will call a velocity animation on it based on a show and hide event.

### Usage

```javascript
angular.module('app', ['availity.ui']);
```

### Configuration

`avDimmerConfigProvider` can be used to globally set values for all `avDimmer` instances.  Directive overrides are allow passing the configuration to attribute `av-dimmer-config`.

```javascript

  {
    animationConfig: {
      duration: 250
    },
    showAnimation: 'fadeIn',
    showEvent: 'mouseenter',
    hideAnimation: 'fadeOut',
    hideEvent: 'mouseleave',
    overlaySelector: '.dimmer-content'
  }
```

### Directive

The directive `av-dimmer` can be used as an element or an attribute

```html
     <span av-dimmer>...</span>
     <av-dimmer>...</av-dimmer>
```

This will add the event listeners to this element, and search its children with the `overlaySelector` to apply the animations to.
