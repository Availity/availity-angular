import $ from 'jquery';

import demo from './module';

import 'availity-uikit/docs/less/docs.less';
import 'animate.css/animate.css';

demo.controller('PageController', function() {
  // no op
});

// Add View Code toggle button for each example
$('.guide-example').each(function() {

  var btn = '' +
    '<div>' +
    '<hr class="divider-lg"/>' +
    '<div class="btn-toolbar">' +
    '<button class="btn btn-ghost btn-sm" data-toggle="code">' +
    'View Code<i class="icon icon-code"></i>' +
    '</button>' +
    '</div>' +
    '</div>';

  if ($(this).next().is('[class*="language-"]')) {
    $(this).append($(btn));
  }

});

$('[data-toggle="code"]').click(function(e) {

  e.preventDefault();

  var target = $(this).parents('.guide-example').next('[class*="language-"]');

  if (target.is(':visible')) {
    target.velocity('slideUp', { duration: 200 });
  }else {
    target.velocity('fadeIn', {
      duration: 300,
      display: 'block'
    });
  }

});

require('../content/core/analytics');
