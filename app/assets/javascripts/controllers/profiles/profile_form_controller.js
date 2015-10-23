var AppTrackerControllers = angular.module("AppTrackerControllers")

AppTrackerControllers.controller("ProfileFormCtrl", ['$http', '$location','$routeParams', 'Profile', function($http, $location, $routeParams, Profile) {
  this.hasErrors = false;

  this.setUp = function() {
    if ($routeParams['id']) {
      this.profile = new Profile( {'id': $routeParams['id']});
      this.profile.fetch();
    } else {
      this.profile = new Profile({});
    }

  };

  this.success = function(resp) {
    $location.path("/")
  }

  this.error = function(resp) {
    console.error(resp);
    this.hasErrors = true;
    this.showErrors()
  }








  this.submit = function() {
    this.profile.attributes.cover_letter_template = $(".cover-letter-form").html();
    this.profile.updatePreview();
    this.profile.save()
  }


  this.setUp();

}])
