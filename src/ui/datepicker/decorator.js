import angular from 'angular';
import ngModule from '../module';

function dateConfig($provide) {
  // duck punch built in input validation to not date validation since it doesn't support different formats. 
  $provide.decorator('inputDirective', function ($delegate) {
    var directive = $delegate[0];
    var link = directive.link;
    directive.compile = () => {
      return {
        pre (scope, element, attr, ctrls) {
          if (ctrls[0] && angular.lowercase(attr.type) === 'date' && angular.isDefined(attr.avDatepicker)) {
            // do not use the default date validation;
          } else {
            link.pre.apply(this, arguments);
          }
        }
      };
    };

    return $delegate;
  });
}

ngModule.config(dateConfig);
