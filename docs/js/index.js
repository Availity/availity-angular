import $ from 'jquery';

import demo from './module';

import 'availity-uikit/docs/less/docs.less';
import 'animate.css/animate.css';

import '../../lib/core/analytics/docs';
import '../../lib/core/utils/docs';
import '../../lib/core/authorizations/docs';

import '../../lib/ui/validation/docs';
import '../../lib/ui/modal/docs';
import '../../lib/ui/popover/docs';
import '../../lib/ui/tooltip/docs';
import '../../lib/ui/permissions/docs';

demo.controller('PageController', () => {
  // no op
});

function toggleButtons() {

  // Add View Code toggle button for each example
  $('.docs-example').each(function() {

    const btn = `
      <div>
        <hr class="divider-lg" />
        <div class="btn-toolbar">
          <button class="btn btn-ghost btn-sm" data-toggle="code">View Code<i class="icon icon-code"></i></button>
        </div>
      </div>`;

    if ($(this).next().is('[class*="language-"]')) {
      $(this).append($(btn));
    }

  });

  $('[data-toggle="code"]').click(function(e) {

    e.preventDefault();

    const target = $(this).parents('.docs-example').next('[class*="language-"]');

    if (target.is(':visible')) {
      target.velocity('slideUp', { duration: 200 });
    } else {
      target.velocity('fadeIn', {
        duration: 300,
        display: 'block'
      });
    }

  });

}

$(document).ready( () => {
  toggleButtons();
});

demo.run($httpBackend => {
  $httpBackend.whenRoute('POST', '/api/v1/log-messages').respond({});
});
