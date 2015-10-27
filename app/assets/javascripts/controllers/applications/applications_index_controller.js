angular.module("AppTrackerControllers").controller('ApplicationsIndexCtrl', ['Collections', 'Application', 'Company', function(Collections, Application, Company) {
  this.setUp = function() {
    this.applications = Collections.Applications;
    this.companies = Collections.Companies;

    this.applications.fetch({
      success: function() {
        this.updateResults();
      }.bind(this)
    });
    this.companies.fetch();

    this.displayForm = false;
    this.searchName = "";

    this.page = 1;
    this.perPage = 10;
  }

  this.toggle = function() {
    this.displayForm = this.displayForm ? false : true;
  }


  this.updateResults = function() {
    var name = this.searchName.toLowerCase();
    this.displayedApplications = this.applications.where(function(app) {
      var company_name = app.get('company_name').toLowerCase();
      return (company_name.indexOf(name) > -1);
    });
    this.updatePage();

  }

  this.updatePage = function() {
    this.results = this.displayedApplications.all().slice(this.currentIndex() + this.currentIndex + this.perPage);
  }

  this.currentIndex = function() {
    return (this.page -1) * this.perPage;
  }

  this.pages = function() {
    return Math.floor(this.dipslayedApplications.all().length / this.perPage) + 1
  }

  this.nextPage = function() {
    if (page < this.pages()) {
      this.page += 1;
      this.updatePage();
    }
  }

  this.prevPage = function() {
    if (page > 1) {
      this.page -= 1;
      this.updatePage();
    }
  }

  this.goToPage = function(page) {
    if ((page > 0) && (page < this.pages() + 1)) {
      this.page = page;
      this.updatePage();
    }

  }



  this.setUp();
}])
