angular.module('AppTrackerControllers').controller('HeaderCtrl', ['$http', '$location', function($http, $location) {


  this.logout = function() {
    $http.delete("./session/").success(function(resp) {

      window.location.href = resp.redirect_url;

    }.bind(this))
  }
}])
