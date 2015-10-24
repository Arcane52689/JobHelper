angular.module('AppTrackerDirectives').directive('profileSelect', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'profiles/profile_select.html',
    controller: 'ProfileSelectCtrl',
    controllerAs: 'select'
  }
})
