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

    this.displayedApplications = this.applications;
  }

  this.toggle = function() {
    this.displayForm = this.displayForm ? false : true;
  }

  this.checkHideOrShow = function() {
    if (this.displayForm) {
      return 'hide';
    } else {
      return 'show';
    }
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
    this.results = this.displayedApplications.all().slice(this.currentIndex(), this.currentIndex() + this.perPage);
    ;
  }

  this.currentIndex = function() {
    return (this.page -1) * this.perPage;
  }

  this.pages = function() {
    return Math.floor(this.displayedApplications.all().length / this.perPage) + 1
  }

  this.nextPage = function() {
    if (this.page < this.pages()) {
      this.page += 1;
      this.updatePage();
    }
  }

  this.prevPage = function() {
    if (this.page > 1) {
      this.page -= 1;
      this.updatePage();
    }
  }

  this.hasPrev = function() {
    return (this.page > 1)
  }

  this.hasNext = function() {
    return (this.page < this.pages())
  }

  this.goToPage = function(page) {
    if ((page > 0) && (page < this.pages() + 1)) {
      this.page = page;
      this.updatePage();
    }

  }


  this.nearPages = function() {
    var min, max, result
    min = (this.page < 3) ? 1 : this.page - 2;
    max = (this.page > this.pages() - 2) ? this.pages() : this.page + 2;
    result = [];
    for (var i = min; i <= max; i++) {
      result.push(i);
    }
    return result;

  }


  this.setUp();
}])
