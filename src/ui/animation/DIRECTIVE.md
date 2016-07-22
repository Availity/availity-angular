
### Bouncer

The Bouncer directive `av-bounce` will automatically trigger a bouncing animation with velocity's `transition.bounceIn`. This can be used by adding adding the attribute or using `av-bounce` as the element.

```html
     <span av-bounce>bouncing</span>
     <av-bounce>bouncing 2</av-bounce>
```

From this, there are several options to modify the behavior
* **av-bounce** - set this equal to an angular value, and the animation will trigger whenever this value changes
* **