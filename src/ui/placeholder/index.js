import ngModule from '../module';

ngModule.requires.push('ng.shims.placeholder');

ngModule.config(function($provide) {

  $provide.decorator('placeholderDirective', function($delegate, $log) {

    const directive = $delegate[0];
    const originalLink = directive.link;

    const newLink = function(scope, element, attrs) {

      if (originalLink && Object.keys(attrs).indexOf('avMask') > -1) {
        $log.info('placeholder shim not running on an element due to avMask on same element');
      } else if (originalLink) {
        originalLink.apply(this, arguments);
      }
    };

    directive.compile = () => newLink;

    return $delegate;
  });

});

