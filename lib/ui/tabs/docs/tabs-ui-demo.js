(function(root) {
  'use strict';

  var availity = root.availity;

  availity.demo.controller('TabController', function($scope) {
    $scope.tabs1 = [
      {
        'id': 'one1',
        'title': 'Tab 1',
        'content': 'This is some content',
        'active': true
      },
      {
        'id': 'two1',
        'title': 'Tab 2',
        'content': 'This is some other content'
      }
    ];

    $scope.tabs2 = [
      {
        'id': 'one2',
        'title': 'Tab 1',
        'content': 'This is some content',
        'active': true
      },
      {
        'id': 'two2',
        'title': 'Tab 2',
        'content': 'This is some other content'
      }
    ];

    $scope.tabs3 = [
      {
        'id': 'one3',
        'title': 'Tab 1',
        'content': 'This is some content'
      },
      {
        'id': 'two3',
        'title': 'Tab 2',
        'content': 'This is some other content',
        active: true
      },
      {
        'id': 'three3',
        'title': 'Tab 3',
        'content': 'This is a third tab'
      }
    ];
  });

})(window);
