(function(root) {

  'use strict';

  var availity = root.availity;

  availity.demo.controller('TabsController', function($scope) {
    $scope.tabs = [
      { heading: 'Home', template: '<p class="lead">Home</p>' },
      { heading: 'Profile', active: true, template: '<p class="lead">Profile</p>' },
      { heading: 'Messages', template: '<p class="lead">Messages</p>' },
      { heading: 'Settings', template: '<p class="lead">Settings</p>' }
    ];

  });

})(window);
