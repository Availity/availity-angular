## Utils

### print()

Utility method that fixes `window.print()` for IE8-11 and Firefox from within an `&lt;iframe&gt;`

### stringify()

Converts any object into a string

### isBlank()

Determines if a string is null or empty

### uuid()

_Copied from Angular_.  A consistent way of creating unique IDs. The ID is a sequence of alpha numeric characters such as '012ABC'. The reason why we are not using simply a number counter is that the number string gets longer over time, and it can also overflow, where as the nextId will grow much slower, it is a string, and it will never overflow.
