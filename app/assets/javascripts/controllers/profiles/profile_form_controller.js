var AppTrackerControllers = angular.module("AppTrackerControllers")

AppTrackerControllers.controller("ProfileFormCtrl", ['Collections', '$location','$routeParams', 'Profile', 'MyFlash', function(Collections, $location, $routeParams, Profile, MyFlash) {
  this.hasErrors = false;

  this.setUp = function() {
    if ($routeParams['id']) {
      this.profile = new Profile( {'id': $routeParams['id']});
      this.profile.fetch();
    } else {
      this.profile = new Profile({});
    }

  };










  this.submit = function() {
    this.profile.attributes.cover_letter_template = $(".cover-letter-form").html();
    this.profile.updatePreview();
    this.profile.save({
      success: function() {
        MyFlash.success('Profile has been saved');
        Collections.Profiles.add(this.profile)
        $location.path("/profiles/");
      }.bind(this),
      error: function(resp) {
        MyFlash.error(resp.errors);
      }
    })
  }


  this.setUp();

}])
