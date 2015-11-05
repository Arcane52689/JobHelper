angular.module('AppTrackerControllers').controller('ApplicationItemCtrl', ['$scope', 'Application', 'Collections', function($scope, Application, Collections) {
  this.setUp = function() {
    this.application = Collections.Applications.find($scope.application);
  }

  this.save = function() {
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
