import * as _ from 'lodash';
import availity from '../module';

availity.ui.requires.push('ng.shims.placeholder');

availity.ui.config(function($provide) {

  $provide.decorator('placeholderDirective', ['$delegate', '$log', function($delegate, $log) {

    const directive = $delegate[0];
    const originalLink = directive.link;

    const newLink = function(scope, element, attrs) {

      if (originalLink && _.contains(_.keys(attrs), 'avMask')) {
        $log.info('placeholder shim not running on an element due to avMask on same element');
        return;
      } else if (originalLink) {
        originalLink.apply(this, arguments);
      }
    };

    directive.compile = function() {
      return newLink;
    };

    return $delegate;
  }]);

});

