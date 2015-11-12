angular.module('AppTrackerControllers').controller('ApplicationItemCtrl', ['$scope', 'Application', 'Collections', 'MyFlash', '$rootScope', function($scope, Application, Collections, MyFlash, $rootScope) {
  this.setUp = function() {
    this.application = Collections.Applications.find($scope.application);
  }

  this.save = function() {
    ;
    this.application.save({
      success: function(resp) {
        MyFlash.success('Application succesfully updated')
        $rootScope.$emit('updateEvent')
      },
      error: function(resp) {
        MyFlash.error(resp.errors);
      }
    });

  }

  this.setUp();
}])
