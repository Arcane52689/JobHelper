var Controllers = angular.module('AppTrackerControllers');

Controllers.controller('PortfolioCtrl', ['$http', '$sce', 'Profile', function($http, $sce, Profile) {




  this.setUp = function() {
    $http.get('/api/profiles').success(function(res) {
      this.profiles = []
      res.forEach(function(profile) {
        this.profiles.push(new Profile(profile));
      }.bind(this))

      this.selectedIndex = 0;
      this.profile = this.profiles[this.selectedIndex];
    }.bind(this));
  }

  this.setUp()



}])
