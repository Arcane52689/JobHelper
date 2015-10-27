angular.module('AppTrackerDirectives').directive('applicationItem', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'applications/application_item.html',
    controller: 'ApplicationItemCtrl',
    controllerAs: 'item',
    scope: {
      application: "="
    }
  }
})
