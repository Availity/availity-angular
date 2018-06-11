### avAnimate

The `av-animate` directive can be defined as an attribute or element and handles basic animations. The animations can be triggered by different events.

```html
    <span av-animate>...</span>
    <av-animate>...</av-animate>
```

* **av-animate** - when this attribute equals a variable, it will be watched and the animation will trigger whenever that variable changes.
* **av-animate-type** - Use this to customize which velocity animation is used, it defaults to `transition.bounceIn`
* **av-animate-on** - This defines any element events to listen for to trigger the animation (ex. click)
* **av-animate-on-load** - By default if there is no `av-animate-on` attribute defined, the animation will run when the directive is loaded. use `true` or `false` to change this behavior
* **av-animate-options** - This object is passed into the velocity call to customize its behavior, by default, the duration is set to `1000`.
