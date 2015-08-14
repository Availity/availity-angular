/**
 * availity-angular v0.14.1 -- July-30
 * Copyright 2015 Availity, LLC 
 */

(function() {
'use strict';
angular.module("availity.ui.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("ui/badge/badge-tpl.html","<span data-ng-if=\"showWhenZero || count > 0\" data-ng-bind=\"count | avApproximate\"></span>");
$templateCache.put("ui/breadcrumbs/breadcrumbs-tpl.html","<ul class=\"breadcrumb\"><li data-ng-repeat=\"breadcrumb in breadcrumbs\" data-ng-class=\"{ active: $last }\"><a ui-sref=\"{{breadcrumb.state}}\" data-ng-if=\"!$last\" data-ng-bind=\"breadcrumb.displayName\"></a> <span data-ng-if=\"$last\" data-ng-bind=\"breadcrumb.displayName\"></span></li></ul>");
$templateCache.put("ui/idle/idle-session-tpl.html","<div class=\"modal-header\"><h4 class=\"modal-title\">Session Expired</h4></div><div class=\"modal-body\"><div class=\"row\"><div class=\"col-xs-2\"><i class=\"icon icon-cancel-circle icon-4x\"></i></div><div class=\"col-xs-10\"><p class=\"lead\">Your session has expired. If you want to continue, click <strong>Log into Availity</strong> and enter your login credentials.</p></div></div></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-primary\" data-ng-click=\"idle.onSessionTimeout()\">Log into Availity</button></div>");
$templateCache.put("ui/idle/idle-tpl.html","<div data-av-modal><div data-ng-include=\"idle.template\"></div></div>");
$templateCache.put("ui/idle/idle-warning-tpl.html","<div class=\"modal-header\"><h4 class=\"modal-title\">Are you still working?</h4></div><div class=\"modal-body\"><div class=\"row\"><div class=\"col-xs-2\"><i class=\"icon icon-attention-circle icon-4x\"></i></div><div class=\"col-xs-10\"><p class=\"lead\">Your session is about to expire. Click anywhere on the screen to let us know you are still here.</p></div></div></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-primary\">Continue</button></div>");
$templateCache.put("ui/modal/modal-tpl.html","<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\"><div class=\"modal-dialog\"><div class=\"modal-content\" data-ng-transclude=\"\"></div></div></div>");}]);
var availity = window.availity || {}; if(typeof module !== 'undefined' && module.exports) {module.exports = availity; } })();

//# sourceMappingURL=maps/availity-angular-ui-templates.js.map