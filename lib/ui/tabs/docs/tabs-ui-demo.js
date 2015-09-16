(function(root) {
  'use strict';

  var availity = root.availity;

  availity.demo.controller('TabController', function($scope) {
    $scope.tabs = [
      {
        'id': 'one',
        'title': 'Tab 1',
        'content': 'This is some content',
        'active': true
      },
      {
        'id': 'two',
        'title': 'Tab 2',
        'content': 'This is some other content'
      }
    ];
  });

})(window);
