angular.module('AppTrackerControllers').controller('ApplicationFormCtrl', [ '$location', '$routeParams', 'Application', 'Collections', 'Selected', function($location, $routeParams, Application, Collections, Selected) {
  this.setUp = function() {
    this.statuses = [
      'applied',
      'rejected',
      'phone-screened',
      'on-site',
      'offered',
      'offer accepted'
    ]
    this.selected = Selected.data;
    this.application = new Application();
    this.companies = Collections.Companies;
    this.CoverLetters = Collections.CoverLetters;

    this.companies.fetch();
    this.CoverLetters.fetch();

    this.parseQuery();

  }




  this.parseQuery = function() {
    var query = $location.search();
    ['company_id', 'cover_letter_id'].forEach(function(key) {
      if (query['key']) {
        this.application.set(key, query[key])
      }
    }.bind(this))
  }



  this.submit = function() {
    this.application.set('company_id', this.selected.company.id);
    if (this.selected.cover_letter) {
      this.application.set('cover_letter_id', this.selected.coverLetter.id);
    }
    this.application.save();
  }



  this.setUp();
}])
