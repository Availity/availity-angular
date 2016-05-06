Analytics is a way for you to track how users interact with your data. The two analytic services that we provide are Piwik and Splunk.  To use our analytics services some configuration needs to take place. By default analytic tracking is not setup in the application. This means that page views and events will not be tracked. To enable page tracking and custom event tracking follow the steps below.

### Adding the Analytics Module

Initialize the `availity.config` module in your app application. 

```javascript
angular.module('app', ['availity.config']);
```

### Virtual Page Tracking

Virtual page tracking is enabled by default, to enable virtual page tracking you will need to set to call `avPiwikAnalyticsProvider.virtualPageTracking()` or `avSplunkAnalyticsProvider.virtualPageTracking()` and pass in true. Once this is enabled all page visits will be tracked.
</div>

```javascript
app.config( ($scope, avPiwikAnalyticsProvider) => {
    avPiwikAnalyticsProvider.setVirtualPageTracking(true);
});
```

### Anatomy of an Event

> The following descriptions were copied from [http://www.statstory.com/](http://www.statstory.com/tracking-events-in-google-analytics/)

* **category** - This is the name you want to give for the collection where actions you want to track will occur. An example of category could be Video’s or Datasheets.
* **label** - This is an optional string which can be valuable in adding a dimension to the event data. Usually I use it to differentiate content. For example, if you want to know which specific video is played or which datasheet is downloaded.
* **action** - This is a string which is paired with each category, and most often is used to describe the user interaction with your content. An example could be play, click or download.
* **value** - This is a number, which you can use to provide a numerical dimension to a user action. Normally, I leave this blank unless I have an ecommerce reason. For example if you have a form, where a user can fill in a price or quantity, you can pass this value via an event.

### Event Tracking

To add event tracking to an element on the page you will need to use the `av-analytics-on` directive. The example below will demonstrate how to use the directive. When applying analytics with Piwik you should include the `av-analytics-on` directive on the element you want to track, this will pull the inner text of the element and set it as a label. Optionally if no inner text exists, include the `av-analytics-label` attribute on the element . There are also two optional attributes `av-analytics-value`, `av-analytics-category` that you can append to an element for more detailed events.

* **av-analytics** - required for tracking analytics, you can set your category on this directive
* **av-analytics-on** - required for tracking analytics, defaults to `click`
* **av-analytics-label** - required for Piwik
* **av-analytics-action** - optional for Piwik
* **av-analytics-value** - optional for Piwik - numeric only

</div>

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

To register a new analytic service you would call `analyticsProvider.registerPlugins()` passing in a array of services you want to register.

```javascript
app.config( (avAnalyticsProvider) => {
    avAnalyticsProvider.registerPlugins([
      'test1AnalyticService',
      'test2AnalyticService'
    ]);
});
```
### Enabling Plugins

To `enable` your plugins and set the site ID correctly, use `avPiwikAnalyticsProvider.enabled(true)` and `avPiwikAnalyticsProvider.setSiteID(1)`.

```javascript
app.config(function(avPiwikAnalyticsProvider) {
    avPiwikAnalyticsProvider.enabled(true);
    avPiwikAnalyticsProvider.setSiteID(1);
});
```

### Custom Variables

Currently custom variables are only provided via Piwik and are scoped throughout the users session.

In order to access custom variables you must go through the `avPiwikAnalyticsServiceProvider` from your configuration and use `.setVisitVariable` with parameters `index`, `valueName` and `value`.

Due to restrictions on Piwik you are currently limited to only 5 variables in index 1 through 5, reusing an index will reset the values assigned to it, but not the amount of actions associated with it.

> **Note:** `index` must be an int and `valueName` must be defined or the function will return errors.

```javascript
app.config( (avPiwikAnalyticsProvider) => {
    avPiwikAnalyticsProvider.setVisitVariable(1, 'name', 'value');
});
```

### Exception Handler

The Angular `$exceptionHandler` has been enhanced using [Tracekit](https://github.com/csnover/TraceKit) for consistent metrics on stack traces occurring across all browsers.

Open debugger to see `exceptionHandler` send a message to `api/v1/log-messages` with normalized error message information along with the stack trace.

```html
<p>
    <button data-ng-click="analytics.createError()" class="btn btn-danger">
    Create Error
    </button>
</p>
```

```javascript
// sample payload

{
"level": "error",
"entries": {
    "errorDate": "2015-06-21T19:21:17.283Z",
    "errorName": "Error",
    "errorMessage": "Oh snap!",
    "errorStack": "[00] Object.$scope.analytics.createError http://localhost:3000/js/docs-demos.js:46:15\n[01] Parser.functionCall http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0/angular.js:10903:21\n[02] ngEventDirectives.(anonymous function).compile.element.on.callback http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0/angular.js:19259:17\n[03] Scope.$get.Scope.$eval http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0/angular.js:12811:28\n[04] Scope.$get.Scope.$apply http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0/angular.js:12909:23\n[05] HTMLButtonElement.&lt;anonymous&gt; http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0/angular.js:19264:23\n[06] HTMLButtonElement.m.event.dispatch http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js:3:8436\n[07] HTMLButtonElement.m.event.add.r.handle http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js:3:5146",
    "url": "http://localhost:3000/core.html",
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
