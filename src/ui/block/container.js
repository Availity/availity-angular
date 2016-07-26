import ngModule from '../module';
import Base from '../base';

class AvBlockContainerDirective extends Base {

  static $inject = ['avBlockConfig'];

  constructor(...args) {

    super(...args);

    this.scope = true;
    this.restrict = 'AE';

    this.templateUrl = this.av.avBlockConfig.templateUrl;

  }

  controller($scope, $element) {

    const service = $element.inheritedData('av-block');

    if (!service) {
      throw new Error('No parent av-block service instance located.');
    }

    // add state to scope of this directive
    $scope.state = service.state();

  }

}

ngModule.directive('avBlockContainer', (avBlockConfig) => new AvBlockContainerDirective(avBlockConfig));

