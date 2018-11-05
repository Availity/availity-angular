import ngModule from '../module';

ngModule.directive('avOnFileChange', () => ({
  restrict: 'A',
  link(scope, element, attrs) {
    element.on('change', () => {
      scope.$applyAsync(() => {
        const onFileChangeHandler = scope.$eval(attrs.avOnFileChange);
        const el = element[0];

        if (el.files) {
          onFileChangeHandler(scope, el);
        }
      });
    });

    scope.$on('$destroy', () => {
      element.off('change');
    });
  }
}));

