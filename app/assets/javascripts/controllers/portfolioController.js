var Controllers = angular.module('AppTrackerControllers');

Controllers.controller('PortfolioCtrl', ['Collections', '$sce', 'Profile', function(Collections, $sce, Profile) {




  this.setUp = function() {
    this.profiles = Collections.Profiles;
    this.profiles.fetch();


    this.displayed = {
      'blurbs': true,
      'profiles': true
    }

  }


  this.toggle = function(key) {
    this.displayed[key] = this.displayed[key] ? false : true;
    return this;
  }

  this.isDisplayed = function(key) {
    return this.displayed[key]
  }

  this.hideOrShow = function(key) {
    return this.displayed[key] ? "hide" : "show"
  }

  this.setUp();




}])
