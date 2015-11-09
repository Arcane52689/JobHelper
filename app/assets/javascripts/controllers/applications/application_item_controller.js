angular.module('AppTrackerControllers').controller('ApplicationItemCtrl', ['$scope', 'Application', 'Collections', 'MyFlash', function($scope, Application, Collections, MyFlash) {
  this.setUp = function() {
    this.application = Collections.Applications.find($scope.application);
  }

  this.save = function() {
    debugger
    this.application.save({
      success: function(resp) {
        MyFlash.success('Application succesfully updated')
      },
      error: function(resp) {
        MyFlash.error(resp.errors);
      }
    });

  }

  this.setUp();
}])
