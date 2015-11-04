angular.module('AppTrackerControllers').controller('ProfileIndexCtrl', ['Profile', 'Collections', '$location', function(Profile, Collections, $location) {
  this.setUp = function() {
    this.profiles = Collections.Profiles;
    this.profiles.fetch({
      success: function() {
        this.selected = this.profiles.all()[0]
      }.bind(this)
    });

  }






  this.setUp();
}])
