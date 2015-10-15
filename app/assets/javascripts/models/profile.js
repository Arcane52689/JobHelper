var AppTrackerModels = angular.module('AppTrackerModels');

AppTrackerModels.factory('Profile', ['$sce', function($sce) {
  function Profile(data) {
    if (data.cover_letter_template) {
      this.cover_letter_template = $sce.trustAsHtml(data.cover_letter_template);
    debugger
    } else {
      this.cover_letter_template = "";
    }
    this.linkedin = data.linkedin || "";
    this.github = data.github || "";
    this.personal_site = data.personal_site || "";
    this.name = data.name || "";
    this.id = data.id || undefined;
  }

  Profile.prototype.isNew = function() {
    return !this.id
  }

  Profile.prototype.data = function() {
    return { "profile": this }
  }


  return Profile;
}])
