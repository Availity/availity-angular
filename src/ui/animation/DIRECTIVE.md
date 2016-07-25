### avAnimate

The avAnimate directive `av-animate` will handle basic animations within your apps, and can have those animations triggered by different events. and can be defined as an attribute or element.

```html
     <span av-animate>...</span>
     <av-animate>...</av-animate>
```

There are multiple ways to customize this directive, to change when and how it animates.

* **av-animate** - when this attribute equals a variable, it will be watched and the animation will trigger whenever that variable changes.
* **av-animate-type** - Use this to customize which velocity animation is used, it defaults to 'transition.bounceIn'
* **av-animate-on** - This defines any element events to listen for to trigger the animation (ex. 'click')
* **av-animate-on-load** - By default if there is no `av-animate-on` attribute defined, the animation will run when the directive is loaded. use True/False to change this behavior
* **av-animate-options** - This object is passed into the velocity call to customize its behavior, by default, the duration is set to 1000.
