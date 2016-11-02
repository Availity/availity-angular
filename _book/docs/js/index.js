import $ from 'jquery';

import demo from './module';

import 'availity-uikit/docs/less/docs.less';
import '../../src/ui/ui.less';
import 'animate.css/animate.css';

import '../../src/core/analytics/docs';
import '../../src/core/utils/docs';
import '../../src/core/authorizations/docs';

import '../../src/ui/animation/docs';
import '../../src/ui/validation/docs';
import '../../src/ui/modal/docs';
import '../../src/ui/datepicker/docs';
import '../../src/ui/popover/docs';
import '../../src/ui/mask/docs';
import '../../src/ui/block/docs';
import '../../src/ui/tooltip/docs';
import '../../src/ui/permissions/docs';
import '../../src/ui/dropdown/docs';
import '../../src/ui/breadcrumbs/docs';

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

demo.config($locationProvider => $locationProvider.html5Mode({enabled: true, requireBase: false}));

demo.run($httpBackend => {
  $httpBackend.whenRoute('POST', '/api/v1/log-messages').respond({'logMessage': 'OK'});
});
