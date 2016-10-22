## Analytics

Analytics is a way for you to track how users interact with your data. 

### Configuration

Initialize the `availity.config` module in your application. 

```javascript
angular.module('app', ['availity.config']);
```

### Virtual Page Tracking

Virtual page tracking is enabled by default.  Virtual page can be disabled using `avAnalyticsConfigProvider`.

```javascript
app.config( ($scope, avAnalyticsConfigProvider) => {
    avAnalyticsConfigProvider.setVirtualPageTracking(true);
});
```

### Anatomy of an Event

> The following descriptions were copied from [http://www.statstory.com/](http://www.statstory.com/tracking-events-in-google-analytics/)

* **category** - This is the name you want to give for the collection where actions you want to track will occur. An example of category could be Video’s or Datasheets.  Categories are useful for grouping events in analytics reports.
* **label** - This is an optional string which can be valuable in adding a dimension to the event data. Usually I use it to differentiate content. For example, if you want to know which specific video is played or which datasheet is downloaded.
* **action** - This is a string which is paired with each category, and most often is used to describe the user interaction with your content. An example could be play, click or download.
* **value** - This is a number, which you can use to provide a numerical dimension to a user action. Normally, I leave this blank unless I have an e-commerce reason. For example if you have a form, where a user can fill in a price or quantity, you can pass this value via an event.

### Event Tracking

To add event tracking to an element on the page you will need to use the `av-analytics-on` directive. When applying analytics  you should include the `av-analytics-on` directive on the element you want to track, this will pull the inner text of the element and set it as a label. Optionally if no inner text exists, include the `av-analytics-label` attribute on the element . There are also two optional attributes `av-analytics-value`, `av-analytics-category` that you can append to an element for more detailed events.

* **av-analytics** - required for tracking analytics, you can set your category on this directive
* **av-analytics-on** - required for tracking analytics, defaults to `click`
* **av-analytics-label** - required for Piwik
* **av-analytics-action** - optional for Piwik
* **av-analytics-value** - optional for Piwik - numeric only

The example below will demonstrate how to use the directive. 

```html
<div av-analytics="{'category': 'Category One'}">
    <button
        av-analytics-on
        av-analytics-label="Intro Movie"
        av-analytics-action="Play"
        av-analytics-value="0">
    Button
    </button>
</div>
```

### Plugins

To register a new analytic service you would call `analyticsProvider.registerPlugins()` passing in a array of services you want to register.

```javascript
app.config( avAnalyticsProvider => {
    avAnalyticsProvider.registerPlugins([
      'test1AnalyticService',
      'test2AnalyticService'
    ]);
});
```

### Exception Handler

The Angular `$exceptionHandler` has been enhanced using [Tracekit](https://github.com/csnover/TraceKit) for consistent metrics on stack traces occurring across all browsers.

Below is an example of an an error event when captured through the exception handler.

```javascript
// sample payload

{
"level": "error",
"entries": {
    "errorDate": "2015-06-21T19:21:17.283Z",
    "errorName": "Error",
    "errorMessage": "Oh snap!",
    "errorStack": "[00] Object.$scope.analytics.createError http://localhost:3000/js/docs-demos.js:46:15\n[01] Parser.functionCall http://
    ...
    ...",
    "appId": "N/A",
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.81 Safari/537.36",
    "referrer": "http://localhost:3000/core.html",
    "host": "localhost",
    "screenWidth": 744,
    "screenHeight": 723,
    "sdkVersion": "v0.0.0"
    }
}

```
