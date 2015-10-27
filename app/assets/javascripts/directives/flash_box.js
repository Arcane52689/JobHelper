angular.module('AppTrackerDirectives').directive('flashBox', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'flash.html',
    controller: 'FlashCtrl',
    controllerAs: 'flash'
  }
})
