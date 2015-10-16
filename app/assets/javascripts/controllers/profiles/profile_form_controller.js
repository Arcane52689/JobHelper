var AppTrackerControllers = angular.module("AppTrackerControllers")

AppTrackerControllers.controller("ProfileFormCtrl", ['$http', '$location','$routeParams', 'Profile', function($http, $location, $routeParams, Profile) {
  this.hasErrors = false;

  this.fetchProfile = function(id) {
    debugger
    $http.get('/api/profiles/'+ id).success(function(resp) {

      this.profile = new Profile(resp);

    }.bind(this)).error(function(resp) {
      console.log(resp);
      this.profile = new Profile({});
    });
  };

  this.success = function(resp) {
    $location.path("/")
  }

  this.error = function(resp) {
    console.error(resp);
    this.hasErrors = true;
    this.showErrors()
  }





  if ($routeParams['id']) {
    this.fetchProfile($routeParams['id']);
  } else {
    this.profile = new Profile({});
  }


  this.submit = function() {
    this.profile.cover_letter_template =$(".cover-letter-form").html();
    debugger
    if (this.profile.isNew()) {
      $http.post('api/profiles',this.profile.data()).success(function() {
        console.log("YES");
      }).error(function(resp) {
        console.error(resp);
      })
    } else {
      $http.put('api/profiles/'+this.profile.id, this.profile.data()).success(function() {
        console.log("YES");
      }).error(function(resp) {
        console.error(resp);
      })
    }
  }

}])
