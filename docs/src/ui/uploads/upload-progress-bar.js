import ngModule from '../module';
import templateUrl from './upload-progress-bar.html';
import templateModal from './template-password-prompt.html';

ngModule.directive('avUploadProgressBar', (AvModal) => ({
  restrict: 'E',
  scope: {
    modal: '=',
    upload: '=',
    errorcallback: '='
  },
  templateUrl,
  link(scope, modal) {
    scope.showModal = function() {
      const focus = function() {
        const input = document.querySelector('.password-modal .modal-body input');
        if (input) {
          input.focus();
        }
      };

      modal = new AvModal({
        scope,
        templateUrl: templateModal,
        onShown: focus
      });
    };

    scope.verifyPassword = function() {
      modal.hide();
      scope.upload.sendPassword(scope.upload.password);
    };
    scope.percentage = 0;

    const update = () => {
      scope.error = false;
      scope.percentage = scope.upload.percentage;
    };

    const error = () => {
      scope.error = true;
      return scope.errorcallback(scope.upload);
    };

    const success = () => {
      scope.error = false;
      scope.percentage = 100;
    };

    scope.upload.onProgress.push(() => scope.$applyAsync(update));
    scope.upload.onSuccess.push(() => scope.$applyAsync(success));
    scope.upload.onError.push(() => scope.$applyAsync(error));
  }
}));
