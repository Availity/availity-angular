## Dimmer

avDimmer is a directive that displays a message or effect over an element.

### Usage

Have the 'availity.ui' module in your application

```javascript
angular.module('app', ['availity.ui']);
```

### avDimmerConfig

The avDimmer directive checks for a specific child element and if its found, will call a velocity animation on it based on a show and hide event.

By default, the directive will use:

* A child element with the css class `.dimmer-content`
* The velocity animations `fadeIn` and `fadeOut`
* The velocity options of `{ duration: 250 }`
* Calling the show behavior on `mouseenter`
* Calling the hide behavior on `mouseleave`

The overall structure of this is:

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

using the provider avDimmerConfig, you can ovverride each of these values globally, or in the directive, use `av-dimmer-config` to pass in the object for that instance.

### avDimmer

The directive `av-dimmer` can be used as an element or an attribute

```html
     <span av-dimmer>...</span>
     <av-dimmer>...</av-dimmer>
```

This will add the event listeners to this element, and search its children with the `overlaySelector` to apply the animations to.
