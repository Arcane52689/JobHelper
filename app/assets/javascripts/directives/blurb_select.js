angular.module('AppTrackerDirectives').directive('blurbSelect', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'blurbs/blurb_select.html',
    controller: 'BlurbSelectCtrl',
    controllerAs: 'blurbSelect'
  }
})
