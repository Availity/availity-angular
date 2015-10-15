/**
 * availity-angular v1.1.0 -- October-12
 * Copyright 2015 Availity, LLC 
 */

(function() {
'use strict';
angular.module("availity.ui.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("ui/animation/loader-tpl.html","<div class=\"loading-indicator\"><span class=\"loading-bullet\">&bull;</span> <span class=\"loading-bullet\">&bull;</span> <span class=\"loading-bullet\">&bull;</span></div>");
$templateCache.put("ui/badge/badge-tpl.html","<span data-ng-if=\"showWhenZero || count > 0\" data-ng-bind=\"count | avApproximate\"></span>");
$templateCache.put("ui/block/block-tpl.html","<div class=\"block-ui-overlay\" data-ng-class=\"{ \'block-ui-visible\': state.blocking }\" data-ng-show=\"state.blockCount > 0\"></div><div class=\"block-ui-message-container\" data-ng-show=\"state.blocking\"><div class=\"av-block-ui-message\"><div data-av-loader=\"\" data-av-block-ui=\"{{state.id}}\" data-block-count=\"{{state.blockCount}}\" class=\"loading-indicator\" data-delay=\"true\"></div></div></div>");
$templateCache.put("ui/breadcrumbs/breadcrumbs-tpl.html","<ul class=\"breadcrumb\"><li data-ng-repeat=\"breadcrumb in breadcrumbs\" data-ng-class=\"{ active: $last }\"><a ui-sref=\"{{breadcrumb.state}}\" data-ng-if=\"!$last\" data-ng-bind=\"breadcrumb.displayName\"></a> <span data-ng-if=\"$last\" data-ng-bind=\"breadcrumb.displayName\"></span></li></ul>");
$templateCache.put("ui/idle/idle-session-tpl.html","<div class=\"modal-header\"><h4 class=\"modal-title\">Session Expired</h4></div><div class=\"modal-body\"><div class=\"row\"><div class=\"col-xs-2\"><i class=\"icon icon-cancel-circle icon-4x\"></i></div><div class=\"col-xs-10\"><p class=\"lead\">Your session has expired. If you want to continue, click <strong>Log into Availity</strong> and enter your login credentials.</p></div></div></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-primary\" data-ng-click=\"idle.onSessionTimeout()\">Log into Availity</button></div>");
$templateCache.put("ui/idle/idle-tpl.html","<div data-av-modal><div data-ng-include=\"idle.template\"></div></div>");
$templateCache.put("ui/idle/idle-warning-tpl.html","<div class=\"modal-header\"><h4 class=\"modal-title\">Are you still working?</h4></div><div class=\"modal-body\"><div class=\"row\"><div class=\"col-xs-2\"><i class=\"icon icon-attention-circle icon-4x\"></i></div><div class=\"col-xs-10\"><p class=\"lead\">Your session is about to expire. Click anywhere on the screen to let us know you are still here.</p></div></div></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-primary\">Continue</button></div>");
$templateCache.put("ui/labels/removable-label-tpl.html","<a data-ng-click=\"removeLabel()\"><i class=\"icon icon-cancel\"></i></a><span data-ng-transclude></span>");
$templateCache.put("ui/modal/modal-tpl.html","<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\"><div class=\"modal-dialog\" data-ng-class=\"{\'modal-lg\': size === \'lg\', \'modal-sm\': size === \'sm\'}\"><div class=\"modal-content\" data-ng-transclude=\"\"></div></div></div>");
$templateCache.put("ui/tabs/tab-tpl.html","<li role=\"presentation\" data-ng-class=\"{ active: active, disabled: disabled }\"><a role=\"tab\" data-ng-click=\"select()\">{{heading}}</a></li>");
$templateCache.put("ui/tabs/tabs-tpl.html","<div><ul class=\"nav nav-{{tabType || \'tabs\'}}\" data-ng-class=\"{ \'nav-stacked\': vertical, \'nav-justified\': justified }\" data-ng-transclude></ul><div class=\"tab-content\" data-ng-class=\"{ \'tab-bump\' : padContent }\"><div data-ng-repeat=\"tab in tabs\" class=\"tab-pane\" data-av-tab-pane=\"tab\" data-ng-class=\"{ active: tab.active }\" role=\"tabpanel\"></div></div></div>");}]);
var availity = window.availity || {}; if(typeof module !== 'undefined' && module.exports) {module.exports = availity; } })();

//# sourceMappingURL=maps/availity-angular-ui-templates.js.map