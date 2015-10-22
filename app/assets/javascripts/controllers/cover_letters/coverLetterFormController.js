angular.module('AppTrackerControllers').controller('CoverLetterFormCtrl', ['$http', 'CoverLetter', 'Collections', function($http, CoverLetter, Collections) {
  this.setup = function() {
    this.profiles = Collections.Profiles
    this.profiles.fetch();
    this.companies = Collections.Companies
    this.companies.fetch();
    this.blurbs = Collection.Blurbs
    this.blurbs.fetch();
  }



}])
