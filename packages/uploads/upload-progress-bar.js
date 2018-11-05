import ngModule from '../module';
import templateUrl from './upload-progress-bar.html';

ngModule.directive('avUploadProgressBar', () => ({
  restrict: 'E',
  scope: {
    upload: '='
  },
  templateUrl,
  link(scope) {
    scope.percentage = 0;
    const update = () => {
      scope.percentage = scope.upload.percentage;
      scope.completed = scope.percentage === 100;
    };

    scope.upload.onProgress.push(() => scope.$applyAsync(update));
  }
}));
