// import $ from 'jquery';

// (function(root) {
//   const availity = root.availity;

//   availity.demo.controller('AnimationController', function($scope, $interval, $animate) {

//     const animate = {
//       message: 'Show',
//       visible: false,
//       visible2: false,
//       count: 3,
//       onClick() {
//         animate.visible = !animate.visible;
//         animate.message = animate.visible ? 'Hide' : 'Show';
//       },
//       onClick2() {
//         animate.visible2 = !animate.visible2;
//       }
//     };

//     $interval(function() {
//       animate.count++;
//       const $el = $('#counter');
//       $animate.addClass($el, 'velocity-transition-bounceIn', function() {
//         $el.removeClass('velocity-transition-bounceIn');
//       });
//     }, 3000);

//     $scope.animate = animate;
//   });
// })(window);
