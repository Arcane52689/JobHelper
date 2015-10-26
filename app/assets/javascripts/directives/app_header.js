angular.module('AppTrackerDirectives').directive('appHeader', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'header.html'
  }
})
