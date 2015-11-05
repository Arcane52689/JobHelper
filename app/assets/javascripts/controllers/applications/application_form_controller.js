angular.module('AppTrackerControllers').controller('ApplicationFormCtrl', [ '$location', '$routeParams', 'Application', 'Collections', 'Selected', 'MyFlash', function($location, $routeParams, Application, Collections, Selected, MyFlash) {


  this.setUp = function() {

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

    this.application.save({
      success: function() {
        Collections.Applications.add(this.application)
        MyFlash.success("Application for " + this.selected.company.get('name') + ' successfully created')
        this.application = new Application();
        this.selected.company = undefined;
        this.selected.cover_letter = undefined;
      }.bind(this),
      error: function(resp) {
        MyFlash.error(resp.errors);
      }
    });
  }



  this.setUp();
}])
