(function(root) {
  'use strict';

  var availity = root.availity;

  availity.core.factory('avTraceKit', function(avLogMessagesResource) {
    var errorStack;
    TraceKit.remoteFetching = false;
    
    TraceKit.report.subscribe(function(errorReport) {
        var msg = 'msg: ' + errorReport.message + '\n\n';
        msg +="::::STACKTRACE::::\n";
        for(var i = 0; i < errorReport.stack.length; i++) {
            msg += "stack[" + i + "] " + errorReport.stack[i].url + ":" + errorReport.stack[i].line + "\n";
        }
        // console.log('msg', msg);
        errorStack = msg;
        // avLogMessagesResource['error'](msg);
    });

    return({print: function(e){
      console.log('name', '2');
       var test = TraceKit.report(e);
       console.log('test', test);
       console.log('errorStack', errorStack);
    }});
  });

})(window);
