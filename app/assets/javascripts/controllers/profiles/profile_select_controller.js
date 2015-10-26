angular.module('AppTrackerControllers').controller('ProfileSelectCtrl', ['Collections', 'Selected', function(Collections, Selected) {

  this.setUp = function() {
    this.profiles = Collections.Profiles;
    this.profiles.fetch();
    this.selected = Selected.data;

  }

  this.checkClass = function(id) {
    if (this.selected.profile && (this.selected.profile.id === id)) {
      return "selected-item"
    } else {
      return ""
    }
  }

  this.toggle = function() {
    this.selecting = true;
  }

  this.selectProfile = function(id) {
    this.selected.profile = this.profiles.find(id);
    this.selecting = false;
  }

  this.setUp();
}])
