import ngModule from '../module';

class AvBlockContainerDirective {

  constructor(avBlockConfig) {

    this.av = { avBlockConfig };

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

