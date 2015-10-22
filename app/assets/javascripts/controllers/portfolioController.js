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


  this.toggle = function(key) {
    this.displayed[key] = this.displayed[key] ? false : true;
    return this;
  }

  this.isDisplayed = function(key) {
    return this.displayed[key]
  }

  this.setUp()



  this.displayed = {
    'blurbs': true,
    'profiles': true
  }

}])
