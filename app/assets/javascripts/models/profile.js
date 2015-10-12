var AppTrackerModels = angular.module('AppTrackerModels');

AppTrackerModels.factory('Profile', ['$sce', function($sce) {
  function Profile(data) {

    this.cover_letter_template = $sce.trustAsHtml(data.cover_letter_template);
    this.linkedin = data.linkedin
    this.github = data.github
    this.personal_site = data.personal_site
    this.name = data.name;
  }


  return Profile;
}])
